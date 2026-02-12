# Circuits - Developer Portfolio Template
by Sarthak Chaudhary

Circuits is a premium, open-source LinkFree template designed for engineers, developers, and tech enthusiasts. It features a futuristic "cyberpunk/circuit" aesthetic to showcase your professional identity, projects, and social presence.

# Features
-   **Tech-First Tech Design:** A dark, high-contrast theme with neon accents (`#00ff41`) and a circuit board background.
-   **Professional Links:** Pre-configured for Github, LinkedIn, LeetCode, Medium, Google Scholar, and personal websites.
-   **Responsive Layout:** Fully optimized for mobile bios and desktop viewing.
-   **Lightweight:** Built with vanilla HTML/CSS/JS for instant loading.
-   **Custom Identity:** Supports SVG avatars (like initials) and custom favicons.

## 🔗 Links
[![Github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/imsarthak19)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sarthakchaudharyy/)

## 🛠 How to Configure

All content is managed in the `config.js` file. You do not need to touch the HTML code.

### 1. Edit `config.js`
Open `config.js`. You will see a `config` object containing all the site's data.

### 2. Update Identity
**Profile Info**
```javascript
pageTitle: "Sarthak Chaudhary - Profile",
artistName: "AI, ML, Software Engineer", // Your Title
trackName: "Sarthak Chaudhary",         // Your Name
subDescription: "Connect & Follow",
coverArt: "./assets/avatar.svg",        // Path to your profile pic (SVG supported!)
```

**Footer**
```javascript
footerText: "Circuits by <a href='https://easydocx.com' target='_blank'>EasyDocx</a>",
```

### 3. Update Platform Links
The `links` array controls the buttons. Each object is a row in the list.

**Example Link Configuration:**
```javascript
{
  platform: "github",
  url: "https://github.com/yourusername",
  icon: "./assets/social-logo/github.svg",
  actionText: "Follow",
  title: "Github" 
},
{
  platform: "leetcode",
  url: "https://leetcode.com/yourusername",
  icon: "./assets/social-logo/leetcode.svg", 
  actionText: "View",
  title: "LeetCode"
}
```

### 4. Assets
-   **Icons:** Place your SVG icons in `assets/social-logo/`.
-   **Avatar:** Place your profile picture in `assets/` (e.g., `avatar.svg`).
-   **Note:** This template uses white/monochrome SVGs for the best look on the dark background.

---
*Powered by LinkFree*
