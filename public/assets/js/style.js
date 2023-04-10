// INITIALIZE AOS
AOS.init();
// END INITIALIZE AOS

$(document).ready(function () {

    // Scroll Fixed Header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    $('.navbar-toggler').click(function () {
        $('.header').toggleClass('active');
    });

    // Click To active Mene 
    // $('#navbarToggler .navbar-nav li').on('click', function () {
    //     $('.navbar-nav li.active').removeClass('active');
    //     $(this).addClass('active');
    // });

    // slick slider
    $('.management-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            }
        ]
    });

    // Scroll Down Active Mene Js
    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 0) {
            $('section').each(function (i) {
                if ($(this).position().top <= windscroll + 60) {
                    $('#navbarToggler .navbar-nav li.active').removeClass('active');
                    $('#navbarToggler .navbar-nav li').eq(i).addClass('active');
                }
            });

        } else {

            $('#navbarToggler .navbar-nav li.active').removeClass('active');
            $('#navbarToggler .navbar-nav li:first').addClass('active');
        }

    }).scroll();

});

$(document).ready(function () {
    $("#navbarbtn").click(function(){
        $("#navbarbtn").toggleClass("iso-active");
      });
});