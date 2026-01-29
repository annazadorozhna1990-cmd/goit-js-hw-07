const form = document.querySelector(`.login-form`);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = form.querySelector('input[name="email"]').value.trim();
  const passwordValue = form
    .querySelector('input[name="password"]')
    .value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  form.reset();
});
