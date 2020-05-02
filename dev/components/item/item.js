// item slider
$('.js-item-slider').slick({
  swipe: false,
  prevArrow: '<button class="item__slider-arrow item__slider-arrow--prev"></button>',
  nextArrow: '<button class="item__slider-arrow item__slider-arrow--next"></button>',
  dots: true,
  dotsClass: 'item__slider-dots',
  customPaging: () => ''
});

// toggle options
$('.js-item-option').on('click', function () {
  const $this = $(this);

  $('.item__option--current').removeClass('item__option--current');
  $this.addClass('item__option--current');
  
  $('.item__price--current').removeClass('item__price--current');
  $(`.js-price[data-option="${$this.attr('data-option')}"]`).addClass('item__price--current');
});