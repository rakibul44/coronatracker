(function($){

  $('.team').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    // navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
    margin:160,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
       //wow js  
    
       var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animate__animated', // animation css class (default is animated)
          offset:       2,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();
      
      // top-arrow 
    $(window).scroll( function(){
      var dis = $(window).scrollTop();
      if (dis > 350) {
          $('.top-arrow').fadeIn();
          }
      else{
          $('.top-arrow').fadeOut();
      }
  } );
  
  $('.top-arrow').on('click', function(){
      $('html').animate({ scrollTop : 0 })
  });

// counter js 
    

}) (jQuery)
    