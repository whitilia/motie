$(function(){
    calendar();
    scroll_tab();
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
    $('.tab_navi').scrollTabs();
    var tab_btn = $('.tab_wrap .tab_navi li');
    var tab_cont = $('.tab_wrap .tab_content');

    tab_cont.hide();
    tab_cont.eq(0).show();

    tab_btn.on('click', function(){
        var i=$(this).index() - 1;
        tab_cont.hide();
        tab_cont.eq(i).show();
        tab_btn.removeClass('on');
        $(this).addClass('on');
        console.log(i);
    });
}