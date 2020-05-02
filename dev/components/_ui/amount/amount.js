// items counter
const updateItemCounter = (val, $input) => $input.val(+$input.val() + val).trigger('change');

$('.js-amount-remove').on('click', function(e) {
  e.preventDefault();
  const $input = $(this).parent().find('.js-amount-value');
  
  if (+$input.val() !== 1) {
    updateItemCounter(-1, $input);
  }
});

$('.js-amount-add').on('click', function(e) {
  e.preventDefault();
  const $input = $(this).parent().find('.js-amount-value');

  updateItemCounter(1, $input);
});