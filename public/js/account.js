const createBtn = document.querySelector(`#create-blog`);

createBtn.addEventListener(`click`, function (e) {
  const title = document.querySelector(`#title`).value;
  const content = document.querySelector(`#content`).value;
  console.log(`hi`);
  console.log(title, content);
});
