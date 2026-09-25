/*
 * Corkboard - renders window.LINKFREE_CONFIG into the DOM.
 * Vanilla JS, no build step. Safe to open straight from disk.
 */
(function () {
  "use strict";

  // Used only if config.js is missing or malformed, so the page still
  // renders something sensible instead of throwing on load.
  var DEFAULTS = {
    pageTitle: "Corkboard - Links",
    pageDescription: "A hand-drawn link page built with the Corkboard LinkFree template.",
    name: "Your Name",
    handle: "",
    bio: "",
    avatar: "",
    links: [],
    testimonials: [],
    footerText: ""
  };

  // Sprite keys defined in index.html. Anything else is treated as an
  // image path or URL.
  var SPRITE_ICONS = {
    github: "icon-github",
    twitter: "icon-twitter",
    instagram: "icon-instagram",
    linkedin: "icon-linkedin",
    youtube: "icon-youtube",
    mail: "icon-mail",
    link: "icon-link"
  };

  function mergeConfig(raw) {
    var config = {};
    var key;

    for (key in DEFAULTS) {
      if (Object.prototype.hasOwnProperty.call(DEFAULTS, key)) {
        config[key] = DEFAULTS[key];
      }
    }

    if (raw && typeof raw === "object") {
      for (key in raw) {
        if (Object.prototype.hasOwnProperty.call(raw, key) && raw[key] !== undefined && raw[key] !== null) {
          config[key] = raw[key];
        }
      }
    }

    if (!Array.isArray(config.links)) {
      config.links = [];
    }
    if (!Array.isArray(config.testimonials)) {
      config.testimonials = [];
    }

    return config;
  }

  function setText(id, text) {
    var element = document.getElementById(id);
    if (element) {
      element.textContent = text || "";
    }
  }

  function setMetaContent(attrName, attrValue, content) {
    if (!content) {
      return;
    }
    var meta = document.querySelector('meta[' + attrName + '="' + attrValue + '"]');
    if (meta) {
      meta.setAttribute("content", content);
    }
  }

  function buildIcon(icon, label) {
    var iconKey = String(icon || "").toLowerCase();
    var isSprite = Object.prototype.hasOwnProperty.call(SPRITE_ICONS, iconKey);

    if (isSprite) {
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      use.setAttribute("href", "#" + SPRITE_ICONS[iconKey]);
      // Legacy fallback for older engines that only honour xlink:href.
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + SPRITE_ICONS[iconKey]);
      svg.appendChild(use);
      return svg;
    }

    // Not a sprite key: treat as an image path/URL.
    var img = document.createElement("img");
    img.src = icon || "";
    img.alt = "";
    img.loading = "lazy";
    img.setAttribute("aria-hidden", "true");
    if (!icon) {
      img.hidden = true;
    }
    // Decorative label is conveyed by the card text, not the image.
    img.title = label ? label : "";
    return img;
  }

  function createLinkCard(link, index) {
    var card = document.createElement("a");
    card.className = "link-card";
    card.href = link.url || "#";
    card.setAttribute("target", "_blank");
    card.setAttribute("rel", "noopener noreferrer");

    // Scatter: alternate the tilt so the cards look pinned by hand.
    if (index % 3 === 0) {
      card.classList.add("is-tilt-left");
    } else if (index % 3 === 1) {
      card.classList.add("is-tilt-right");
    }

    // Only some cards get the wiggle - sparingly.
    if (index % 3 === 1) {
      card.classList.add("is-jiggle");
    }

    // Vary the decoration: tape, tack, or nothing.
    var decoCycle = ["tape", "none", "tack", "none"];
    var deco = decoCycle[index % decoCycle.length];
    if (deco !== "none") {
      card.setAttribute("data-deco", deco);
    }

    var iconWrap = document.createElement("span");
    iconWrap.className = "link-card__icon";
    iconWrap.appendChild(buildIcon(link.icon, link.label));

    var label = document.createElement("span");
    label.className = "link-card__label";
    label.textContent = link.label || link.url || "Link";

    card.appendChild(iconWrap);
    card.appendChild(label);

    if (link.note) {
      var note = document.createElement("span");
      note.className = "link-card__note";
      note.textContent = link.note;
      card.appendChild(note);
    }

    return card;
  }

  function createBubble(testimonial) {
    var bubble = document.createElement("blockquote");
    bubble.className = "bubble";

    var quote = document.createElement("p");
    quote.className = "bubble__quote";
    quote.textContent = testimonial.quote || "";

    bubble.appendChild(quote);

    if (testimonial.author) {
      var author = document.createElement("p");
      author.className = "bubble__author";
      author.textContent = testimonial.author;
      bubble.appendChild(author);
    }

    return bubble;
  }

  function render() {
    var config = mergeConfig(window.LINKFREE_CONFIG);

    // 1. Metadata
    document.title = config.pageTitle;
    setMetaContent("name", "description", config.pageDescription);

    // 2. Profile
    var photo = document.getElementById("userPhoto");
    if (photo) {
      photo.src = config.avatar;
      photo.alt = config.name ? config.name + "'s profile picture" : "Profile picture";
      if (config.avatar) {
        photo.onerror = function () {
          photo.removeAttribute("src");
        };
      }
    }

    setText("userName", config.name);
    setText("userHandle", config.handle);
    setText("userBio", config.bio);
    setText("footerText", config.footerText);

    var handle = document.getElementById("userHandle");
    if (handle && !config.handle) {
      handle.hidden = true;
    }

    // 3. Links
    var list = document.getElementById("links");
    if (list) {
      list.textContent = "";
      config.links.forEach(function (link, index) {
        list.appendChild(createLinkCard(link, index));
      });
    }

    // 4. Testimonials
    var section = document.getElementById("testimonials");
    if (section) {
      section.textContent = "";
      config.testimonials.forEach(function (testimonial) {
        section.appendChild(createBubble(testimonial));
      });
      section.hidden = config.testimonials.length === 0;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
