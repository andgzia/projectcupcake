//  $(document).ready(function(){
//  $('#sliderhome3').bxSlider({
 //   slideWidth:200,
   // minSlides: 2,
    // maxSlides: 3,
    // slideMargin: 10
  //});
// }); 



(function($){

        // Slidder home 3
        if($('#sliderhome3').length >0){
            var slider = $('#sliderhome3').bxSlider({
                nextText:'<i class="fa fa-angle-right"></i>',
                prevText:'<i class="fa fa-angle-left"></i>',
                auto: true,
                onSliderLoad:function(currentIndex){
                    $('#sliderhome3 li').find('.caption').each(function(i){
                        $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                            $(this).removeClass('fadeInRight animated');
                        });
                    })                      
                },
                onSlideBefore:function(slideElement, oldIndex, newIndex){
                    //slideElement.find('.sl-description').hide();
                    slideElement.find('.caption').each(function(){                    
                       $(this).hide().removeClass('animated fadeInRight'); 
                    });                
                },
                onSlideAfter: function(slideElement, oldIndex, newIndex){  
                    //slideElement.find('.sl-description').show();
                    setTimeout(function(){
                        slideElement.find('.caption').each(function(){                    
                           $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                                $(this).removeClass('fadeInRight animated');
                            }); 
                        });
                    }, 500);                                
                }
            });
            //slider.reloadSlider();
        }
})(jQuery); // End of use strict

$('.product-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });  
    
    $('.related-products-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });  
    
    $('.brand-list').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });    
    
