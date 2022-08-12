/* ============ MENU SHOW AND HIDDEN ============== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
/* ============ MENU SHOW ============== */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
/* ============ MENU HIDDEN ============== */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
/* ============ REMOVE MENU MOBILE ============== */
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    //Cuando se hace click sobre 'nav-link', se remueve la clase 'show-menu'
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n =>n.addEventListener('click',linkAction));
/* ============ ACCORDION SKILLS ============== */
const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(const element of skillsContent) {
        element.className = 'skills-content skills-close';
    }
    if (itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open';
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})

/* ============ QUALIFICATION TABS ============== */

/* ============ SERVICES MODAL ============== */

/* ============ PORTFOLIO SWIPER ============== */

/* ============ TESTIMONIAL ============== */

/* ============ SCROLL SECTIONS ACTIVE LINK ============== */

/* ============ CHANGE BACKGROUND HEADER ============== */
