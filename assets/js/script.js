/* ==================================== Menu Show Y HIDDEN ==================================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/* ===== Menu Show ===== */
/* Validate if Constant Exists */
if(navToggle){
  navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
      console.log("test");
  })
}

/* ===== Menu Hidden ===== */
/* Validate if Constant Exists */
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/* ==================================== Remove Menu Mobile ==================================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ==================================== Accordian Skills ==================================== */
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i =0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
  if(itemClass == 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})
/* ==================================== Qualification Tabs ==================================== */
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContents => {
      tabContents.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})

/* ==================================== Services Modal ==================================== */
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})
/* ==================================== Portfolio Swiper ==================================== */
let swiperPortfolio = new Swiper(".portfolio__container", {
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

});
/* ==================================== Testimonial ==================================== */
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,


  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    }
  }

});
/* ==================================== SCROLL SECTIONS ACTIVE LINK ==================================== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
/* ===================== Change Background Header ===================== */
function scrollHeader(){
  const nav = document.getElementById('header')
  // When scroll is greater than 200vh adds scroll header class to header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ================= Show Scroll Top ================= */
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ================= Dark light theme ================= */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if(selectedTheme) {
  // If the validation is fullfilled, we ask what the issue was to know if we activate or deactive the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivate theme with button

themeButton.addEventListener('click', () => {
  // Add or remove icon
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


function sendMail(){
  let parms = {
    name: document.getElementById("contact-name").value,   
    email: document.getElementById("contact-email").value,   
    subject: document.getElementById("contact-subject").value,
    message: document.getElementById("contact-message").value,
  };
  emailjs.send("service_qov78xf","contact_form",parms,"wmwIJvnSi86DTolBb")
  .then( res =>{
      document.getElementById("contact-name").value = "";   
      document.getElementById("contact-email").value = "";  
      document.getElementById("contact-subject").value = "";
      document.getElementById("contact-message").value = "";

      console.log(res);
      alert("Message sent!")
  })
  .catch(err =>console.log(err));
}
