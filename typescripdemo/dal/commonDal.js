"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonDal = /** @class */ (function () {
    function CommonDal() {
    }
    CommonDal.prototype.add = function (model) {
        // console.dir(`添加成功：${model}`)
        console.dir(model);
        console.dir("\u6DFB\u52A0\u6210\u529F");
        return 1;
    };
    CommonDal.prototype.update = function (model, id) {
        console.log(id + "\u66F4\u65B0\u6210\u529F\uFF1A" + model);
        return true;
    };
    CommonDal.prototype.delete = function (id) {
        console.log(id + "\u66F4\u65B0\u6210\u529F");
        return true;
    };
    CommonDal.prototype.get = function (id) {
        var model = [];
        console.log(id + "\u83B7\u53D6\u6210\u529F\uFF1A" + model);
        return model;
    };
    return CommonDal;
}());
exports.CommonDal = CommonDal;
