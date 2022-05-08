$(document).ready(function(){
    /* $('.main-slide').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }); */
    var typed = new Typed('.typed-text', {
        strings: ["Meet us at Odisha Jewellery Show "],
        typeSpeed: 100,
        backSpeed: 50,
        delay: 10,
        loop: true
    });

    $('.client-slider').slick({
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      $('.menu ').click(function(){
        $('.menu .bar').toggleClass('toggle');
        $('nav').toggleClass('togglenav');
      });
});