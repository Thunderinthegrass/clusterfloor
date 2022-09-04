// console.log('привет')

// const swiper = new Swiper('.swiper', {
  
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


function mobileMenu() {
  let menuBtn = document.querySelector('.nav-mobile__btn');
  let mobileMenuInner = document.querySelector('.nav-mobile')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('mobile-btn--active');
    mobileMenuInner.classList.toggle('active');
  })
}
mobileMenu();