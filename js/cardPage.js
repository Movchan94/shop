$(document).ready(function(){

  $('.mini-slider-content').slick({
    arrows:false,
    dots:false,
    slidesToShow:3,
    centerMode:false,
    vertical:false,
    asNavFor:'.big-slider-content',
    responsive:[
      {
        breakpoint: 800,
        settings: {
          slidesToShow:3
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
    vertical:false,
    asNavFor:'.mini-slider-content',
    responsive:[
      {
        breakpoint: 800,
        settings: {
          slidesToShow:1,
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

  $('.other-products-slider').slick({
    arrows:false,
    dots:false,
    slidesToShow:4,
    centerMode:false,
    responsive:[
      {
        breakpoint: 800,
        settings: {
          slidesToShow:3
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:2
        }
      }
    ]
  });
  $('.other-img-left').click(function(event) {
    $('.other-products-slider').slick('slickPrev');
  });
  $('.other-img-right').click(function(event) {
    $('.other-products-slider').slick('slickNext');
  });
});

$(function() {
  $('.card-select').selectric({
		forceRenderAbove:true,
	});
});

