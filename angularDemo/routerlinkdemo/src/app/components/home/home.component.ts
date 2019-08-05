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

    this.route.queryParamMap.pipe(
      switchMap(params => {
        return of(params.get('name'));
      })
    ).subscribe((data) => {
      console.log('query', data);
    });
    
  }

}
