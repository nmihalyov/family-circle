// add/remove cart item
$('.js-cart-add').on('click', function (e) {
  e.preventDefault();

  $(this).hide(0);
  $(this).parent().find('.js-cart-remove').show(0);
});

$('.js-cart-remove').on('click', function (e) {
  e.preventDefault();

  $(this).hide(0);
  $(this).parent().find('.js-cart-add').show(0);
});