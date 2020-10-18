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

    // 사이즈 선택
    $('.prod_info .prod_select').hide();
    $('#alignSelct').on('change',function(){
        $('.prod_info .prod_select').slideDown();
        $('.prod_info .prod_select #size span').text($(this).val());
        $('.prod_num').text('1')
        var basic_price = parseInt('168000');
        var total = basic_price* 1;
        $('.prod_price span').text(total.toLocaleString());
    });
    $('.prod_info .prod_select .close').on('click',function(){
        $('.prod_info .prod_select').slideUp();
        $('.prod_price span').text(0);
    });


    // 수량 조절
    $('.Minus').on('click',function(e){
        e.preventDefault();
        var stat = $('.prod_num').text();
        var num = parseInt(stat,10);
        num--;
        if(num <= 0){
            num=1;
            return;
        }
        $('.prod_num').text(num);
        var basic_price = parseInt('168000');
        var total = basic_price* num;
        $('.prod_price span').text(total.toLocaleString());
    });
    $('.Plus').on('click',function(e){
        e.preventDefault();
        var stat = $('.prod_num').text();
        var num = parseInt(stat,10);
        num++;
        if(num > 10){
            alert('최대 구매수량은 10개 입니다.')
            num=10;
            return;
        }
        $('.prod_num').text(num);
        var basic_price = parseInt('168000');
        var total = basic_price* num;
        $('.prod_price span').text(total.toLocaleString());
    });
    // 금액 변경 
    var basic_price = parseInt('168000');
    var total = basic_price* $('.prod_num').text();
    $('.prod_price span').text(total);

    //prod_btn
    $('.prod_btn .buy a').on('click',function(){
        let buy = confirm('구입하시겠습니까?')
        if(buy) {
            alert('준비중입니다.')
        } else {
            alert('구매가 취소되었습니다.')
        }
    });
    
    $('.prod_btn .add_to a').on('click',function(){
        // 
        let add_to = alert('장바구니에 담겼습니다.');
        let num1 = $('.prod_num').text();
        let num2 =  $('.nav_menu .box').text();
        let add =  Number(num1) + Number(num2);

        $('.nav_menu .box').remove();
        $('.nav_menu li').eq(4).html('<div class="box">0</div>');
        // $('.menu_box .nav_menu li').eq(4).html('<div class="box">0</div>');
        $('.nav_menu .box').text(add);
        //선생님한테 물어보기
    });
    // $('.prod_btn .add_to a').change(function(){
    //     let num1 = $('.prod_num').text();
    //     let num2 =  $('.nav_menu .box').text();
    //     let add =  Number(num1) + Number(num2);
    //     $('.nav_menu .box').text(add);
    
        
    // });
    // $('.prod_btn .add_to a').on('click',function(){
    //         $('.prod_btn .add_to a').change();
    //     });

    //popup
    $('.info_tap .sizeInfo > a').on('click',function(){
        $('.info_tap .sizeInfo_popup').css('display','block');
    });
    $('.info_tap .detailInfo > a').on('click',function(){
        $('.info_tap .detailInfo_popup').css('display','block');
    });

    $('.info_tap .close').on('click',function(){
        $('.info_tap .popup').css('display','none');
    });

    // pc info 높이값
    let wid = $(window).width();
    let maiht = $('.prod_main').height();
    if (wid >= 1024) {
        $('.prod_info').height(maiht);
    }
   
    //prod_info 픽스
    
    $(window).scroll(function(){
        let windowht = $(window).scrollTop();
        var mainOffset = $( '.prod_main' ).offset();
        var footerOffset = $( 'footer' ).offset();
        let infoht = $('.prod_info').height();
        let added = Number(footerOffset.top) - Number(infoht);
         if (windowht >= mainOffset.top) {
             $('.prod_info').addClass('prod_info_fixed');
        $('.prod_info_fixed').css({'top':'0','bottom':'auto'});
            if (windowht >= added) {
            // $('.prod_info').removeClass( 'prod_info_fixed');
            
            $('.prod_info_fixed').css({'top':'auto','bottom':'334px'});
            }

        }
        else {
            $('.prod_info').removeClass( 'prod_info_fixed');
        }


});
    
        
});