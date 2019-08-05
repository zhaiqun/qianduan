"use strict";
// import  {modualGet,modualTest}  from './modules/modualDemo'
Object.defineProperty(exports, "__esModule", { value: true });
// modualGet()
// modualTest()
// modualGet()
// modualTest()
// import  test  from './modules/modualDemo'
// test()
// test()
var DBoperation_1 = require("./modules/DBoperation");
var student = /** @class */ (function () {
    function student() {
        this.name = '';
    }
    return student;
}());
var user1 = new student();
user1.name = 'qq';
var msDb1 = new DBoperation_1.msDb();
msDb1.add(user1);
