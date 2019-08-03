import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  @Output() public  footerPub=new EventEmitter()
  public msg:string='footer组件msg'
  constructor() { }

  ngOnInit() {
  }
  pubtoFather(){

    this.footerPub.emit(this.msg)
  }
}
