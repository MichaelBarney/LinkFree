const config = {
  // Page Metadata
  pageTitle: "Sarthak Chaudhary - Profile",
  pageDescription: "Sarthak Chaudhary - Engineer & Researcher. Connect on verified platforms.",
  pageKeywords: "Sarthak Chaudhary, Engineer, Research, Github, LinkedIn, Google Scholar",

  // Social Media / Open Graph
  ogTitle: "Sarthak Chaudhary | Profile",
  ogDescription: "Connect with Sarthak Chaudhary on Github, LinkedIn, and Google Scholar.",
  ogImage: "./assets/demo-cover.jpg",

  // Artist & Track Details
  artistName: "AI, ML, Software Engineer",
  trackName: "Sarthak Chaudhary",
  subDescription: "Connect & Follow",
  coverArt: "./assets/demo-cover.jpg",

  // Footer
  footerText: "All Rights Reserved - Sarthak Chaudhary \u00A9 2026.",

  // Links required for generating the buttons
  links: [
    {
      platform: "github",
      url: "https://github.com/",
      icon: "./assets/social-logo/github.svg",
      actionText: "Follow",
      title: "Github"
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/",
      icon: "./assets/social-logo/linkedin.svg",
      actionText: "Connect",
      title: "LinkedIn"
    },
    {
      platform: "google_scholar",
      url: "https://scholar.google.com/",
      icon: "./assets/social-logo/scholar.svg",
      actionText: "View",
      title: "Google Scholar"
    },
    {
      platform: "website",
      url: "https://sarthakchaudhary.me/",
      icon: "./assets/social-logo/website.svg",
      actionText: "Visit",
      title: "Website"
    },
    {
      platform: "leetcode",
      url: "https://leetcode.com/",
      icon: "./assets/social-logo/leetcode.svg",
      actionText: "View",
      title: "LeetCode"
    },
    {
      platform: "medium",
      url: "https://medium.com/",
      icon: "./assets/social-logo/medium.svg",
      actionText: "Read",
      title: "Medium"
    }
  ]
};

// Export for usage if needed in module environments, 
// but for simple browser inclusion we rely on the global 'config' variable.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}
