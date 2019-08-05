"use strict";
var a = 0;
// a='hh'
console.log(a);
var arr = [12, 2, 33];
console.log(arr);
var arrystr = ['uu', '3'];
//元组类型
// let  arrCom:[number,string]=['uu',65,'oo']
var arrCom = [78, 'oo'];
//enum
var flag;
(function (flag) {
    flag[flag["success"] = 1] = "success";
    flag[flag["error"] = 0] = "error";
})(flag || (flag = {}));
var s = flag.error;
console.log(s);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 9] = "blue";
    color[color["yellow"] = 10] = "yellow";
})(color || (color = {}));
console.log(color);
console.log(color.red);
console.log(color.blue);
console.log(color.yellow);
//any类型
var uncertain = 0;
uncertain = 'hello';
//报错
// var  num:number;
// console.log(num)
var num;
console.log(num);
var num1;
console.log(num1);
//null
// var str:null
// console.log(str)
var str;
str = null;
console.log(str);
//void类型
function run() {
    console.log('没有返回类型:void');
}
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(8, 9));
//never类型表示其他类型，比如异常
var err;
//  err=undefined
// err=(()=>{
//     throw  new Error('错误')
// })()
// console.log(err)
//匿名函数
var f2 = function (str) {
    return Number(str);
};
f2('8');
//可选参数，可传可不传
function getInfo(name, age) {
    var ageStr = '保密';
    if (age) {
        ageStr = age.toString();
    }
    return "\u59D3\u540D\uFF1A" + name + ",\u5E74\u9F84\uFF1A" + ageStr;
}
getInfo('zhaiqun');
//默认参数
function getInfo2(name, age) {
    if (age === void 0) { age = 18; }
    return ("\u6211\u53EB" + name + ",\u4ECA\u5E74" + age + "\u5C81");
}
//剩余参数
function getSum(a, b) {
    var p = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        p[_i - 2] = arguments[_i];
    }
    var result = a + b;
    for (var index = 0; index < p.length; index++) {
        result += p[index];
    }
    return result;
}
console.log("\u603B\u548C" + getSum(2, 3, 9, 4, 5, 6));
function getSum1() {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        p[_i] = arguments[_i];
    }
    var result = 0;
    for (var index = 0; index < p.length; index++) {
        result += p[index];
    }
    return result;
}
console.log("1\u6C42\u548C" + getSum1(9, 8, 7, 6));
function getStrCom(name, age) {
    var str = '';
    if (age) {
        str = age.toString();
    }
    return "\u6211\u53EB" + name + ",\u6211\u4ECA\u5E74" + str + "\u5C81\u4E86";
}
console.log(getStrCom('zq', 18));
