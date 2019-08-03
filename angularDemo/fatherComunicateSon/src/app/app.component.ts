import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
  public  user:any={name:"zq",vip:8}

  say(e){

    alert('我是父组件里的say:'+e)
  }
}
