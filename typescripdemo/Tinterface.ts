interface  configFn{

    <T>(value:T):T
}


var  f1:configFn=function<T>(val:T){

    return  val;
}



f1('1')
f1(1)

interface configf<T>{

    (val:T):T
}


function  fun<T>(p:T){
return p;

}

var  func2:configf<string>=function(p){

    return p
}

func2('1')