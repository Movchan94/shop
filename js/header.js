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

$( ".hamburger-btn" ).click(function(e) {
	e.preventDefault();
	$('.hamburger-btn').toggleClass( "change" );
	$('.mobile-bacckground').toggleClass( "hide" );
	$('.header').toggleClass( "white" );
	$('body').toggleClass( "lock" );
	$('.header-top').toggleClass("transform");
});

if ($('body').width() < 801) {
	$('.header-top li').mouseup(function (e) {
		$( ".hamburger-btn" ).click();
	});
}

console.log($('body').width());

$(document).mouseup(function (e) {
	if (
		$(e.target).closest('.header-top').length == 0 &&
		$('.header-top').hasClass('transform') &&
		$(e.target).closest('.hamburger-btn').length == 0
	){
		$( ".hamburger-btn" ).click();
	}
});

$('.categories-list-item').mouseup(function (e) {
	e.stopPropagation();
	$(e.target).next('ul').slideToggle();
	var open = $(e.target).find('.category-btn').html();
	if (open === '+') {
		$(e.target).find('.category-btn').text('-');
		$(e.target).find('.category-btn').css('color', '#CC32A1');
	} else {
		$(e.target).find('.category-btn').text('+');
		$(e.target).find('.category-btn').css('color', '#1A1A1A');
	}
});

$('.categories').click(function (e) {
	$('.categories-list-item').find('.category-btn').text('+');
	$('.categories-list-item').find('.category-btn').css('color', '#1A1A1A');
	$('.mobile-categories .wrapper').slideToggle().toggleClass('open');
	$('.category').hide();
	$('.mobile-bacckground').toggleClass( "hide" );
	$('body').toggleClass( "lock" );
	$('.category-header-btn').toggleClass( 'rotate' );
});

$('.category-sub').click(function (e) {
	$( ".categories" ).click();
});

$(document).mouseup(function (e) {
	if (
		$(e.target).closest('.mobile-categories .wrapper').length == 0 &&
		$('.mobile-categories .wrapper').hasClass('open') &&
		$(e.target).closest('.categories').length == 0
	){
		$( ".categories" ).click();
	}
});