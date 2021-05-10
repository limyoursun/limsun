$(function () {
    // GNB DEPTH ---- S
    $("#bigissue_gnb").on("mouseover focusin", function () {
        $("#bigissue_gnb, .depth2").addClass("active");
    });
    $("#bigissue_gnb").on("mouseout focusout", function () {
        $("#bigissue_gnb, .depth2").removeClass("active");
    });
    // GNB DEPTH ---- E

    // TOP BUTTON ---- S
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        console.log(sct);
        if (sct >= 1000) {
            $(".btn_top").fadeIn(300);
        } else {
            $(".btn_top").fadeOut(300);
        }
    });
    $(".btn_top").click(function () {
        $("html,body").stop().animate({ "scrollTop": "0px" }, 1000);
        return false;
    });
    // TOP BUTTON ---- E

    // MOBLIE GNB ---- S
    $(".m_btn_gnb").stop().click(function () {
        $("#bigissue_m_gnb, .bg_gnb").toggleClass("active");
        $(this).toggleClass("off");
        $(".m_depth2").delay(500).slideUp(300, function () {
            $(".m_depth1").removeClass("off");
        });
        return false;
    });
    $(".m_depth1").click(function () {
        $(this).addClass("off");
        $(this).parent().siblings().children("a").removeClass("off");
        $(this).next().stop().slideDown(300);
        $(this).parent().siblings().children("ul").stop().slideUp(300);
        return false;
    });
    // MOBLIE GNB ---- E
})