
var pipTop = [];
window.onload = function () {

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

    var gameOver = false;
    var terminalY = bgdiv.offsetHeight - birdDom.offsetHeight;
    setInterval(() => {
        if (!gameOver) {
            sky.postion -= 5;

            bgdiv.style.backgroundPositionX = sky.postion + "px";

            bird.speedY += gravity;
            bird.y = bird.y + bird.speedY;
            if (bird.y > terminalY) {
                bird.y = terminalY;
                gameOver = true;
            }
            if (bird.y < bgdiv.offsetTop) {
                bird.y = bgdiv.offsetTop;
                gameOver = true;
            }
            birdDom.style.top = bird.y + "px";

        }


    }, 30);

    bgdiv.onclick = function () {
        bird.speedY -= 10;

    }
    var random = Math.random(0, 1);
    var top = 0 - Math.ceil(random * 420);
    var left = Math.ceil(random * 600);
    new PipTop(top, left);
    setInterval(() => {
        if (!gameOver) {
            random = Math.random(0, 1);
            top = 0 - Math.ceil(random * 420);
            left = Math.ceil(random * 600);
            new PipTop(top, left);
        }

    }, 1000)

};

function my$(id) {

    return document.getElementById(id);
}

function PipTop(top, left) {

    for (var index = 0; index < pipTop.length; index++) {
        var pip = pipTop[index];
        if (Math.abs(pip.left - left) <= 120) {
            return;
        }

    }

    var divPip = document.createElement("div");
    divPip.className = "popTop";
    divPip.style.left = left + "px";
    divPip.style.top = top + "px";
    my$("bgDiv").appendChild(divPip);
    pipTop.push(divPip);



}