/* Import libraties */
//= vendors/jquery-3.3.1.js
//= vendors/aos.js
//= vendors/slick.js
//= vendors/jquery.onepage-scroll.js

$(function() {
    // Init animate on scroll
    AOS.init({
        disable: function () {
            var maxWidth = 992;
            return window.innerWidth < maxWidth;
        }
    });

    video.addEventListener('click', playControl,false);

    function playControl() {
        $('#video').toggleClass('video-play');
        if(video.paused == false) { 
            video.pause(); 
        } else { 
            video.play(); 
        }
    }

    if(!$('body').hasClass('no-one-page-effect')) {
        checkBgColorOfSection(0);

        $(".screens-wraper").onepage_scroll({
            sectionContainer: ".screen",     // sectionContainer accepts any kind of selector in case you don't want to use section
            easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                             // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
            animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
            pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
            updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
            beforeMove: function(index) {
                $('.header, .footer').addClass('on-scroll');
    
            },  // This option accepts a callback function. The function will be called before the page moves.
            afterMove: function(index) {
                $('.screen[data-index='+index+'] .aos-init').addClass('aos-animate');
                checkBgColorOfSection(index);
                $('.header, .footer').removeClass('on-scroll');
            },   // This option accepts a callback function. The function will be called after the page moves.
            loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
            keyboard: true,                  // You can activate the keyboard controls
            responsiveFallback: 992,        // You can fallback to normal page scroll by defining the width of the browser in which
                                             // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                             // the browser's width is less than 600, the fallback will kick in.
            direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
        });

        if($('section[data-index="1"]').hasClass('screen--dark')) {
            $('.header').addClass('header--dark');
            $('.footer').addClass('footer--dark');
        } else {
            $('.header').removeClass('header--dark');
            $('.footer').removeClass('footer--dark');
        }
    }



    function checkBgColorOfSection(index) {
        if($('.screen[data-index='+index+']').hasClass('screen--dark')) {
            $('.img-white').hide();
            $('.img-dark').show();
            $('.header, .footer').addClass('on-dark-screen');
        } else {
            $('.img-white').show();
            $('.img-dark').hide();
            $('.header, .footer').removeClass('on-dark-screen');
        }
    }

    $('[data-js="burger-btn"]').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('clicked');
        $('.main-menu, .onepage-pagination, .footer').fadeToggle(300);
        if($(this).hasClass('clicked')) {
            $('.logo, .contacts-list').css('opacity', '0');
        } else {
            $('.logo, .contacts-list').css('opacity', '1');
        }
    });

    $('[data-js="services-slider"]').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<a href="#" class="services-arr services-arr-prev">',
        nextArrow: '<a href="#" class="services-arr services-arr-next">'
    });

    $('[data-js="slider-row"]').css({
        'height': $('.screen').height() - $('.section-title').outerHeight() - $('.header').outerHeight() - $('.footer').outerHeight() - 50
    });

    $('[data-js="team-slider"]').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<a href="#" class="team-arr team-arr-prev">',
        nextArrow: '<a href="#" class="team-arr team-arr-next">',
        infinite: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('[data-js="product-slider"]').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<a href="#" class="product-arr product-arr-prev">',
        nextArrow: '<a href="#" class="product-arr product-arr-next">',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('[data-js="partner-slider"]').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<a href="#" class="partner-arr partner-arr-prev">',
        nextArrow: '<a href="#" class="partner-arr partner-arr-next">',
        responsive: [
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('[data-js="middle-row"]').css({
        'height': $(window).height() - $('.section-title').outerHeight() - $('.header').outerHeight() - $('.footer').outerHeight() - 50
    });

    $('[data-js="bg-circle"]').each(function() {
        $(this).width($(this).height());
    });

    function sectionPaddings() {
        if($(window).width() > 992) {
            $('.screen').css({
                'padding-top': $('.header').outerHeight(),
                'padding-bottom': $('.footer').outerHeight()
            });
        }
    }

    // Popup
    $('.product-wraper').on('click', function(e) {
        e.preventDefault();
        $('#'+$(this).attr('href')).fadeIn().css('display', 'flex');
    });

    $('.close-popup').on('click', function(e) {
        e.preventDefault();
        $('.popup').fadeOut().removeAttr('style');
    })

    sectionPaddings();
    $(window).on('resize', function() {
        sectionPaddings();
        $('[data-js="middle-row"]').css({
            'height': $('.screen').height() - $('.section-title').outerHeight() - $('.header').outerHeight() - $('.footer').outerHeight() - 50
        });
        $('[data-js="bg-circle"]').each(function() {
            $(this).width($(this).height());
        });
        $('[data-js="middle-row"]').css({
            'height': $(window).height() - $('.section-title').outerHeight() - $('.header').outerHeight() - $('.footer').outerHeight() - 50
        });
        $('[data-js="bg-circle"]').each(function() {
            $(this).width($(this).height());
        });
    });
});
