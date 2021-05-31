$(document).ready(function () {
   $('.carousel__inner').slick({
      autoplay: true,
      prevArrow: `<button type="button" class="slick-prev">
                     <img src="icons/left.png" alt="prev" />
                  </button>`,
      nextArrow: `<button type="button" class="slick-next">
                  <img src="icons/right.png" alt="next" />
               </button>`,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: true,
               arrows: false
            }
         }
      ]
   });
});

///
/// Tabs /////////////////////////
///
const tabsItems = document.querySelectorAll('.catalog__tab');
const tabsList = document.querySelector('.catalog__tabs');
const catalogs = document.querySelectorAll('.catalog__content')

tabsList.addEventListener('click', (e) => {
   tabsItems.forEach((item, idx) => {
      if (item === e.target.parentElement) {
         item.classList.add('catalog__tab_active')
         catalogs[idx].classList.add('catalog__content_active')
      } else {
         item.classList.remove('catalog__tab_active')
         catalogs[idx].classList.remove('catalog__content_active')

      }
   });
});

//
// Cards ////////////////
//
const contentCards = document.querySelectorAll('.catalog-item__content');
const listCards = document.querySelectorAll('.catalog-item__list');

document.querySelectorAll('.catalog-item__link').forEach((item, idx) => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      contentCards[idx].classList.remove('catalog-item__content_active');
      listCards[idx].classList.add('catalog-item__list_active');
   });
});

document.querySelectorAll('.catalog-item__back').forEach((item, idx) => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      listCards[idx].classList.remove('catalog-item__list_active');
      contentCards[idx].classList.add('catalog-item__content_active');
   });
});
