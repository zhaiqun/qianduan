import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchilddemo',
  templateUrl: './viewchilddemo.component.html',
  styleUrls: ['./viewchilddemo.component.css']
})
export class ViewchilddemoComponent implements OnInit {

  @ViewChild('myp',{static:false}) p:any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){

    console.dir(this.p)
    this.p.nativeElement.style.color='red'
  }

  say(){
    console.log('我是viechildDemo组件内部的方法')
  }

}
