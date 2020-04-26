// item slider
$('.js-item-slider').slick({
  swipe: false,
  prevArrow: '<button class="item__slider-arrow item__slider-arrow--prev"></button>',
  nextArrow: '<button class="item__slider-arrow item__slider-arrow--next"></button>',
  dots: true,
  dotsClass: 'item__slider-dots',
  customPaging: () => ''
});

// items counter
const updateItemCounter = val => $('.js-count-value').text(+$('.js-count-value').text() + val);

$('.js-count-remove').on('click', function(e) {
  e.preventDefault();

  if (+$('.js-count-value').text() !== 1) {
    updateItemCounter(-1);
  }
});

$('.js-count-add').on('click', function(e) {
  e.preventDefault();

  updateItemCounter(1);
});

// toggle options
$('.js-item-option').on('click', function () {
  const $this = $(this);

  $('.item__option--current').removeClass('item__option--current');
  $this.addClass('item__option--current');
  
  $('.item__price--current').removeClass('item__price--current');
  $(`.js-price[data-option="${$this.attr('data-option')}"]`).addClass('item__price--current');
});