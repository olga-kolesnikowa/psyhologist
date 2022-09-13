$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $('.hamburger').toggleClass('is-active');
   });
    $('.hamburger').on('click', function() {
        $('.nav-mobile').toggleClass('is-active');
    });
});