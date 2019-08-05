"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commonDal_1 = require("../dal/commonDal");
var dal;
(function (dal) {
    var Person = /** @class */ (function () {
        function Person() {
            this.name = '';
        }
        return Person;
    }());
    dal.Person = Person;
    dal.personModel = new commonDal_1.CommonDal();
})(dal = exports.dal || (exports.dal = {}));
