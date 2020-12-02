
$(window).load(function(){
	//배너모음 
	stateScrollObj("#slider_news", ".item", "#slider_news .control", 3000, 300, 0, 0, "x", 0, true, false, "easeInOutCubic", false);

	$(".con_wrap .con_open").on("click",function(){
		var con = $(this).attr("data-on");
		console.log(">>>>>>>>>>>> con : "+con);
		con_mov(con);
	});
	$(".con_wrap .con_close").on("click",function(){
		var con = $(this).parent().attr("data-off");
		con_mov(con);
	});
});

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