const title = document.querySelector("#title");

const BASE_COLOR = "#34495e";

function handleClick() {
  console.log(title.style.color);
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
