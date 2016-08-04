$(function ($) {
    $('.page').fixedBG();
});

// var selectedElement = document.getElementById( 'menucontainer' );
// var newDOMElement = document.createElement( 'h1' );
//
// newDOMElement.innerHTML = 'Come See Us!';
//
// selectedElement.appendChild( newDOMElement );


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});



$(document).ready(function() {
    $('.pic').hover(
    function () {
        $('.hoverpic').animate({ "top": "-=200px" }, "slow" );
    },
    function () {
        $('.hoverpic').animate({ "top": "+=200px" }, "slow" );
    });
});
