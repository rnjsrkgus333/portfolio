$(function(){
    $(".menubtn").click(function(){
        $(".menu").slideToggle();
    });
    $('.menu .list .box').on('click',function(){
        $(".menu").slideUp();
    });

    $('#topBtn').click(function(){
        $('html, body').animate({scrollTop:0},500);
        return false;
    });
    $('.shortcut_btn a').hover(function(){
        $(this).animate({boxShadow:'10px 10px #eee9e4'},200).clearQueue();
    },function(){
        $(this).animate({boxShadow:'0px 0px'},200).clearQueue();
    });

    $(window).resize(function(){
        let wid = $(window).width();
        if (wid < 1024) {
            $('.preview img').attr({'src':'images/PC_KANGOL_preview.gif'});
        }
    });
    $('.preview').hover(function(){
        $('.preview img').attr({'src':'images/PC_KANGOL_preview.gif'});
    },function(){
        $('.preview img').attr({'src':'images/PC_KANGOL_preview.png'});
    });

});