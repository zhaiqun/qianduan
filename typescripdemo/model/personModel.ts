
import  {CommonDal}  from '../dal/commonDal'
export  namespace  dal{


export  class  Person{
    name:string=''
    age?:number
}

export let personModel=new  CommonDal<Person>()

}