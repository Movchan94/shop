$(document).ready(function(){

	$('.showcase-slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:1,
		centerMode:true,
		variableWidth:true,
	});
	$('.showcase-slider-img-left').click(function(event) {
		$('.showcase-slider').slick('slickPrev');
	});
	$('.showcase-slider-img-right').click(function(event) {
		$('.showcase-slider').slick('slickNext');
	});

	$('.main-slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:1,
		centerMode:true,
		variableWidth:true,
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
	$('.mslider-img-left').click(function(event) {
		$('.main-slider').slick('slickPrev');
	});
	$('.mslider-img-right').click(function(event) {
		$('.main-slider').slick('slickNext');
	});

	$('.newest-slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:4,
		centerMode:false,
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
	$('.brand-slider-img-left').click(function(event) {
		$('.brand-slider').slick('slickPrev');
	});
	$('.brand-slider-img-right').click(function(event) {
		$('.brand-slider').slick('slickNext');
	});
});

$('.search-icon').click(function(event) {
	$('.header-top-menu').addClass( "hide" );
	$('.header-search').removeClass( "hide" );
});

$('.close-search').click(function(event) {
	$('.header-search').addClass( "hide" );
	$('.header-top-menu').removeClass( "hide" );
});


$( ".more-categories" ).click(function(event) {
	event.preventDefault();
  $('.more-categories-items').toggleClass( "hide" ).focus();
});

$('.more-categories-items').on('focusout', function () {
  $(this).addClass('hide');
});

$(document).mouseup(function (e) {
	var div = $('.more-categories-items');
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.more-categories-items').addClass('hide');
	}
});

$(function() {
  $('.card-select').selectric({
		forceRenderAbove:true,
	});
});

