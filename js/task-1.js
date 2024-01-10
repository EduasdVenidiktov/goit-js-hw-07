"use strict";

const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

console.log("Number of categories:", categoryItems.length);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);

  const categoryElements = category.querySelectorAll("ul > li");

  console.log(`Elenents: ${categoryElements.length}`);
});

// // Отримуємо доступ до елементу ul#categories
// const categoriesList = document.getElementById("categories");

// // Отримуємо всі елементи li.item в межах ul#categories
// const categoryItems = categoriesList.querySelectorAll("li.item");

// // Проходимося по кожному елементу li.item
// categoryItems.forEach((category) => {
//   // Отримуємо текст заголовка (тегу <h2>)
//   const categoryName = category.querySelector("h2").textContent;

//   // Отримуємо всі елементи <li> у межах поточної категорії
//   const categoryElements = category.querySelectorAll("ul > li");

//   // Виводимо кількість категорій в консоль
//   console.log("Number of categories:", categoryItems.length);

//   // Виводимо текст заголовка та кількість елементів у категорії в консоль
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elenents: ${categoryElements.length}`);
// });
