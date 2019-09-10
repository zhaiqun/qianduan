import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-touchus',
  templateUrl: './touchus.component.html',
  styleUrls: ['./touchus.component.css']
})
export class TouchusComponent implements OnInit {

  constructor(public  route:ActivatedRoute) { }
  public phone:string=''
  ngOnInit() {
    this.route.params.subscribe((d)=>{
      this.phone=d.phoneNum
    })

  }

}
