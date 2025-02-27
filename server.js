require('dotenv').config();
const express = require('express');
const app = express();
const mailjet = require('node-mailjet');

// Check if API key is present
if (!process.env.MAILJET_API_KEY) {
    console.error('Error: MAILJET_API_KEY not found in .env file');
    process.exit(1);
}

// Split the API key into key and secret
const [API_KEY, API_SECRET] = process.env.MAILJET_API_KEY.split('_');

if (!API_KEY || !API_SECRET) {
    console.error('Error: Invalid MAILJET_API_KEY format. Expected format: apikey_apisecret');
    process.exit(1);
}

const mailjetClient = mailjet.apiConnect(API_KEY, API_SECRET);

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Email endpoint
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        await mailjetClient.post('send', { version: 'v3.1' }).request({
            Messages: [{
                From: {
                    Email: "alexanja464@gmail.com", // Replace with your email
                    Name: "Portfolio Contact Form"
                },
                To: [{
                    Email: "karinlawrencebrown@gmail.com", // Replace with your email
                    Name: "Karin Brown"
                }],
                Subject: "New Contact Form Submission",
                TextPart: `
                    Name: ${name}
                    Email: ${email}
                    Message: ${message}
                `
            }]
        });
        
        res.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});