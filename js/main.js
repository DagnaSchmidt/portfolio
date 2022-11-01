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