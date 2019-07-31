function Person(name, age) {
    this.name = name;
    this.age = age;

}
Person.prototype.say = function() {

    console.log(this.name + "好厉害" + this.age)
}
var p1 = new Person("jack", 12);

function Student(className, name, age) {
    Person.call(this, name, age)
    this.className = className
}

Student.prototype = p1;
var s = new Student('a', 'rose', 89);
// s.name = "yy";
s.say();
console.dir(s)
console.dir(Person)

// function test() {
//     var arr = [];
//     for (var i = 0; i < 10; i++) {

//         arr[i] = (function(num) {
//             return function() {
//                 return num;
//             }
//         })(i)
//     }

//     return arr;

// }
// console.log("我的值是" + test()[2]())