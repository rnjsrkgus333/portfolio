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
    
    // typewriter
    var typewriter = new Typewriter('.myintro .txt h4', {
                            loop: true //반복
                        });
        typewriter.typeString('신입 웹 퍼블리셔 권가현입니다.') //글자 입력
                            .pauseFor(4000) //딜레이
         .deleteAll()
        .typeString('언제나 열심히 달려가는 권가현입니다.')
        .pauseFor(4000) //딜레이
                            .start();



    // // 예시예시
    // $(document).mousemove(function(e){
    //     // 마우스 커서 변수
    //     var mouseX = e.pageX;
    //     var mouseY = e.pageY;

    //     $('#project .box .mouse_img').css({'top':mouseY,'left':mouseX})

    // });

    // // $('#project .box').hover(function(){
    // //     $(this).children('.mouse_img').css({'display':'block'})
    // // }, function(){
    // //     $(this).children('.mouse_img').css({'display':'none'})
    // // });

});