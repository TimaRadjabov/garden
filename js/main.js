if ($("#main-body").length > 0) {
  window.onload = function () {
    modalExit();
  };

  //InputCity

  $(".form__input-city").on("keypress", function () {
    var that = this;

    setTimeout(function () {
      var res = /[^А-Яа-я \-]/g.exec(that.value);
      if (res !== null) {
        alert("Введите название города русскими буквами");
      }

      that.value = that.value.replace(res, "");
    }, 0);
  });

  //CheckBox

  /* 	let checkboxes = document.querySelectorAll('.custom-checkbox');
	for (let i = 0; i < checkboxes.length; i++) {
		 checkboxes[i].addEventListener('click', function () {
			  if (checkboxes[i].checked) {
					checkboxes[i].classList.remove('validate')
			  }
		 })

	} */

  //ValidateInputs

  let inputs = document.querySelectorAll("input");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", function () {
      let activeInput = inputs[i];
      if (activeInput.classList.contains("form__input-phone")) {
        if (activeInput.value.includes("_")) {
          return;
        } else {
          activeInput.classList.remove("validate");
        }
      }
      if (activeInput.classList.contains("form__input-email")) {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(activeInput.value) == false) {
          return;
        } else {
          activeInput.classList.remove("validate");
        }
      }
      if (activeInput.classList.contains("form__input-name")) {
        if (activeInput.value == "") {
          return;
        } else {
          activeInput.classList.remove("validate");
        }
      }
      if (activeInput.classList.contains("form__input-city")) {
        if (activeInput.value == "") {
          return;
        } else {
          activeInput.classList.remove("validate");
        }
      }
    });
  }

  //Popup

  let presentationBtn = document.querySelectorAll(".top-btn");
  let phoneBtn = document.querySelectorAll(".modal-phone");
  let politicyBtn = document.querySelectorAll(".politicy");

  let popupPresentation = document.querySelector(".popup-franchising");
  let popupPhone = document.querySelector(".popup-phone");
  let popupPoliticy = document.querySelector(".popup-politicy");
  let body = document.querySelector("body");

  presentationBtn.forEach((item) => {
    item.addEventListener("click", () => {
      presentation();
    });
  });

  function presentation() {
    let popupPresentation = document.querySelector(".popup-franchising");
    let body = document.querySelector("body");
    popupPresentation.classList.add("is-active");
    bodyLock();
    if (popupPresentation.classList.contains("is-active")) {
      body.addEventListener("keydown", function (e) {
        if (e.keyCode === 27) {
          popupPresentation.classList.remove("is-active");
          bodyUnlock();
        }
      });
    }
  }

  for (let p = 0; p < politicyBtn.length; p++) {
    politicyBtn[p].addEventListener("click", function () {
      popupPoliticy.classList.add("is-active");
      bodyLock();
      if (popupPoliticy.classList.contains("is-active")) {
        body.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            popupPoliticy.classList.remove("is-active");
            bodyUnlock();
          }
        });
      }
    });
  }

  for (let p = 0; p < phoneBtn.length; p++) {
    phoneBtn[p].addEventListener("click", function () {
      popupPhone.classList.add("is-active");
      bodyLock();
      if (popupPhone.classList.contains("is-active")) {
        body.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            popupPhone.classList.remove("is-active");
            bodyUnlock();
          }
        });
      }
    });
  }
  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");
  }
  function bodyUnlock() {
    setTimeout(function () {
      body.style.paddingRight = "0px";
      body.classList.remove("lock");
    }, 100);
  }

  body.addEventListener("click", function (a) {
    let target = a.target;
    if (
      target.classList.contains("popup__inner") ||
      target.classList.contains("popup-close")
    ) {
      popupPresentation.classList.remove("is-active");
      popupPoliticy.classList.remove("is-active");
      popupPhone.classList.remove("is-active");
      bodyUnlock();
    }
  });

  newDate();

  //input-phone

  var element = document.getElementsByClassName("form__input-phone");
  var maskOptions = {
    mask: "+7(000) 000 0000",
    // +7 (___) ___ ____
    lazy: false,
  };

  $(".form__input-phone").each(function (i, elem) {
    //let IMask;
    var mask = new IMask(elem, maskOptions);
  });
}

