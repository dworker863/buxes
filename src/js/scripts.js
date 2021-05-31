$(document).ready(function () {
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('.menu').slideToggle('slow');
  });
  $('.fa-chevron-right').click(function () {
    $(this).css('opacity', 0.5);
    $(this).prev().css('opacity', 1);
    $(this).closest('.slider').find('.slider__items').css({ transform: 'translateX(-310px)', transition: 'all, 0.5s' });
  });
  $('.fa-chevron-left').click(function () {
    $(this).css('opacity', 0.5);
    $(this).next().css('opacity', 1);
    $(this).closest('.slider').find('.slider__items').css({ transform: 'translateX(0)', transition: 'all, 0.5s' });
  });
});
