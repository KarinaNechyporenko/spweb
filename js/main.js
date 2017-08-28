$( document ).ready(function() {
	var maxHeaderHeight = $("header").css("max-height");
    var minHeaderHeight = $("header").css("min-height");
    var maxContentTop;
    var minContentTop;


	/**** Header Resize without smooth scroll Start ****/

    $(window).scroll(function () {
        minContentTop = parseInt($("header").css("min-height")) + 160;
        if (document.documentElement.clientWidth < 768) {
            maxContentTop = parseInt($("header").css("max-height")) + 60;           
        }
        else {
            maxContentTop = parseInt($("header").css("max-height"));
        }
        if ($(document).scrollTop() > 10) {
            $(".banner-text").css("display", "none");
            $("header").css("height", minHeaderHeight);
            $(".page-content").css("top", minContentTop + "px");
            if (document.documentElement.clientWidth > 768) {
                $("header").css("z-index", "4");
            }
             
        } else {
            $("header").css("height", maxHeaderHeight);
            $(".banner-text").css("display", "block");
            $(".page-content").css("top", maxContentTop + "px");
            if (document.documentElement.clientWidth > 768) {
                $("header").css("z-index", "0");
            }
             
        }

     });

    /**** Header Resize without smooth scroll Start ****/

    /**** Smooth Scroll Start ****/

    $(window).on('load', function(){
        // (function() {
        //     //console.log("hi");
        //     var lastTime = 0;
        //     var vendors = ['ms', 'moz'];
        //     for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        //         window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        //         window.cancelAnimationFrame =
        //           window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        //     }
        //     if (!window.requestAnimationFrame)
        //         window.requestAnimationFrame = function(callback, element) {
        //             var currTime = new Date().getTime();
        //             var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        //             var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        //               timeToCall);
        //             lastTime = currTime + timeToCall;
        //             return id;
        //         };
        //     if (!window.cancelAnimationFrame)
        //         window.cancelAnimationFrame = function(id) {
        //             clearTimeout(id);
        //         };
        // }());

        // $("body").mCustomScrollbar({
        //     updateOnContentResize:true,
        //     theme:"dark-thin",
        //     mouseWheelPixels:500,
        //     scrollInertia:600,
        //     callbacks:{
        //         onScrollStart:function(){
        //             headerResizeMin(this);
        //         },
        //         onScroll:function(){
        //             headerResizeMax(this);
        //         }
        //     }

        // });

    });
        
    function headerResizeMin(el){
        //$(".mCSB_container").css("top", "-100px");
        //console.log($(".mCSB_container").css("top"));
        pageTop = parseInt($(".mCSB_container").css("top"));
        //if ($(".mCSB_container").scrollTop() < -10) {
        if (pageTop == 0) {
            // console.log("yep");
            $(".banner-text").css("display", "none");
            $("header").css("height", minHeaderHeight);
                //$(".page-content").css("top", minContentTop + "px");
            if (document.documentElement.clientWidth > 768) {
                $("header").css("z-index", "4");
            }
            $('body').mCustomScrollbar('scrollTo',minContentTop);
             
        } 
    };
    
    function headerResizeMax(el){
        
        pageTop = parseInt($(".mCSB_container").css("top"));
        //if ($(".mCSB_container").scrollTop() < -10) {
        if (pageTop > -200) {
            $("header").css("height", maxHeaderHeight);
            $(".banner-text").css("display", "block");
            $(".page-content").css("top", maxContentTop + "px");
            if (document.documentElement.clientWidth > 768) {
                $("header").css("z-index", "0");
            }
             
        }
    };
    
    /**** Smooth Scroll End ****/

    /**** Burger Menu Start ****/
    $(".navbar-toggle").click(function () {
        $(".header-nav").toggleClass("opened-menu");
            if ($(".header-nav").hasClass("opened-menu")) {
                $("body").addClass("mobile-fixed");
            } else {
                $("body").removeClass("mobile-fixed");
            }   
    });
    /**** Burger Menu End ****/

    /**** Search on Page Start ****/
    $(".search").click(function () {
        $(this).closest("li").toggleClass("active");
        if(!($(this).closest("li").hasClass("active"))) {
             $(".search-form .form-input").trigger("change");
        }
    });
    $(".search-tip").click(function () {
        $(this).addClass('down').prev().focus();
    });
    $(".search-form .form-input").change(function () {
        //console.log($(this).val().length);
        if ($(this).val().length == 0) {
            $(this).next().removeClass('down');
        } else {
            $(this).next().addClass('down');
        }
    });
    /**** Search on Page End ****/

});

