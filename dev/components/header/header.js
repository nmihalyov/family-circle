// dropdown handling
$('.js-dropdown-button').on('click', function () {
  $(this).next('.js-dropdown-menu').slideToggle(300);
});

$(document).on('click', e => {
	if(!$(e.target).closest('.header__nav-dropdown').length) {
		$('.js-dropdown-menu').slideUp(300);
	}
});

// search hint handling
$('.js-header-search').on('focus', function () {
  $(this).next('.js-header-search-hint').slideDown(300);
});

$(document).on('click', e => {
  if(!$(e.target).closest('.header__search-label').length) {
    $('.js-header-search-hint').slideUp(300);
  }
});