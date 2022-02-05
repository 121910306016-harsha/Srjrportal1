$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });

    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }


        });

    });

}); 
$(document).ready(function () {
 
    'use strict';
 
    var slide  = $('.slide'),
        slideAelements = $('.slide-a-child'),
        slideBelements = $('.slide-b-child'),
        slideCelements = $('.slide-c-child'),
        slideDelements = $('.slide-d-child'),
        replay = $('button.replay');
 
 
 
    slide.each(function (i) {
        if (i < 3) {
            setTimeout(function () {
                slide.eq(i).fadeOut();
            }, 5000 * (i + 1));
        }
    });
 
 
    function animateSlideA() {
      slideAelements.each(function (i) {
          setTimeout(function () {
              slideAelements.eq(i).addClass('is-visible');
          }, 300 * (i + 1));
      });
    }
 
    function animateSlideB() {
      slideBelements.each(function (i) {
          setTimeout(function () {
              slideBelements.eq(i).addClass('is-visible');
          }, 300 * (i + 1));
      });
   }
 
     function animateSlideC() {
      slideCelements.each(function (i) {
          setTimeout(function () {
              slideCelements.eq(i).addClass('is-visible');
          }, 150 * (i + 1));
      });
    }
 
    function animateSlideD() {
      slideDelements.each(function (i) {
          setTimeout(function () {
              slideDelements.eq(i).addClass('is-visible');
          }, 300 * (i + 1));
      });
    }
 
    animateSlideA();
 
    setTimeout(function () {
       animateSlideB();
    }, 5000);
 
    setTimeout(function () {
       animateSlideC();
    }, 10000);
 
    setTimeout(function () {
       animateSlideD();
    }, 15000);