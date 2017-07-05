$( document ).ready(function() {
	$(".navbar-toggle").click(function () {
		$(".header-nav").toggleClass("opened-menu");
		//setTimeout(function () {
			if ($(".header-nav").hasClass("opened-menu")) {
				$(".navbar-toggle").addClass("fixed");
				$("body").addClass("mobile-fixed");
				$("header").css("z-index", "4");
			} else {
				$(".navbar-toggle").removeClass("fixed");
				$("body").removeClass("mobile-fixed");
				$("header").css("z-index", "0");
			}	
		//}, 0);
	});

	$(window).scroll(function () {
		if (document.documentElement.clientWidth < 768) {
	        if ($(document).scrollTop() > 10) {
	            $("header").css("height", "61px");
	            $("header").css("z-index", "4");
	            $(".banner-text").css("display", "none");
	        } else {
	            $("header").css("height", "200px");
	            $("header").css("z-index", "0");
	            $(".banner-text").css("display", "block");
	        }
    	}
    });
});