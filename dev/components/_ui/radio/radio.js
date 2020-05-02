// radio button handling
$('.js-radio').on('click', function () {
  const $this = $(this);
  const name = $this.find('input').attr('name');

  $(`.radio__input[name="${name}"]`).parent().removeClass('radio--checked');
  $this.addClass('radio--checked');
});