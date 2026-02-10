import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Load the theme when the page initializes
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(currentTheme);

    const themeIcon = document.querySelector('.night_mode');
    updateIconAndColors(currentTheme, themeIcon);

    // Fetch and load user data once
    fetch('./assets/db/data.json')
        .then(response => response.json())
        .then(data => {
            applySettings(data.settings);
            loadUserData(data.user);
            renderDynamicLinks(data.links, data.settings.bottons.linksBorderRadius);
            renderSocialMediaIcons(data.socialMedias, data.settings.bottons.socialMediaBorderRadius);
        })
        .catch(error => console.error('Failed to load user data:', error));

    // Toggle theme on icon click
    themeIcon.addEventListener('click', () => {
        toggleTheme(themeIcon);
    });
});

// Apply settings from JSON data
function applySettings(data) {
    const styles = {
        '--link-hover-bg': data.colors.primary,
        '--link-bg': data.colors.secondary,
        '--link-text': data.colors.linkText,
        '--circle-bg': data.colors.primary,
        '--accent-color': data.colors.secondary,
        '--main-bg-light': data.colors.background,
        '--background-social-icon': data.colors.socialIconBackground
    };

    for (let key in styles) {
        document.documentElement.style.setProperty(key, styles[key]);
    }

    let favicon = document.querySelector('link[rel="icon"]');
    let metaDescription = document.querySelector('meta[name="description"]');
    let keywords = document.querySelector('meta[name="keywords"]');

    favicon.href = data.favicon;
    metaDescription.content = data.pageDescription;
    keywords.content = data.pageKeywords;
}

// Load and display user data
function loadUserData(data) {
    const nameElement = document.getElementById('name');
    const bioElement = document.getElementById('bio');
    const userPhotoElement = document.getElementById('userPhoto');
    const userNameElement = document.getElementById('username');

    document.title = `${data.name} | Links`;
    nameElement.textContent = data.name;
    bioElement.textContent = data.bio;
    userNameElement.textContent = data.username;
    userPhotoElement.src = data.photo100px;

    // Add the 'loaded' class when the image is loaded
    userPhotoElement.addEventListener('load', () => {
        userPhotoElement.classList.add('loaded');
    });

    // If the image has already been loaded before the load event
    if (userPhotoElement.complete) {
        userPhotoElement.classList.add('loaded');
    }

    // Check the name animation setting
    if (data.nameWritingAnimation) {
        nameElement.classList.add('typing-effect');
    } else {
        nameElement.style.maxWidth = '100%';
        nameElement.style.borderRight = 'none';
    }
}

// Dynamically render links from JSON data
function renderDynamicLinks(links, borderRadius) {
    const linksContainer = document.getElementById('links');
    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'link';
        a.target = "_blank";
        a.style.borderRadius = borderRadius;

        const icon = document.createElement('i');
        icon.className = link.classIcon;
        icon.style.marginRight = "8px"; // Add some spacing between icon and text

        a.appendChild(icon);
        a.appendChild(document.createTextNode(link.text));

        linksContainer.appendChild(a);
    });
}

// Dynamically render social media icons
function renderSocialMediaIcons(socialMedias, borderRadius) {
    const socialMediaContainer = document.getElementById('socialMedia');

    socialMedias.forEach(social => {
        const a = document.createElement('a');
        a.href = social.url;
        a.title = social.text;
        a.setAttribute('aria-label', `Link para ${social.text}`); // Improve accessibility
        a.target = "_blank";

        const icon = document.createElement('i');
        icon.className = `fa ${social.classIcon} circle`;
        icon.setAttribute('aria-hidden', 'true');
        icon.style.lineHeight = '38px';
        icon.style.borderRadius = borderRadius;

        a.appendChild(icon);
        socialMediaContainer.appendChild(a);
    });
}

// Toggle between dark and light mode
function toggleTheme(icon) {
    const body = document.body;
    const newTheme = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';

    body.classList.replace(body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIconAndColors(newTheme, icon);
}

// Update the theme icon and color scheme
function updateIconAndColors(theme, icon) {
    if (theme === 'dark-mode') {
        icon.classList.replace('fa-moon-o', 'fa-sun-o');
        icon.style.color = 'rgb(225, 225, 0)';
        icon.title = 'Light mode';
    } else {
        icon.classList.replace('fa-sun-o', 'fa-moon-o');
        icon.style.color = '#585858';
        icon.title = 'Dark mode';
    }
}
