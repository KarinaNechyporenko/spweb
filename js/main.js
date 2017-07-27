$( document ).ready(function() {
	var maxHeaderHeight = $("header").css("max-height");
	var minHeaderHeight = $("header").css("min-height");
	var maxContentTop;
	var minContentTop;
    var pageTop;

	/**** Header Resize without smooth scroll Start ****/

    /*$(window).scroll(function () {
	 	minContentTop = parseInt($("header").css("min-height")) + 160;
	 	if (document.documentElement.clientWidth < 768) {
	 		maxContentTop = parseInt($("header").css("max-height")) + 60;			
	 	}
	 	else {
	 		maxContentTop = parseInt($("header").css("max-height"));
	 	}
        pageTop = parseInt($(".mCSB_container").css("top"));
        //if ($(".mCSB_container").scrollTop() < -10) {
        if (pageTop < 10) {
            console.log("yep");
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

    });*/

    /**** Header Resize without smooth scroll Start ****/

    /**** Smooth Scroll Start ****/

    $(window).on('load', function(){
        $("body").mCustomScrollbar({
            updateOnContentResize:true,
            theme:"dark-thin",
            mouseWheelPixels:600,
            callbacks:{
                onScroll:function(){
                    headerResize(this);
                }
            }

        });
    });
        
    function headerResize(el){
        minContentTop = parseInt($("header").css("min-height")) + 160;
        if (document.documentElement.clientWidth < 768) {
            maxContentTop = parseInt($("header").css("max-height")) + 60;           
        }
        else {
            maxContentTop = parseInt($("header").css("max-height"));
        }
        pageTop = parseInt($(".mCSB_container").css("top"));
        //if ($(".mCSB_container").scrollTop() < -10) {
        if (pageTop < -10) {
            console.log("yep");
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
    };
    
    /**** Smooth Scroll End ****/

    /**** Burger Menu Start ****/
    $(".navbar-toggle").click(function () {
        $(".header-nav").toggleClass("opened-menu");
        //setTimeout(function () {
            if ($(".header-nav").hasClass("opened-menu")) {
                //$(".navbar-toggle").addClass("fixed");
                $("body").addClass("mobile-fixed");
                //$("header").css("z-index", "4");
            } else {
                //$(".navbar-toggle").removeClass("fixed");
                $("body").removeClass("mobile-fixed");
                //$("header").css("z-index", "0");
            }   
        //}, 200);
    });
    /**** Burger Menu End ****/

    /**** Search on Page Start ****/
    $(".search").click(function () {
        $(this).closest("li").toggleClass("active");
    });
    /**** Search on Page End ****/


});

