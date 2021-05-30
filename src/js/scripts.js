$(document).ready(function () {
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('.menu').slideToggle('slow');
  });
  $('.fa-chevron-right').click(function () {
    $(this).css('opacity', 0.5);
    $('.fa-chevron-left').css('opacity', 1);
    $('.slider__items').css({ transform: 'translateX(-310px)', transition: 'all, 0.5s' });
  });
  $('.fa-chevron-left').click(function () {
    $(this).css('opacity', 0.5);
    $('.fa-chevron-right').css('opacity', 1);
    $('.slider__items').css({ transform: 'translateX(0)', transition: 'all, 0.5s' });
  });
});
