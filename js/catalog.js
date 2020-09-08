// function range for price filter. 30000 - max value in input rage price.
function range() {
    let val = $('.slider').val();
    $('#demo').html(val)
    let valRes = val*100/30000;
    $('.slider').css({'background': '-webkit-linear-gradient(left ,#CC32A1 0%,#CC32A1 ' + valRes + '%,#C4C4C4 ' + valRes + '%, #C4C4C4 100%)'});
}

// drop-down list
$(document).ready(function(){
    $(".category-list, .filter-wrapper, .filter-1-checkbox-container").hide();
    $(".filter-header-name, .filter-header-button").click(function(){
        $(this).parent().next().slideToggle();
    });
});

//change arrow in filter on click - category
$("#category-header-button, #category-header-name").click(function(){
    if ($("#category-header-button-img").attr("src") === "img/svg/category-vector-1.svg")
        $("#category-header-button-img").attr("src", "img/svg/filter-vector-2.svg");
    else
        $("#category-header-button-img").attr("src", "img/svg/category-vector-1.svg");

});

//change arrow in filter on click - price
$("#price-header-button, #price-header-name").click(function(){
    if ($("#price-header-button-img").attr("src") === "img/svg/category-vector-1.svg")
        $("#price-header-button-img").attr("src", "img/svg/filter-vector-2.svg");
    else
        $("#price-header-button-img").attr("src", "img/svg/category-vector-1.svg");

});

//change arrow in filter on click - filter-1
$("#filter-1-header-button, #filter-1-header-name").click(function(){
    if ($("#filter-1-header-button-img").attr("src") === "img/svg/category-vector-1.svg")
        $("#filter-1-header-button-img").attr("src", "img/svg/filter-vector-2.svg");
    else
        $("#filter-1-header-button-img").attr("src", "img/svg/category-vector-1.svg");

});




