$(function ($) {
    $('.page').fixedBG();
});

// document.getElementById("menu").innerHTML = "New text!";


$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});


$(document).ready(function () {
    $('.pic').hover(
    function () {
        $('.hoverpic').animate({'top': '-=200px' }, 'slow');
    },
    function () {
        $('.hoverpic').animate({'top': '+=200px' }, 'slow');
    });
});
