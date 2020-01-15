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
  $('.js-search-toggler').click(function (e) { 
    e.preventDefault();
    $('.header-search__wrapper').addClass('is-open');
    $('.page-mask').addClass('is-visible');
  });

  $('.js-search-close, .js-page-mask').click(function (e) { 
    e.preventDefault();
    $('.header-search__wrapper').removeClass('is-open');
    $('.page-mask').removeClass('is-visible');
  });
})(jQuery);