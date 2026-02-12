document.addEventListener("DOMContentLoaded", () => {
    if (typeof config === "undefined") {
        console.error("Config file not found or not loaded.");
        return;
    }

    // 1. Update Meta Tags
    document.title = config.pageTitle;
    setMetaContent("name", "description", config.pageDescription);
    setMetaContent("name", "keywords", config.pageKeywords);

    // Open Graph
    setMetaContent("property", "og:title", config.ogTitle);
    setMetaContent("property", "og:description", config.ogDescription);
    setMetaContent("property", "og:image", config.ogImage);

    // 2. Update Visible Text & Images
    updateElementText("header-title", config.trackName);
    updateElementText("header-artist", config.artistName);
    updateElementText("header-description", config.subDescription);
    updateElementText("footer-text", config.footerText);

    // Cover Art
    const coverArtImg = document.getElementById("cover-art");
    if (coverArtImg) {
        coverArtImg.src = config.coverArt;
        coverArtImg.alt = `${config.trackName} - ${config.artistName}`;
    }

    // 3. Generate Platform Links
    const platformContainer = document.getElementById("platforms-container");
    if (platformContainer && config.links) {
        // Clear existing content (optional if we want to retain a skeleton)
        platformContainer.innerHTML = '';

        config.links.forEach((link) => {
            const linkElement = createPlatformLink(link);
            platformContainer.appendChild(linkElement);
        });
    }
});

// Helper Functions

function setMetaContent(attrName, attrValue, content) {
    const meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (meta) {
        meta.setAttribute("content", content);
    }
}

function updateElementText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        // Handle HTML entities in text if needed
        element.textContent = text;
    }
}

function createPlatformLink(linkData) {
    /*
      Structure to create:
      <div class="muisc-service-list-item">
        <a href="..." target="_blank">
          <div class="music-service-list-content">
            <img class="music-service-list-icon" src="..." alt="...">
            <button class="music-service-list-button" title="...">
              <span class="btn-label">...</span>
            </button>
          </div>
        </a>
      </div>
    */

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("music-service-list-item");

    const anchor = document.createElement("a");
    anchor.href = linkData.url;
    anchor.target = "_blank";

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("music-service-list-content");

    const img = document.createElement("img");
    img.classList.add("music-service-list-icon");
    img.src = linkData.icon;
    img.alt = linkData.platform;

    const button = document.createElement("button");
    button.classList.add("music-service-list-button");
    button.title = linkData.title;

    const span = document.createElement("span");
    span.classList.add("btn-label");
    span.textContent = linkData.actionText;

    // Assemble
    button.appendChild(span);
    contentDiv.appendChild(img);
    contentDiv.appendChild(button);
    anchor.appendChild(contentDiv);
    itemDiv.appendChild(anchor);

    return itemDiv;
}
