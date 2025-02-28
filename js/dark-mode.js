document.addEventListener('DOMContentLoaded', () => {
    try {
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        if (!darkModeToggle) {
            console.warn('Dark mode toggle not found');
            return;
        }

        const moonIcon = darkModeToggle.querySelector('i');
        if (!moonIcon) {
            console.warn('Moon icon not found');
            return;
        }
        
        // Set initial theme
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateIcon(currentTheme);

        darkModeToggle.addEventListener('click', () => {
            try {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateIcon(newTheme);
            } catch (error) {
                console.error('Error toggling theme:', error);
            }
        });

        function updateIcon(theme) {
            moonIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    } catch (error) {
        console.error('Error initializing dark mode:', error);
    }
});