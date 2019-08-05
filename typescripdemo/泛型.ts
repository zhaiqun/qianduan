
//泛型方法
function  getData<T>(p:T):T{

    return  p
}

//泛型类
class  test<T>{
    public list:T[]=[]

    constructor(){

    }

    add(val:T){

        this.list.push(val)
    }


    min():T{
        var res:T=this.list[0]

        for (let index = 1; index < this.list.length; index++) {
            if (this.list[index]<res) {
                    res=this.list[index]
            }
            
        }
        return res

    }
}


var  list=new test<number>()

list.add(100)
list.add(-8)
list.add(98)

console.log(list.min()) ; 

var  list2=new test<string>()

list2.add('a')
list2.add('m')
list2.add('d')

console.log(list2.min())