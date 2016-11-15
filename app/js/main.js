"use script"

$(window).on('load', function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(100).css({'overflow': 'visible'});
})

new WOW().init();

$(function(){
    $(".main-title").typed({
        strings: ["^1000 Front-end ^1000 developer."],
        typeSpeed: 20
    });
});