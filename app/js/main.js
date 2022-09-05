console.log("привет");

const swiper = new Swiper(".header__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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
  let searchBtnOff = document.querySelector(".search__btn_off");
  let searchBtnMobile = document.querySelector(".search__btn_mobile");
  let search = document.querySelector(".search");
  let mobileMenuBtn = document.querySelector(".nav-mobile__btn-wrapper");
  let searchInput = document.querySelector(".search__input");

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
    searchBtnOff.addEventListener("click", () => {
      searchInput.value = "";
    });
  }
  searchClear();
}
headerSearch();

function popupForm() {
  const btns = document.querySelectorAll(".modal-btn");
  const modalOverlay = document.querySelector(".modal-overlay ");
  const modals = document.querySelectorAll(".modal");
  const modalCloseBtn = document.querySelector('.modal__close-btn');

  btns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let path = e.currentTarget.getAttribute("data-path");

      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("modal--visible");
      modalOverlay.classList.add("modal-overlay--visible");
    });
  });

  modalOverlay.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target == modalOverlay || e.target == modalCloseBtn) {
      modalOverlay.classList.remove("modal-overlay--visible");
      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });
    }
  });
}
popupForm();
