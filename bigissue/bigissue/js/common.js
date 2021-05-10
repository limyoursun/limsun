$(function(){
// GNB DEPTH ---- S
    $("#bigissue_gnb").on("mouseover focusin",function(){
        $("#bigissue_gnb, .depth2").addClass("active");
    });
    $("#bigissue_gnb").on("mouseout focusout",function(){
        $("#bigissue_gnb, .depth2").removeClass("active");
    });
// GNB DEPTH ---- E

// BXSLIDER 1 ---- S
    $(".bxslider").bxSlider({
        controls:false,
        pause:3000,
        auto:true,
        autoHover:true
    });
// BXSLIDER 1 ---- E

// MAIN BANNER CONTROL BAR ---- S
    $(".bx-pager-item>a").eq(0).text("나를 일으켜 세우는 힘, 빅이슈");
    $(".bx-pager-item>a").eq(1).text("비와 빅이슈를 잇다");
    $(".bx-pager-item>a").eq(2).text("빅이슈 10주년, 당신 덕분입니다");
    // MAIN BANNER CONTROL BAR ---- E
   
// BXSLIDER 2 ---- S
    $(".bxslider2").bxSlider({
        controls:true,
        slideMargin:30,
        auto:true,
        stopAutoOnClick:false,
        pause:5000,
        pager:false,
        minSlides:1,
        maxSlides:4,
        moveSlides:1,
        slideWidth:420,
        autoHover:true,
        nextText:'>',
        prevText:'<'
    });
// BXSLIDER 2 ---- E

// TOP BUTTON ---- S
        $(window).scroll(function(){
            var sct=$(window).scrollTop();
            console.log(sct);
            if(sct>=1000){
                $(".btn_top").fadeIn(300);
            }else{
                $(".btn_top").fadeOut(300);
            }
        });
        $(".btn_top").click(function(){ 
            $("html,body").stop().animate({"scrollTop":"0px"},1000);
            return false;
        });
// TOP BUTTON ---- E

// MOBLIE GNB ---- S
    $(".m_btn_gnb").stop().click(function(){
        $("#bigissue_m_gnb, .bg_gnb").toggleClass("active");
        $(this).toggleClass("off");
        $(".m_depth2").delay(500).slideUp(300,function(){
            $(".m_depth1").removeClass("off");
        })
       return false;
    })
    $(".m_depth1").click(function(){
       $(this).addClass("off");
       $(this).parent().siblings().children("a").removeClass("off");
       $(this).next().stop().slideDown(300);
       $(this).parent().siblings().children("ul").stop().slideUp(300);
       return false;
    })
// MOBLIE GNB ---- E

})