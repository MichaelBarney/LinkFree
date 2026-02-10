const config = {
  // Page Metadata
  pageTitle: "Listen to 'Tu' by SAAR - New Indian Pop Song",
  pageDescription: "Listen to Tu by SAAR on all major platforms. Available now on Spotify, Apple Music, YouTube, and more.",
  pageKeywords: "SAAR, Tu, Indian Pop, new song, SAAR music, SAAR Artist, Sarthak Chaudhary",

  // Social Media / Open Graph
  ogTitle: "Tu by SAAR | Listen Now!",
  ogDescription: "Click to stream 'Tu' on Spotify, Apple Music, YouTube, and more.",
  ogImage: "./assets/Tuu - SAAR.jpg",
  
  // Artist & Track Details
  artistName: "SAAR",
  trackName: "Tu",
  subDescription: "Choose music service",
  coverArt: "./assets/Tuu - SAAR.jpg",

  // Footer
  footerText: "All Rights Reserved - SAAR \u00A9 2025.",

  // Links required for generating the buttons
  links: [
    {
      platform: "spotify",
      url: "https://spotify.openinapp.co/7x1a3",
      icon: "./assets/stores-logo/Spotify_Full_Logo_RGB_Green.png",
      actionText: "Play",
      title: "Play"
    },
    {
      platform: "youtube",
      url: "https://yt.openinapp.co/l1jg2",
      icon: "./assets/stores-logo/yt_logo_rgb_light.png",
      actionText: "Watch",
      title: "Watch"
    },
    {
      platform: "apple_music",
      url: "https://applemusic.openinapp.co/sntgs",
      icon: "./assets/stores-logo/US-UK_Apple_Music_Listen_on_Badge_RGB_072720.svg",
      actionText: "Play",
      title: "Play"
    },
    {
      platform: "amazon_music",
      url: "https://amzn.openinapp.co/gvu15",
      icon: "./assets/stores-logo/Amazon_Music_Logo_Horizontal_RGB_Entertainment_Dark_MASTER.png",
      actionText: "Play",
      title: "Play"
    },
    {
      platform: "youtube_music",
      url: "https://yt.openinapp.link/iwk9x",
      icon: "./assets/stores-logo/music_lockup_standard_144pt_rgb_black.png",
      actionText: "Play",
      title: "Play"
    },
    {
      platform: "jiosaavn",
      url: "https://openinapp.co/3pdhw",
      icon: "./assets/stores-logo/JioSaavn Logo Black Transparent.png",
      actionText: "Play",
      title: "Play"
    },
    {
      platform: "instagram",
      url: "https://go.saarofficial.com/ig",
      icon: "./assets/social-logo/logo_instagram_onlight.svg",
      actionText: "Follow",
      title: "Follow"
    }
  ]
};

// Export for usage if needed in module environments, 
// but for simple browser inclusion we rely on the global 'config' variable.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}
