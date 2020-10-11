$(document).ready(function(){

  $('.mini-slider-content').slick({
    arrows:false,
    dots:false,
    slidesToShow:3,
    vertical:true,
    verticalSwiping: true,
    asNavFor:'.big-slider-content',
    responsive:[
      {
        breakpoint: 800,
        settings: {
          slidesToShow:3,
          vertical:false,
          verticalSwiping: false,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1,
          vertical:false
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
    swipeToSlide:true,
    verticalSwiping: true,
    asNavFor:'.mini-slider-content',
    responsive:[
      {
        breakpoint: 800,
        settings: {
          slidesToShow:1,
          vertical:false,
          verticalSwiping:false,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1,
          vertical:false
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
        breakpoint: 1400,
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

$("#product-info-btn-feedback").click(function(){
  $('.feedback-container').css({'display':'block'});
  $('#description').css({'display':'none'});
});

$("#product-info-btn-description").click(function(){
  $('.feedback-container').css({'display':'none'});
  $('#description').css({'display':'block'});
});

