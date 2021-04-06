const transition = (element) => {
  const link = element;
  const time = (Math.random() + 0.5)*5;
  const color = `rgba(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      1
    );`;

  link.style.setProperty("--transition-time", time + "s");
  setTimeout(transition, time * 1000);
};

const setTransitions = () => {
  const links = document.getElementsByClassName("link");
  for (let link of links) {
    const time = Math.random() * 4 + 0.5;
    const color = `rgba(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      1
    );`;

    link.style.setProperty("--transition-time", time + "s");
    setTimeout(transition, time * 1000);
  }
};
// setInterval(setTransitions, 1000);
setTransitions();
