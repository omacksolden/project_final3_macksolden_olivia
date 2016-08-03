$(function ($) {
    $('.page').fixedBG();
});

var selectedElement = document.getElementById( 'menucontainer' );
var newDOMElement = document.createElement( 'h1' );

newDOMElement.innerHTML = 'MENU';

selectedElement.prepend( newDOMElement );
