const navMenu = document.getElementById('nav');
const navBtn = document.getElementById('nav-btn');
const navClose = document.getElementById('nav-close');

if(navBtn) {
    navBtn.addEventListener('click', () => {
        navMenu.classList.add('show')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show')
    })
}

const navLink = document.querySelectorAll('.nav__item');

function linkAction(){
    const navMenu = document.getElementById('nav')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//ABOUT//
const moreMenu = document.getElementById('more-menu');
const moreBtn = document.getElementById('more-btn');
const moreClose = document.getElementById('more-close');

if(moreBtn) {
    moreBtn.addEventListener('click', () => {
        moreMenu.classList.add('show')
    })
}

if(moreClose) {
    moreClose.addEventListener('click', () => {
        moreMenu.classList.remove('show')
    })
}

//PORTFOLIO//
var acc = document.getElementsByClassName("portfolio__title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("open");

    var portfolio__description = this.nextElementSibling;
    if (portfolio__description.style.display === "block") {
        portfolio__description.style.display = "none";
    } else {
        portfolio__description.style.display = "block";
    }
  });
} 

//SCROLL UP//
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)