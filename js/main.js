/* hamburger */
let hamburger = document.querySelector('.hamburger');

hamburger.onclick = () => {
    let menu = document.querySelector('.header__menu');
    let body = document.querySelector('body');

    menu.classList.toggle('header__menu_open');
    hamburger.classList.toggle('hamburger_close');
    body.classList.toggle('scrollOff');


};

/* slider */
$(document).ready(function(){
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