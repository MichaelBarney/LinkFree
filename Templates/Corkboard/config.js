/*
 * Corkboard - content configuration
 * --------------------------------------------------------------------
 * This file is loaded with a plain <script src="config.js"></script>.
 * That matters: if the data lived in a .json file we would need
 * fetch(), which browsers block on file:// URLs (CORS). A script tag
 * is not blocked, so opening index.html directly just works - no local
 * server required.
 *
 * Edit the object below. Nothing else in this template needs changing.
 */
window.LINKFREE_CONFIG = {
  // ---- Page metadata (drives <title> and <meta name="description">) ----
  pageTitle: "Harsha - Links",
  pageDescription:
    "Harsha's links, all in one hand-drawn place.",
  pageKeywords: "alex sketcher, illustrator, sketchbook, links, linkfree template",

  // ---- Profile ----
  name: "Harsha",
  handle: "@Harxshz7",
  bio: "Developer, creator, open-source contributor. Building things one commit at a time.",
  // A self-contained inline SVG avatar, so nothing 404s before you
  // replace it. Swap this for "./assets/me.jpg" (or any URL) once you
  // drop your own picture next to index.html.
  avatar:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23e5e0d8'/%3E%3Ccircle cx='48' cy='37' r='15' fill='none' stroke='%232d2d2d' stroke-width='3'/%3E%3Cpath d='M16 87c3-17 16-25 32-25s29 8 32 25' fill='none' stroke='%232d2d2d' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E",

  // ---- Links ----
  // `icon` is either a built-in sprite key (github, twitter, instagram,
  // linkedin, youtube, mail, link) or a path/URL to your own image.
  // `note` is optional small text on the right of the card.
  links: [
    {
      label: "Portfolio",
      url: "https://example.com",
      icon: "link",
      note: "new work"
    },
    {
      label: "Instagram",
      url: "https://instagram.com/",
      icon: "instagram",
      note: ""
    },
    {
      label: "GitHub",
      url: "https://github.com/Harxshz7",
      icon: "github",
      note: "@Harxshz7"
    },
    {
      label: "YouTube",
      url: "https://youtube.com/",
      icon: "youtube",
      note: "timelapses"
    },
    {
      label: "Say hello",
      url: "mailto:hello@example.com",
      icon: "mail",
      note: ""
    }
  ],

  // ---- Testimonials (optional) ----
  // Rendered as hand-drawn speech bubbles. Set to [] to hide the block.
  testimonials: [
    {
      quote: "Sketched my logo in an afternoon and it still makes me smile.",
      author: "A very happy client"
    }
  ],

  // ---- Footer ----
  footerText: "Drawn by hand. Made with the Corkboard LinkFree template."
};

// Convenience for Node-based tooling. Guarded on `window` so that
// requiring this file in a non-browser context does not throw; the
// browser path above is the one that matters.
if (typeof window !== "undefined" && typeof module !== "undefined" && module.exports) {
  module.exports = window.LINKFREE_CONFIG;
}
