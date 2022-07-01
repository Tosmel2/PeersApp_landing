/*---------------------------------------

Project: APPYOU  App Landing Page
TemplateVersion: 2.0
Author: YasirKareem

01. Loading Overlay
02. Navbar
03. Navbar Toggle
03. Scrollspy
04. Owl Carousel
05. Scroll Top 

---------------------------------------*/

// Loading Overlay
$(window).on('load', function () {
    'use strict';
    $(".loading-overlay").fadeOut(1000);
});
$(function () {
    'use strict';
    
    // Navbar
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    
     // Navbar Toggle
    $('.navbar-toggle').on('click', function () {
        $('.navbar-toggle').toggleClass('change');
    });
    
    // Scrollspy
    $('body').scrollspy({target: ".navbar", offset: 50});
   $("#menuicon a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
    
    // Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    //Scroll Top 
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    scrollButton.on('click', function () {
        $("html,body").animate({scrollTop: 0}, 2000);
    });
});