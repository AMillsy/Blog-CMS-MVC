const createBtn = document.querySelector(`#create-blog`);
const warningText = document.querySelector(`.warning`);

createBtn.addEventListener(`click`, async function (e) {
  const title = document.querySelector(`#title`).value;
  const content = document.querySelector(`#content`).value;

  console.log(title, content);

  const resposne = await fetch(`/api/blogs`, {
    method: `POST`,
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (resposne.ok) {
    location.reload();
  } else {
    const { message: responeData } = await resposne.json();
    const warning =
      responeData || `Sorry there has been an error uploading the blog`;
    console.log(warning);
    warningText.textContent = warning;
    warningText.style.display = `inline`;
    showWarning(warningText);
  }
});

function showWarning(content) {
  setTimeout(function () {
    content.style.display = `none`;
    content.textContent = ``;
  }, 5000);
}
