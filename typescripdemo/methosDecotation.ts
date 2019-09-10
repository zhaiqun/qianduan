


namespace  methodDec{

    function   logMethod(params:any){
        return  function(target:any,methodName:any,desc:any){
            console.log(params)
            console.log(target)
    
            console.dir(methodName)
    
            console.dir(desc)
    
            // desc.value=function(){
    
            //     console.log('我是方法装饰器修改后的获取数据的方法')
            // }

            var oldmehod=desc.value
            desc.value=function(...arg:number[]):number[]{
                oldmehod.apply(this)
               return arg.map(c=> 100*c)
            }
        }
    }
    class  httpClient{

        public url:string=''

        constructor(){

        }
        @logMethod('aa')
        getdata(){
            console.log('我是原获取数据的方法')
        }

        post(){

            console.log('我是原post的方法')
        }
    }

    var  h=new httpClient()
  console.log(h.getdata(4,5))  

}