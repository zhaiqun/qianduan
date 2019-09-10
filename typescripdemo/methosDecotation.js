"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var methodDec;
(function (methodDec) {
    function logMethod(params) {
        return function (target, methodName, desc) {
            console.log(params);
            console.log(target);
            console.dir(methodName);
            console.dir(desc);
            // desc.value=function(){
            //     console.log('我是方法装饰器修改后的获取数据的方法')
            // }
            var oldmehod = desc.value;
            desc.value = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                oldmehod.apply(this);
                return arg.map(function (c) { return 100 * c; });
            };
        };
    }
    var httpClient = /** @class */ (function () {
        function httpClient() {
            this.url = '';
        }
        httpClient.prototype.getdata = function () {
            console.log('我是原获取数据的方法');
        };
        httpClient.prototype.post = function () {
            console.log('我是原post的方法');
        };
        __decorate([
            logMethod('aa')
        ], httpClient.prototype, "getdata", null);
        return httpClient;
    }());
    var h = new httpClient();
    console.log(h.getdata(4, 5));
})(methodDec || (methodDec = {}));
