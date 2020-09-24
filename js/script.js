$(document).ready(function(){
	// $('.promo-block').css('opacity', '1');

	$('.showcase-slider').slick({
		arrows:false,
		dots:false,
		fade: true,
		speed: 1000,
		cssEase: 'linear',
	});
	$('.showcase-slider-img-left').click(function(event) {
		$('.showcase-slider').slick('slickPrev');
	});
	$('.showcase-slider-img-right').click(function(event) {
		$('.showcase-slider').slick('slickNext');
	});
	$('.showcase-slider').on('init', function(event, slick, currentSlide, nextSlide) {
		$('.promo-block').css('opacity', '1');
	});
	$('.showcase-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.promo-block').css('opacity', '0');
	});
	$('.showcase-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
		// $('.promo-block').css('display', 'flex');
		$('.promo-block').css('opacity', '1');
	});

	$('.main-slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:1,
		centerMode:true,
		variableWidth:true,
	});
	$('.mslider-img-left').click(function(event) {
		$('.main-slider').slick('slickPrev');
	});
	$('.mslider-img-right').click(function(event) {
		$('.main-slider').slick('slickNext');
	});

	var prevName = $('.mslider .slick-center').not('.slick-cloned').next().find('.side-name').text();
	var nextName = $('.mslider .slick-center').not('.slick-cloned').prev().find('.side-name').text();
	$('.slide-name-prev').text(nextName);
	$('.slide-name-next').text(prevName);
	
	$('.mslider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
		var prevName = $('.mslider .slick-current').not('.slick-cloned').next().find('.side-name').text();
		var nextName = $('.mslider .slick-current').not('.slick-cloned').prev().find('.side-name').text();
		$('.slide-name-prev').text(nextName);
		$('.slide-name-next').text(prevName);
	});



	$('.newest-slider').slick({
    arrows:false,
    dots:false,
    slidesToShow:4,
    centerMode:false,
    responsive:[
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3
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
  $('.newest-img-left').click(function(event) {
    $('.newest-slider').slick('slickPrev');
  });
  $('.newest-img-right').click(function(event) {
    $('.newest-slider').slick('slickNext');
  });

	$('.sales-slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:4,
		centerMode:false,
		responsive:[
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3
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
	$('.sales-img-left').click(function(event) {
		$('.sales-slider').slick('slickPrev');
	});
	$('.sales-img-right').click(function(event) {
		$('.sales-slider').slick('slickNext');
	});

	$('.brand-slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:5,
		centerMode:false,
		responsive:[
			{
				breakpoint: 800,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:3
				}
			}
		]
	});
	$('.brand-slider-img-left').click(function(event) {
		$('.brand-slider').slick('slickPrev');
	});
	$('.brand-slider-img-right').click(function(event) {
		$('.brand-slider').slick('slickNext');
	});
});

$(function() {
  $('.card-select').selectric({
		forceRenderAbove:true,
	});
});

