const darkModeToggle = document.querySelector('.dark-mode-toggle');
const moonIcon = darkModeToggle.querySelector('i');

// Check for saved user preference
const darkMode = localStorage.getItem('darkMode');

// Function to enable dark mode
function enableDarkMode() {
    document.body.setAttribute('data-theme', 'dark');
    moonIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.removeAttribute('data-theme');
    moonIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('darkMode', null);
}

// Initialize dark mode based on user preference
if (darkMode === 'enabled') {
    enableDarkMode();
}

// Toggle dark mode on click
darkModeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});