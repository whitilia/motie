$(function(){
    calendar();
    scroll_tab();
    toggle();
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