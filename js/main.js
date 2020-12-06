let hamburger = document.querySelector('.hamburger');

/* hamburger */
hamburger.onclick = () => {
    let menu = document.querySelector('.header__menu');
    let body = document.querySelector('body');

    menu.classList.toggle('header__menu_open');
    hamburger.classList.toggle('hamburger_close');
    body.classList.toggle('scrollOff');
};

/* слайдер в 2 блоке*/
$(function(){
    $('.slider').slick({
        centerMode: false,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<span class="pagination__prev">01</span>',
        nextArrow: '<span class="pagination__next">02</span>',
        responsive: [
            {
              breakpoint: 581,
              settings: {
                fade: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: false,
              }
            }

          ]
    });
    /* отображает в кнопке prew - номер текущего слайда, а в кнопке next - номер следующего */
    $(".slider").on("afterChange", function(event, slick, currentSlide){
        var allValue = $(".slider").slick("getSlick").slideCount;
        var prev = (currentSlide + 1);
        var next = (currentSlide + 2);
        if (next > allValue) {
            next = '1';
        }
        $('.pagination__prev').text('0' + prev);
        $('.pagination__next').text('0' + next);
    });
  });

  /* слайдер в 4 блоке */
$(function(){
  $('.all-services__slider').slick({
    centerMode: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }, 
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }, 
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }

    ]
  });
});