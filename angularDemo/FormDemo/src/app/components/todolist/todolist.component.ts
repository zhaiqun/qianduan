import { Component, OnInit } from '@angular/core';
import {StorageService}  from '../../services/storage.service'
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public  todo:string=''
  public  doList:any[]=[]

  public  storageKey='dolist'
  constructor(public storage: StorageService ) { 


  }

  ngOnInit() {
   this.doList= this.storage.getJsonObj(this.storageKey)||[]
  }

  add(e){
    if (e.keyCode==13) {

      if (!this.IsrepeatEvent()) {
         this.doList.push({title:this.todo,status:0})

         this.storage.setJsonObj(this.storageKey,this.doList)
     
      }else{
        alert('数据已存在，不能重复录入')
      }
      this.todo=''
    }
   
  }

  del(key){
    this.doList.splice(key,1)
    this.storage.setJsonObj(this.storageKey,this.doList)
  }


  IsrepeatEvent(){
    // this.todoList.forEach(c=>{

    //   if (c.title==this.todo) {
    //     return true
    //   }
    // })

    // return  false

    for (let index = 0; index <this.doList.length; index++) {
        if (this.doList[index].title==this.todo) {
          return true
        }
      
    }
    return  false


  }

  doListStatusChange(){

    this.storage.setJsonObj(this.storageKey,this.doList)
  }
}
