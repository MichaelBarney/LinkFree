
# Echo - Artists Choice (LinkFree Template)
by Sarthak Chaudhary

Echo is a premium, open-source LinkFree template designed specifically for musicians and independent artists. It provides a centralized, aesthetically pleasing hub for your latest releases, streaming platforms, and social media presence.

Sample - https://tu.saarofficial.com 

# Features
- Artist-Centric Design: Clean UI that puts your album art and brand front and center.

- Dynamic Streaming Links: Pre-configured buttons for Spotify, Apple Music, YouTube, and more.

- Responsive Layout: Fully optimized for mobile (Instagram/TikTok bios) and desktop browsers.

- Lightweight & Fast: Built with performance in mind to ensure fans never wait for your links to load.

- SEO Optimized: Meta tags ready for better visibility on Google and social sharing previews.
## 🔗 Links
[![Github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/imsarthak19)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sarthakchaudharyy/)



## Used By

This project is used by the following artists:

- SAAR - https://saarofficial.com


## 🛠 How to Configure

All artist, song details, and platform links are managed in the `config.js` file. You do not need to touch the HTML code.

### 1. Edit `config.js`
Open the `config.js` file in any text editor. You will see a `config` object containing all the site's data.

### 2. Update Details

**Page Metadata**
Update the title, description, and keywords for SEO.
```javascript
pageTitle: "Listen to 'My New Song' by ArtistName",
pageDescription: "Stream My New Song on Spotify, Apple Music...",
pageKeywords: "ArtistName, New Song, Pop, Music",
```

**Artist & Track Info**
Change the artist name, song title, and cover art.
```javascript
artistName: "Artist Name",
trackName: "Song Title",
subDescription: "Listen now",
coverArt: "./assets/your-cover-art.jpg",
```
*Note: Make sure to upload your image to the `assets` folder.*

**Social Media Previews (Open Graph)**
These settings control how your link looks when shared on social media.
```javascript
ogTitle: "My New Song - Listen Now",
ogDescription: "Stream on all platforms.",
ogImage: "./assets/your-cover-art.jpg",
```

**Footer**
```javascript
footerText: "All Rights Reserved - Artist Name © 2025.",
```

### 3. Update Platform Links
The `links` array controls the buttons displayed on the page. Each object represents a button.

**To add or change a link:**
```javascript
{
  platform: "spotify", // Just for reference
  url: "https://open.spotify.com/album/...", // Your link here
  icon: "./assets/stores-logo/Spotify_Full_Logo_RGB_Green.png", // Path to icon
  actionText: "Play", // Text on the button
  title: "Play on Spotify" // Tooltip text
},
```
You can add as many links as you want by adding more objects to the list. To remove a link, simply delete its block from the array.

---
