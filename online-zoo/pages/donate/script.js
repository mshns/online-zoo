// another amount

const amount = document.getElementById("another");
amount.value = 100;

const amounts = document.getElementsByName("amount");
amounts.forEach((el) => {
  el.addEventListener('click',
  function() {
    amount.value = el.value
  })
})

const min = +amount.min;
const max = +amount.max;

amount.addEventListener('input', function() {
  if (amount.value > max) {
    amount.value = max;
  } else if (amount.value < min) {
    amount.value = min;
  }

  if (amount.value === '25') {
    amounts[7].checked = true;
  } else if (amount.value === '50') {
    amounts[6].checked = true;
  } else if (amount.value === '100') {
    amounts[5].checked = true;
  } else if (amount.value === '250') {
    amounts[4].checked = true;
  } else if (amount.value === '500') {
    amounts[3].checked = true;
  } else if (amount.value === '1000') {
    amounts[2].checked = true;
  } else if (amount.value === '2000') {
    amounts[1].checked = true;
  } else if (amount.value === '5000') {
    amounts[0].checked = true;
  } else {
    amounts[7].checked = false;
    amounts[6].checked = false;
    amounts[5].checked = false;
    amounts[4].checked = false;
    amounts[3].checked = false;
    amounts[2].checked = false;
    amounts[1].checked = false;
    amounts[0].checked = false;
  }
})

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
    burgerMenu.classList.toggle("active");
    shadow.classList.toggle("active");
  }
);

menuLink.forEach((el) => {
    el.addEventListener('click',
      function() {
        burgerMenu.classList.toggle("active");
        shadow.classList.toggle("active");
      }
    )
  }
);

// score