function phone() {
  let phoneBtn = document.querySelectorAll(".modal-phone");
  let popupPhone = document.querySelector(".popup-phone");

  for (let p = 0; p < phoneBtn.length; p++) {
    phoneBtn[p].addEventListener("click", function () {
      popupPhone.classList.add("is-active");
      bodyLock();
      if (popupPhone.classList.contains("is-active")) {
        body.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            popupPhone.classList.remove("is-active");
            bodyUnlock();
          }
        });
      }
    });
  }

  body.addEventListener("click", function (a) {
    let target = a.target;
    if (
      target.classList.contains("popup__inner") ||
      target.classList.contains("popup-close")
    ) {
      popupPhone.classList.remove("is-active");
      body.classList.remove("no-scroll");
    }
  });
}

function politicy() {
  let politicyBtn = document.querySelectorAll(".politicy");
  let popupPoliticy = document.querySelector(".popup-politicy");
  let body = document.querySelector("body");

  for (let p = 0; p < politicyBtn.length; p++) {
    politicyBtn[p].addEventListener("click", function (m) {
      let targetM = m.target;
      popupPoliticy.classList.add("is-active");
      body.classList.add("no-scroll");
      if (popupPoliticy.classList.contains("is-active")) {
        body.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            popupPoliticy.classList.remove("is-active");
            body.classList.remove("no-scroll");
          }
        });
      }
    });
  }

  body.addEventListener("click", function (a) {
    let target = a.target;
    if (
      target.classList.contains("popup__inner") ||
      target.classList.contains("popup-close")
    ) {
      popupPoliticy.classList.remove("is-active");
      body.classList.remove("no-scroll");
    }
  });
}
function newDate() {
  const dateNow = new Date().getFullYear();
  let dateText = document.querySelectorAll(".date-now");
  dateText.innerHTML = dateNow;
}

//PopupExit

// modalExit();
function modalExit() {
  let popupExit = document.querySelector(".popup-exit");
  let body = document.querySelector("body");
  let count = 0;
  $(document).mouseleave(function (e) {
    if (count > 0) {
      return;
    }
    if (e.clientY < 10) {
      popupExit.classList.add("is-active");
      bodyLock();
      if (popupExit.classList.contains("is-active")) {
        body.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            popupExit.classList.remove("is-active");
            bodyUnlock();
          }
        });
      }
      count++;
    }
  });
  body.addEventListener("click", function (a) {
    let target = a.target;
    if (
      target.classList.contains("popup__inner") ||
      target.classList.contains("popup-close")
    ) {
      popupExit.classList.remove("is-active");
      bodyUnlock();
    }
  });
}

if ($("#thanks-body").length > 0) {
  let thanksName = document.querySelector(".thanks-name");
  let the_title = document.querySelector("title");
  let nameValue = localStorage.getItem("lpg3746_name");
  let cityName = document.querySelector(".thanks-city");

  cityName.innerHTML = localStorage.getItem("lpg3746_city");
  if (nameValue == " ") {
    thanksName.innerHTML = localStorage.getItem("lpg3746_name");
    the_title.innerHTML = "Cпасибо, Ваша заявка принята 👍";
  } else {
    thanksName.innerHTML = localStorage.getItem("lpg3746_name") + ",";
    the_title.innerHTML =
      localStorage.getItem("lpg3746_name") +
      ", спасибо, Ваша заявка принята 👍";
  }

  politicy();
  newDate();
}
if ($("#thanks2-body").length > 0) {
  let nameValue = localStorage.getItem("lpg3746_name");
  let thanksName = document.querySelector(".thanks-name");
  let cityName = document.querySelector(".thanks-city");
  let the_title = document.querySelector("title");

  cityName.innerHTML = localStorage.getItem("lpg3746_city");
  console.log(cityName);

  if (nameValue == " ") {
    thanksName.innerHTML = localStorage.getItem("lpg3746_name");
    the_title.innerHTML = "Cпасибо, Ваша заявка принята 👍";
  } else {
    thanksName.innerHTML = localStorage.getItem("lpg3746_name") + ",";
    the_title.innerHTML =
      localStorage.getItem("lpg3746_name") +
      ", спасибо, Ваша заявка принята 👍";
  }

  politicy();
  newDate();
}

