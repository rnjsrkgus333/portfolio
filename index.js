$(document).ready(function(){
    $(".menubtn").click(function(){
        $(".menu").slideToggle();
    });
    $('.menu .list .box').on('click',function(){
        $(".menu").slideUp();
    });

    $(window).resize(function(){
        let wid = $(window).width();
        if (wid < 1024) {
            let title = $('.title');
            let title_img = $('.title img');
            $(title_img).clone().appendTo(title);
            gsap.to(title,5,{x: -(title_img.width()),repeat: -1,ease:'none'});
        };
    });
    $('.contact .logo #logo_nothov').hover(function(){
        $(this).attr({'src':'images/logo_hov.png'});
    },function(){
        $(this).attr({'src':'images/logo.png'});
    });
    
});