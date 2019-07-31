import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public title:string='导航栏'
public name:string='zq'

public  content:string='<i>我是头部</i>'
  constructor() {
    this.title='顶部'
    
   }

  ngOnInit() {
  }

}
