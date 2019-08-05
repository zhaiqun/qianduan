

interface  DBI<T>{

    add(model:T):boolean;
    update(mode:T,id:number):number;
    delete(id:number):boolean;
    get(id:number):any[];
}


export  class  msDb<T> implements  DBI<T>{
    add(model:T):boolean{
        console.log(model)
        return  true;
    }
    update(model:T,id:number):number{
        console.log(id+'更新了'+model)
        return  1;
    }
    delete(id:number):boolean{
        console.log(id+'被删除了')
        return  true;
    }
    get(id:number):any[]{
        console.log('获取信息')
        return  [];
    }
}

// let  ms=new msDb<user>()
// ms.add(new user())