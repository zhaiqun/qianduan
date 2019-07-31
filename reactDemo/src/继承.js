class Person {

    constructor(name, age) {

        this.name = name
        this.age = age
    }

    say() {

        console.log(`我叫${this.name},今年年${this.age}`)
    }
}

class teacher extends Person {

    constructor(name, age, money) {
        super(name, age)
        this.money = money;
    }
}

class student extends Person {


}


var t1 = new teacher('王老师', 38, 9000);
var s1 = new student('小红', 5);

t1.say();
s1.say();

console.log(t1.money)