$(function(){

    $('#menu li:nth-child(1)').on('click',function(){
        $('#coffee').show();
        $('#beverage').show();
        $('#bread').show();
        $('#icecream').show();
        $('#map_all').addClass('click_sub_title');
        $('#map_coffee').removeClass('click_sub_title');
        $('#map_beverage').removeClass('click_sub_title');
        $('#map_bread').removeClass('click_sub_title');
        $('#map_icecream').removeClass('click_sub_title');
    });

    $('#menu li:nth-child(2)').on('click',function(){
        $('#coffee').show();
        $('#beverage').hide();
        $('#bread').hide();
        $('#icecream').hide();
        $('#map_all').removeClass('click_sub_title');
        $('#map_coffee').addClass('click_sub_title');
        $('#map_beverage').removeClass('click_sub_title');
        $('#map_bread').removeClass('click_sub_title');
        $('#map_icecream').removeClass('click_sub_title');
    });

    $('#menu li:nth-child(3)').on('click',function(){
        $('#coffee').hide();
        $('#beverage').show();
        $('#bread').hide();
        $('#icecream').hide();
        $('#map_all').removeClass('click_sub_title');
        $('#map_coffee').removeClass('click_sub_title');
        $('#map_beverage').addClass('click_sub_title');
        $('#map_bread').removeClass('click_sub_title');
        $('#map_icecream').removeClass('click_sub_title');
    });

    $('#menu li:nth-child(4)').on('click',function(){
        $('#coffee').hide();
        $('#beverage').hide();
        $('#bread').show();
        $('#icecream').hide();
        $('#map_all').removeClass('click_sub_title');
        $('#map_coffee').removeClass('click_sub_title');
        $('#map_beverage').removeClass('click_sub_title');
        $('#map_bread').addClass('click_sub_title');
        $('#map_icecream').removeClass('click_sub_title');
    });

    $('#menu li:nth-child(5)').on('click',function(){
        $('#coffee').hide();
        $('#beverage').hide();
        $('#bread').hide();
        $('#icecream').show();
        $('#map_all').removeClass('click_sub_title');
        $('#map_coffee').removeClass('click_sub_title');
        $('#map_beverage').removeClass('click_sub_title');
        $('#map_bread').removeClass('click_sub_title');
        $('#map_icecream').addClass('click_sub_title');
    });

    /*말풍선*/
    $(document).ready(function(){

        $('.bubble').hide();

        setInterval(function(){
            $('.bubble').fadeIn(3000);

            var msgBox=new Array();
            msgBox[0]="시원한 아이스커피는 어떠세요?";
            msgBox[1]="동남아가 생각나는 콜드브루를 추천해요!";
            msgBox[2]="향긋한 카라멜 마키야또는 어떠신가요?";
            msgBox[3]="Angel in Star만의 에스프레소를 맛보세요";
            msgBox[4]="오랜만에 상큼한 망고 블렌디드 어떤가요?";
            msgBox[5]="인기메뉴 유자 티를 추천해요!";
            msgBox[6]="오랜만에 따뜻한 카푸치노가 좋겠군요!";
            msgBox[7]="신메뉴 블루베리 머핀을 맛보세요!";
            msgBox[8]="오늘의 디저트로 치즈볼을 추천드려요";
            msgBox[9]="달콤한 바닐라 초코칩 아포가토는 어떤가요?";
            msgBox[10]="시즌한정메뉴 딸기요거트도 있어요";

            var random_num = Math.floor(Math.random()*(msgBox.length));

            var original_msg = document.getElementById("msg");

            original_msg.textContent = (msgBox[random_num]);

        },10000);
    });

    //윈도우객체 스크롤시(이벤트-scroll) document의 메인 메뉴 고정
    $(window).on('scroll',function(){ //윈도우객체에서 scroll이벤트가 발생하면
        //스크롤되는 document객체의 top위치가 #headerBox height(index.css 6라인 60px) 이상이면 메인메뉴는 고정되고 그림자를 표시
        if($(document).scrollTop() >= $('#headerBox').height()){
        //메인메뉴 고정, 그림자 표시를 위한 동적 클래스를 부착(index.css에 생성해놨음 20~28라인)
            $('.bubble').addClass('bubbleBoxFixed');

        }else{
            $('.bubble').removeClass('bubbleBoxFixed');
        }
    });




});
