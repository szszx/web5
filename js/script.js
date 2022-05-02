(function($){
    var factory={
        start:function(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
            this.modla();
        },
        header:function(){
            $('.menu-btn').on({
                mouseenter:function(){
                    $('.sub-bg').stop().slideDown(300);
                    $('.sub').stop().slideDown(300);
                    $('.menu-btn').removeClass('on');
                    $(this).addClass('on') 
                },
                focusin:function(){
                    $('.sub-bg').stop().slideDown(300);
                    $('.sub').stop().slideDown(300);
                    $('.menu-btn').removeClass('on');
                    $(this).addClass('on') 
                },
            });
            $('.container').on({
                mouseleave:function(){
                    $('.sub-bg').stop().slideUp(300);
                    $('.sub').stop().slideUp(300);
                    $('.menu-btn').removeClass('on');
                }
            });
        },
        section1:function(){
            cnt=0;
            function mainSlide(){
                $('.slide-wrap').animate({left:`${-100*cnt}%`},600,function(){
                    cnt>2?cnt=0:cnt;
                    $('.slide-wrap').animate({left:`${-100*cnt}%`},0);
                });
            };
            function nextCount(){
                cnt++;
                mainSlide();
            };
            function autoTimer(){
                setInterval(nextCount,3000);
            };
            autoTimer();
        },
        section2:function(){

        },
        footer:function(){

        },
        modla:function(){
            $('.link-btn').on({
                click:function(){
                    $('#modal').fadeIn(300)
                }
            });
            $('.close-btn').on({
                click:function(){
                    $('#modal').fadeOut(300)
                }
            });
        }
    };
    factory.start()

    
})(jQuery);
