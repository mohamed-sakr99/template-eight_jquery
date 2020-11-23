$(document).ready(function(){
    //adjust header height
    $('.header').height($(window).height());

    $(window).resize(function(){
        $('.header').height($(window).height()); 
    });
    
    //trigger venobox library
    $('.venobox').venobox(); 
    
    //change color of navbar depend on scrolling
    $(window).scroll(function(){
        if($(window).scrollTop() >= 100){
            $('nav').css({
                'backgroundColor': '#0E1B4D',
                'padding':'5px 0'
            })
        }else {
            $('nav').css({
                'backgroundColor':'transparent',
                'padding':'15px 0'
            })
        }
    });
    if($(window).scrollTop() >= 100){
        $('nav').css({
            'backgroundColor': '#0E1B4D',
            'padding':'5px 0'
        })
    }else {
        $('nav').css({
            'backgroundColor':'transparent',
            'padding':'15px 0'
        })
    }

    //testimonoials shuffle
    $('.testimonials .buttons .btn').on('click', function(e){
        e.preventDefault();
        //add class active to a and remove from siblings
        $(this).addClass('active').siblings().removeClass('active');
        //start shuffle
        var stuffID = $('#' + $(this).data('click'));
       stuffID.siblings().fadeOut(200, function(){
       stuffID.removeClass('active');
        })
       stuffID.delay(200).fadeIn(200, function(){
       stuffID.addClass('active');   
        });
    });

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
       dots:true,
       margin:5,
       center:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    //faq
   $('.faq .content .list .info i').on('click', function(){
       $(this).parent().parent().find('p').slideToggle(300);

       if($(this).hasClass('fa fa-plus-circle')) {
           $(this).attr('class','fas fa-minus-circle');
           $(this).css('color', '#f8234a');
           $(this).siblings().css('color','#f8234a')
       }else {
           $(this).attr('class', 'fa fa-plus-circle');
           $(this).css('color', '#000');
           $(this).siblings().css('color', '#000');
       }
   })
    
   //smotth scroll
   $('nav li a').click(function(){
       $('html, body').animate({
           scrollTop: $('#' + $(this).data('scroll')).offset().top -86
       },1000)
   });

   //button scroll to top
   $(window).scroll(function(){
       if($(window).scrollTop()>=1000) {
           $('.up').fadeIn(400)
       }else{
           $('.up').fadeOut(400);
       }
   })

   $('.up').click(function(){
       $('html, body').animate({
           scrollTop: 0
       },1000)
   });

   //loading page
   $(window).on('load', function(){
       $('.loading').fadeOut(800, function(){
           $('body').css('overflow','auto')
       })
   })
   $(function(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
   });
   //add nicescroll
   $("body").niceScroll({
    cursorcolor: "#0078fe",
    zindex:"999999"
   });
})
