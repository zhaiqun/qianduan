import { Component,ViewChild } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { ViewchilddemoComponent } from './components/viewchilddemo/viewchilddemo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'DomOpertion';
  @ViewChild('aside',{static:false})  side:any;
  toggle(){
 console.log(1)
 this.side.togle();

}
}

