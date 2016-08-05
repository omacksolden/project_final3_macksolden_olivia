$(function ($) {
    $('.page').fixedBG();
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

var element = document.getElementById('menu');
element.innerHTML = 'MENU';
