// console.log('привет')

// const swiper = new Swiper('.swiper', {
  
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


function mobileMenu() {
  let menuBtn = document.querySelector('.nav-mobile__btn');
  let mobileMenu = document.querySelector('.nav-mobile')

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  })
}