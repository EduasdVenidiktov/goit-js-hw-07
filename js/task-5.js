function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const bodyColor = document.querySelector(".color");
const onButtonChangeColor = document.querySelector(".change-color");

onButtonChangeColor.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  bodyColor.textContent = getRandomHexColor();
});
