const contactForm = document.getElementById('contact-form');
const submitButton = contactForm.querySelector('button[type="submit"]');

// Single message input validation
const messageInput = document.querySelector('textarea[name="message"]');
if (messageInput) {
    messageInput.addEventListener('input', () => {
        const charCount = messageInput.value.length;
        const remaining = 10 - charCount;
        if (remaining > 0) {
            messageInput.setCustomValidity(`Please add ${remaining} more character${remaining === 1 ? '' : 's'}`);
        } else {
            messageInput.setCustomValidity('');
        }
    });
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get('message');
    const email = formData.get('email');
    const name = formData.get('name');
    
    if (message.length < 10) {
        showNotification('Please write at least 10 characters', 'error');
        return;
    }

    window.location.href = `mailto:karinlawrencebrown@gmail.com?from=alexanja464@gmail.com&subject=Portfolio Contact from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    showNotification('Opening email client...', 'success');
    contactForm.reset();
});

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <button class="close-notification">×</button>
    `;

    document.body.appendChild(notification);

    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 1rem;
            border-radius: 5px;
            background: white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        }
        .notification.success { background: #4caf50; color: white; }
        .notification.error { background: #f44336; color: white; }
        .close-notification {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
        }
        @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);

    // Close notification on click
    notification.querySelector('.close-notification').addEventListener('click', () => {
        notification.remove();
    });
}