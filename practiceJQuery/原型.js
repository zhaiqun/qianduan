function Person(age, name) {
    this.name = name;
    this.age=age;

    this.SayHI=function(){

        console.log("你好，我是"+this.name);
    }

}

Person.prototype.Sleep=function(){

    console.log("我可以睡觉"+this.age);
}

var p=new Person(20,"小龙女");
var p1=new Person(28,"hhh");
console.log(p);

function  Student(c){

    Person.call(this);
    this.c=c;
}



Student.prototype=p;
console.log(Person);
Student.prototype.Read=function(){

    console.log("我"+this.c);
}

var  stu1=new Student("一年级");
console.log(stu1);


stu1.name="李莫愁";
stu1.SayHI();
stu1.Sleep();
stu1.Read();

p.SayHI();

p.Sleep();
p.Read();

p1.SayHI();
p1.Sleep();
p1.Read();



