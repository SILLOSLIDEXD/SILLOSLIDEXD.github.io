const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if the user has a saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Save user preference
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Save user preference
    }
});
