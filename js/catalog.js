// function range for price filter. 30000 - max value in input rage price.
function range() {
    let val = $('.slider').val();
    $('#demo').html(val)
    let valRes = val*100/30000;
    $('.slider').css({'background': '-webkit-linear-gradient(left ,#CC32A1 0%,#CC32A1 ' + valRes + '%,#C4C4C4 ' + valRes + '%, #C4C4C4 100%)'});
}

// drop-down list
$(document).ready(function(){
    $(".category-list, .filter-wrapper, .filter-1-checkbox-container, .subcategory-list").hide();
    $(".filter-header-name, .filter-header-button, .category-2-name").click(function(){
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

///
/*$(".mob-catalog-sorting-top-img").click(function(){
    if ($(".sidebar-left").css("display") === "none")
        $(".sidebar-left").css({'display':'block','margin-left':'16px', 'transition': 'left 0.3s', 'z-index':'2000'});
    else
        $(".sidebar-left").css({'display':'none'});

});*/
////
$( document ).ready(function(){
    $( ".mob-catalog-sorting-top-img" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
        $( ".sidebar-left" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
    });
});



