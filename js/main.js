var elModal = document.querySelector(".modal");
var elModalShadow = document.querySelector(".modal__shadow");
var elSlider = document.querySelector(".slider");
var elItems = document.querySelectorAll(".slider__items");
var count = 0;
console.log(elSlider.lenght);
function fnNext() {
  count = count + 1;
  if (count == 5) {
    count = 0;
  }

  elSlider.style.transform = `translateX(-${600 * count}px)`;
}
function fnPrevious() {
  count = count - 1;
  if (count == -1) {
    count = 4;
  }

  elSlider.style.transform = `translateX(-${600 * count}px)`;
}

function openModal() {
  elModal.classList.add("modal__open");
  elModalShadow.style.display = "block";
}
function closeModal() {
  elModal.classList.remove("modal__open");
  elModalShadow.style.display = "none";
}
