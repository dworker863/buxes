$(document).ready(function () {
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('.menu').slideToggle('slow');
    $('.menu').css('position', 'fixed');
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

  $('a').click(function () {
    event.preventDefault();
  });

  $('a').click(function () {
    let elem = $($(this).attr('href'));
    $('a').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({ scrollTop: elem.offset().top - 78 }, 'slow');
  });

  $(window).scroll(function () {
    console.log($('#russian').offset().top);
    console.log($(window).scrollTop());
    if ($(window).scrollTop() + document.documentElement.clientHeight == document.documentElement.scrollHeight) {
      $('a').removeClass('active');
      $('a[href="#captcha"]').addClass('active');
    } else if ($(window).scrollTop() >= $('#mining').offset().top) {
      $('a').removeClass('active');
      $('a[href="#mining"]').addClass('active');
    } else if ($(window).scrollTop() >= $('#foreign').offset().top) {
      $('a').removeClass('active');
      $('a[href="#foreign"]').addClass('active');
    } else {
      $('a').removeClass('active');
      $('a[href="#russian"]').addClass('active');
    }
  });
});
