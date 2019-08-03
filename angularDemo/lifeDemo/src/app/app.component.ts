import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeDemo';
  flag=true
  changeFlag(){

    this.flag=!this.flag
  }
}
