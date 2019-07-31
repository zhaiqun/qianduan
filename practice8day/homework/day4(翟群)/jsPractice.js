window.onload = function () {
    /*document.getElementById("btnSum").onclick = function () {
        document.getElementById("result").innerHTML = "";
        var inputN = document.getElementById("inputN").value;

        var inputM = document.getElementById("inputM").value;

        if (isNum(inputN) && isNum(inputM)) {
            var result = GetSum(parseInt(inputN), parseInt(inputM));
            document.getElementById("result").innerHTML = inputN + "到" + inputM + "所有整数和为：" + result;
        }


    };*/
    document.getElementById("btnMaxAndMin").onclick = function () {
        document.getElementById("result2").innerHTML = "";
        var inputStr = document.getElementById("inputArray").value;
        var arrayStr = inputStr.split("|");
        for (var index = 0; index < arrayStr.length; index++) {
            if (!isNum(arrayStr[index])) {
                return;
            }

        }

        var numArray = ConverttoIntArray(arrayStr);
        var max = GetMax(numArray);
        var min = GetMin(numArray);
        document.getElementById("result2").innerHTML = "最大值：" + max + "最小值：" + min;



    };

};

/**判断输入的值时候为数字
 * @param  {} str
 */
function isNum(inputStr) {
    if (inputStr.length == 0) {
        alert("请输入数字");
    } else if (isNaN(Number(inputStr))) {
        alert("您输入的不是数字");
    } else {

        return true;
    }
    return false;

}


/**计算从n到m所有整数之和
 * @param  {} n
 * @param  {} m
 */

function GetSum(n, m) {
    if (n > m) {
        n = n + m;
        m = n - m;
        n = n - m;
    }
    var sum = 0;
    for (var index = n; index <= m; index++) {
        sum += index;
    }
    return sum;
}


/**获取数组中的最小值
 * @param  {} array
 */
function GetMin(array) {
    var min = array[0];
    if (array.length > 1) {

        for (var index = 1; index < array.length; index++) {
            if (array[index] < min) {
                min = array[index];
            }

        }
    }

    return min;

}

/**获取数组中的最大值
 * @param  {} array
 */
function GetMax(array) {

    var max = array[0];

    if (array.length > 1) {
        for (var index = 1; index < array.length; index++) {
            if (array[index] > max) {
                max = array[index];
            }

        }
    }

    return max;

}

function ConverttoIntArray(strArray) {
    var intArray = [];
    for (var index = 0; index < strArray.length; index++) {
        intArray[intArray.length] = parseFloat(strArray[index]);
    }
    return intArray;
}