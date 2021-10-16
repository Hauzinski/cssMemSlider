const controls = document.getElementById("controls");
const dots = document.querySelectorAll(".controls__dot");
const sld = document.querySelector(".slider");
const sldImages = document.querySelector(".slider__images");

let slideNow = 0;

function dotCheck(event) {
  if (event.target.tagName === "SPAN") {
    for (let value of dots) {
      value.classList.remove("controls__dot_selected");
    }

    event.target.classList.add("controls__dot_selected");
    slideNow = +event.target.id[4] - 1;
  }
  sldImages.style.transform = `translateX(-${sld.clientWidth * slideNow}px)`;
}

controls.addEventListener("mousedown", dotCheck);
controls.addEventListener("touchstart", dotCheck);
