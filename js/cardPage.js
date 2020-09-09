$(document).ready(function(){

  $('.mini-slider-content').slick({
    arrows:false,
    dots:false,
    slidesToShow:3,
    centerMode:false,
    vertical:true,
    asNavFor:'.big-slider-content',
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
  $('.arrow-down').click(function(event) {
    $('.mini-slider-content').slick('slickPrev');
  });
  $('.arrow-up').click(function(event) {
    $('.mini-slider-content').slick('slickNext');
  });

  $('.big-slider-content').slick({
    arrows:false,
    dots:false,
    vertical:true,
    asNavFor:'.mini-slider-content',
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
});