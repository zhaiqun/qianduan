let a:number=0
// a='hh'

console.log(a)
var arr:number[] = [12, 2, 33]
console.log(arr)

var arrystr:string[] = ['uu','3']

//元组类型
// let  arrCom:[number,string]=['uu',65,'oo']
let  arrCom:[number,string]=[78,'oo']

//enum
enum flag  {success=1,error=0}

let s=flag.error
console.log(s)

enum  color{red,blue=9,'yellow'}
console.log(color)
console.log(color.red)
console.log(color.blue)

console.log(color.yellow)


//any类型

let  uncertain:any=0
uncertain='hello'

//报错
// var  num:number;
// console.log(num)

var  num:undefined;
console.log(num)

var  num1:number|undefined
console.log(num1)


//null

// var str:null
// console.log(str)

var str:null

str=null;
console.log(str)


//void类型
function  run():void{

    console.log('没有返回类型:void')

}

function  add(num1:number,num2:number):number{

    return num1+num2
}

 console.log(add(8,9)) 

 //never类型表示其他类型，比如异常

 let  err:never
//  err=undefined

// err=(()=>{

//     throw  new Error('错误')
    
// })()

// console.log(err)

//匿名函数

var  f2=function(str:string):number{

    return Number(str)
}

f2('8')

//可选参数，可传可不传
function getInfo(name:string,age?:number){

    let  ageStr='保密'
    if(age){
        ageStr=age.toString()
    }

    return  `姓名：${name},年龄：${ageStr}`

}


getInfo('zhaiqun')


//默认参数
function  getInfo2(name:string,age:number=18){

    return(`我叫${name},今年${age}岁`)
}


//剩余参数

function  getSum(a:number,b:number,...p:number[]):number{
    var result=a+b
    for (let index = 0; index < p.length; index++) {
        result+= p[index];
        
    }

    return  result
}

console.log(`总和${getSum(2,3,9,4,5,6)}`)


function  getSum1(...p:number[]):number{

    var  result:number=0
    for (let index = 0; index < p.length; index++) {
        result+= p[index];
        
    }
    return  result
}

console.log(`1求和${getSum1(9,8,7,6)}`)



//方法重载
function  getStrCom(name:string):string;
function  getStrCom(name:string,age:number):string;
function  getStrCom(name:any,age?:any):string{

    var str:string=''
    if (age) {
        str=age.toString()
    }
    return`我叫${name},我今年${str}岁了`
}
console.log(getStrCom('zq',18))