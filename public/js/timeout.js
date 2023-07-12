const body = document.querySelector(`body`);
let idletime = 0;

setInterval(timerIncrement, 60000); //60000 = 1 minute

body.addEventListener(`mouseover`, function (e) {
  idletime = 0;
});

body.addEventListener(`keypress`, function (e) {
  idletime = 0;
});

function timerIncrement() {
  idletime++;

  if (idletime > 19) {
    fetch("/api/users/idle", {
      method: `POST`,
    });

    idletime = 0;
  }
}
