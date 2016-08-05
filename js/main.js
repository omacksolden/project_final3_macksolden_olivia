$(function ($) {
    $('.page').fixedBG();
});

var element = document.getElementById('menu');
element.innerHTML = 'MENU';


$(document).ready(function () {
    $('.pic').hover(
    function () {
        $('.hoverpic').animate({'top': '-=200px' }, 'slow');
    },
    function () {
        $('.hoverpic').animate({'top': '+=200px' }, 'slow');
    });
});
