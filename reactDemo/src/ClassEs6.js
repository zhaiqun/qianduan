class japan {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}


var p = new japan('三木子', 18);

console.log(p.name)
class chinese {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static rr = "00"

    say() {
        console.log(this.name + this.age)
    }
    static money() {
        console.log("存钱")
    }
}
chinese.info = 'ch';
var p1 = new chinese('黎明', 20);

console.dir(p1);
console.dir(chinese);