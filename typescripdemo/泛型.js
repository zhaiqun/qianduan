"use strict";
//泛型方法
function getData(p) {
    return p;
}
//泛型类
var test = /** @class */ (function () {
    function test() {
        this.list = [];
    }
    test.prototype.add = function (val) {
        this.list.push(val);
    };
    test.prototype.min = function () {
        var res = this.list[0];
        for (var index = 1; index < this.list.length; index++) {
            if (this.list[index] < res) {
                res = this.list[index];
            }
        }
        return res;
    };
    return test;
}());
var list = new test();
list.add(100);
list.add(-8);
list.add(98);
console.log(list.min());
var list2 = new test();
list2.add('a');
list2.add('m');
list2.add('d');
console.log(list2.min());