//Slider

$(".fourth__slider").slick({
  slidesToShow: 3,
  sliderToScroll: 1,
  dots: true,
  infinity: true,
  centerMode: true,
  initialSlide: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 601,
      settings: {
        arrows: false,
      },
    },
  ],
});

// Tab
/* const tabItemAdaptive = document.querySelectorAll(".fifth__tab");
const tabContentAdaptive = document.querySelectorAll(".fifth__content");

function tabChangerAdaptive(item, content) {
  item.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      content[index].classList.toggle("active");
      item[index].classList.toggle("active");
    });
  });
}
tabChangerAdaptive(tabItemAdaptive, tabContentAdaptive); */

const tabItem = document.querySelectorAll(".fifth__tab");
const tabContent = document.querySelectorAll(".fifth__content");
const tabItemSecond = document.querySelectorAll(".ten__calc-tab");
const tabContentSecond = document.querySelectorAll(".ten__calc-content");

function tabChanger(item, content) {
  item.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      content.forEach((content) => {
        content.classList.remove("active");
      });
      item.forEach((tab) => {
        tab.classList.remove("active");
      });

      content[index].classList.add("active");
      item[index].classList.add("active");
    });
  });
}
tabChanger(tabItem, tabContent);
tabChanger(tabItemSecond, tabContentSecond);

