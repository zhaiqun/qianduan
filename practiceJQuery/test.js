/**
 * @param  {} params
 */
function name(params) {
    

    var date=new Date();
    date.getDay();


     var str =new String("hah");
     str.In
    console.dir(date);

    Math.abs(3);
}


function Animals(name){
    this.name=name,
    this.SayHI=function(){

        console.log("我是"+this.name);
    }


}


var animal1=new Animals("小猫");

animal1.SayHI();

var animal2=new Animals("小狗");

animal2.SayHI();
console.log(animal1.SayHI===animal2.SayHI);



(function(win){

    var num=10;
    win.number=num;
})(window)

console.log("我是"+number )


function  Person(name,age){

    this.name=name;
    this.age=age;
}
Person.prototype.minzu="汉族";

Person.prototype.SayHI=function(){


    console.log(this.name+this.age);
}

var p1 =new Person("zhaiqun",18);

p1.SayHI();
var p2=new Person("hexiongjun",28);
p2.SayHI();

console.log(p1.SayHI===p2.SayHI)


console.log(p1.minzu);
console.log(p2.minzu);
p1.__proto__.minzu="苗族";
console.log(p1.minzu);

console.log(p1);
console.log(p2.minzu);

console.log(p2);
var arry=[
    {size:400,name:"前女友"},
    {size:500,name="小李飞刀"},
    {size:100,name="鹿鼎记"}

    ];

    var fn=function(attr){
        return  function(obj1,obj2){
            if (obj[attr]>obj2[attr]) {
                return 1;
            }else if(obj1[attr]==obj2[attr]){
                return 0;

            }else{

                return -1;
            }

        }

    }

    arry.sort(fn("size"));