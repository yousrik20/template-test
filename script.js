const spinner = document.querySelector(".spinner");
window.addEventListener("load", function () {
  spinner.style.display = "none";
});
const skillsSection = document.querySelector(".skills");
const skillsSquare = skillsSection.getBoundingClientRect();
window.addEventListener("scroll", function () {
  // console.log(skillsSquare.top);
  // console.log(window.scrollY);
  if (window.scrollY + 10 > skillsSquare.top) {
    skillsSection.style.opacity = "1";
  } else {
    skillsSection.style.opacity = "0";
  }
});
// up button visibility
const upBtn = document.querySelector(".up");
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
});
// Scrolling when clicking navbar element

document.querySelector(".navbar-nav").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
// brand Scrolling
document.querySelector(".navbar-brand").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
// text Effect
let i = 0;
const text = "Front End Web Developer!";
const typing = function () {
  if (i < text.length) {
    document.querySelector(".textEffect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 300);
  }
  if (i === text.length) {
    document.querySelector(".last").innerHTML = "";
  }
};
typing();
// brief button
const briefbtn = document.querySelector(".brief-btn");
const briefSection = document.querySelector("#brief");
briefbtn.addEventListener("click", function () {
  briefSection.scrollIntoView({ behavior: "smooth" });
});
// up button
const up = document.querySelector(".up");
const navScroll = document.querySelector("#navbar");
up.addEventListener("click", function () {
  // console.log("test");
  navScroll.scrollIntoView({ behavior: "smooth" });
});
// fix blur when image is scroll
const mySection = document.querySelector(".section1");
const initalSection = mySection.getBoundingClientRect();
const myImg = document.querySelector(".myImg");
window.addEventListener("scroll", function () {
  if (window.scrollY >= initalSection.top) {
    // console.log(initalSection.top);
    myImg.classList.remove("lazy-img");
  } else {
    myImg.classList.add("lazy-img");
  }
});
/* Testimonials */
document.querySelector(".carousel").carousel();
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
};
