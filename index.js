const title = document.querySelector("#title");

const BASE_COLOR = "rgb(230, 126, 34)";
const OTHER_COLOR = "#3498db";

console.log(title.style.color);

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();

function handleFocus() {
  title.style.color = "#ecf0f1";
}

function handleBlur() {
  title.style.color = "#2c3e50";
}

window.addEventListener("focus", handleFocus);
window.addEventListener("blur", handleBlur);