$.prototype.bgColor = function (color) {

    $(this).css("backgroundColor", color);

}

$.fn.qin = function (colors, widthN) {
    var $li = $(this).find("li");
    var widthLi = $li.width() ;
    var maxLenth =widthLi * $li.length - widthN*($li.length-1);
    $li.each(function (i, e) {
        $(e).bgColor(colors[i]);

    })

    $li.on("mouseenter", function () {

        $(this).stop().animate({ width: maxLenth }).siblings().stop().animate({width:widthN});

    });


    $li.on("mouseleave", function () {

        $li.stop().animate({ width: widthLi })

    });

}