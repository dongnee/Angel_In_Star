$(function(){
    $('#menu li:first-child').on('click',function(){
        var offset = $('#coffee').offset();
        $('html').animate({scrollTop:offset.top},400);
    });

    $('#menu li:nth-child(2)').on('click',function(){
        var offset = $('#beverage').offset();
<<<<<<< Updated upstream
        $('html').animate({scrollTop:offset.top},600);
=======
        $('html').animate({scrollTop:offset.top},800);
>>>>>>> Stashed changes
    });

    $('#menu li:nth-child(3)').on('click',function(){
        var offset = $('#bread').offset();
<<<<<<< Updated upstream
        $('html').animate({scrollTop:offset.top},800);
=======
        $('html').animate({scrollTop:offset.top},1200);
>>>>>>> Stashed changes
    });

    $('#menu li:nth-child(4)').on('click',function(){
        var offset = $('#icecream').offset();
<<<<<<< Updated upstream
        $('html').animate({scrollTop:offset.top},1000);
=======
        $('html').animate({scrollTop:offset.top},1600);
    });

    $(window).on('scroll',function(){
        if($(document).scrollTop() >= ($('#headerBox').height()+$('#mainMenuBox').height())){
            $('#menuProduct').addClass('menuBoxFixed'); /*menu.css에 있음*/
        }
        else{
            $('#menuProduct').removeClass('menuBoxFixed');
        }
>>>>>>> Stashed changes
    });
});
