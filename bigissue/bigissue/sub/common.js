$(function () {
    var cnt0 = 1800;
    counterFn();
    function counterFn() {
        id0 = setInterval(count0Fn, 50);
        function count0Fn() {
            cnt0 += 10;
            if (cnt0 > 2010) {
                clearInterval(id0);
            } else {
                $(".start_about_number_top").text(cnt0);
            }
        }
    }

    var cnt1 = 200;
    counterFn1();
    function counterFn1() {
        id1 = setInterval(count1Fn1, 75);
        function count1Fn1() {
            cnt1 += 40;
            if (cnt1 > 800) {
                clearInterval(id1);
            } else {
                $(".start_about_number_bottom").text(cnt1);
            }
        }
    }
});