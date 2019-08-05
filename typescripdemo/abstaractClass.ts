abstract  class  USB{
    public name:string=''
    constructor(name:string){
        this.name=name
    }
     abstract insert():void
}


class  Mouse  extends USB{

    constructor(name:string){

        super(name)
    }
    insert(){
        console.log(`我是一个${this.name},我接入后，可以控制电脑`)
    }
}

let  m=new Mouse('鼠标');
m.insert()


class  Upan  extends  USB{

    constructor(name:string){
        super(name)
    }

    insert(){

        console.log(`我是${this.name},我接入后，可以拷贝东西`)
    }
}

let u=new Upan('u盘')
u.insert();