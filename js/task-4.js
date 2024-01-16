"use strict";

const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(ev) {
  ev.preventDefault();
  const form = ev.target;
  const Email = form.elements.email.value.trim();
  const Password = form.elements.password.value.trim();

  if (!Email || !Password) {
    return alert("All form fields must be filled in");
  }

  console.log(`Email: ${Email}, Password: ${Password}`);
  form.reset();
}
