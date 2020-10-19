$(document).ready(function(){

  $('.mini-slider-content').slick({
    arrows:false,
    dots:false,
    slidesToShow:3,
    vertical:true,
    verticalSwiping: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
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
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
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

$('.big-slider-content').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  $('.card-control-img').removeClass('active-color');
  $(".card-control-img[data='color-1']" ).addClass('active-color');
});

$('.card-control-img').click(function(e) {
  $('.card-control-img').removeClass('active-color');
  $(this).addClass('active-color');
  let img = $(".big-slider .slick-active img");
  let imgAttr = img.attr('data-info');
  let color = $(this).attr('data');
  console.log('img/' + `${imgAttr}` + '-grey.png');
  console.log(imgAttr);
  switch(color) {
    case 'color-1':
      img.attr('src','img/' + `${imgAttr}` + '-grey.png');
    break;
    case 'color-2':
     img.attr('src','img/' + `${imgAttr}` + '-green.png');
    break;
    case 'color-3':
      img.attr('src','img/' + `${imgAttr}` + '-black.png');
    break;
    case 'color-4':
      img.attr('src','img/' + `${imgAttr}` + '-pink.png');
    break;
    case 'color-5':
      img.attr('src','img/' + `${imgAttr}` + '-blue.png');
    break; 
    default:
   }  
});

// $(".card-control-img[data='color-1']" ).click(function(e) {
//   console.log('12312321321');
//   $(this).attr($(this));
// });
