const bg = document.querySelector("#background-generator");

const bgSvgSrc = [
  "circle-03.svg",
  "cross-01.svg",
  "square-04.svg",
  "triangle-02.svg",
];

// array that outgenerates 100 index numbers.
const arrayGenerator = [];

let i;
for (i = 0; i < 200; i++) {
  arrayGenerator.push(i);
}
// function that randomize array combination for each print it increments with.
function shuffle(bgSvgSrc) {
  let currentIndex = bgSvgSrc.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [bgSvgSrc[currentIndex], bgSvgSrc[randomIndex]] = [
      bgSvgSrc[randomIndex],
      bgSvgSrc[currentIndex],
    ];
  }

  return;
}
shuffle(bgSvgSrc);

// magic that prints out image array in random combinations.
arrayGenerator.forEach(() => {
  shuffle(bgSvgSrc);
  bgSvgSrc.forEach((imgSrc) => {
    let img = document.createElement("img");
    img.src = `./assets/img/${imgSrc}`;
    img.alt = "bg-icon of squid game";
    img.loading = "lazy";
    img.classList.add("img-icon-svg");
    bg.appendChild(img);
  });
});

// mouseenter and mouseleave magic
const imgObj = document.querySelectorAll("img");

imgObj.forEach((obj) => {
  obj.addEventListener("mouseenter", (e) => {
    e.target.style.border = "2px solid rgb(87,154,171)";
    e.target.style.background = "rgb(42,75,93)";
  });
  obj.addEventListener("mouseleave", (e) => {
    e.target.style.opacity = 0;
    setInterval(() => {
      e.target.style.opacity = 1;
    }, 300);
  });
});

// for reseting style effect
const reset = document.querySelector("#reset").addEventListener("click", () => {
  function remove_style(all) {
    var i = all.length;
    var j, is_hidden;

    // Presentational attributes.
    var attr = [
      "align",
      "background",
      "bgcolor",
      "border",
      "cellpadding",
      "cellspacing",
      "color",
      "face",
      "height",
      "hspace",
      "marginheight",
      "marginwidth",
      "noshade",
      "nowrap",
      "valign",
      "vspace",
      "width",
      "vlink",
      "alink",
      "text",
      "link",
      "frame",
      "frameborder",
      "clear",
      "scrolling",
      "style",
    ];

    var attr_len = attr.length;

    while (i--) {
      is_hidden = all[i].style.display === "none";

      j = attr_len;

      while (j--) {
        all[i].removeAttribute(attr[j]);
      }

      // Re-hide display:none elements,
      // so they can be toggled via JS.
      if (is_hidden) {
        all[i].style.display = "none";
        is_hidden = false;
      }
    }
  }
  var all = document.getElementsByTagName("*");
  remove_style(all);
});
