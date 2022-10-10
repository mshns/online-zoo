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

console.log(
  'Contacts:\n',
  '📧 Discord: mishanos#6940\nhttps://discordapp.com/users/561035807046238209\n',
  '📧 Telegram: @msh_ns\nhttps://t.me/msh_ns\n\n',

  '📂 Third Part Score: 100 / 100\n\n',

  '📄 Landing & Donate\n\n',

  '✅ [+10] Бургер-меню в хедере на ширине экрана 640px открывается\n',
  '✔️ Затемнение и кнопка закрытия присутсвуют\n',
  '✔️ При нажатии на кнопку закрытия и затемнённую область меню закрывается\n',
  '✔️ About и Donate работают как ссылки\n\n',

  '📄 Landing\n\n',

  '✅ [+30] Карусель в блоке Pets сделана и реагирует на нажатие кнопок вправо/влево\n',
  '✔️ С момента загрузки при нажатии 5 раз кнопки "влево" все карточки перелистывались постоянно. Граничное условие не появляется, кнопка не исчезает и не перестаёт работать, карточки по нажатию не преестают перелистываться\n',
  '✔️ С момента загрузки при нажатии 5 раз кнопки "вправо" все колонка перелистываются постоянно. Граничное условие не появляется, кнопка не исчезает и не перестаёт работать, карточки по нажатию не преестают перелистываться\n',
  '✔️ Во время статичного отображения слайда карточки не повторяются\n',
  '✔️ При нажатии на кнопку влево и вправо, или наоборот, каждый раз генерируется новый набор карточек\n',
  '✔️ После перезагрузки страницы порядок карточек справа и слева разный. Стартовый набор карточек может оставаться одинаковым\n',
  '✔️ При очень быстром нажатии на кнопку новая анимация не начинается посреди текущей, следующая анимация не начинается без нажатия на кнопку\n',
  '✔️ При ширине экрана 1000px все требования выполняются\n',
  '✔️ При ширине экрана 640px все требования выполняются. Cдвиг происходит на 4 карточки\n\n',

  '✅ [+20] Карусель в блоке Testimonials сделана и реагирует на движение ползунка\n',
  '✔️ Количество интервалов 8\n',
  '✔️ Перелистывание в обратном напрвлении показывет эти же отзывы\n',
  '✔️ Есть анимация, время анимации больше 0\n',
  '✔️ При ширине экрана 1000px все требования выполняются\n\n',

  '✅ [+10] Попап при нажатии на отзыв в блоке Testimonials при ширине экрана 640px появляется целиком\n',
  '✔️ Внешняя область и крестик присутствуют\n',
  '✔️ При нажатии на внешнюю область и крестик попап закрывается\n\n',

  '📄 Donate\n\n',

  '✅ [+30] Панель Amount в блоке Pick and feed a friend сделана и реагирует на нажатие кнопок на полоске\n',
  '✔️ При нажатии на кружок поверх суммы он становится подсвеченным\n',
  '✔️ Предыдущий активный кружок теряет подсветку\n',
  '✔️ Указанная сумма при нажатии на кружочек записывается в поле Another amount\n',
  '✔️ Обязательное поле Another amount ограничено 4 символами типа number\n',
  '✔️ На старте отображения страницы введено число 100, подсвечен 3 справа элемент\n',
  '✔️ Если в поле Another amount ввести число, совпадающее с одной из сумм в полоске Amount, соответствующий кружок становится подсвеченным\n',
  '✔️ Если в поле Another amount ввести число, которое не совпадает ни с одной из сумм в Amount, ни один кружок не остаётся подсвеченным\n',
  '✔️ При ширине экрана 1000px все требования выполняются\n',
  '✔️ При ширине экрана 640px все требования выполняются\n\n',

  '📂 Second Part Score: 100 / 100\n\n',

  '📄 [+60] Landing\n\n',

  '✅ 1000px\n',
  '✔️ Отступы между элементами меню в хедере соответствуют макету\n',
  '✔️ Расположение элементов в блоке Watch your favorite animal online соответствуют макету\n',
  '✔️ Расположение элементов в блоке The Backstage соответствуют макету\n',
  '✔️ Растение в блоке The Backstage исчезло\n',
  '✔️ Расположение и отступы между карточками животных в блоке Pets соответствуют макету\n',
  '✔️ Расположение и отступы между кнопками вправо/влево в блоке Pets соответствуют макету\n',
  '✔️ Расположение и вид растений справа и слева в блоке Pets соответствуют макету\n',
  '✔️ Количество, расположение и отступы между отзывами в блоке Testimonials соответствуют макету\n',
  '✔️ Расположение кнопки Leave Feedback в блоке Testimonials соответствуют макету\n',
  '✔️ Расположение и вид растения справа в блоке Testimonials соответствуют макету\n',
  '✔️ Отступы между иконками и именами соцсетей в футере соответствуют макету\n',
  '✔️ Отступы между элементами меню в футере соответствуют макету\n\n',

  '✅ 640px\n',
  '✔️ Меню в хедере преобразовано в бургер-меню\n',
  '✔️ Хедер стал фиксированным\n',
  '✔️ Расположение элементов в блоке Watch your favorite animal online соответствуют макету\n',
  '✔️ Расположение элементов в блоке The Backstage соответствуют макету\n',
  '✔️ Появилось растение в блоке The Backstage\n',
  '✔️ Количество, расположение и отступы между карточками животных в блоке Pets соответствуют макету\n',
  '✔️ Расположение и отступы между кнопками вправо/влево в блоке Pets соответствуют макету\n',
  '✔️ Вид растений справа и слева в блоке Pets соответствует макету\n',
  '✔️ Расположение элементов в блоке Pick and feed a friend соответствует макету\n',
  '✔️ Вид стрелок в блоке Pick and feed a friend соответствует макету\n',
  '✔️ Вид, расположение и отступы между отзывами в блоке Testimonials соответствуют макету\n',
  '✔️ Расположение кнопки Leave feedback в блоке Testimonials соответствует макету\n',
  '✔️ Вид растения справа в блоке Testimonials соответствует макету\n',
  '✔️ Пропала форма Subscribe to our news в футере\n',
  '✔️ Расположение кнопки Donate for volunteers в футере соответствует макету\n',
  '✔️ Расположение и отступы между иконками соцсетей в футере соответствуют макету\n',
  '✔️ Отступы между элементами меню в футере соответствуют макету\n\n',

  '✅ 320px\n',
  '✔️ Есть бургер-меню в хедере\n',
  '✔️ Расположение элементов в блоке Watch your favorite animal online соответствуют макету\n',
  '✔️ Расположение элементов в блоке The Backstage соответствуют макету\n',
  '✔️ Растение в блоке The Backstage не наезжает на текст\n',
  '✔️ Количество, расположение и отступы между карточками животных в блоке Pets соответствуют макету\n',
  '✔️ Пропали кнопки вправо/влево в блоке Pets\n',
  '✔️ Вид растений справа и слева в блоке Pets соответствует макету\n',
  '✔️ Расположение элементов в блоке Pick and feed a friend соответствует макету\n',
  '✔️ Вид стрелок в блоке Pick and feed a friend соответствует макету\n',
  '✔️ Расположение и отступы между отзывами в блоке Testimonials соответствуют макету\n',
  '✔️ Расположение кнопки Leave feedback в блоке Testimonials соответствует макету\n',
  '✔️ Расположение и вид растения справа в блоке Testimonials соответствуют макету\n',
  '✔️ Расположение и вид основного логотипа в футере соответствует макету\n',
  '✔️ Расположение и отступы между иконками соцсетей в футере соответствуют макету\n',
  '✔️ Расположение кнопки Donate for volunteers в футере соответствует макету\n',
  '✔️ Отступы между элементами меню в футере соответствуют макету\n\n',

  '✅ Responsive\n',
  '✔️ Горизонтальная полоса прокрутки не появляется\n',
  '✔️ Все неоходимые элементы присутсвуют, лишние элементы отсутствуют\n',
  '✔️ Элементы не обрезаются и не выходят за край экрана\n',
  '✔️ Элементы не наезжают друг на друга, предусмотренные отступы сохраняются\n\n',

  '📄 [+40] Donate\n\n',

  '✅ 1000px\n',
  '✔️ Отступы между элементами меню в хедере соответствуют макету\n',
  '✔️ Расположение элементов в блоке Pick and feed a friend соответствуют макету\n',
  '✔️ Расположение поля Another amount соответствуют макету\n',
  '✔️ Расположение элементов внутри формы Subscribe to our news в футере соответствуют макету\n',
  '✔️ Расположение кнопки Donate for volunteers в футере соответствуют макету\n',
  '✔️ Отступы между иконками и именами соцсетей в футере соответствуют макету\n',
  '✔️ Отступы между элементами меню в футере соответствуют макету\n\n',

  '✅ 640px\n',
  '✔️ Меню в хедере преобразовано в бургер-меню\n',
  '✔️ Хедер стал фиксированным\n',
  '✔️ Расположение элементов в блоке Pick and feed a friend соответствует макету\n',
  '✔️ Пропала форма Subscribe to our news в футере\n',
  '✔️ Расположение кнопки Donate for volunteers в футере соответствует макету\n',
  '✔️ Расположение и отступы между иконками соцсетей в футере соответствуют макету\n',
  '✔️ Отступы между элементами меню в футере соответствуют макету\n\n',

  '✅ 320px\n',
  '✔️ Есть бургер-меню в хедере\n',
  '✔️ Расположение элементов в блоке Pick and feed a friend соответствует макету\n',
  '✔️ Вид и расположение основного логотипа в футере соответствуют макету\n',
  '✔️ Расположение и отступы между иконками соцсетей в футере соответствуют макету\n',
  '✔️ Расположение кнопки Donate for volunteers в футере соответствует макету\n',
  '✔️ Отступы между элементами меню в футере соответствуют макету\n\n',

  '✅ Responsive\n',
  '✔️ Горизонтальная полоса прокрутки не появляется\n',
  '✔️ Все неоходимые элементы присутсвуют, лишние элементы отсутствуют\n',
  '✔️ Элементы не обрезаются и не выходят за край экрана\n',
  '✔️ Элементы не наезжают друг на друга, предусмотренные отступы сохраняются\n\n',


  '📂 First Part Score: 100 / 100\n\n',

  '📄 [+70] Landing\n\n',

  '✅ Header\n',
  '✔️ Логотип работает как ссылка на Landing\n',
  '✔️ Интерактивная панель навигации\n',
  '✔️ Элемент About подсвечен и неинтерактивный\n',
  '✔️ Интерактивный элемент Map\n',
  '✔️ Интерактивный элемент Zoos\n',
  '✔️ Интерактивный элемент Donate работает как ссылка на Donate\n',
  '✔️ Интерактивный элемент Contact Us\n',
  '✔️ Интерактивный элемент Designed by © работает как ссылка на страницу Figma\n',
  '✔️ Один элемент <h1>\n\n',

  '✅ Watch your favorite animal online\n',
  '✔️ Кнопка Watch online интерактивная\n',
  '✔️ Задний фон является картинкой\n\n',

  '✅ The Backstage\n',
  '✔️ Картинки растения справа\n\n',

  '✅ Pets\n',
  '✔️ Кнопки вправо и влево интерактивные\n',
  '✔️ Интерактивные карточки с анимацией текста\n',
  '✔️ Кнопка Choose your favorite интерактивная\n',
  '✔️ Картинки растений слева и справа\n\n',

  '✅ Pick and feed a friend\n',
  '✔️ Кнопка Feed a friend now интерактивная\n',
  '✔️ Emergency support Fund является ссылкой на donate\n\n',

  '✅ Testimonials\n',
  '✔️ Кнопка Leave feedback интерактивная\n',
  '✔️ Полоска прогресса сделана через input type range\n',
  '✔️ Картинка растения справа\n\n',

  '✅ Footer\n',
  '✔️ Логотип работает как ссылка на Landing\n',
  '✔️ Кнопка Donate for volunteers интерактивная и работает как ссылка на donate\n',
  '✔️ Иконки соцсетей интерактивные\n',
  '✔️ Поле <input> "Input your email" с типом email\n',
  '✔️ Кнопка Submit интерактивная\n',
  '✔️ Элемент About подсвечен и неинтерактивный\n',
  '✔️ Элемента Map интерактивный\n',
  '✔️ Элемента Zoos интерактивный\n',
  '✔️ Элемента Contact Us интерактивный\n\n',

  '📄 [+30] Donate\n\n',

  '✅ Header\n',
  '✔️ Логотип работает как ссылка на Landing\n',
  '✔️ Панель навигации интерактивная\n',
  '✔️ Элемент About работает как ссылка на Landing\n',
  '✔️ Элемент Map интерактивный\n',
  '✔️ Элемент Zoos интерактивный\n',
  '✔️ Элемент Donate подсвечен и неинтерактивный\n',
  '✔️ Элемент Contact Us интерактивный\n',
  '✔️ Элемента Designed by © интерактивный и работает как ссылка на страницу Figma\n',
  '✔️ Один элемента <h1>\n\n',

  '✅ Pick and feed a friend\n',
  '✔️ Зоны в радиусе 20px от желтых точек интерактивные\n',
  '✔️ Поле <input> "Another amount" с типом number\n',
  '✔️ Поле <input> "Monthly" с типом radio\n',
  '✔️ Поле <input> "Once" с типом radio выбрано как значение по умолчанию\n',
  '✔️ Поля "Monthly" и "Once" взаимоисключающие\n',
  '✔️ Кнопка Feed a friend now интерактивная\n\n',

  '✅ Footer\n',
  '✔️ Логотип работает как ссылка на Landing\n',
  '✔️ Кнопка Donate for volunteers интерактивная\n',
  '✔️ Иконки соцсетей интерактивные\n',
  '✔️ Поле <input> "Input your email" с типом email\n',
  '✔️ Кнопка Submit интерактивная\n',
  '✔️ Элемента About работает как ссылка на Landing\n',
  '✔️ Элемента Map интерактивный\n',
  '✔️ Элемент Zoos интерактивный\n',
  '✔️ Элемент Contact Us интерактивный\n\n'
  );