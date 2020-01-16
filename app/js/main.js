/* eslint-disable */

/**
 * #SVG4EVERYBODY
 */
(function ($) {
  svg4everybody({});
})(jQuery);


/**
 * #HEADER SCROLL
 */
/*
(function ($) {
  $(window).scroll(function(){
    let offsetY = $(window).scrollTop();

    if ( offsetY > 100) {
      $('.header').addClass('is-scrolled');
      $('.o-main-content').addClass('is-header-scrolled');
    } else if ( offsetY < 100) {
      $('.header').removeClass('is-scrolled');
      $('.o-main-content').removeClass('is-header-scrolled');
    }
  });
})(jQuery);
*/

/**
 * #MENU
 */
(function ($) {
  $('.js-menu-toggler').click(function (e) { 
    e.preventDefault();
    $('.mobile-nav').toggleClass('is-open');
    $('.page-mask').toggleClass('is-visible');
    $('body').toggleClass('is-nav-mobile-open');
  });

  $('.js-mobile-nav-close, .js-page-mask').click(function (e) { 
    e.preventDefault();
    $('.mobile-nav').removeClass('is-open');
    $('.page-mask').removeClass('is-visible');
    $('body').removeClass('is-nav-mobile-open');
  });
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
  });

  // Clients slider
  $('.js-clients-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    prevArrow: $('.js-clients-controls [class*=prev]'),
    nextArrow: $('.js-clients-controls [class*=next]'),
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
    ]
  });

  // Team slider
  $('.js-team-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    mobileFirst: true,
    prevArrow: $('.js-team-controls [class*=prev]'),
    nextArrow: $('.js-team-controls [class*=next]'),
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
    ]
  });

  $(window).on('resize', function() {
    $('.js-clients-slider, .js-team-slider').slick('resize');
});

})(jQuery);


/**
 * #SEARCH FORM
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