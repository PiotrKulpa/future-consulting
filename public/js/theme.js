// js Document

    // Created on   : 23/05/2018.
    // Theme Name   : Charles-Business-Consulting HTML Template.
    // Version      : 1.0.
    // Author       : @CreativeGigs.
    // Developed by : Jubayer al hasan. (jubayer.hasan1991@gmail.com)


(function($) {
    "use strict";
    
    
    $(document).on ('ready', function (){
        
        // -------------------- Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.theme-menu-wrapper'),
          scroll = $(window).scrollTop();
          if (scroll >= 190) sticky.addClass('fixed');
          else sticky.removeClass('fixed');

        });

        // ------------------------------- WOW Animation 
        var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       80,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();


        
        // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });
        
        // -------------------- From Bottom to Top Button
            //Check to see if the window is top if not then display button
        $(window).on('scroll', function (){
          if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });
            //Click event to scroll to top
        $('.scroll-top').on('click', function() {
          $('html, body').animate({scrollTop : 0},1500);
          return false;
        });

        // ----------------------------- Counter Function
        var timer = $('.timer');
        if(timer.length) {
            timer.appear(function () {
              timer.countTo();
          })
        }

        // ------------------------------------- Fancybox
        var fancy = $ (".fancybox");
        if(fancy.length) {
          fancy.fancybox({
            arrows: true,
            animationEffect: "zoom-in-out",
            transitionEffect: "zoom-in-out",
          });
        }


         // ------------------------------ Language Switcher
         var plang = $('#polyglotLanguageSwitcher');
         if (plang.length) {
              plang.polyglotLanguageSwitcher({
                effect: 'fade',
                        testMode: true,
                        onChange: function(evt){
                            alert("The selected language is: "+evt.selectedItem);
                        }
                     
              });
          };

        // ------------------------------- Partner Slider
        var pSlider = $ (".partner-slider");
        if(pSlider.length) {
            pSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    },
                    1200:{
                        items:5
                    }
                },
          })
        }

        // -------------------------------  Latest News Slider
        var rpSlider = $ (".latest-news-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              margin:30,
              autoplayTimeout:3500,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                },
          })
        }


        // -------------------------------  Core Value Slider
        var rpSlider = $ (".core-value-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              margin:30,
              autoplayTimeout:3500,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                },
          })
        }


        // -------------------------------  Related Post Slider
        var rpSlider = $ (".related-post-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    }
                },
          })
        }


        // -------------------------------  Related Product Slider
        var rpSlider = $ (".related-product-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              margin:30,
              autoplayTimeout:4000,
              smartSpeed:1200,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                },
          })
        }




        // -------------------------------  Compnay Branch Address
        var baSlider = $ (".address-slider");
        if(baSlider.length) {
            baSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              autoplayTimeout:2000,
              smartSpeed:1200,
              lazyLoad:true,
              autoplayHoverPause:true,
              responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                },
          })
        }

          // ---------------------------------- Validation Alert
          var closeButton = $ (".closeAlert");
            if(closeButton.length) {
                closeButton.on('click', function(){
                  $(".alert-wrapper").fadeOut();
                });
                closeButton.on('click', function(){
                  $(".alert-wrapper").fadeOut();
                })
            }


          // -------------------------------- Accordion Panel
          if ($('.theme-accordion > .panel').length) {
            $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
                  var heading = $(this).find('.panel-heading');
                  heading.addClass("active-panel");
                  
            });
            $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
                var heading = $(this).find('.panel-heading');
                  heading.removeClass("active-panel");
                  //setProgressBar(heading.get(0).id);
            });
            $('.panel-heading a').on('click',function(e){
                if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
                    e.stopPropagation();
                }
            });
          };


          // ------------------------- Product Quantity
          var inputVal = $("#product-value");
          if(inputVal.length) {
            $("#value-decrease").on('click', function() {
                var v= inputVal.val()-1;
                if(v>=inputVal.attr('min'))
                inputVal.val(v)
              });

            $("#value-increase").on('click', function() {
              var v= inputVal.val()*1+1;
              if(v<=inputVal.attr('max'))
              inputVal.val(v)
            });
          }
        

        
    });

    
    $(window).on ('load', function (){ // makes sure the whole site is loaded
        // ------------------------ Chart Js
        if($("#chartContainer").length) {
          var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            animationEnabled: true,
            zoomEnabled: true,
            data: [{
              type: "area",
              dataPoints: []
            }]
          });

          addDataPoints(1000);  
          chart.render();

          function addDataPoints(noOfDps) {
            var xVal = chart.options.data[0].dataPoints.length + 1, yVal = 100;
            for(var i = 0; i < noOfDps; i++) {
              yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
              chart.options.data[0].dataPoints.push({x: xVal,y: yVal}); 
              xVal++;
            }
          }
        }


    })
    
})(jQuery)