import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

@ViewChild('viewChildDemo',{static:false})  childCom:any;
  public  flag:boolean=true
  public  title:string=''
  constructor() { }

  run(){
    this.childCom.say()
  }
  ngOnInit() {
    //组件和指令初始化完成，并没有加载真正的组件，相当于vue里的created
    let  box:any=document.querySelector('#divnews')
    console.log(`ngoninit里拿到值：${box.innerHTML}`)

    //这里报错
    // let  box2:any=document.querySelector('#divnews2')
    // console.log(`ngoninit里拿到值：${box2.innerHTML}`)

  }
  ngAfterViewInit():void{
//试图加载完成,相当于vue里 mounted
    let  box2:any=document.querySelector('#divnews2')
    console.log(`ngAfterViewInit里拿到值：${box2.innerHTML}`)
  }

}
