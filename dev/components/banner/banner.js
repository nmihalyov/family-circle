// banner slider
$('.js-banner-slider').slick({
  infinite: true,
  dots: true,
  swipe: false,
  prevArrow: '<button class="banner__arrow banner__arrow--prev"></button>',
  nextArrow: '<button class="banner__arrow banner__arrow--next"></button>',
  dotsClass: 'banner__dots',
  customPaging: () => ''
});