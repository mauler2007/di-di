$(function () {



  $(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > 10) {
      $('.header').addClass('header-fixed');
    } else {

      $('.header').removeClass('header-fixed');
    }
  });

  $('.header__select, .select-form__select, .select-form__checkbox').styler();

  $('.tabs__wrapper .tabs__item').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.tabs__wrapper').find('.tabs__content').removeClass('active-tab').hide();
    $('.tabs__wrapper .tabs__top').find('.tabs__item').removeClass('tabs__item--active');
    $(this).addClass('tabs__item--active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.new__wrapper .new__btn').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.new__wrapper').find('.new__content').removeClass('active-tab').hide();
    $('.new__wrapper .new__top').find('.new__btn').removeClass('new__btn--active');
    $(this).addClass('new__btn--active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.new__content').slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    centerPadding: 0,
    prevArrow: '<button class="arrow-prev" type="button"><svg class="new__svg-arrow"><use xlink:href="../../images/sprite.svg#arrow-prev"></use></svg></button>',
    nextArrow: '<button class="arrow-next" type="button"><svg class="new__svg-arrow"><use xlink:href="../../images/sprite.svg#arrow-next"></use></svg></button>',


    responsive: [{
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

  $('.building__button').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('building__button--active');
  });

  $('[data-fancybox="images-preview"]').fancybox({

  });

  $('.partners__inner').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,

    //  arrows: false,
    prevArrow: '<button class="arrow-prev" type="button"><svg class="partners__svg-arrow"><use xlink:href="../../images/sprite.svg#arrow-prev"></use></svg></button>',
    nextArrow: '<button class="arrow-next" type="button"><svg class="partners__svg-arrow"><use xlink:href="../../images/sprite.svg#arrow-next"></use></svg></button>',

    responsive: [{
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.header__action .form-search__btn').on('click', function () {
    $('#header__nav').toggleClass('header__nav--visible');
  });

  function mobileOnlySlider() {
    $(document).ready(function () {
      $('.news__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        touchMove: true,
        dots: false,
        pauseOnHover: false,
        prevArrow: '<button class="arrow-prev" type="button"><svg class="new__svg-arrow"><use xlink:href="../../images/sprite.svg#arrow-prev"></use></svg></button>',
        nextArrow: '<button class="arrow-next" type="button"><svg class="new__svg-arrow"><use xlink:href="../../images/sprite.svg#arrow-next"></use></svg></button>',
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            settings: "unslick"
          }
        }]
      });
    });
  }
  if (window.innerWidth < 768) {
    mobileOnlySlider();
  }
  $(window).resize(function (e) {
    if (window.innerWidth < 768) {
      if (!$('.slider').hasClass('slick-initialized')) {
        mobileOnlySlider();
      }

    } else {
      if ($('.slider').hasClass('slick-initialized')) {
        $('.slider').slick('unslick');
      }
    }
  });
  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.news__item:not(.slick-initialized)').slick({
        // centerMode: true,
        // dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $(".news__item.slick-initialized").slick("unslick");
    }
  });







  $('.user-nav__item--menu').on('click', function (e) {
    e.preventDefault()
    $('.header__inner').toggleClass('header__inner--menu-open');
  });

  // $('.drop-menu').on('click', function () {
  //   $('.drop-menu ul').removeClass('mobile-drop');
  //   $(this).find('ul').addClass('mobile-drop');
  // });

  $('.header__item').on('click', function () {
    $('.header__item').removeClass('mobile-drop');
    $(this).toggleClass('mobile-drop');
  });


  $('.btn-list').on('click', function () {
    $('.week__gallery').toggleClass('week__gallery--list');
    $('.product-card').toggleClass('product-card--list');
  });

  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesToScroll: 1,
    loop: true,


    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3
      },

      992: {
        slidesPerView: 5
      },
    }
  });


  // var stop = $("#someElement").offset().top;
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() <= stop) {
  //     $(window).off("scroll");
  //     $('.count').each(function () {
  //       $(this).prop('Counter', 0).animate({
  //         Counter: $(this).data('value')
  //       }, {
  //         duration: 3000,
  //         easing: 'swing',
  //         step: function (now) {
  //           $(this).text(this.Counter.toFixed());
  //         }
  //       });
  //     });
  //   }
  // });

  // У тебя есть хендлер на эвент scroll, эвент выстреливает каждый раз как пользователь изменит позицию скролла, у тебя есть какие - то данные которые ты можешь сверять, где этот скролл находится, где ты хочешь что - то запустить.Скомпилируй эти данные в голове и сделай.


  $('.filter-aside__title').on('click', function () {
    $(this).toggleClass('filter-aside__title--rotate-triangle');
    $(this).siblings('label').fadeToggle('200', 'linear');
  })

  $(".filter-aside__input-price").ionRangeSlider({

    onChange: function (data) {
      $('.filter-aside__from').text(data.from);
      $('.filter-aside__to').text(data.to);
    },
    onStart: function (data) {
      $('.filter-aside__from').text(data.from);
      $('.filter-aside__to').text(data.to);
    },
  });


  // I did it with a crutch and then I will correct it
  // $('.filter-aside__label').on('click', function (e) {
  //   e.preventDefault();
  // });


});