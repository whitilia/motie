
$(window).load(function(){
	$(".etc_wrap li").removeClass("on");
	$(".etc_wrap li.n1").addClass("on");

	//배너모음 
	stateScrollObj("#slider_news", ".item", "#slider_news .control", 3000, 300, 0, 0, "x", 0, true, false, "easeInOutCubic", false);
	stateScrollObj("#slider_news2", ".item", "#slider_news2 .control", 3000, 300, 0, 0, "x", 0, true, false, "easeInOutCubic", false);
	stateScrollObj("#slider_news3", ".item", "#slider_news3 .control", 3000, 300, 0, 0, "x", 0, true, false, "easeInOutCubic", false);
	stateScrollObj("#slide_fbanner", ".item", "#slide_fbanner .control", 3000, 300, 0, 0, "x", 0, true, false, "easeInOutCubic", false);

	$(".con_wrap .con_open").on("click",function(e){
		e.preventDefault();
		var con = $(this).attr("data-on");
		console.log(">>>>>>>>>>>> con : "+con);
		con_mov(con);
		imgResize(".photo_wrap li.on .thumb img");
		isMobile();

		$(".etc_wrap li").removeClass("on");
	});
	$(".con_wrap .con_close").on("click",function(e){
		e.preventDefault();
		var con = $(this).parent().attr("data-off");
		con_mov(con);
		imgResize(".photo_wrap li.on .thumb img");
		isMobile();

		$(".etc_wrap li").removeClass("on");
		$(".etc_wrap li.n1").addClass("on");
	});

	slide_bodo();

	$(".site_wrap .site_open").on("click",function(e){
		e.preventDefault();
		$(this).parents(".site_wrap").addClass("on");
	});
	$(".site_wrap .all_close").on("click",function(e){
		e.preventDefault();
		$(this).parents(".site_wrap").removeClass("on");
		$(".site_wrap li").removeClass("on");
	});


	$(".etc_wrap .control a").on("click",function(e){
		e.preventDefault();
		var _root = $(this).parents(".etc_wrap");
		var btnClass = $(this).attr("class");
		var total = _root.find("li").length;
		var onNum = _root.find("li.on").index() + 1;
		console.log(">>>>>>>>>>>> btnClass : "+btnClass);
		console.log(">>>>>>>>>>>> total : "+total);
		console.log(">>>>>>>>>>>> onNum : "+onNum);
		_root.find("li").removeClass("on");
		if(onNum == "1"){
			if(btnClass == "btn_prev"){
				_root.find("li.n3").addClass("on");
			}else if(btnClass == "btn_next"){
				_root.find("li.n"+(onNum+1)).addClass("on");
			}
		}else if(onNum == total){
			if(btnClass == "btn_next"){
				_root.find("li.n1").addClass("on");
			}else if(btnClass == "btn_prev"){
				_root.find("li.n"+(onNum-1)).addClass("on");
			}
		}else{
			if(btnClass == "btn_prev"){
				_root.find("li.n"+(onNum-1)).addClass("on");
			}else if(btnClass == "btn_next"){
				_root.find("li.n"+(onNum+1)).addClass("on");
			}
		}
	});


	$(".photo_wrap .controlBox a").on("click",function(e){
		e.preventDefault();
		var _root = $(this).parents(".photo_wrap");
		var btnClass = $(this).attr("class");
		var total = _root.find("li").length;
		var onNum = _root.find("li.on").index() + 1;
		console.log(">>>>>>>>>>>> btnClass : "+btnClass);
		console.log(">>>>>>>>>>>> total : "+total);
		console.log(">>>>>>>>>>>> onNum : "+onNum);
		_root.find("li").removeClass("on");
		if(onNum == "1"){
			if(btnClass == "btn_prev"){
				_root.find("li.n4").addClass("on");
			}else if(btnClass == "btn_next"){
				_root.find("li.n"+(onNum+1)).addClass("on");
			}
		}else if(onNum == total){
			if(btnClass == "btn_next"){
				_root.find("li.n1").addClass("on");
			}else if(btnClass == "btn_prev"){
				_root.find("li.n"+(onNum-1)).addClass("on");
			}
		}else{
			if(btnClass == "btn_prev"){
				_root.find("li.n"+(onNum-1)).addClass("on");
			}else if(btnClass == "btn_next"){
				_root.find("li.n"+(onNum+1)).addClass("on");
			}
		}
		imgResize(".photo_wrap li.on .thumb img");
	});
	
	$(".con_wrap .photo_wrap li a").on("mouseenter focus", function(){
		$(".con_wrap.on .photo_wrap li").removeClass("on");
		$(this).parent().addClass("on");
	});


	$(".site_wrap dt .select_open").on("click",function(e){
		e.preventDefault();
		$(".site_wrap li").removeClass("on");
		$(this).parents("li").addClass("on");
	});
	$(".site_wrap .select_close").on("click",function(e){
		e.preventDefault();
		$(this).parents("li").removeClass("on");
	})

	$(".today_wrap .tab_btn a").on("click",function(e){
		e.preventDefault();
		var _tab = $(this).attr("class").split("_")[1];
		console.log(">>>>>>>>>>>>>> tab : "+_tab);
		$(".today_wrap .tab1,.today_wrap .tab2").removeClass("on");
		$(this).parent().next().find("."+_tab).addClass("on");
	});
	
	imgResize(".photo_wrap li.on .thumb img");
	isMobile();
});

