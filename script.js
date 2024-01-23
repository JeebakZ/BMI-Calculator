function calculateBMI() {
    // Add your BMI calculation logic here
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Toggle logo visibility based on dark mode
    const logo = document.getElementById('logo');
    const darkLogo = document.getElementById('dark-logo');

    if (document.body.classList.contains('dark-mode')) {
        logo.style.display = 'none';
        darkLogo.style.display = 'block';
    } else {
        logo.style.display = 'block';
        darkLogo.style.display = 'none';
    }
}

// Check if dark mode is active on page load
document.addEventListener('DOMContentLoaded', function () {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled');

    if (darkModeEnabled === 'true') {
        document.body.classList.add('dark-mode');
        toggleLogoVisibility(false);
    }
});

// Function to toggle logo visibility
function toggleLogoVisibility(darkMode) {
    const logo = document.getElementById('logo');
    const darkLogo = document.getElementById('dark-logo');

    if (darkMode) {
        logo.style.display = 'none';
        darkLogo.style.display = 'block';
    } else {
        logo.style.display = 'block';
        darkLogo.style.display = 'none';
    }
}

// Function to save dark mode preference
function saveDarkModePreference(isDarkMode) {
    localStorage.setItem('darkModeEnabled', isDarkMode.toString());
}
