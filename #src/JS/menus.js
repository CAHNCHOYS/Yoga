const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_mobile");
} else {
  document.body.classList.add("_pc");
}

window.onload = () => {
  const headerBurger = document.querySelector(".header__burger");
  const headerBurgerMenu = document.querySelector(".header__menu");
  const startVideoBtns = document.querySelectorAll(".video__start-btn");
  const pauseVidBtns = document.querySelectorAll(".video__end-btn");
  const yakorLinks = document.querySelectorAll(".yacor-link");
  const footerSpollers = document.querySelectorAll(
    ".main-footer__title.icon-arr-l"
  );

  if (headerBurger) {
    headerBurger.addEventListener("click", () => {
      headerBurger.classList.toggle("active");
      headerBurgerMenu.classList.toggle("active");
      document.body.classList.toggle('_isLocked');
    });
  }

  //Запуск видео по кнопке
  if (startVideoBtns.length && pauseVidBtns.length) {
    for (const startBtn of startVideoBtns) {
      startBtn.addEventListener("click", function () {
        startBtn.parentElement.querySelector("video").play();
        this.classList.add("hide");
        startBtn.parentElement
          .querySelector(".video__end-btn")
          .classList.add("show");
      });
    }
    for (const pauseBtn of pauseVidBtns) {
      pauseBtn.addEventListener("click", function () {
        this.classList.remove("show");
        this.parentElement.querySelector("video").pause();
        this.parentElement
          .querySelector(".video__start-btn")
          .classList.remove("hide");
      });
    }
  }

  //Прокрутка к якарям
  if (yakorLinks.length > 0) {
    for (const yakor of yakorLinks) {
      yakor.addEventListener("click", (e) => {
        e.preventDefault();
        let to = yakor.getAttribute("href").slice(1);

        document.getElementById(to).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  if (footerSpollers.length > 0) {
    for (const spoller of footerSpollers) {
      spoller.addEventListener("click", () => {
        if (document.documentElement.clientWidth <= 500) {
          spoller.classList.toggle("active");
          if (spoller.parentElement.querySelector(".main-footer__list"))
            _slideToggle(
              spoller.parentElement.querySelector(".main-footer__list"),
              800
            );
        }
      });
    }
  }

   


};
