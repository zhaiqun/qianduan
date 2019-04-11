window.onload = function () {
    function my$(id) {
        return document.getElementById(id);

    }


    var timeId1 = setInterval(function () {
        sliderRightHander();


    }, 1000)
    my$("photosDiv").onmouseover = function () {
        clearInterval(timeId1);
        my$("photosDiv").children[0].style.display = "block";

    }
    my$("photosDiv").onmouseout = function () {
        clearInterval(timeId1);

        my$("photosDiv").children[0].style.display = "none";
        timeId1 = setInterval(function () {
            sliderRightHander();


        }, 1000);

    };

    function move(element, target) {

        clearInterval(timeid);
        var timeid = setInterval(function () {
            var currentPosition = element.offsetLeft;
            var step = 10;
            step = (target > currentPosition ? step : -step);
            if (Math.abs(target - currentPosition) > Math.abs(step)) {
                currentPosition += step;
                element.style.left = currentPosition + "px";
            } else {
                element.style.left = target + "px";
                clearInterval(timeid);
            }

        }, 30)


    }
    var photosDiv = my$("photosDiv");

    var ol = photosDiv.children[2];
    var olList = ol.children;


    var picUl = photosDiv.children[1];
    var fisrtPic = picUl.children[0].cloneNode(true);
    picUl.appendChild(fisrtPic);
    var picWidth = 196;
    var picIndex = 0;
    for (var index = 0; index < olList.length; index++) {
        var currentOlli = olList[index];

        currentOlli.setAttribute("index", index);
        currentOlli.onclick = olLiClickHandle;

    }

    my$("sliderLeft").onclick = function () {
        if (picIndex == 0) {
            picIndex = picUl.children.length - 1;
        }

        picIndex--;
        for (var index = 0; index < olList.length; index++) {
            olList[index].className = "";
        }
        olList[picIndex].className = "current";
        move(picUl, -picIndex * picWidth);
    }

    var sliderRightHander = function () {
        if (picIndex == picUl.children.length - 1) {
            picUl.style.left = 0;
            picIndex = 0;
        }
        for (var index = 0; index < olList.length; index++) {
            olList[index].className = "";
        }
        picIndex++;
        if (picIndex > olList.length - 1) {
            olList[0].className = "current";
        } else {
            olList[picIndex].className = "current";

        }
        move(picUl, -picIndex * picWidth);



    };
    my$("sliderRight").onclick = sliderRightHander;

    function olLiClickHandle() {

        picIndex = this.getAttribute("index");

        move(picUl, -picIndex * picWidth);

        for (var index = 0; index < olList.length; index++) {
            olList[index].className = "";
        }
        this.className = "current";
    }



};