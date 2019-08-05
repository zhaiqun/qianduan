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
var USB = /** @class */ (function () {
    function USB(name) {
        this.name = '';
        this.name = name;
    }
    return USB;
}());
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse(name) {
        return _super.call(this, name) || this;
    }
    Mouse.prototype.insert = function () {
        console.log("\u6211\u662F\u4E00\u4E2A" + this.name + ",\u6211\u63A5\u5165\u540E\uFF0C\u53EF\u4EE5\u63A7\u5236\u7535\u8111");
    };
    return Mouse;
}(USB));
var m = new Mouse('鼠标');
m.insert();
var Upan = /** @class */ (function (_super) {
    __extends(Upan, _super);
    function Upan(name) {
        return _super.call(this, name) || this;
    }
    Upan.prototype.insert = function () {
        console.log("\u6211\u662F" + this.name + ",\u6211\u63A5\u5165\u540E\uFF0C\u53EF\u4EE5\u62F7\u8D1D\u4E1C\u897F");
    };
    return Upan;
}(USB));
var u = new Upan('u盘');
u.insert();
