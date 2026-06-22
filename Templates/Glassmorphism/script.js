(function () {
    const toggle = document.getElementById('themeToggle');
    const icon = toggle.querySelector('i');

    // Check for saved preference
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        icon.className = 'fas fa-sun';
    }

    toggle.addEventListener('click', function () {
        const isLight = document.body.classList.toggle('light-theme');

        // Update icon
        if (isLight) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'light');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'dark');
        }
    });
})();