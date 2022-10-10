// burger menu

const burgerButton = document.querySelector(".burger-menu-icon");
const burgerMenu = document.querySelector(".burger-menu");
const burgerIcon = document.querySelector(".burger-menu-icon");
const shadow = document.querySelector(".shadow");
const menuLink = document.querySelectorAll(".burger-menu-link");
const menuCross = document.querySelector(".burger-menu-cross")

burgerButton.addEventListener('click',
  function() {
    burgerMenu.classList.toggle("active");
    shadow.classList.toggle("active");
  }
);

menuCross.addEventListener('click',
  function() {
    burgerMenu.classList.toggle("active");
    shadow.classList.toggle("active");
  }
);

shadow.addEventListener('click',
  function() {
    burgerMenu.classList.remove("active");
    shadow.classList.remove("active");
    testimonialPopup.classList.remove("active");
    shadow.classList.remove("popup");
  }
);

menuLink.forEach((el) => {
  el.addEventListener('click',
  function() {
    burgerMenu.classList.toggle("active");
    shadow.classList.toggle("active");
  })
})

// testimonials

const testimonials = document.querySelector('.testimonials');
const testimonial = document.querySelectorAll('.testimonial');

function setTestimonials() {
  for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add("testimonial");
    div.innerHTML = testimonial[i].innerHTML;
    testimonials.append(div);
  }
}

window.addEventListener('load', setTestimonials());

// testimonials popup

const testimonialPopup = document.querySelector(".testimonial-popup");
const testimonialCross = document.querySelector(".testimonial-popup-cross");
const testimonialContainer = document.querySelector(".testimonial-popup-container");

testimonial.forEach((el) => {
  el.addEventListener('click',
  function() {
    shadow.classList.toggle("popup");
    testimonialPopup.classList.add("active");
    testimonialContainer.innerHTML = el.innerHTML;
    testimonialContainer.lastElementChild.classList.add("popup")
  })
})

testimonialCross.addEventListener('click',
  function() {
    testimonialPopup.classList.remove("active");
    shadow.classList.toggle("popup");
  }
);

// testimonials control

const range = document.getElementById('testimonial-control');

function rangeTestimonials() {
  if (window.matchMedia("(min-width: 1440px)").matches) {
    switch(range.value) {
      case '0': testimonials.style.left = '0'; break;
      case '1': testimonials.style.left = '-297px'; break;
      case '2': testimonials.style.left = '-594px'; break;
      case '3': testimonials.style.left = '-891px'; break;
      case '4': testimonials.style.left = '-1188px'; break;
      case '5': testimonials.style.left = '-1486px'; break;
      case '6': testimonials.style.left = '-1783px'; break;
      case '7': testimonials.style.left = '-2080px'; break;
    }
  } else {
    switch(range.value) {
      case '0': testimonials.style.left = '0'; break;
      case '1': testimonials.style.left = '-323px'; break;
      case '2': testimonials.style.left = '-646px'; break;
      case '3': testimonials.style.left = '-969px'; break;
      case '4': testimonials.style.left = '-1292px'; break;
      case '5': testimonials.style.left = '-1615px'; break;
      case '6': testimonials.style.left = '-1938px'; break;
      case '7': testimonials.style.left = '-2261px'; break;
    }
  }
}
range.addEventListener('input', rangeTestimonials);

// slider

const buttonLeft = document.querySelector(".button-arrow-left");
const buttonRight = document.querySelector(".button-arrow-right");
const slider = document.querySelector(".slider");
const leftSlide = document.querySelector(".slider-left");
const centerSlide = document.querySelector(".slider-center");
const rightSlide = document.querySelector(".slider-right");

const card1 = document.getElementById("pandas");
const card2 = document.getElementById("eagles");
const card3 = document.getElementById("gorillas");
const card4 = document.getElementById("sloth");
const card5 = document.getElementById("cheetahs");
const card6 = document.getElementById("penguins");
const card7 = document.getElementById("alligators");
const card8 = document.getElementById("gorillas2");

let cards = [card1, card2, card3, card4, card5, card6, card7, card8]

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function setSlider() {
  shuffle(cards);
  leftSlide.innerHTML = "";
  rightSlide.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const divLeft = document.createElement('div');
    divLeft.classList.add("slide");
    divLeft.innerHTML = cards[i].innerHTML;
    leftSlide.append(divLeft);

    const divRight = document.createElement('div');
    divRight.classList.add("slide");
    divRight.innerHTML = cards[i].innerHTML;
    rightSlide.append(divRight);
  }
}

window.addEventListener('load', setSlider());

const moveLeft = () => {
  slider.classList.add("transition-left");
  buttonLeft.removeEventListener("click", moveLeft);
  buttonRight.removeEventListener("click", moveRight);
  buttonLeft.classList.add("disabled");
  buttonRight.classList.add("disabled");
};

const moveRight = () => {
  slider.classList.add("transition-right");
  buttonLeft.removeEventListener("click", moveLeft);
  buttonRight.removeEventListener("click", moveRight);
  buttonLeft.classList.add("disabled");
  buttonRight.classList.add("disabled");
};

buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);

slider.addEventListener("animationend", function(animationEvent) {
  const leftContent = document.querySelector(".slider-left").innerHTML;
  const rightContent = document.querySelector(".slider-right").innerHTML;

  if (animationEvent.animationName === "move-left") {
    slider.classList.remove("transition-left");
    centerSlide.innerHTML = leftContent;
  } else {
    slider.classList.remove("transition-right");
    centerSlide.innerHTML = rightContent;
  }

  buttonLeft.addEventListener("click", moveLeft);
  buttonRight.addEventListener("click", moveRight);
  buttonLeft.classList.remove("disabled");
  buttonRight.classList.remove("disabled");
  setSlider();
})

// score