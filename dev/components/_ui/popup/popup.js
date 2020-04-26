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

const closePopup = (e, $this) => {
  if(!$(e.target).closest('.popup__window').length || !$this.hasClass('js-popup')) {
    showOverflow();
  
    $this.closest('.js-popup').hide(0);

    // popup slider destroy
    const $slider = $this.find('.js-popup-slider');

    if ($slider.length) {
      $slider.slick('unslick');
    }
	}
};

$('body').on('click', '.js-open-popup', function () {
  const $this = $(this);
  const target = $this.attr('data-popup');
  const $popup = $(`.js-popup[data-popup="${target}"]`);

  hideOverflow();
  
  $popup.fadeIn(300);

  // popup slider init
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
  closePopup(e, $(this));
});

// feedback handling
$('.js-feedback-send').on('click', function (e) {  
  const $this = $(this);
  const $formInputs = $this.parent().find('input[required], textarea[required]');
  let isValid = true;
  $formInputs.map((i, el) => el.value === '' && (isValid = false));
  
  if (isValid) {
    e.preventDefault();
    closePopup(e, $this);
    $formInputs.val('');
    $('.js-feedback-star').removeClass(fullStarClass).addClass(emptyStarClass);
    $('.js-feedback-eval').hide(0);
  }
});

// feedback rating
const fullStarClass = 'popup__feedback-rating-star--full';
const emptyStarClass = 'popup__feedback-rating-star--empty';
const evals = ['ужасно', 'очень плохо', 'плохо', 'хорошо', 'отлично'];

$('.js-feedback-star').on('mouseenter', function () {
  const $this = $(this);

  $this.removeClass(emptyStarClass);
  $this.prevAll().removeClass(emptyStarClass);
  $this.addClass(fullStarClass);
  $this.prevAll().addClass(fullStarClass);
  $this.nextAll().removeClass(fullStarClass);
  $this.nextAll().addClass(emptyStarClass);
});

$('.js-feedback-star').on('click', function () {
  const $this = $(this);
  const updatedRating = $this.attr('data-rating');

  $this.parent().attr('data-rating', updatedRating);
  $('.js-feedback-eval').show(0).find('span').text(evals[updatedRating - 1]);
});

$('.js-feedback-star').on('mouseleave', function () {
  const $this = $(this);
  const rating = $this.parent().attr('data-rating');

  $('.js-feedback-star').map(function () {
    if (+$(this).attr('data-rating') <= +rating) {
      $(this).removeClass(emptyStarClass);
      $(this).addClass(fullStarClass);
    } else {
      $(this).removeClass(fullStarClass);
      $(this).addClass(emptyStarClass);
    }
  });
});