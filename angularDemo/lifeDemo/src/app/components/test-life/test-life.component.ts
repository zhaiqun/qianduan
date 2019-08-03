import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-life',
  templateUrl: './test-life.component.html',
  styleUrls: ['./test-life.component.css']
})
export class TestLifeComponent implements OnInit {

  public  inputtxt:string=''
  public   origininput:string=''
  constructor() {

    console.log('构造函数被执行了，除了使用将简单的值对局部变量进行初始化之外，其他不可以做')
   }

  ngOnInit() {

    console.log('ngOnInit执行了，请求数据一般放在这里面')
  }
  ngOnChanges(){
    console.log('ngOnChanges执行了  当被绑定的输入属性值发生变化时调用')
  }

  ngDoCheck(){
    console.log('ngDoCheck执行了，并在发生angular自己不法或者不愿自己检测的变化时做出反应')
    if (this.inputtxt!=this.origininput) {
      console.log(`inputtxt值变化了又${this.origininput}变为${this.inputtxt}`)
    }
    this.origininput=this.inputtxt
 
  }
  ngAfterContentInit(){

    console.log('ngAfterContentInit执行了，当把内容投影到组件之后调用')
  }
  ngAfterContentChecked(){

    console.log('ngAfterContentChecked执行了，当把内容投影到组件变更检测之后用')
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit执行了，组件已经挂载到视图里去。")
  }

  ngAfterViewChecked(){
    console.log("nngAfterViewChecked执行了，每次做完组件视图和子视图的变更检测之后调用")
  }

  ngOnDestroy(){

    console.log('ngOnDestory执行了卸载组件的时候触发')
  }
}
