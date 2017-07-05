$( document ).ready(function() {
	$(".navbar-toggle").click(function () {
		$(".header-nav").toggleClass("opened-menu");
		//setTimeout(function () {
			if ($(".header-nav").hasClass("opened-menu")) {
				$(".navbar-toggle").addClass("fixed");
				$("body").addClass("fixed");
			} else {
				$(".navbar-toggle").removeClass("fixed");
				$("body").removeClass("fixed");
			}	
		//}, 0);
	});
});