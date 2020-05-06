// tabs handling
$('.js-tab').on('click', function (e) {
  e.preventDefault();

  const $this = $(this);

  $('.js-tab[data-active]').removeAttr('data-active');
  $this.attr('data-active', '');

  $('.js-tab-content').hide(0);
  $this.parent().parent().find(`.js-tab-content[data-tab="${$this.attr('data-tab')}"]`).fadeIn(300);
});