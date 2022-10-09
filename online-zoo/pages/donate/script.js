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

console.log(
  'Contacts:\n',
  '📧 Discord: mishanos#6940\nhttps://discordapp.com/users/561035807046238209\n',
  '📧 Telegram: @msh_ns\nhttps://t.me/msh_ns\n\n',

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