$(function () {
    $('.containner').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad: function (p, obj1) {


            $(".section").eq(obj1.index).addClass("now");
        },

        afterRender: function () {

            $(".moreNav").click(function () {
                // $('.containner').moveTo($(".section.now").eq(($(".section.now").lenth  || 0)+1),null )
                $.fn.fullpage.moveSectionDown();


            });

            $(".screen04 .cart").on("transitionend", function () {

                $(".screen04 .text01,.screen04 .text02").addClass("show");
                $(".screen04 .address").show().find("img:eq(1)").fadeIn(1000);


            });

            $(".screen05 .mouse2").on("transitionend", function () {

                $(".screen05  .order").addClass("show");
                $(".screen05  .sofa").addClass("down");

            });

            $(".screen06 .box").on("animationend", function () {

                $(".screen06").addClass("run");

            });
            $(".screen06  .worker").on("animationend", function () {

                $(".buyer").hide();
                $(".address").fadeIn();
                $(".door").fadeIn(0.3);
                $(".person").addClass("show");



            });

            $(".screen06 .person").on("transitionend", function () {

                $(".say").addClass("show");
                $(".screen06").addClass("textChange");

            });

            $(".screen08 .btn").on("mouseenter", function () {

                $(".screen08 .btn2").show();

            }).on("mouseleave", function () {

                $(".screen08 .btn2").hide();

            });
            $(".screen08").on("mousemove", function (e) {
                var $hand = $(this).find(".hand")
                $hand.css({ "left": e.clientX - (Math.ceil($hand.width() / 2)), "top": e.clientY + 20 })


            });

            $(".screen08  .again").on("click", function (e) {
                $(".now,.leave,.show,.run").removeClass("now").removeClass("leave").removeClass("show");

                $(".content[style]").removeAttr("style");

                $.fn.fullpage.moveTo(1);
            });

        },

        onLeave: function () {
            var aru = arguments;
            if (arguments[2] = "down") {

                if ((arguments[1].index == 2 && arguments[0].index == 1)

                    || (arguments[1].index == 3 && arguments[0].index == 2)
                    || (arguments[1].index == 5 && arguments[0].index == 4)

                ) {
                    $(".section").eq(arguments[1].index - 1).addClass("leave");

                }


                if ((arguments[1].index == 5 && arguments[0].index == 4)) {
                    $(".section").eq(arguments[1].index).find(".box").addClass("move");
                }

                // 从第6屏到到第7屏
                if (arguments[1].index == 6 && arguments[0].index == 5) {
                    $(".screen07  .star  img").each(function (i, item) {

                        $(this).delay(i * 500).fadeIn();
                    })
                }


            }

        },
        scrollingSpeed: 1000,
    });




});