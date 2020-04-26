// tabs handling
$('.js-tab').on('click', function (e) {
  e.preventDefault();

  const $this = $(this);

  $('.tabs__item--active').removeClass('tabs__item--active');
  $this.addClass('tabs__item--active');

  $('.js-tab-content').hide(0);
  $this.parent().parent().find(`.js-tab-content[data-tab="${$this.attr('data-tab')}"]`).fadeIn(300);
});