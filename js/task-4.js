"use strict";

function handleSubmit(event) {
  event.preventDefault(); // Зупинити дефолтну поведінку відправлення форми

  const form = event.target;
  const formData = {};

  // Перебір елементів форми
  for (const input of form.elements) {
    if (input.type !== "submit") {
      const trimmedValue = input.value.trim(); // Очищення значення від пробілів

      // Перевірка на наявність значення
      if (!trimmedValue) {
        alert("All form fields must be filled in");
        return;
      }

      // Додавання значення до об'єкту formData
      formData[input.name] = trimmedValue;
    }
  }

  // Виведення об'єкта з введеними даними в консоль
  console.log(formData);

  // Очищення значень полів форми
  form.reset();
}
