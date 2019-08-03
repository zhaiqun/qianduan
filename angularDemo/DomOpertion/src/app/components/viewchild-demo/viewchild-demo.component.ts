import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild-demo',
  templateUrl: './viewchild-demo.component.html',
  styleUrls: ['./viewchild-demo.component.css']
})
export class ViewchildDemoComponent implements OnInit {


  @ViewChild('myp',{static:false})   p:any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit():void{

    console.log('999')
    console.log(this.p.innerHTML)  
    this.p.nativeElement.style.color='red'
  }
}
