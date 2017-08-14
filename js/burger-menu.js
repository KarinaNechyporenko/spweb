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
					$("#requirements .staked-tabs-part .btn-tab").eq(i).find(".plus-minus").addClass("opened");
				} else {
					$("#requirements .staked-tabs-part .btn-tab").eq(i).find(".plus-minus").removeClass("opened");
				}
			} else {
				if ($("#requirements .staked-tabs-part .tab-pane").eq(i).hasClass("in")) {
					jj++;
					//localStorage.setItem("jj", jj);
					//console.log($(".staked-tabs-part .tab-pane.in"));
					//console.log(jj);
					$("#requirements .staked-tabs-part .tab-pane").eq(i).removeClass("in");
					//console.log(localStorage.getItem("jj"));
					//jj = localStorage.getItem("jj");
					if (jj == 1) {
						//console.log(jj);
						$("#requirements .staked-tabs-part li").eq(i).addClass("active");
						$("#requirements .staked-tabs-part .tab-pane").eq(i).addClass("active");
						//console.log($("#requirements .staked-tabs-part .active"));
					}
				}
			} 
		}
		
	}

	/**** Tab Slider Start Function ****/
	var tabSelector = $(".tab-selector");
	function tabSlider () {
		var slideBar = $(".slider .bar");
		for (var i = 0; i < tabSelector.length; i++) {
			tabSelector.eq(i).on("click", function() {
				var prevItemsWidth = 0;
				for (var itemIndex = $(this).data("index"); itemIndex > 0; itemIndex--) {
					prevItemsWidth += tabSelector.eq(itemIndex-1).width();
				}
				slideBar.css("width",$(this).width());
				slideBar.css("margin-left",prevItemsWidth);
				console.log($(this).width());
			})
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

	tabSlider();
	tabToCollapse();

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
	// $('#tab_selector .option').on('click', function (e) {
	//     $('.nav-tabs li a').eq($(this).parent().parent().find("input").val()).tab('show');
	//     console.log($(this).val());
	// });


	tabSelector.eq(1).on("click", function () {
		setTimeout(function () {
			tablesFit();
		})
		
	})
	
	$(window).resize(function() {
		tablesFit();
		tabToCollapse(); 
		tabSlider();
	})

	$(window).on( "orientationchange", function () {
		tabToCollapse();
	})

	$(".btn-tab").on("click", function () {
		if($(this).hasClass("collapsed")){
			$(this).find(".plus-minus").addClass("opened");
		} else {
			$(this).find(".plus-minus").removeClass("opened");
		}
	})

// if (Modernizr.touch) {
// 			$(".radio-options").on("click", function(event) {
// 				if (!($(this).parent('.radio-container').hasClass("active")))	{
// 				$(this).parent('.radio-container').addClass("active"); 
// 				event.stopPropagation();
// 				}
// 				console.log($(this));
// 			});	
// 	$(".toggle").on("click", function(){ 
// 		$(this).parents('.radio-container').removeClass("active"); 
// 		return false;
// 		 });  
// 	}

	var select = $(".component-list"),
        options_area = $(".options-list"),
        option = $(".option");

    select.on("click", function () {
        var closeList = $(this).find(options_area).hasClass("show-list");
        select.parent().find(".show-list").removeClass("show-list");
        if (closeList == false)
            $(this).find(options_area).addClass("show-list");
    }); 
    option.on("click", function () {
        $(this).parent().parent().find(".component-selected").html($(this).html());
        $(this).parent().parent().find("input").val($(this).attr("value"));
        $('.nav-tabs li a').eq($(this).parent().parent().find("input").val()).tab('show');
        $(this).parent().find(".show-list").removeClass("show-list");
    });
    $(window).on("click touchend", function (e) {
        if ($(e.target).closest(options_area).length || $(e.target).closest(option).length || $(e.target).closest(select).length) {
            e.stopPropagation();
        } else {
            options_area.removeClass("show-list");
        }
    });



});