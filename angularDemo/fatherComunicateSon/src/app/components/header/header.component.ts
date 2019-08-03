import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input() title:any;
  @Input() user:any;

  @Input() father:any
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.father.say()
  }

}
