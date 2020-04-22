// sorting handling
$('.js-sorting-type').on('click', function () {
  $('.sorting__type-item--current').removeClass('sorting__type-item--current');
  $(this).addClass('sorting__type-item--current');
});