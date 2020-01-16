/* eslint-disable */

/**
 * #SVG4EVERYBODY
 */
(function ($) {
  svg4everybody({});
})(jQuery);


/**
 * #SLIDERS
 */
(function ($) {
  // Clients slider
  $('.top-banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    mobileFirst: true,
    dots: true,
    prevArrow: $('.js-top-banner-controls [class*=prev]'),
    nextArrow: $('.js-top-banner-controls [class*=next]'),
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   },
    // ]
  });

  // Clients slider
  $('.js-clients-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    prevArrow: $('.js-clients-controls [class*=prev]'),
    nextArrow: $('.js-clients-controls [class*=next]'),
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   },
    // ]
  });

  // Team slider
  $('.js-team-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    mobileFirst: true,
    prevArrow: $('.js-team-controls [class*=prev]'),
    nextArrow: $('.js-team-controls [class*=next]'),
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   },
    // ]
  });

  $(window).on('resize', function() {
    $('.top-banner-slider, .js-clients-slider, .js-team-slider').slick('resize');
});

})(jQuery);


/**
 * #TOGGLE SEARCH FORM
 */
(function ($) {
  function hideSearch() {
    $('.header-search').removeClass('is-open');
    $('.js-search-toggler').prop('hidden', false);
  }

  $('.js-search-toggler').click(function (e) { 
    e.preventDefault();
    $('.header-search')
      .addClass('is-open')
      .find('.header-search__input').focus();
    $(this).prop('hidden', true);
  });

  $('.header-search__input').focusout(function (e) {
    hideSearch();
  });

  $('.js-search-close').click(function (e) { 
    e.preventDefault();
    hideSearch();
  });
})(jQuery);