
$(window).load(function(){
	imgResize(".photo_view_sc .view_wrap .img img");
	imgResize(".photo_list_sc li .thumb img");
	imgResize(".photo_view_sc .view_wrap .img img");
	imgResize(".photo_list_sc li .thumb img");
	imgResize(".ul_bbs_sc.type2 li a .thumb img");
});
$(window).resize(function(){
	imgResize(".photo_view_sc .view_wrap .img img");
	imgResize(".photo_list_sc li .thumb img");
	imgResize(".photo_view_sc .view_wrap .img img");
	imgResize(".photo_list_sc li .thumb img");
	imgResize(".ul_bbs_sc.type2 li a .thumb img");
});

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
		}else if(_boxH <= _imgH){
			$(this).addClass("imgW");
		}
	})
}