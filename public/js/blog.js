const form = document.querySelector(`form`);
const id = document.querySelector(`.blog-article`).dataset.id;
form.addEventListener(`submit`, async function (e) {
  e.preventDefault();
  const comment = document.querySelector(`#add-comment`).value;
  if (!comment) return;
  console.log(comment);
  const response = await fetch(`/api/comments`, {
    method: `POST`,
    body: JSON.stringify({ comment, id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.reload();
  } else {
    return await response.json();
  }
});
