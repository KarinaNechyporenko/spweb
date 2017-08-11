$( document ).ready(function() {
	/**** TablesFit Function ****/
	function tablesFit () {
		var tableFixed = $(".table-fixed-left.notes tbody tr");
		var tableScroll = $(".table-scroll.notes tbody tr");
		for (var i = 0; i < tableFixed.length; i++) {
			tableFixed.eq(i).css("height", tableScroll.eq(i).height());
		}
	}
	/**** Data-Toggle TabToCollapse/CollapseToTab  Function****/
	
	function tabToCollapse () {
		var jj = 0;
		for (var i = 0; i < $("#requirements .staked-tabs-part .tab-pane").length; i++) {	
			if ($(document).width() < 992) {
				if ($("#requirements .staked-tabs-part .tab-pane").eq(i).hasClass("active")) {
					$("#requirements .staked-tabs-part li").removeClass("active");
					$("#requirements .staked-tabs-part .tab-pane").removeClass("active");
					$("#requirements .staked-tabs-part .tab-pane").eq(i).addClass("in");
				}
			} else {
				if ($("#requirements .staked-tabs-part .tab-pane").eq(i).hasClass("in")) {
					jj++;
					//localStorage.setItem("jj", jj);
					console.log($(".staked-tabs-part .tab-pane.in"));
					console.log(jj);
					$("#requirements .staked-tabs-part .tab-pane").eq(i).removeClass("in");
					//console.log(localStorage.getItem("jj"));
					//jj = localStorage.getItem("jj");
					if (jj == 1) {
						console.log(jj);
						$("#requirements .staked-tabs-part li").eq(i).addClass("active");
						$("#requirements .staked-tabs-part .tab-pane").eq(i).addClass("active");
						console.log($("#requirements .staked-tabs-part .active"));
					}
				}
			} 
		}
		
	}

	/**** Smooth Scroll Start ****/
	$(window).on('load', function(){
        $("body").mCustomScrollbar({
            updateOnContentResize:true,
            theme:"dark-thin",
            mouseWheelPixels:500,
            scrollInertia:600,
        });
    });
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

	/**** Tab to Dropdown ****/
	$('#tab_selector input').on('click', function (e) {
	    $('.nav-tabs li a').eq($(this).val()).tab('show');
	});

	/**** Tab Slider Start ****/
	var tabSelector = $(".tab-selector");
	var slideBar = $(".slider .bar");
	for (var i = 0; i < tabSelector.length; i++) {
		tabSelector.eq(i).on("click", function() {
			var prevItemsWidth = 0;
			for (var itemIndex = $(this).data("index"); itemIndex > 0; itemIndex--) {
				prevItemsWidth += tabSelector.eq(itemIndex-1).width();
			}
			slideBar.css("width",$(this).width());
			slideBar.css("margin-left",prevItemsWidth);
		})
	}
	/**** Tab Slider End ****/

	tabToCollapse();

	tabSelector.eq(1).on("click", function () {
		setTimeout(function () {
			tablesFit();
		})
		
	})
	
	$(window).resize(function() {
		tablesFit();
		tabToCollapse(); 
	})

	$(window).on( "orientationchange", function () {
		//tabToCollapse();
	})

	$(".btn-tab").on("click", function () {
		if($(this).hasClass("collapsed")){
			$(this).find(".plus-minus").addClass("opened");
		} else {
			$(this).find(".plus-minus").removeClass("opened");
		}
	})

if (Modernizr.touch) {
			$(".radio-options").bind("click", function(event) {
				if (!($(this).parent('.radio-container').hasClass("active")))	{
				$(this).parent('.radio-container').addClass("active"); 
				event.stopPropagation();
				}
				console.log($(this));
			});	
	$(".toggle").bind("click", function(){ 
		$(this).parents('.radio-container').removeClass("active"); 
		return false;
		 });  
	}

});