$(window).resize(function(){
	imgResize(".photo_wrap li.on .thumb img");
	isMobile();
});

function isMobile(){
	var winWidth = window.innerWidth;
	var isLeft = $(".con_wrap.left").attr("class").indexOf("con_wrap left on");
	var isRight = $(".con_wrap.right").attr("class").indexOf("con_wrap right on");
	console.log(">>>>>>>>>>>>> isLeft : "+isLeft);
	console.log(">>>>>>>>>>>>> isRight : "+isRight);
	if(winWidth <= 1023){
		if(isLeft == -1 && isRight == -1){
			$(".con_wrap.left").addClass("on");
			$(".con_wrap.right").addClass("off");
		}
	}
	
	$(".con_wrap").removeAttr("style");
	if(winWidth <= 971){
		var conH = $(".con_wrap.on .con_body").height();
		console.log(">>>>>>>>>>>>> conH : "+conH);
		$("#body_layout").css("padding-top",conH+69+40);
		$(".con_wrap").css("height",conH+69+40);
		setTimeout(() => {
			var conH = $(".con_wrap.on .con_body").height();
			$("#body_layout").css("padding-top",conH+69+40);
			$(".con_wrap").css("height",conH+69+40);
			imgResize(".photo_wrap li.on .thumb img");
		}, 1000);
		$(".con_wrap .today_wrap .tab1").addClass("on");
	}else{
		$("#body_layout").removeAttr("style");
		$(".con_wrap").removeAttr("style");
		$(".con_wrap .today_wrap .tab1,.con_wrap .today_wrap .tab2").removeClass("on");
	}
}

function con_mov(target){
	var target = target;
	var conL = $(".con_wrap.left");
	var conR = $(".con_wrap.right");
	conL.removeClass("on").removeClass("off");
	conR.removeClass("on").removeClass("off");
	if(target == "left"){
		conL.addClass("on");
		conR.addClass("off");
	}else if(target == "right"){
		conL.addClass("off");
		conR.addClass("on");
	}
}

function slide_bodo(){		
    var _id = "#slide_bodo";//시작 아이디
    var _view = 1;//슬라이더 컨텐츠 수
    var _auto = false;//오토플레이 아닐시 false
    var _slide = true;//슬라이더 아닐시 false(fade in/out)
    var _speed = 150;//슬라이더 속도 기본150
    touchSlider(_id,_view,_auto,_slide,_speed);
}

function imgResize(target){
	$(target).each(function(){
		$(this).removeAttr("class");

		var _boxW = $(this).parent().width();
		var _boxH = $(this).parent().height();
		var _imgW = $(this).width();
		var _imgH = $(this).height();
		console.log(">>>>>>>>>>>>>> _boxW : "+_boxW);
		console.log(">>>>>>>>>>>>>> _boxH : "+_boxH);
		console.log(">>>>>>>>>>>>>> _imgW : "+_imgW);
		console.log(">>>>>>>>>>>>>> _imgH : "+_imgH);

		if(_boxH > _imgH){
			$(this).addClass("imgH");
		}else if(_boxH < _imgH){
			$(this).addClass("imgW");
		}
	})
}