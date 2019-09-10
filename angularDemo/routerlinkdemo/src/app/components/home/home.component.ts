import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable }         from 'rxjs';
import { switchMap }                from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }
public title:string='见鬼'
public name:Observable<any>
  ngOnInit() {

    console.log("======================")
    console.log(this.route)

    this.route.queryParams.subscribe((data) => {
      console.log( data);

      this.name=data.name
    });
    
  }

}
