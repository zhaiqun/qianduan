class  Animal{

    public  name:string=''
    
    constructor(name:string){
        this.name=name
    }

    eat(){
        console.log(`我是${this.name}`)
    }

}


class  cat extends  Animal{

    constructor(name:string){

        super(name)
    }
}

let  c=new cat('布偶猫')

c.eat()