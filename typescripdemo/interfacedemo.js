"use strict";
function printName(info) {
    console.log(info.firstName + info.lastName);
}
printName({ firstName: "群", lastName: '翟' });
function printInfo(p) {
    console.log(p.xing + p.ming);
}
printInfo({ xing: "翟", ming: '群' });
function getUser(p) {
    var str = '保密';
    if (p.age) {
        str = p.age.toString();
    }
    console.log("\u6211\u53EB" + p.name + "," + p.gender + ",\u5E74\u9F84" + str);
}
getUser({ name: 'tony', age: 30, gender: 2 });
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('我没电了', '好开心'));
var objtest = { "1": "1" };
var police = /** @class */ (function () {
    function police(name) {
        this.name = '';
        this.name;
    }
    police.prototype.eat = function (food) {
        console.log('吃' + food);
    };
    return police;
}());
var p = new police('sir');
p.eat('米饭');
var mysqlDB = /** @class */ (function () {
    function mysqlDB() {
    }
    mysqlDB.prototype.add = function (model) {
        console.dir(model);
        return true;
    };
    return mysqlDB;
}());
var user = /** @class */ (function () {
    function user() {
        this.name = '';
    }
    return user;
}());
var db = new mysqlDB();
var usermodel = new user();
usermodel.name = 'ww';
usermodel.age = 18;
db.add(usermodel);
