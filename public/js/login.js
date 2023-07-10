const loginForm = document.querySelector(`#login`);
const signUpForm = document.querySelector(`#sign-up`);
const loginWarning = document.querySelector(`#login-warning`);
const signupWarning = document.querySelector(`#sign-up-warning`);

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

    configResponse(response, loginWarning);
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

    configResponse(response, signupWarning);
  } catch (error) {
    const { message } = await response.json();
    loginWarning.textContent = message || `Error signing up, Please Try again`;
    loginWarning.style.display = `inline`;
    showWarning(loginWarning);
  }
});

function showWarning(content) {
  setTimeout(function () {
    content.style.display = `none`;
  }, 1000);
}

async function configResponse(response, warning) {
  if (response.ok) {
    window.location.replace("/");
  } else {
    warning.style.display = "inline";
    showWarning(warning);
  }
}
