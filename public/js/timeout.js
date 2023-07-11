const body = document.querySelector(`body`);
let idletime = 0;

setInterval(timerIncrement, 60000);

body.addEventListener(`mouseover`, function (e) {
  idletime = 0;
});

body.addEventListener(`keypress`, function (e) {
  idletime = 0;
});

function timerIncrement() {
  idletime++;

  if (idletime > 19) {
    console.log(`IDLE FOR x MINUTES`);
    fetch("/api/users/idle", {
      method: `POST`,
    });
  }
}
