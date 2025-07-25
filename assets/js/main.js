/*=============== SEARCH ===============*/
const searchButton = document.getElementById( 'search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content');

/*===== MENU SHOW=====*/
/* Validate if constant exists */

if(searchButton){
    searchButton.addEventListener('click', () =>{
    searchContent.classList.add('show-search')
})
}

/*===== MENU HIDDEN =====*/

if(searchClose){
    searchClose.addEventListener('click', () =>{
    searchContent.classList.remove('show-search')
})
}

/*=============== LOGIN ===============*/

const loginButton = document.getElementById( 'login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content');



if(loginButton){
    loginButton.addEventListener('click', () =>{
    loginContent.classList.add('show-login')
})
}


if(loginClose){
    loginClose.addEventListener('click', () =>{
    loginContent.classList.remove('show-login')
})
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
const header = document.getElementById( 'header')
// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
this.scrollY >= 50 ? header.classList.add('shadow-header')
                   : header.classList.remove('shadow-header')
}
window.addEventListener ('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spacebetween: 30,
    grabcursor: true,
    sliderPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spacebetween: -32,
        },
    },
});
/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
