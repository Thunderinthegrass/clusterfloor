// console.log('привет')

// const swiper = new Swiper('.swiper', {
  
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


function mobileMenu() {
  let menuBtn = document.querySelector('.nav-mobile__btn');
  let mobileMenuInner = document.querySelector('.nav-mobile');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('mobile-btn--active');
    mobileMenuInner.classList.toggle('active');
  })
}
mobileMenu();

function headerSearch() {
  let searchBtn = document.querySelector('.search__btn');
  let searchBtnOff = document.querySelector('.search__btn_off');
  let searchBtnMobile = document.querySelector('.search__btn_mobile');
  let search = document.querySelector('.search');
  let mobileMenuBtn = document.querySelector('.nav-mobile__btn-wrapper');

  searchBtnMobile.addEventListener('click', () => {
    search.classList.add('d-block');
    searchBtnMobile.classList.add('d-none');
  })
}
headerSearch();