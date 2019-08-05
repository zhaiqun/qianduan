interface  Dal<T>{
    add(model:T):number;
    update(model:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any

}


export class  CommonDal<T> implements Dal<T>{
    add(model:T):number{
        // console.dir(`添加成功：${model}`)
        console.dir(model)
        console.dir(`添加成功`)
        return  1
    }
    update(model:T,id:number):boolean{
        console.log(`${id}更新成功：${model}`)
        return  true
    }
    delete(id:number):boolean{
        console.log(`${id}更新成功`)
        return  true
    }
    get(id:number):any{
        let model:any[]=[]

        console.log(`${id}获取成功：${model}`)
        return  model
    }

}