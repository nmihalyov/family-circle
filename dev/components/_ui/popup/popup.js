// popup handling  
let topOffset = 0;

const hideOverflow = () => {
  topOffset = window.scrollY;

  $('body').css({
    position: 'fixed',
    marginTop: `${-topOffset}px`
  });
};

const showOverflow = () => {
  $('body').css({
    position: 'static',
    marginTop: '0'
  });

  window.scrollTo(0, topOffset);
};

$('body').on('click', '.js-open-popup', function () {
  const $this = $(this);
  const target = $this.attr('data-popup');
  const $popup = $(`.js-popup[data-popup="${target}"]`);

  hideOverflow();
  
  $popup.fadeIn(300);

  // popup slider
  const $slider = $popup.find('.js-popup-slider');

  if ($slider.length && !$slider.hasClass('slick-initialized')) {
    $slider.slick({
      swipe: false,
      prevArrow: '<button class="popup__item-slider-arrow popup__item-slider-arrow--prev"></button>',
      nextArrow: '<button class="popup__item-slider-arrow popup__item-slider-arrow--next"></button>',
      dots: true,
      dotsClass: 'popup__item-slider-dots',
      customPaging: () => ''
    });
  }
});

$('.js-close-popup').on('click', function (e) {
  const $this = $(this);

  if(!$(e.target).closest('.popup__window').length) {
    showOverflow();
  
    $this.closest('.js-popup').hide(0);
	}
});