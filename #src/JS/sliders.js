//заготавка под свайпер и объявление и адаптация слайдеров ==============
let sliders = document.querySelectorAll("._swiper");
if (sliders.length > 0) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains("swiper-bild")) {
      let sliderItems = slider.children;

      if (sliderItems.length > 0) {
        for (const child of sliderItems) {
          child.classList.add("swiper-slide");
        }
      }

      let slider_content = slider.innerHTML;
      let SwiperWrapper = document.createElement("div");
      SwiperWrapper.classList.add("swiper-wrapper");
      SwiperWrapper.innerHTML = slider_content;
      slider.innerHTML = "";
      slider.appendChild(SwiperWrapper);
      slider.classList.add("swiper-bild");

      let btnPrev = document.createElement("div");
      btnPrev.className = "swiper-button-prev";
      slider.appendChild(btnPrev);
      let btnNext = document.createElement("div");
      btnNext.className = "swiper-button-next";
      slider.appendChild(btnNext);

      if (slider.classList.contains("_swiper_scroll")) {
        let sliderScroll = document.createElement("div");
        sliderScroll.classList.add("swiper-scrollbar");
        slider.appendChild(sliderScroll);
      }
    }
  }
}

function slide_Bind_content(params) {}

//=============================================================

new Swiper(".classes__slider", {
  //Отстутпы между слайдами
  spaceBetween: 30,
  //Слайды на пролисьывание (сколько будет листаться)
  slidesPerGroup: 2,
  //Сколько слайдов будет видно
  slidesPerView: 4,
  //Сколько слайдов будет в колонке походу
  slidesPerColumn: 1,
  // centeredSlides:true
  speed: 600,
  //Возможные варианты:flip slide cube coverflow fade
  effect: "slide",
  loop: true,

  //Стрелочная навигация
  navigation: {
    nextEl: ".rigth-arr",
    prevEl: ".left-arr",
  },
  //Точки буллиты
  pagination: {
    el: ".classes__slider-pagination",
    clickable: true,
  },
  // grabCursor: true,
  keyboard: {
    // Включаем управление клавиатурой
    enabled: true,
    //Только при поле зрения
    onlyInViewport: true,
    pageUpDown: true,
  },
  //Автовысота
  autoHeight: true,
  breakpoints: {
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    450: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },

  observer: true,
});

new Swiper(".clients__slider", {
  //Отстутпы между слайдами
  spaceBetween: 0,
  //Слайды на пролисьывание (сколько будет листаться)
  slidesPerGroup: 1,
  //Сколько слайдов будет видно
  slidesPerView: 1,
  //Сколько слайдов будет в колонке походу
  slidesPerColumn: 1,
  // centeredSlides:true
  speed: 600,
  //Возможные варианты:flip slide cube coverflow fade
  effect: "flip",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //Точки буллиты
  pagination: {
    el: ".clients__pagination",
    clickable: true,
  },
  //grabCursor: true,
  keyboard: {
    // Включаем управление клавиатурой
    enabled: true,
    //Только при поле зрения
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoHeight: true,
  breakpoints: {
    320: {},
    990: {},
  },

  observer: true,
});

new Swiper(".contact__slider", {
  //Отстутпы между слайдами
  spaceBetween: 20,
  //Слайды на пролисьывание (сколько будет листаться)
  slidesPerGroup: 1,
  //Сколько слайдов будет видно
  slidesPerView: 2,
  //Сколько слайдов будет в колонке походу
  slidesPerColumn: 1,
  // centeredSlides:true
  speed: 600,
  //Возможные варианты:flip slide cube coverflow fade
  effect: "slide",
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".contact__pagination",
    clickable: true,
  },
  grabCursor: true,
  keyboard: {
    // Включаем управление клавиатурой
    enabled: true,
    //Только при поле зрения
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoHeight: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    500: {
      slidesPerView: 2,
    },
  },

  observer: true,
});

new Swiper(".related-classes__slider", {
  //Отстутпы между слайдами
  spaceBetween: 20,
  //Слайды на пролисьывание (сколько будет листаться)
  slidesPerGroup: 1,
  //Сколько слайдов будет видно
  slidesPerView: 4,
  //Сколько слайдов будет в колонке походу
  slidesPerColumn: 1,
  // centeredSlides:true
  speed: 600,
  //Возможные варианты:flip slide cube coverflow fade
  effect: "slide",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //Точки буллиты
  // pagination:{
  //     el:'.class',
  //     clickable:true,
  //
  // },
//  grabCursor: true,
  keyboard: {
    // Включаем управление клавиатурой
    enabled: true,
    //Только при поле зрения
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoHeight: true,
  breakpoints: {
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    450: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },


  observer: true,
});
