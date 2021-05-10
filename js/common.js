$(function () {
    var a = "active";

    // PC GNB ---- S
    $("#sun_gnb li").click(function () {
        var scrollPosition = $($(this).attr("data-scroll")).offset().top;
        $("html").animate({ scrollTop: scrollPosition }, 500);
    })
    $(window).scroll(function () {
        var gnb = "#sun_gnb li";
        var scroll = $(this).scrollTop();
        if (scroll < 680) {
            $(gnb).removeClass(a);
            $(gnb).eq(0).addClass(a);
            $("#sun_hd").removeClass("fixed");
        } else if (scroll > 680) {
            $(gnb).removeClass(a);
            $("#sun_hd").addClass("fixed");
            if (scroll > 680 && scroll <= 1000) {
                $(gnb).eq(1).addClass(a);
            } else if (scroll > 1000 && scroll <= 1500) {
                $(gnb).eq(2).addClass(a);
            } else {
                $(gnb).eq(3).addClass(a);
            }
        };
    });
    $("#sun_gnb li").click(function () {
        $("#sun_gnb li").removeClass(a);
        $(this).addClass(a);
    })
    // PC GNB ---- E 

    var m_btn = ".m_btn_gnb";
    var m_gnb = "#m_sun_gnb";
    var bg_gnb = ".bg_m_sun_gnb";
    // MOBLIE GNB ---- S
    $(m_btn).click(function () {
        $(this).toggleClass(a);
        $(m_gnb).toggleClass(a);
        $(bg_gnb).fadeToggle();
        event.preventDefault
            ? event.preventDefault()
            : (event.returnValue = false);
    })
    $(bg_gnb).click(function () {
        $(this).fadeOut();
        $(m_btn).removeClass(a);
        $(m_gnb).removeClass(a);
    })
    $("#m_sun_gnb>li").click(function () {
        $(bg_gnb).fadeOut();
        $(m_btn).removeClass(a);
        $(m_gnb).removeClass(a);
    })
    // MOBLIE GNB ---- E

    // LIGHT MODE ---- S
    $(".light_mode").click(function () {
        $(this).toggleClass(a);
        $(this)
            .children()
            .toggleClass(a);
        $("body").toggleClass("lightoff");
    })
    // LIGHT MODE ---- E

    // WORKS OPEN ---- S
    $(".works li").click(function () {
        var n = $(this).index();
        $(".works_open>li")
            .eq(n)
            .fadeIn();
        $(".bg_works").fadeIn();
    })
    $(".works_open button").click(function () {
        $(".works_open>li, .bg_works").fadeOut();
    })
    $(".bg_works").click(function () {
        $(this).fadeOut();
        $(".works_open>li, .bg_works").fadeOut();
    })
    // WORKS OPEN ---- E
})
