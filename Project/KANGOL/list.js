$(function(){
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });
    // 스크롤탑

    $( '.topBtn' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 500 );
        return false;
    } );

    // mo_head
    $(window).on('scroll',function(){
        let ht = $(this).scrollTop();
         if (ht >= 0) {
         $('header .mo_head').addClass('active');
         } else {
         $('header .mo_head').removeClass('active');
         };
    });

    // mo_menu
    $('header .mo_head .menuBtn').on('click',function(){
        $('header .mo_menu').animate({left:0},400)
        $('.opacity').css('display','block')
    });
    $('.opacity').on('click',function(){
        $('header .mo_menu').animate({left:'-70%'},400)
        $('.opacity').css('display','none')
    });
    $('header .mo_menu .closeBtn').on('click',function(){
        $('header .mo_menu').animate({left:'-70%'},400)
        $('.opacity').css('display','none')
    });

    // mo_nav 서브메뉴
    $('header #mo_nav .menu_subBtn').on('click',function(){
        const on = $(this).hasClass('on');
        if(on == false) {//.on이 없는 경우
            $('header #mo_nav .menu_subBtn img').attr('src','images/mo_menu_sub.png');
            $('header #mo_nav .menu_subBtn').removeClass('on');
            $(this).addClass('on')
            $('header #mo_nav .sub_nav').stop().slideUp();
            $(this).next('.sub_nav').stop().slideDown();
            $(this).children('img').attr('src','images/mo_menu_sub-2.png')
        } else {//.on인 경우, 이미 클릭된 title
            $(this).removeClass('on');
            $(this).next('.sub_nav').slideUp();
            $('header #mo_nav .menu_subBtn img').attr('src','images/mo_menu_sub.png');
        };
    });

    //pc 메뉴
    $("header #pc_nav > li").hover(function(){//== mouseenter(); 마우스를 올렸을때
    $(this).children('.sub_nav').stop().slideDown();
    }, function(){// == mouseleave(); 마우스가 벗어났을떄
    $(this).children('.sub_nav').stop().slideUp();
    });
        
// Best slider

    let wid = $(window).width()
    if (wid < 1024) {

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 2,
            loop: true,
            autoplay: {delay:3000},
            loopFillGroupWithBlank: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.next_btn',
              prevEl: '.prev_btn',
            },
          });
    } else if (wid >= 1024) {
        // window.location.stop().reload();
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 4,
            loop: true,
            autoplay: {delay:3000},
            loopFillGroupWithBlank: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
                nextEl: '.next_btn',
                prevEl: '.prev_btn',
            },
          });
    };
});
    
        


