/* ============ MENU SHOW AND HIDDEN ============== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/* ============ MENU SHOW ============== */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/* ============ MENU HIDDEN ============== */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/* ============ REMOVE MENU MOBILE ============== */
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //Cuando se hace click sobre 'nav-link', se remueve la clase 'show-menu'
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
/* ============ ACCORDION SKILLS ============== */
const skillsContent = document.getElementsByClassName("skills-content"),
  skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (const element of skillsContent) {
    element.className = "skills-content skills-close";
  }
  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/* ============ QUALIFICATION TABS ============== */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});

/* ============ SERVICES MODAL ============== */
const modalViews = document.querySelectorAll(".services-modal"),
  modalBtns = document.querySelectorAll(".services-button"),
  modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/* ============ PORTFOLIO SWIPER ============== */
let swiperPortfolio = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 /*  mousewheel: true,
  keyboard: true, */
});

/* ============ TESTIMONIAL ============== */
let swiperTestimonial = new Swiper(".testimonial-container", {
    loop: true,
    grabCursor:true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
   /*  mousewheel: true,
    keyboard: true, */
  });

/* ============ SCROLL SECTIONS ACTIVE LINK ============== */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active-link');
        }else{
            document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);
/* ============ CHANGE BACKGROUND HEADER ============== */
function scrollHeader(){
    const nav = document.getElementById('header');
    return (this.scrollY >= 80) ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);