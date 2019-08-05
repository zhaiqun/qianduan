// import  {modualGet,modualTest}  from './modules/modualDemo'

// modualGet()

// modualTest()

// modualGet()

// modualTest()


// import  test  from './modules/modualDemo'

// test()
// test()
import  {msDb}  from './modules/DBoperation'

class  student{

    name:string=''
    constructor(){

    }
}
var  user1=new student()
user1.name='qq'
var  msDb1=new msDb<student>()
msDb1.add(user1)