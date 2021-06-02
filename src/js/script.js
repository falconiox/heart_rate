/// Slider

const prevBtn = document.querySelector('.carousel__prev');
const nextBtn = document.querySelector('.carousel__next');
const images = document.querySelectorAll('.carousel__inner img');
let count = 0;

prevBtn.addEventListener('click', () => {
   images[count].style.opacity = '0';

   count--;

   if (count <= 0) {
      count = images.length - 1;
   }
   images[count].style.opacity = '1';
});

nextBtn.addEventListener('click', nextSlide);

const intervalId = setInterval(nextSlide, 5000);

function nextSlide() {
   images[count].style.opacity = '0';

   count++;
   if (count >= images.length) {
      count = 0;
   }
   images[count].style.opacity = '1';
   acitvityDot()
}

const dots = document.createElement('div');
dots.classList.add('carousel__dots');

images.forEach((_, idx) => {
   const el = document.createElement('div');

   el.classList.add('carousel__dot');

   el.addEventListener('click', () => {
      images[count].style.opacity = '0';
      count = idx;
      images[idx].style.opacity = '1';
      acitvityDot()
      clearInterval(intervalId);
   });

   dots.append(el);
});

document.querySelector('.carousel').append(dots);
const dot = document.querySelectorAll('.carousel__dot');

function acitvityDot() {
   dot.forEach((el, idx) => {
      if (count == idx) {
         el.classList.add('carousel__dot_active');
      } else {
         el.classList.remove('carousel__dot_active');
      }
   });
}


acitvityDot()


///
/// Tabs /////////////////////////
///
const tabsItems = document.querySelectorAll('.catalog__tab');
const tabsList = document.querySelector('.catalog__tabs');
const catalogs = document.querySelectorAll('.catalog__content');

tabsList.addEventListener('click', (e) => {
   tabsItems.forEach((item, idx) => {
      if (item === e.target.parentElement) {
         item.classList.add('catalog__tab_active');
         catalogs[idx].classList.add('catalog__content_active');
      } else {
         item.classList.remove('catalog__tab_active');
         catalogs[idx].classList.remove('catalog__content_active');
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
