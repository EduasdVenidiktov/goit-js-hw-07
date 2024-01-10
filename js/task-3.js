"use strict";

// const nameInput = document.getElementById("name-input");
// const nameOutput = document.getElementById("name-output");

// nameInput.addEventListener("input", () => {
//   // Отримати значення інпуту та очистити від пробілів по краях
//   const inputValue = nameInput.value.trim();

//   // Перевірити, чи інпут не порожній або не містить лише пробіли
//   const displayName = inputValue !== "" ? inputValue : "Anonymous";

//   // Підставити ім'я в спан для привітання
//   nameOutput.textContent = displayName;
// });

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();

  nameOutput.textContent = inputValue !== "" ? inputValue : "Anonymous";
});
