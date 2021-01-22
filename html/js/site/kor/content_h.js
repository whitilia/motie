$(function(){
    calendar();
    scroll_tab();
    toggle();
    scroll_img();

    $(window).load(function(){    
        if($(".js_tab").length){
            var selectNum = $(".js_tab .scroll_tab_inner").find("li.on").index();
            var arr = [];
            arr.push(0);
            if(selectNum > 1){
                for(i=2;i<=selectNum;i++){
                    var tabW = $(".js_tab .scroll_tab_inner").find("li:nth-child("+i+")").outerWidth()+2;
                    var arr0 = arr[i-2]
                    arr.push(Number(tabW+arr0));
                }
            }
            $(".scroll_tab_inner").scrollLeft(arr.slice(-1));
        }
    })
});


function calendar(){
    $( ".datepicker" ).datepicker({
        changeYear: true,
        changeMonth: true, 
        monthNamesShort:[ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
        dayNamesMin: [ '일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        showOtherMonths: true
    });
}

function scroll_tab(){
    $('.js_tab ul').scrollTabs();
}


function toggle(){
    $('.schedule_bottom').hide();
    $('.schedule_top .btn_more').on('click', function(){
        if(!$(this).hasClass('on')){
            $(this).addClass('on');
            $(this).parent('.schedule_top').siblings('.schedule_bottom').stop().slideDown();
            
        }else{
            $(this).removeClass('on');
            $(this).parent('.schedule_top').siblings('.schedule_bottom').stop().slideUp();
        }
    });
}
function scroll_img(){
    var thumb_w = $('.thumb_list_cont a').width() + 13;
    var thumb_count = $('.thumb_list_cont a').length;
    console.log(thumb_count);
    $('.thumb_list_cont').css('width',thumb_w * thumb_count);
}