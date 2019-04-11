

window.onload = function () {
    var gameOver = false;
    var sky = {
        postion: 0,


    };
    var birdDom = my$("me");
    var bird = {
        speedY: 0,
        x: birdDom.offsetLeft,
        y: birdDom.offsetTop,

    };
    var bgdiv = my$("bgDiv");
    var gravity = 1;


    var terminalY = bgdiv.offsetHeight - birdDom.offsetHeight;
    setInterval(() => {
        if (!gameOver) {
            sky.postion -= 5;

            bgdiv.style.backgroundPositionX = sky.postion + "px";

            bird.speedY += gravity;
            bird.y = bird.y + bird.speedY;
            if (bird.y > terminalY) {
                bird.y = terminalY;
                gameOverCC();
            }
            if (bird.y < bgdiv.offsetTop) {
                bird.y = bgdiv.offsetTop;
                gameOverCC();
            }
            birdDom.style.top = bird.y + "px";

        }


    }, 30);

    bgdiv.onclick = function () {
        bird.speedY = -10;

    }

    for (var index = 0; index < 4; index++) {
        var random = Math.random(0, 1);
        var height = Math.ceil(random * 300);
        var left = (index + 1) * 150;
        new PipDiv(height, left);
    }

    function my$(id) {

        return document.getElementById(id);
    }

    function PipDiv(height, left) {
        this.left = left;
        var bgDiv = my$("bgDiv");
        var divTop = document.createElement("div");
        divTop.className = "popTop";
        divTop.style.left = left + "px";
        divTop.style.top = 0 + "px";
        divTop.style.height = height + "px";
        bgDiv.appendChild(divTop);

        var divBottome = document.createElement("div");
        divBottome.className = "popBottome";
        divBottome.style.left = left + "px";
        divBottome.style.top = (height + 200) + "px";
        divBottome.style.height = (bgDiv.offsetHeight - height - 200) + "px";
        bgDiv.appendChild(divBottome);

        // setInterval(function () {

        //     divTop.style.left = parseInt(divTop.style.left) - 10 + "px";
        //     divBottome.style.left = parseInt(divBottome.style.left) - 10 + "px";

        // }, 30);

        var that = this;
        setInterval(function () {
            if (!gameOver) {

                that.left = that.left - 1;

                if (that.left <= -divBottome.offsetWidth) {

                    that.left = bgDiv.offsetWidth - divBottome.offsetWidth;
                }
                divTop.style.left = that.left + "px";
                divBottome.style.left = that.left + "px";

                if (birdDom.offsetLeft + birdDom.offsetWidth >= that.left && birdDom.offsetLeft <= that.left + divBottome.offsetWidth) {
                    if (birdDom.offsetTop <= divTop.offsetHeight || birdDom.offsetTop + birdDom.offsetHeight >= divBottome.offsetTop) {
                        gameOverCC();
                    }
                }
            }

        }, 30);

    }

    function gameOverCC() {
        gameOver = true;
        // if ( confirm("游戏已结束，时候重新开始")) {
        //     window.location.reload();
        // }

    }

};

