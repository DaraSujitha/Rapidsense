$(document).ready(function(){
    $('.carousel1').slick({
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    //   autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
    //   centerMode: true,
    prevArrow: false,
    nextArrow:false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerMode: true,
  
        }
  
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
  
        }
      },  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }]
    });
  });