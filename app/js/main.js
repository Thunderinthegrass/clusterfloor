// console.log('привет')

// const swiper = new Swiper('.swiper', {

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

function mobileMenu() {
  let menuBtn = document.querySelector(".nav-mobile__btn");
  let mobileMenuInner = document.querySelector(".nav-mobile");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("mobile-btn--active");
    mobileMenuInner.classList.toggle("active");
  });
}
mobileMenu();

function headerSearch() {
  let searchBtn = document.querySelector(".search__btn");
  let searchBtnOff = document.querySelector(".search__btn_off");
  let searchBtnMobile = document.querySelector(".search__btn_mobile");
  let search = document.querySelector(".search");
  let mobileMenuBtn = document.querySelector(".nav-mobile__btn-wrapper");
  let searchInput = document.querySelector('.search__input');

  searchBtnMobile.addEventListener("click", () => {
    function openSearch() {
      search.classList.add("d-block");
      searchBtnOff.classList.add("d-block");

      searchBtnMobile.classList.add("d-none");
      mobileMenuBtn.classList.add("d-none");
    }
    openSearch();
  });

  function closeSearch() {
    document.addEventListener("click", (e) => {
      if (search.classList.contains("d-block")) {
        if (e.target.classList.contains("search-hide") == false) {
          search.classList.remove("d-block");
          searchBtnMobile.classList.remove("d-none");
          mobileMenuBtn.classList.remove("d-none");
        }
      }
    });
  }
  closeSearch();

  function searchClear() {
    searchBtnOff.addEventListener('click', () => {
      searchInput.value = '';
    })
  }
  searchClear();
}
headerSearch();
