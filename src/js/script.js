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
   acitvityDot();
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
      acitvityDot();
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

acitvityDot();

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

//
/// Modal(Fade)
//

const overlay = document.querySelector('.overlay');
const modalCons = document.querySelector('#consultation');
const modalOrder = document.querySelector('#order');
const modalClose = document.querySelectorAll('.modal__close');

document.querySelectorAll('[data-modal=consultation]').forEach((btn) => {
   btn.addEventListener('click', () => {
      overlay.style.display = 'block';
      modalCons.style.display = 'block';

      setTimeout(() => {
         overlay.style.opacity = '1';
         modalCons.style.opacity = '1';
      }, 0);
   });
});

modalClose.forEach((cross) => {
   cross.addEventListener('click', () => {
      cross.parentElement.style.opacity = '0';
      cross.parentElement.parentElement.style.opacity = '0';
      setTimeout(() => {
         cross.parentElement.style.display = 'none';
         cross.parentElement.parentElement.style.display = 'none';
      }, 1000);
   });
});

/// buy modal

const buyBtns = document.querySelectorAll('.button_mini');

buyBtns.forEach((btn, idx) =>
   btn.addEventListener('click', () => {
      const title = document.querySelectorAll('.catalog-item__subtitle')[idx];

      document.querySelector('#order .modal__descr').textContent =
         title.textContent;

      overlay.style.display = 'block';
      modalOrder.style.display = 'block';

      setTimeout(() => {
         overlay.style.opacity = '1';
         modalOrder.style.opacity = '1';
      }, 0);
   })
);

// Pageup(faded)
const pageUp = document.querySelector('.pageup');

window.addEventListener('scroll', () => {
   console.log(window.pageYOffset);
   if (window.pageYOffset > 1499) {
      pageUp.style.display = 'block';
      setTimeout(() => {
            pageUp.style.opacity = '1';
      });
   } else {
      pageUp.style.opacity = '0';

      pageUp.addEventListener('transitionend', () => {
         if (window.pageYOffset < 1500) {
            pageUp.style.display = 'none';
         }
      });
   }

});

//
/// Validation
//

// const consultationForm = document.querySelector('#form-consultation');
// const phone = consultationForm.querySelector('[name=phone]');

// const regex =
//    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

// consultationForm.addEventListener('submit', (e) => {
//    e.preventDefault();
//    if (!regex.test(phone.value)) {
//       phone.insertAdjacentHTML('afterend', `<span>Введите валидный номер телефона</span>`)
//    }
// });
