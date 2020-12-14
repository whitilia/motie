
$(window).load(function(){
	//배너모음 
	stateScrollObj("#slider_site", ".item", "#slider_site .control", 3000, 300, 0, 0, "x", 0, false, false, "easeInOutCubic", false);

	imgResize("#slide2 .thumb img");
	imgResize(".news2_wrap ul li .thumb img");
	
	$(".invest_wrap li a").on("mouseenter focus", function(){
		$(".invest_wrap li").removeClass("on");
		$(this).parent().addClass("on");
	});


	$(".invest_wrap .controlBox a").on("click",function(e){
		e.preventDefault();
		var _root = $(this).parents(".invest_wrap");
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
	});

	slide1();
	slide2();
});
$(window).resize(function(){
	imgResize("#slide2 .thumb img");
	imgResize(".news2_wrap ul li .thumb img");
});

function slide1(){		
    var _id = "#slide1";//시작 아이디
    var _view = 1;//슬라이더 컨텐츠 수
    var _auto = true;//오토플레이 아닐시 false
    var _slide = true;//슬라이더 아닐시 false(fade in/out)
    var _speed = 150;//슬라이더 속도 기본150
    touchSlider(_id,_view,_auto,_slide,_speed);
}

function slide2(){		
    var _id = "#slide2";//시작 아이디
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