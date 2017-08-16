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
		for (var i = 0; i < $(".staked-tabs-part .tab-pane").length; i++){
			if ($(".staked-tabs-part .tab-pane").eq(i).hasClass("active")) {
				//console.log($(".staked-tabs-part .tab-pane").hasClass("active"));
				$(".staked-tabs-part .tab-pane").eq(i).addClass("in");
				$(".staked-tabs-part .tab-pane").eq(i).prev().find(".plus-minus").addClass("opened");
			}
			else {
				$(".staked-tabs-part .tab-pane").eq(i).removeClass("in");
				$(".staked-tabs-part .tab-pane").eq(i).prev().find(".plus-minus").removeClass("opened");
			}
		}
	}

	/**** Tab Slider Function ****/
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
		 (function() {
            //console.log("hi");
            var lastTime = 0;
            var vendors = ['ms', 'moz'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame =
                  window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
            }
            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function(callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                      timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
        }());

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
	});
	$(".search-tip").click(function () {
		$(this).addClass('down').prev().focus();
	});
	$(".search-form .form-input").focus(function () {
		$(this).next().removeClass('down');
	});
	/**** Search on Page End ****/

		

	tabSelector.eq(1).on("click", function () {
		setTimeout(function () {
			tablesFit();
		})
		
	})
	
	$(window).resize(function() {
		tablesFit();
		tabToCollapse(); 
		tabSlider();
		$(".component-selected").html($(".component-selected").parent().prev().find(".active a").html());

		var dataIndex = "'" + $(".main-tab-part").find(".shown").attr("value") + "'";
		$(".main-tab-part").find('[data-index=' + dataIndex + ']').trigger("click");
		//console.log($(".main-tab-part").find(".shown").attr("value"));
		//console.log($(".main-tab-part").find('[data-index=' + dataIndex + ']'));
	})

	$(window).on( "orientationchange", function () {
		tabToCollapse();
	})

	$(".btn-tab").on("click", function () {
		if(!($(this).next().hasClass("in"))){
			$(this).find(".plus-minus").addClass("opened");
			var dataHref = "'"+ $(this).data("href2") + "'";
			//$(this).parent().parent().find("li").data($(this).data("href")).addClass("active");
			//console.log($(this).parent().parent().find(".nav-stacked li"));
			//console.log(dataHref);
			$(this).parent().find(".tab-pane").removeClass("active");
			$(this).next().addClass("active")
			$(this).parent().parent().find(".nav-stacked li").removeClass("active");
			$(this).parent().parent().find('[data-href=' + dataHref + ']').addClass("active");
		} else {
			$(this).find(".plus-minus").removeClass("opened");

		}
	})


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
    	$(this).parent().find(".shown").removeClass("shown");
    	$(this).addClass("shown");
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

