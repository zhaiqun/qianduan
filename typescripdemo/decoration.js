"use strict";
// function  personDecoration(target:any){
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//     target.prototype.title='人类'
//     target.prototype.say=function(){
//         console.log('hello')
//     }
//     console.log(target)
// }
//装饰器工厂
function LogClass(params) {
    return function (target) {
        console.log(params);
        console.log(target);
    };
}
// @personDecoration
// @LogClass('hello')
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var tony = new Person();
// tony.say()
// console.log(tony.title)
function hcDecoration(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.url = 'google.com';
            return _this;
        }
        class_1.prototype.getdata = function () {
            console.log('我是修改后的url:' + this.url);
        };
        return class_1;
    }(target));
}
function logproperty(params) {
    return function (target, attr) {
        console.dir(target);
        console.dir(attr);
        console.log(params);
        target[attr] = params;
    };
}
// @hcDecoration
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this.url = '';
        this.url = 'baidu.com';
    }
    HttpClient.prototype.getdata = function () {
        console.log('我是原url:' + this.url);
    };
    __decorate([
        logproperty('www.baidu.com')
    ], HttpClient.prototype, "apiaddress", void 0);
    return HttpClient;
}());
var hp = new HttpClient();
// console.log(hp.url)
// hp.getdata()
console.log(hp.apiaddress);
