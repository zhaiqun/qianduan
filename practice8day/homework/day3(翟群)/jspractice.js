window.onload = function () {
    document.getElementById("btnSum").onclick = function () {
        var inputStr = document.getElementById("inputNum").value;
        document.getElementById("error").innerHTML="";
        document.getElementById("result").innerHTML="";
        if (inputStr.length == 0) {
            document.getElementById("error").innerHTML = "请输入数字";
        } else if (isNaN(Number(inputStr))) {
            document.getElementById("error").innerHTML = "您输入的不是数字";

        } else {
            var  result=GetEvenSum(parseInt(inputStr));
            document.getElementById("result").innerHTML=inputStr+"以内的(包括"+inputStr+")偶数和为：" + result;
        }


    };
    document.getElementById("btnStar").onclick=function(){

        document.getElementById("starDiv").innerHTML=GetStar();
    };
    
    document.getElementById("btnMath").onclick=function(){

        document.getElementById("mathTable").innerHTML=GetMathTable();
    };
};
/**获取数值范围内偶数的和
 * @param  {} 范围
 */
function  GetEvenSum(num){
    var  sum=0;
    for (var index = 0; index <= num; index++) {
     
        if (index%2==0) {
            sum+=index;
        }
    }
    return sum;
}
/**打印星星
 */
function  GetStar(){
    var str="";
    for (var index = 0; index <= 10; index++) {
     
       for (var j = 0; j < index; j++) {
          
           str+="★";
       }
       str+="<br/>";
    }
    return str;

}

/**打印乘法口诀表
 */

function GetMathTable(){

    var str="";
    for (var index = 1; index <= 9; index++) {
     
       for (var j = 1; j <= index; j++) {
          
           str+=j+"*"+index+"="+index*j+"&nbsp;&nbsp;&nbsp;&nbsp;"
       }
       str+="<br/>";
    }
    return str;

}