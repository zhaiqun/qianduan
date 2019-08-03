import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aslid-demo',
  templateUrl: './aslid-demo.component.html',
  styleUrls: ['./aslid-demo.component.css']
})
export class AslidDemoComponent implements OnInit {

  ngOnInit(){

  } 
  public side:any;
  public flag:boolean=false;
  constructor() { 
   
    
  }


  togle(){

    console.log(document.querySelector('.side'))
   this.side=document.querySelector('.side')
    if (!this.flag) {
      this.side.style.transform='translateX(0)'
    }else{
      this.side.style.transform='translateX(100%)'
    }
    this.flag=!this.flag
    console.log(document.querySelector('.side'))
  }
}
