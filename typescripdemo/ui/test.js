"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {Person,personModel}  from '../model/personModel'
var personModel_1 = require("../model/personModel");
var p = new personModel_1.dal.Person;
p.age = 18;
personModel_1.dal.personModel.add(p);
