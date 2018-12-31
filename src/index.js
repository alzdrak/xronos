const { remote } = require("electron");

let buttonStart = document.getElementById("button");
let buttonIcon = document.getElementById("button-icon");
let buttonClose = document.getElementById("button-close");

//close application
buttonClose.onclick = () => {
  console.log("close application");
  let w = remote.getCurrentWindow();
  w.close();
};

//click start
const start = () => {
  buttonStart.classList.toggle("open");
  buttonIcon.classList.toggle("hidden");

  buttonStart.onclick = null;

  let count = 5;
  document.getElementById("counter").innerHTML = count;
  let counter = setInterval(() => {
    count -= 1;
    if (count === -1) {
      clearInterval(counter);

      setTimeout(function() {
        count = 5;
        document.getElementById("counter").innerHTML = count;

        buttonStart.classList.toggle("open");
        buttonIcon.classList.toggle("hidden");
        buttonStart.onclick = click;
      }, 0);
      return;
    }
    document.getElementById("counter").innerHTML = count;
  }, 1000);
};

buttonStart.onclick = start;
