
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

    var lock = false;
    var list = my$("slide").getElementsByTagName("li");
    function assign() {

        for (var index = 0; index < list.length; index++) {
            animate(list[index], config[index]);

        }
        lock = true;
    }
    assign();

    my$("arrLeft").onclick = function () {
        if (lock) {
            lock = false;
            config.unshift(config.pop());
            assign();
        }



    };

    
    // setInterval(function(){
    //     fRight();
    // },2000);
    my$("arrRight").onclick = fRight;
    function fRight() {

        if (lock) {
            lock = false;
            config.push(config.shift());
            assign();
        }
    }
};

function animate(element, jsonObj, f) {
    var step = 10;


    element.timeId = setInterval(function () {
        var flag = true;
        for (var key in jsonObj) {
            var target = jsonObj[key];

            if (key.toLowerCase() == "zindex") {
                element.style[key] = target;

                // continue;
            } else {
                console.log(element.timeId);
                var current = getStyleCss(element, key);
                if (key == "opacity") {
                    current = current * 100;
                    target = target * 100;

                }
                current = isNaN(current) ? parseInt(current) : current;
                step = target > current ? Math.abs(step) : - Math.abs(step);
                if (Math.abs(target - current) > Math.abs(step)) {
                    current += step
                    flag = false;
                } else {
                    current = target;

                }

                if (key == "opacity") {
                    element.style[key] = current / 100;
                } else {
                    element.style[key] = current + "px";

                }

            }

        }

        if (flag) {
            clearInterval(element.timeId);
            console.log("完毕");
            if (f) {
                f();
            }



        }
    }, 10);
}










function getStyleCss(element, styleType) {

    if (window.getComputedStyle) {

        return window.getComputedStyle(element, null)[styleType];
    } else {

        return element.currentStyle[styleType];
    }

}