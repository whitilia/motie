window.onload = function(){
    alarm();
    lnb();
    user();
    process();  
    reply();
}
function alarm(){
    var btnAlarm = document.getElementsByClassName('btn_alarm');
    var boxAlarm = document.getElementsByClassName('alarm_box');
    var userBox = document.getElementsByClassName('user_box');
    var userName = document.getElementsByClassName('user_name');
    var tab = document.getElementsByClassName('tab_list');
    var tabList = tab[0].getElementsByTagName('li');
    var tabContList = document.getElementsByClassName('tab_cont');
    var boolean;
    btnAlarm[0].addEventListener('click', function(){
        userBox[0].style.display = 'none';
        userName[0].setAttribute('class','user_name');
        if(!boolean){
            boxAlarm[0].style.display = 'block';
            userName[0].addEventListener('click',function(){
                boolean = false;
            });
            boolean = true;
        }else{
            boxAlarm[0].style.display = 'none';
            boolean =false;
        }
    });
    tabContList[0].style.display = 'block';
    for(i=0; i<tabList.length; i++){
        (function(i){
            tabList[i].addEventListener('click', active)
            function active(){ 
                for(j=0; j<tabList.length; j++){
                    tabList[j].removeAttribute('class');
                    tabContList[j].style.display = 'none';
                }
                this.setAttribute('class','on');
                tabContList[i].style.display = 'block';
             }
        })(i);
    }
}
function lnb(){
    var btnMenu = document.getElementsByClassName('btn_menu');
    var lnb = document.getElementsByClassName('lnb');
    var menu = lnb[0].getElementsByClassName('menu');
    var menuList = menu[0].children;
    var subMenu = menu[0].getElementsByClassName('sub_menu');
    var subMenuList = subMenu[0].children;
    var boolean;
    btnMenu[0].addEventListener('click', function(){
        if(!boolean){
            this.setAttribute('class','btn_menu close');
            lnb[0].style.display = 'block';
            boolean = true;
        }else{
            this.setAttribute('class','btn_menu');
            lnb[0].style.display = 'none';
            boolean = false;
        }
    });
    for(i=0; i<menuList.length; i++){
        menuList[i].addEventListener('click',function(){
            for(j=0; j<menuList.length; j++){
                menuList[j].removeAttribute('class');
            }
            this.setAttribute('class','on');
        });
    }
    for(i=0; i<subMenuList.length; i++){
        subMenuList[i].addEventListener('click',function(){
            for(j=0; j<subMenuList.length; j++){
                subMenuList[j].removeAttribute('class');
            }
            this.setAttribute('class','on');
        });
    }
    window.onresize = function(){
        if(window.innerWidth > 720){
            lnb[0].style.display = 'block';
        }else{
            btnMenu[0].setAttribute('class','btn_menu');
            lnb[0].style.display = 'none';
        }
    }
}
function user(){
    var user = document.getElementsByClassName('user_name');
    var userBox = document.getElementsByClassName('user_box');
    var btnAlarm = document.getElementsByClassName('btn_alarm');
    var boxAlarm = document.getElementsByClassName('alarm_box');
    var boolean;
    user[0].addEventListener('click',function(){
        boxAlarm[0].style.display = 'none';
        if(!boolean){
            this.setAttribute('class','user_name on');
            userBox[0].style.display = 'block';
            btnAlarm[0].addEventListener('click',function(){
                boolean = false;
            });
            boolean = true;
        }else{
            this.setAttribute('class','user_name');
            userBox[0].style.display = 'none';
            boolean = false;
        }
        return boolean;
    });
}
function process(e){ 
    var member_area = document.getElementsByClassName('member_area');
    var type_list = document.getElementsByClassName('type_list');
    var type_card = document.getElementsByClassName('type_card');
    for (var i = 0; i < member_area.length; i++){
        var member_area_a = member_area[i].getElementsByTagName('a');
        member_area_a[0].addEventListener('click', function(){
            this.setAttribute('class','btn_list on'); 
            member_area_a[1].setAttribute('class','btn_card'); 
            type_list[0].setAttribute('class','process_wrap type_list'); 
            type_card[0].setAttribute('class','process_wrap type_card none'); 
        });
        member_area_a[1].addEventListener('click', function(){
            member_area_a[0].setAttribute('class','btn_list'); 
            this.setAttribute('class','btn_card on'); 
            type_list[0].setAttribute('class','process_wrap type_list none'); 
            type_card[0].setAttribute('class','process_wrap type_card'); 
        });
    }
}
function reply(e){ 
    var reply_area = document.getElementsByClassName('reply_area');
    var btn_view = document.getElementsByClassName('btn_view');
    for (var i = 0; i < reply_area.length; i++){
        btn_view[i].addEventListener('click', function(){
                if(this.getAttribute('class')=='btn_view'){
                    this.setAttribute('class', 'btn_view hide');
                    this.getElementsByTagName('span')[0].innerHTML = '열기';
                    this.previousElementSibling.style.display = 'none';
                }else{
                    this.setAttribute('class', 'btn_view');
                    this.getElementsByTagName('span')[0].innerHTML = '닫기';
                    this.previousElementSibling.style.display = 'table';
                }
        });
        
    }
}