/* Calc */
document.addEventListener("DOMContentLoaded", () => {
  const slider01 = document.querySelector(".slider-one");
  const slider02 = document.querySelector(".slider-two");
  const slider03 = document.querySelector(".slider-three");
  const slider04 = document.querySelector(".slider-four");
  const slider05 = document.querySelector(".slider-five");
  const slider06 = document.querySelector(".slider-six");
  const progressOne = document.querySelector(".point01");
  const progressTwo = document.querySelector(".point02");
  const progressThree = document.querySelector(".point03");
  const progressFour = document.querySelector(".point04");
  const progressFive = document.querySelector(".point05");
  const progressSix = document.querySelector(".point06");
  const screenWidth = window.screen.width;
  const resultOne = document.querySelector(".result");
  const resultTwo = document.querySelector(".result02");
  const calcResult = document.querySelector(".result-calc");
  const tabItemThree = document.querySelectorAll(".ten__calc-tab");

  const labelValue01 = document.querySelector(".input-value01");
  const labelValue02 = document.querySelector(".input-value02");
  const labelValue03 = document.querySelector(".input-value03");
  const labelValue04 = document.querySelector(".input-value04");
  const labelValue05 = document.querySelector(".input-value05");
  const labelValue06 = document.querySelector(".input-value06");

  const firstInt = ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"];
  const secondInt = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
  function customSlider(
    one,
    two,
    three,
    progress,
    progress02,
    progress03,
    result01,
    calcResult,
    label01,
    label02,
    label03,
    int
  ) {
    label01.innerHTML = one.value;
    label02.innerHTML = two.value;
    label03.innerHTML = three.value;
    if (matchMedia) {
      let arrs = [
        window.matchMedia("(max-width: 1082px) and (min-width: 601px)"),
        window.matchMedia("(max-width: 600px)"),
      ];
      function working(arr) {
        function getTooltip(input, progress) {
          if (input.value === int[0]) {
            progress.style.width = 10 + "px";
          }
          if (input.value === int[1]) {
            progress.style.width = 90 + "px";
          }
          if (input.value === int[2]) {
            progress.style.width = 185 + "px";
          }
          if (input.value === int[3]) {
            progress.style.width = 270 + "px";
          }
          if (input.value === int[4]) {
            progress.style.width = 355 + "px";
          }
          if (input.value === int[5]) {
            progress.style.width = 460 + "px";
          }
          if (input.value === int[6]) {
            progress.style.width = 550 + "px";
          }
          if (input.value === int[7]) {
            progress.style.width = 640 + "px";
          }
          if (input.value === int[8]) {
            progress.style.width = 725 + "px";
          }
          if (input.value === int[9]) {
            progress.style.width = 830 + "px";
          }
        }
        if (arrs[0].matches) {
          if (one.value === "2000") {
            progress.style.width = one.value - 2000 + "px";
          }
          if (one.value === "2100") {
            progress.style.width = one.value - 2025 + "px";
          }
          if (one.value === "2200") {
            progress.style.width = one.value - 2070 + "px";
          }
          if (one.value === "2300") {
            progress.style.width = one.value - 2120 + "px";
          }
          if (one.value === "2400") {
            progress.style.width = one.value - 2170 + "px";
          }
          if (one.value === "2500") {
            progress.style.width = one.value - 2220 + "px";
          }
          if (one.value === "2600") {
            progress.style.width = one.value - 2270 + "px";
          }
          if (one.value === "2700") {
            progress.style.width = one.value - 2310 + "px";
          }
          if (one.value === "2800") {
            progress.style.width = one.value - 2360 + "px";
          }
          if (one.value === "2900") {
            progress.style.width = one.value - 2400 + "px";
          }
          if (one.value === "3000") {
            progress.style.width = one.value - 2450 + "px";
          }

          if (one.value === "1750") {
            progress.style.width = one.value - 1750 + "px";
          }
          if (one.value === "1850") {
            progress.style.width = one.value - 1770 + "px";
          }
          if (one.value === "1950") {
            progress.style.width = one.value - 1825 + "px";
          }
          if (one.value === "2050") {
            progress.style.width = one.value - 1870 + "px";
          }
          if (one.value === "2150") {
            progress.style.width = one.value - 1920 + "px";
          }
          if (one.value === "2250") {
            progress.style.width = one.value - 1960 + "px";
          }
          if (one.value === "2350") {
            progress.style.width = one.value - 2020 + "px";
          }
          if (one.value === "2450") {
            progress.style.width = one.value - 2065 + "px";
          }
          if (one.value === "2550") {
            progress.style.width = one.value - 2115 + "px";
          }
          if (one.value === "2650") {
            progress.style.width = one.value - 2160 + "px";
          }
          if (one.value === "2750") {
            progress.style.width = one.value - 2210 + "px";
          }

          if (two.value === "0") {
            progress02.style.width = two.value + 0 + "px";
          }
          if (two.value === "3") {
            progress02.style.width = 88 - two.value + "px";
          }
          if (two.value === "6") {
            progress02.style.width = 146 - two.value + "px";
          }
          if (two.value === "9") {
            progress02.style.width = 199 - two.value + "px";
          }
          if (two.value === "12") {
            progress02.style.width = 262 - two.value + "px";
          }
          if (two.value === "15") {
            progress02.style.width = 330 - two.value + "px";
          }
          if (two.value === "18") {
            progress02.style.width = 388 - two.value + "px";
          }
          if (two.value === "21") {
            progress02.style.width = 451 - two.value + "px";
          }
          if (two.value === "24") {
            progress02.style.width = 504 - two.value + "px";
          }
          if (two.value === "27") {
            progress02.style.width = 577 - two.value + "px";
          }
        } else if (arrs[1].matches) {
          if (one.value === "2000") {
            progress.style.width = one.value - 2000 + "px";
          }
          if (one.value === "2100") {
            progress.style.width = one.value - 2065 + "px";
          }
          if (one.value === "2200") {
            progress.style.width = one.value - 2135 + "px";
          }
          if (one.value === "2300") {
            progress.style.width = one.value - 2215 + "px";
          }
          if (one.value === "2400") {
            progress.style.width = one.value - 2290 + "px";
          }
          if (one.value === "2500") {
            progress.style.width = one.value - 2360 + "px";
          }
          if (one.value === "2600") {
            progress.style.width = one.value - 2440 + "px";
          }
          if (one.value === "2700") {
            progress.style.width = one.value - 2515 + "px";
          }
          if (one.value === "2800") {
            progress.style.width = one.value - 2590 + "px";
          }
          if (one.value === "2900") {
            progress.style.width = one.value - 2670 + "px";
          }
          if (one.value === "3000") {
            progress.style.width = one.value - 2740 + "px";
          }

          if (one.value === "1750") {
            progress.style.width = one.value - 1750 + "px";
          }
          if (one.value === "1850") {
            progress.style.width = one.value - 1815 + "px";
          }
          if (one.value === "1950") {
            progress.style.width = one.value - 1885 + "px";
          }
          if (one.value === "2050") {
            progress.style.width = one.value - 1960 + "px";
          }
          if (one.value === "2150") {
            progress.style.width = one.value - 2040 + "px";
          }
          if (one.value === "2250") {
            progress.style.width = one.value - 2110 + "px";
          }
          if (one.value === "2350") {
            progress.style.width = one.value - 2190 + "px";
          }
          if (one.value === "2450") {
            progress.style.width = one.value - 2265 + "px";
          }
          if (one.value === "2550") {
            progress.style.width = one.value - 2345 + "px";
          }
          if (one.value === "2650") {
            progress.style.width = one.value - 2415 + "px";
          }
          if (one.value === "2750") {
            progress.style.width = one.value - 2490 + "px";
          }

          if (two.value === "0") {
            progress02.style.width = two.value + 0 + "px";
          }
          if (two.value === "3") {
            progress02.style.width = 43 - two.value + "px";
          }
          if (two.value === "6") {
            progress02.style.width = 70 - two.value + "px";
          }
          if (two.value === "9") {
            progress02.style.width = 105 - two.value + "px";
          }
          if (two.value === "12") {
            progress02.style.width = 136 - two.value + "px";
          }
          if (two.value === "15") {
            progress02.style.width = 165 - two.value + "px";
          }
          if (two.value === "18") {
            progress02.style.width = 198 - two.value + "px";
          }
          if (two.value === "21") {
            progress02.style.width = 226 - two.value + "px";
          }
          if (two.value === "24") {
            progress02.style.width = 254 - two.value + "px";
          }
          if (two.value === "27") {
            progress02.style.width = 282 - two.value + "px";
          }
        } else {
          getTooltip(one, progress);
          getTooltip(two, progress02);
          getTooltip(three, progress03);
        }
      }
      for (let i = 0; i < arrs.length; i++) {
        working(arrs[i]);
        arrs[i].addListener(working);
      }
    }

    const profit = new Intl.NumberFormat("ru-RU").format(
      Math.round(one.value * two.value * 321 * 0.075)
    );
    result01.innerHTML = profit + " рублей";
    calcResult.innerHTML = profit;
  }
  customSlider(
    slider01,
    slider02,
    slider03,
    progressOne,
    progressTwo,
    progressThree,
    resultOne,
    calcResult,
    labelValue01,
    labelValue02,
    labelValue03,
    firstInt
  );

  tabItemThree.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("first-tab")) {
        customSlider(
          slider01,
          slider02,
          slider03,
          progressOne,
          progressTwo,
          progressThree,
          resultOne,
          calcResult,
          labelValue01,
          labelValue02,
          labelValue03,
          firstInt
        );
      } else {
        customSlider(
          slider04,
          slider05,
          slider06,
          progressFour,
          progressFive,
          progressSix,
          resultTwo,
          calcResult,
          labelValue04,
          labelValue05,
          labelValue06,
          secondInt
        );
      }
    });
  });
  const sliders = [slider01, slider02, slider03];
  sliders.map((item) => {
    item.addEventListener("input", () => {
      customSlider(
        slider01,
        slider02,
        slider03,
        progressOne,
        progressTwo,
        progressThree,
        resultOne,
        calcResult,
        labelValue01,
        labelValue02,
        labelValue03,
        firstInt
      );
    });
  });
  const slidersTwo = [slider04, slider05, slider06];
  slidersTwo.map((item) => {
    item.addEventListener("input", () => {
      customSlider(
        slider04,
        slider05,
        slider06,
        progressFour,
        progressFive,
        progressSix,
        resultTwo,
        calcResult,
        labelValue04,
        labelValue05,
        labelValue06,
        secondInt
      );
    });
  });
});
