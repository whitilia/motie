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
    $('.js_tab ul').scrollTabs();
}