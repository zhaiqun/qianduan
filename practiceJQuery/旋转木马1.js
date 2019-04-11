
function my$(id) {

    return document.getElementById(id);
}


var config = [
    {
        width: 400,
        top: 20,
        left: 50,
        opacity: 0.2,
        zIndex: 2
    },//0
    {
        width: 600,
        top: 70,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    },//1
    {
        width: 800,
        top: 100,
        left: 200,
        opacity: 1,
        zIndex: 4
    },//2
    {
        width: 600,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    },//3
    {
        width: 400,
        top: 20,
        left: 750,
        opacity: 0.2,
        zIndex: 2
    }//4

];






window.onload = function () {
    var list = my$("slide").getElementsByTagName("li");
    function assign() {

        for (var index = 0; index < list.length; index++) {
            animate(list[index], config[index]);

        }
    }
    assign();

};

function animate(element, jsonObj, f) {
    var step = 10;
    var flag = true;
    for (var key in jsonObj) {
        var target = jsonObj[key];

        if (key.toLowerCase() == "zindex") {
            element.style.key = target;
            console.log(key + "结束");
            // continue;
        } else {
            element.timeId = setInterval(function () {

                console.log(element.timeId);
                var current = getStyleCss(element, key);

                console.log(key + "开始改变");
                if (key == "opacity") {
                    current = current * 100;
                    target = target * 100;
                    console.log(key + "opacity开始改变");
                }
                current = isNaN(current) ? parseInt(current) : current;
                step = target > current ? Math.abs(step) : - Math.abs(step);
                if (Math.abs(target - current) > Math.abs(step)) {
                    current += step
                    flag = false;
                } else {
                    flag = true;
                    current = target;

                    console.log(key + "开始改变结束");
                }

                if (key == "opacity") {
                    element.style.key = current / 100;
                } else {
                    element.style.key = current + "px";

                }

            }, 30)

        }


    }

    if (flag && f) {
        f();
    }





}


function getStyleCss(element, styleType) {

    if (window.getComputedStyle) {

        window.getComputedStyle(element, null)[styleType];
    } else {

        element.currentStyle[styleType];
    }

}