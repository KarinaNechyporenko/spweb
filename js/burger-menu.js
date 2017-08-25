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
		console.log("tabToCollapse");
		for (var i = 0; i < $(".staked-tabs-part .tab-pane").length; i++){
			if ($(".staked-tabs-part .tab-pane").eq(i).hasClass("active")) {
				//console.log($(".staked-tabs-part .tab-pane").hasClass("active"));
				$(".staked-tabs-part .tab-pane").eq(i).addClass("in");
				$(".staked-tabs-part .tab-pane").eq(i).prev().find(".plus-minus").addClass("opened");
				console.log("tabToCollapse add in");
			}
			else {
				$(".staked-tabs-part .tab-pane").eq(i).removeClass("in");
				$(".staked-tabs-part .tab-pane").eq(i).prev().find(".plus-minus").removeClass("opened");
				console.log("tabToCollapse remove in");
			}
		}
	}

	/**** Tab Slider Function ****/
	var tabSelector = $(".tab-selector");
	// var barWidthDefault = $(".slider .bar").parent().parent().find(".active").width();
	// $(".slider .bar").css("width",barWidthDefault);
	function tabSlider () {
		var slideBar = $(".slider .bar");
		//for (var i = 0; i < tabSelector.length; i++) {
			tabSelector.on("click", function() {
				$(".main-tab-part .options-list").find(".shown").removeClass("shown");
				$(this).parent().next().find(".option[value=" + $(this).data("index") + "]").addClass("shown");
				var prevItemsWidth = 0;
				for (var itemIndex = $(this).data("index"); itemIndex > 0; itemIndex--) {
					prevItemsWidth += tabSelector.eq(itemIndex-1).width();
				}
				slideBar.css("width",$(this).width());
				slideBar.css("margin-left",prevItemsWidth);
				//console.log($(this).width());
			})
		//}
	}


	/**** Smooth Scroll Start ****/
	$(window).on('load', function(){
		 // (function() {
   //          console.log("hi");
   //          var lastTime = 0;
   //          var vendors = ['ms', 'moz'];
   //          for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
   //              window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
   //              window.cancelAnimationFrame =
   //                window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
   //          }
   //          if (!window.requestAnimationFrame)
   //              window.requestAnimationFrame = function(callback, element) {
   //                  var currTime = new Date().getTime();
   //                  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
   //                  var id = window.setTimeout(function() { callback(currTime + timeToCall); },
   //                    timeToCall);
   //                  lastTime = currTime + timeToCall;
   //                  return id;
   //              };
   //          if (!window.cancelAnimationFrame)
   //              window.cancelAnimationFrame = function(id) {
   //                  clearTimeout(id);
   //              };
   //      }());

        // $("body").mCustomScrollbar({
        //     updateOnContentResize:true,
        //     theme:"dark-thin",
        //     mouseWheelPixels:500,
        //     scrollInertia:600,
        // });
    });
	/**** Smooth Scroll End ****/
	console.log("ready");
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
		console.log("window resize");
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
		console.log("orientation change");
		tabToCollapse();
	})
	document.addEventListener("touchstart", function () {
	    $(window).off("risize");
	});
	$(".btn-tab").on("click", function () {
		console.log("btn-tab");
		if(!($(this).next().hasClass("in"))){
			console.log("btn-tab add active");
			$(this).find(".plus-minus").addClass("opened");
			var dataHref = "'"+ $(this).data("href2") + "'";
			//$(this).parent().parent().find("li").data($(this).data("href")).addClass("active");
			//console.log($(this).parent().parent().find(".nav-stacked li"));
			//console.log(dataHref);
			$(this).parent().find(".tab-pane").removeClass("active");
			$(this).next().addClass("active");
			$(this).parent().parent().find(".nav-stacked li").removeClass("active");
			$(this).parent().parent().find('[data-href=' + dataHref + ']').addClass("active");
		} else {
			console.log("btn-tab remove active");
			$(this).find(".plus-minus").removeClass("opened");
			$(this).next().removeClass("active");
		}
	})

	/****Custom Select Start ****/
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
    /****Custom Select End ****/
	var totalPrice = 0; 
    $("#dev-check").on("click", function () {
    	if ($(this).is(':checked')) {
    		if (!($("#support-check").is(':checked'))) {
    			$("#support-check").trigger("click");
    			
    		}
    	$("#support-check").prop("disabled", true);
    	$("#support-check").parent().addClass("disabled");
    	} else {
    		$("#support-check").prop("disabled", false);
    		$("#support-check").parent().removeClass("disabled");
    	}    	
    })

    
    var checkedOptions = $(".modal-body").find("input[name=optcheck][checked]");
    for (var i = 0; i < checkedOptions.length; i++) {
    	totalPrice += parseInt(checkedOptions.eq(i).data("value"));
    }
    $(".total-price").html("$" + totalPrice);
    
    $("input[name=optcheck]").on("change", function () {
    	if($(this).is(":checked")) {
    		totalPrice += parseInt($(this).data("value"));
    	} else {
    		totalPrice -= parseInt($(this).data("value"));
    	}

	    $(".total-price").html("$" + totalPrice);
	})
});

