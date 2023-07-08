const loginForm = document.querySelector(`#login`);
const signUpForm = document.querySelector(`#sign-up`);
const loginWarning = document.querySelector(`#login-warning`);
const signupWarning = document.querySelector(`#signup-warning`);

loginForm.addEventListener(`submit`, async function (e) {
  e.preventDefault();
  const formContainer = e.target.children[1];
  const username = formContainer.children[1].value.trim();
  const password = formContainer.children[3].value.trim();
  if (!(username || password)) return;
  try {
    const response = await fetch(`/api/users/login`, {
      method: `POST`,
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/`);
    } else {
      loginWarning.style.display = `inline`;
      showWarning(loginWarning);
    }
  } catch (error) {
    loginWarning.style.display = `inline`;
    showWarning(loginWarning);
  }
});

signUpForm.addEventListener(`submit`, async function (e) {
  e.preventDefault();
  const formContainer = e.target.children[1];
  const username = formContainer.children[1].value.trim();
  const email = formContainer.children[3].value.trim();
  const password = formContainer.children[5].value.trim();
  console.log(username, email, password);
  try {
    const response = await fetch(`/api/users`, {
      method: `POST`,
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/`);
    } else {
      signupWarning.style.display = "inline";
      showWarning(signupWarning);
    }
  } catch (error) {
    loginWarning.style.display = `inline`;
    showWarning(loginWarning);
  }
});

function showWarning(content) {
  setTimeout(function () {
    content.style.display = `none`;
  }, 1000);
}
