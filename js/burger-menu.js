$( document ).ready(function() {
	/**** TablesFit Function ****/
	function tablesFit () {
		var tableFixed = $(".table-fixed-left.notes tbody tr");
		var tableScroll = $(".table-scroll.notes tbody tr");
		// var tableRightHead = $(".table-fixed-right thead th");
		// var tableRightHeadSmall;
		for (var i = 0; i < tableFixed.length; i++) {
			tableFixed.eq(i).css("height", tableScroll.eq(i).height());
		}
		// if ($(document).width() < 992) {
		// 	for (var i = 0; i < tableRightHead.length; i++) {
		// 		tableRightHeadSmall = tableRightHead.eq(i).html().slice(0,2) + tableRightHead.eq(i).html().slice(5,7);
		// 		tableRightHead.eq(i).html(tableRightHeadSmall);
		// 	}
		// }

	}
	/**** Data-Toggle TabToCollapse/CollapseToTab  Function****/
	
	function tabToCollapse () {
		//console.log("tabToCollapse");
		for (var i = 0; i < $(".staked-tabs-part .tab-pane").length; i++){
			if ($(".staked-tabs-part .tab-pane").eq(i).hasClass("active")) {
				//console.log($(".staked-tabs-part .tab-pane").hasClass("active"));
				$(".staked-tabs-part .tab-pane").eq(i).addClass("in");
				$(".staked-tabs-part .tab-pane").eq(i).prev().find(".plus-minus").addClass("opened");
				//console.log("tabToCollapse add in");
			}
			else {
				$(".staked-tabs-part .tab-pane").eq(i).removeClass("in");
				$(".staked-tabs-part .tab-pane").eq(i).prev().find(".plus-minus").removeClass("opened");
				//console.log("tabToCollapse remove in");
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
			$(".component-selected").html($(".component-selected").parent().prev().find(".active a").html());
		//}
		var dataIndex = "'" + $(".main-tab-part").find(".shown").attr("value") + "'";
		$(".main-tab-part").find('[data-index=' + dataIndex + ']').trigger("click");
		//console.log($(".main-tab-part").find(".shown").attr("value"));
		//console.log($(".main-tab-part").find('[data-index=' + dataIndex + ']'));
		
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
	//console.log("ready");
	//tablesFit();
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

		

	tabSelector.eq(1).on("click", function () {
		//console.log("specifications");
		setTimeout(function () {
			tablesFit();
		});
		
	})
	
	$(window).resize(function() {
		//console.log("window resize");
		tablesFit();
		tabToCollapse(); 
		tabSlider();
	})

	$(window).on( "orientationchange", function () {
		//console.log("orientation change");
		tabToCollapse();
		tabSlider();
		tablesFit();
	})
	document.addEventListener("touchstart", function () {
		//console.log("touchstart");
	    $(window).off("resize");
	});
	$(".btn-tab").on("click", function () {
		//console.log("btn-tab");
		if(!($(this).next().hasClass("in"))){
			//console.log("btn-tab add active");
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
			//console.log("btn-tab remove active");
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
        if($(this).attr("value") == 1) {
        	tablesFit();
        	//console.log("specifications2");
        }
    });
    
    $(window).on("click touchend", function (e) {
        if ($(e.target).closest(options_area).length || $(e.target).closest(option).length || $(e.target).closest(select).length) {
            e.stopPropagation();
        } else {
            options_area.removeClass("show-list");
        }
    });
    /****Custom Select End ****/

    /**** Buy License Modal Start ****/
    $(document).on('hide.bs.modal', '#buyLicenseModal', function (e) {
     	setTimeout(function () {
     		$("#full-check, #support-check").prop("checked", true);
        	$("#dev-check").prop("checked", false);
        	$("#support-check").prop("disabled", false).parent().removeClass("disabled");
     	})    
    });

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
    	totalPrice += parseFloat(checkedOptions.eq(i).data("value"));
    	//console.log(totalPrice.toFixed(2));
    }
    $(".total-price").html("$" + totalPrice.toFixed(2));
    
    $("input[name=optcheck]").on("change", function () {
    	if($(this).is(":checked")) {
    		totalPrice += parseFloat($(this).data("value"));
    		//console.log(totalPrice.toFixed(2));

    	} else {
    		totalPrice -= parseFloat($(this).data("value"));
    		//console.log(totalPrice.toFixed(2));
    	}
    	//console.log(totalPrice.toFixed(2));
	    $(".total-price").html("$" + totalPrice.toFixed(2));
	})
	/**** Buy License Modal End ****/

	var pagination = $(".pagination li");
	var morePages = '<li class="more"><a>...</a></li>';
	if (pagination.length > 6) {
		$(".pagination li[data-page=3]").after(morePages);
	}
	$(".pagination .more").on("click", function () {
		var pagePrevNum = parseInt($(this).prev().data("page"));
		var pageNextNum = parseInt($(this).next().data("page"));
		//console.log(pageNextNum);
		if ($(this).next().hasClass("hidden")) {
			for (var i = pagePrevNum; i >= (pagePrevNum - 2); i--) {
				$(this).parent().children('[data-page=' + i + ']').addClass("hidden");
			}
			for (var i = (pagePrevNum+1); i <= (pagePrevNum + 2); i++) {
				$(this).parent().children('[data-page=' + i + ']').removeClass("hidden");
				$(this).next().trigger("click");
			} 
			//console.log("length " +(pagination.length-2));
			if ((pagePrevNum+3) < (pagination.length-2)) {
				$(".pagination li[data-page=" + (pagePrevNum+2) + "]").after($(this).clone(true));
				if ($(this).parent().children(".more").length > 2) {
					$(this).parent().children(".more").first().remove();
				}
			} else {
				$(this).parent().children(".more").first().remove();
			}
			
		} else if ($(this).prev().hasClass("hidden")) {
			for (var i = (pageNextNum-1); i >= (pageNextNum - 2); i--) {
				$(this).parent().children('[data-page=' + i + ']').removeClass("hidden");
				$(this).prev().trigger("click");
			}
			for (var i = pageNextNum; i <= (pageNextNum + 2); i++) {
				//console.log("length " +(pagination.length-2));
				if (i < (pagination.length-2)) {
					$(this).parent().children('[data-page=' + i + ']').addClass("hidden");
				} 				
			} 
			if ((pageNextNum-3) > 1) {
				$(".pagination li[data-page=" + (pageNextNum-2) + "]").before($(this).clone(true));
				if ($(this).parent().children(".more").length > 2) {
					$(this).parent().children(".more").last().remove();
				}
			}
			else {
				$(this).parent().children(".more").last().remove();
				$(this).parent().children('[data-page=' + 1 + ']').removeClass("hidden");
			}
		}		
	})

	$(".pagination").on("click", function() {
		var activePage = parseInt($(this).children(".active").data("page"));
		if (activePage == 1) {
			$(this).children(".prev").addClass("disabled");
		} else if (activePage == (pagination.length-2)) {
			$(this).children(".next").addClass("disabled");
		} else {
			$(this).children(".prev").removeClass("disabled");
			$(this).children(".next").removeClass("disabled");
		}
	})

	$(".pagination li").on("click", function () {
		if (!($(this).hasClass("prev") || $(this).hasClass("next") || $(this).hasClass("more"))) {
			$(this).parent().children().removeClass("active");
			$(this).addClass("active");
		}	
	})

	$(".pagination .next").on("click", function() {
		var nextPage = $(this).parent().children(".active").next();
		//nextPage.prev().removeClass("active");
		if (!(nextPage.hasClass("more")) && (parseInt(nextPage.data("page")) <= (pagination.length-2))) {			
			nextPage.prev().removeClass("active");
			nextPage.addClass("active");
		} else if (nextPage.hasClass("more")) {
			nextPage.trigger("click");
			nextPage.prev().removeClass("active");
			nextPage.next().addClass("active");
		} 
	})

	$(".pagination .prev").on("click", function() {
		var prevPage = $(this).parent().children(".active").prev();
		//nextPage.prev().removeClass("active");
		if (!(prevPage.hasClass("more")) && (parseInt(prevPage.data("page")) >= 1)) {			
			prevPage.next().removeClass("active");
			prevPage.addClass("active");
		} else if (prevPage.hasClass("more")) {
			prevPage.trigger("click");
			prevPage.next().removeClass("active");
			prevPage.prev().addClass("active");
		} 
	})

});

