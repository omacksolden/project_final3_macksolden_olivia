$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});
//This jQuery plugin creates an image slider on index

$(function ($) {
    $('.page').fixedBG();
});
//This jQuery plugin will allow the background image to be fixed

$(document).ready(function () {
    $('.pic').hover(
    function () {
        $('.hoverpic').animate({'top': '-=200px' }, 'slow');
    },
    function () {
        $('.hoverpic').animate({'top': '+=200px' }, 'slow');
    });
});
//This custom jQuery code causes an image to slide over another on hover

var element = document.getElementById('menu');
element.innerHTML = 'MENU';
// This custom javascript code will change the h1 on the menu page to MENU
