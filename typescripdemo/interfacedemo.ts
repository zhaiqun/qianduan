function  printName(info:{firstName:string,lastName:string}){


    console.log(info.firstName+info.lastName)
}

printName({firstName:"群",lastName:'翟'})



interface name{
    xing:string,
    ming:string
}

function  printInfo(p:name){

    console.log(p.xing+p.ming)
}

printInfo({xing:"翟",ming:'群'})

interface user{
    name:string,
    age?:number,
    gender:number

}


function  getUser(p:user):void{
    var str='保密'
    if (p.age) {
        str=p.age.toString()  
    }
    console.log(`我叫${p.name},${p.gender},年龄${str}`)
}

getUser({name:'tony',age:30,gender:2})

//函数类型接口：对方法传入的参以及返回值做约束

interface encrypt {
    (key: string, value: string  ): String
}


var  md5:encrypt=function(key: string, value: string):string{

    return  key+value
}

console.log(md5('我没电了','好开心'))


//对象约束
interface  obj{

    [index:string]:string
} 

var  objtest:obj={"1":"1"}


interface  human{
    name:string;
    eat(str:string):void;
}


class  police implements human{
    public  name:string='';
    constructor(name:string){
        this.name
    }
    eat(food:string){
        console.log('吃'+food)
    }
}
let  p=new police('sir')
p.eat('米饭')



class  mysqlDB<T>{


    add(model:T):boolean{
        console.dir(model)
        return true;
    }
}

class  user{

    name:string

    constructor(){

        this.name=''
    }

    age?:number
}

var  db=new mysqlDB<user>()

var  usermodel=new user()
usermodel.name='ww'
usermodel.age=18
db.add(usermodel)