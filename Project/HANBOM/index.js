$(function(){
    //스크롤탑
    $(window).scroll(function(){;
        let scroll = $(window).scrollTop();
         console.log (scroll);
        if (scroll > 50) {
            $('header .menu_btn').addClass('white');
            $('.fix_bar').addClass('white_2');
            $('.logo #text').stop(1,1).animate({'bottom':20,'opacity':0},200);
            $('.border_box').addClass('hov')
        } else {
            $('header .menu_btn').removeClass('white');
            $('.fix_bar').removeClass('white_2');
            $('.logo #text').stop(1,1).animate({'bottom':0,'opacity':1},200);
            $('.border_box').removeClass('hov')
        }
        let workOffset = $('.works ul').offset();
        let windowht = $(window).height();

        if (scroll > 50) {
            $('.fix_bar').addClass('fix_bg');
            if (scroll > workOffset.top-windowht) {
                $('.fix_bar').removeClass('fix_bg');
            }
        } else {
            $('.fix_bar').removeClass('fix_bg')
        }
        //탑 바텀 글자 숨기기
    if (scroll < 1000) {
        $('.footer_box ul a').removeClass('opacity');
        $('.intro .intro_txtbox').removeClass('opacity');
    } else {
        $('.footer_box ul a').addClass('opacity');
        $('.intro .intro_txtbox').addClass('opacity');
    }
    });

    // 메뉴 버튼클릭
    $('header .menu_btn').click(function(){
        $(this).toggleClass('active');
        $(this).siblings('nav').toggleClass('nav_active');
        return false;
    });


    // .message-wrap
    let n = 0;
    $('.message-wrap p').eq(n).addClass('active');
    setInterval(function(){
        $('.message-wrap p').removeClass('active');
        setTimeout(function(){
            if (n < 2) {
            n = n +1;
            }else {
            n = 0; }
            $('.message-wrap p').eq(n).addClass('active');
            $('.message-wrap .active').animate({'width':'100%'},500);
            $('.message-wrap .active').animate({'width':0},500);
        },1000)
    },2000);

    //brochure
    $('.fix_bar .brochure').hover(function(){
        $('.fix_bar .brochure .hide').animate({'top':'-100px','left':'-70px'},500);
    },function(){
        $('.fix_bar .brochure .hide').animate({'top':'500px','left':'-50%'},500);
    });


    // wow
    var wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    );
    wow.init();

    

    var txtBaseH = $('.intro.top .section-wrap').outerHeight();
    var winW = $(window).width();
			var winH = $(window).height();
			var docH = $(document).innerHeight();
			var scTop = $(window).scrollTop();

			var fixTxtTop = $('.intro.top .text').offset().top;
			var nextTop = $('.intro.second').offset().top;
            var barH = $('.fix_bar').outerHeight();
    function mobileChkValle(m,w){
        if (winW > 768) {
            return w;
        }else{
            return m;
        }
    }        

	function hbMain() {
		$('.intro.second .section-wrap').each(function() {

			var winW = $(window).width();
			var winH = $(window).height();
			var docH = $(document).innerHeight();
			var scTop = $(window).scrollTop();

			var fixTxtTop = $('.intro.top .text').offset().top;
			var nextTop = $('.intro.second').offset().top;
			var barH = $('.fix_bar').outerHeight();


			//2. title position
			var calcTop = fixTxtTop - nextTop;
			if ( nextTop > fixTxtTop ) {
				$(this).css('top', calcTop);
				$(this).css('height', txtBaseH);
				$(this).css('padding-top', '');
			} else {
				$(this).css('top', '');

				var pdLimt =mobileChkValle(120,189);

				if ((txtBaseH + calcTop) < winH) {
					$(this).css('height', txtBaseH + calcTop);

					if ( calcTop < pdLimt) {
						$(this).css('padding-top', calcTop);
					} else {
						$(this).css('padding-top', pdLimt);
					}

				} else {
					$(this).css('height', 'auto');
					$(this).css('padding-top', pdLimt);
				}
            }
            var barChange = scTop + winH - barH;
			var heightChange = fixTxtTop;
			if ( nextTop < barChange ){
				//4. intro postion
				if ( nextTop < heightChange ){
					$('.intro').addClass('escape');
				} else {
					$('.intro').removeClass('escape');
				}
			}
		});
	};

	$(window).scroll(function() {
		hbMain();
	});
	hbMain();
});