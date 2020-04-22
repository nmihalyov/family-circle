// filters handling
$('.js-filter').on('click', function () {
  $(this).toggleClass('filters__item-head--active').parent().find('.filters__item-content').slideToggle(300);
});

$('.js-more').on('click', function (e) {
  e.preventDefault();
  $(this).hide().parent().find('.filters__item-unit--hidden').removeClass('filters__item-unit--hidden');
});