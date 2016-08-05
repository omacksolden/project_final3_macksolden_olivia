$(function ($) {
    $('.page').fixedBG();
});

document.getElementById("menu").innerHTML = 'MENU';


$(document).ready(function () {
    $('.pic').hover(
    function () {
        $('.hoverpic').animate({'top': '-=200px' }, 'slow');
    },
    function () {
        $('.hoverpic').animate({'top': '+=200px' }, 'slow');
    });
});
