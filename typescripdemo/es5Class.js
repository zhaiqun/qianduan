function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.categlory = '人类'
    // Person.prototype.sayhi = () => {


//     console.dir(this)
//     console.log(`我叫${this.name},今年${this.age}岁了`)
// }

Person.prototype.sayhi = function() {

    console.dir(this)
    console.log(`我叫${this.name},今年${this.age}岁了`)
}

var p = new Person();

function Student(name, age) {
    Person.call(this, name, age)
}


Student.prototype = Person.prototype

var s = new Student('tony', 18)

s.sayhi();
console.dir(s)