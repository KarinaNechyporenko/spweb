$( document ).ready(function() {
	var maxHeaderHeight = $("header").css("max-height");
	var minHeaderHeight = $("header").css("min-height");
	var maxContentTop;
	var minContentTop; 
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
});