function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const addBoxes = document.getElementById("boxes");
const inputValue = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const onCreateButton = btnCreate.addEventListener("click", createBox);
const onDestroyButton = btnDestroy.addEventListener("click", destroyBox);

let size = 30;

function createBox() {
  const amount = inputValue.value;
  if (amount >= 1 && amount <= 100) {
    destroyBox();

    for (let i = 0; i < amount; i++) {
      const newBox = document.createElement("div");
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      addBoxes.appendChild(newBox);

      size += 10;
    }
    size = 30;
    inputValue.value = "";
  }
}

function destroyBox() {
  addBoxes.textContent = "";
}
