window.onload = function () {

    var time = parseInt(getInnertext(my$("time")));

    setInterval(function() {

        if (time > 1) {
            time--;
            setInnertext(my$("time"), time);
        } else {

            window.location.href = my$("redirectUrl").href;
        }

    }, 1000);

};


function getInnertext(obj) {

    var temp = obj.innerText;
    if (typeof temp == "undefined") {
        return obj.textContent;
    }
    return temp;
}

function setInnertext(obj, value) {

    var temp = obj.innerText;
    if (typeof temp == "undefined") {
        obj.textContent = value;
    }
    obj.innerText = value

}

function my$(id) {
    return document.getElementById(id);

}