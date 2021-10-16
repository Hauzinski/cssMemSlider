const controls = document.getElementById("controls");
const dots = document.querySelectorAll(".controls__dot");

let slideNow = 0;

function dotCheck(event) {
  if (event.target.tagName === "SPAN") {
    for (let value of dots) {
      value.classList.remove("controls__dot_selected");
    }

    event.target.classList.add("controls__dot_selected");
    slideNow = +event.target.id[4] - 1;    
  }
}

controls.addEventListener("mousedown", dotCheck);
controls.addEventListener("touchstart", dotCheck);