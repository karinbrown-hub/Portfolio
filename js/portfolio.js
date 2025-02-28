// Function to create and display project cards
function displayPortfolioGrid(category = 'all') {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '';

    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'portfolio-item';
        projectCard.innerHTML = `
            <div class="portfolio-iframe-container">
                <div class="iframe-loader">Loading...</div>
                <iframe 
                    src="${project.embedUrl}" 
                    title="${project.title}"
                    loading="lazy"
                    onload="this.style.opacity='1'; this.previousElementSibling.style.display='none';"
                    onerror="this.style.display='none'; this.previousElementSibling.textContent='Failed to load content';"
                ></iframe>
            </div>
        `;
        portfolioGrid.appendChild(projectCard);
    });

    // Add click handlers to view project buttons
    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            openProjectInFullscreen(url);
        });
    });
}

// Function to open project in fullscreen
function openProjectInFullscreen(url) {
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.className = 'fullscreen-container';
    fullscreenContainer.innerHTML = `
        <div class="fullscreen-content">
            <button class="close-fullscreen">
                <i class="fas fa-times"></i>
            </button>
            <iframe 
                src="${url}" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
    `;

    document.body.appendChild(fullscreenContainer);
    document.body.style.overflow = 'hidden';

    // Close fullscreen view
    fullscreenContainer.querySelector('.close-fullscreen').addEventListener('click', () => {
        document.body.removeChild(fullscreenContainer);
        document.body.style.overflow = 'auto';
    });

    // Close on clicking outside the iframe
    fullscreenContainer.addEventListener('click', (e) => {
        if (e.target === fullscreenContainer) {
            document.body.removeChild(fullscreenContainer);
            document.body.style.overflow = 'auto';
        }
    });
}

// Function to open project in a new tab
function openProject(url) {
    try {
        window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
        console.warn('Failed to open project:', error);
    }
}

// Handle filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => 
            btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
                
        // Filter projects
        displayPortfolioGrid(button.dataset.category);
    });
});

// Add corresponding CSS for fullscreen view
const style = document.createElement('style');
style.textContent = `
    .fullscreen-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fullscreen-content {
        position: relative;
        width: 95%;
        height: 95%;
    }

    .fullscreen-content iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    .close-fullscreen {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 8px;
        z-index: 1001;
    }

    .close-fullscreen:hover {
        color: var(--primary-color);
    }
`;
document.head.appendChild(style);

// Initialize portfolio grid
document.addEventListener('DOMContentLoaded', () => {
    displayPortfolioGrid();

    // Add error handling for iframe loading
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.onerror = () => {
            console.warn('Failed to load iframe:', iframe.src);
        };
        
        iframe.onload = () => {
            iframe.style.visibility = 'visible';
        };

        // Hide iframe until loaded
        iframe.style.visibility = 'hidden';
    });
});