// count total cart price
const $queryAmount = $('.js-query-amount');
const queryAmountSet = $queryAmount.length && JSON.parse($queryAmount.attr('data-set'));
let queryAmount = 0;
let totalCartPrice = 0;

const cartTotalPriceCalculate = () => {
  $('.js-cart-item').each((i, el) => {
    const itemCount = +$(el).find('.js-cart-amount').val();
    const itemPrice = +$(el).find('.radio--checked input').val();

    queryAmount += itemCount;
    totalCartPrice += itemCount * itemPrice;
  });

  $('.js-cart-total, .js-query-sum').text(totalCartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
  $queryAmount.text(queryAmountSet.decline(queryAmount, true));

  queryAmount = 0;
  totalCartPrice = 0;
};

$('.js-cart-item').length && cartTotalPriceCalculate();

$('.js-cart-amount').on('change', cartTotalPriceCalculate);

$('.js-cart-radio').on('change', cartTotalPriceCalculate);

// delete cart item
$('.js-cart-del').on('click', function () {
  const $cartItem = $(this).closest('.js-cart-item');
  $cartItem.fadeOut(500);
  setTimeout(() => {
    $cartItem.remove();
    cartTotalPriceCalculate();
  }, 500);
});

// send query handler
$('.js-query-send').on('click', function (e) {
  const $this = $(this);
  const $successPopup = $(`.js-popup[data-popup="success"]`);
  const $formInputs = $this.parent().find('input[required], textarea[required]');
  const isValid = emptyInputsValidation($formInputs);
  
  if (isValid) {
    e.preventDefault();
    closePopup(e, $this);
    $formInputs.val('');
    openPopup($successPopup);
  }
});