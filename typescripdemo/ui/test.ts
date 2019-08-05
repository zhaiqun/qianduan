// import {Person,personModel}  from '../model/personModel'
import {dal}  from '../model/personModel'
var p=new dal.Person
p.age=18
dal.personModel.add(p)