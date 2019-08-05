"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var msDb = /** @class */ (function () {
    function msDb() {
    }
    msDb.prototype.add = function (model) {
        console.log(model);
        return true;
    };
    msDb.prototype.update = function (model, id) {
        console.log(id + '更新了' + model);
        return 1;
    };
    msDb.prototype.delete = function (id) {
        console.log(id + '被删除了');
        return true;
    };
    msDb.prototype.get = function (id) {
        console.log('获取信息');
        return [];
    };
    return msDb;
}());
exports.msDb = msDb;
var ms = new msDb();
ms.add(new user());
