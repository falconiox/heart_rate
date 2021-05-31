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
