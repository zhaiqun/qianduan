"use strict";
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = '';
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("\u6211\u662F" + this.name);
    };
    return Animal;
}());
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat(name) {
        return _super.call(this, name) || this;
    }
    return cat;
}(Animal));
var c = new cat('布偶猫');
c.eat();
