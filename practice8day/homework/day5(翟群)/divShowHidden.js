window.onload = function () {
    my$("btnSwitch").onclick = function () {
        if (my$("box").style.display == "none" || my$("box").style.display == "") {
            my$("box").style.display = "block";
            my$("btnSwitch").innerText = "隐藏div";

        } else {
            my$("box").style.display = "none";
            my$("btnSwitch").innerText = "显示div";
        }


    };

    my$("btnAdd").onclick = function () {

        my$("box2").innerHTML = "前端与移动web开发";

        my$("box2").className = "addClass";
    };

};

function my$(id) {

    return document.getElementById(id);
}