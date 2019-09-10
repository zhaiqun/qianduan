// function  personDecoration(target:any){

//     target.prototype.title='人类'
//     target.prototype.say=function(){
//         console.log('hello')
//     }
//     console.log(target)
// }


//装饰器工厂
function LogClass(params:any){

    return  function(target:any){
        console.log(params)
        console.log(target)
       
    }
}



// @personDecoration

// @LogClass('hello')
class  Person{
    constructor(){

    }
}
var  tony=new Person()
// tony.say()
// console.log(tony.title)

function  hcDecoration(target:any){
    return  class  extends  target{

        url='google.com'

        getdata(){

            console.log('我是修改后的url:'+this.url)
        }

    }

}


function logproperty(params:any){
  return  function(target:any,attr:any){
    console.dir(target)
    console.dir(attr)
    console.log(params)
    target[attr]=params
  }

}

// @hcDecoration
class  HttpClient{
    @logproperty('www.baidu.com')
    public apiaddress:string
    public  url:string=''
    constructor(){
        this.url='baidu.com'
    }

    getdata(){

        console.log('我是原url:'+this.url)
    }
}


var hp=new HttpClient()
// console.log(hp.url)
// hp.getdata()

console.log(hp.apiaddress)



