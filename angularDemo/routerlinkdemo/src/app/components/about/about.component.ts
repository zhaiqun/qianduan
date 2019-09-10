import { Component, OnInit } from '@angular/core';
import  {Router,NavigationExtras}  from '@angular/router'
import{ActivatedRoute}  from '@angular/router'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  public  userName:string=''
  constructor(public  route:ActivatedRoute,public  router:Router) { }

  ngOnInit() {

    console.log("=======")
    console.log(this.route)
    this.route.params.subscribe((data)=>{
      this.userName=data.userName
    })
    console.log('about')
  }
  redirect(){

    this.router.navigate(['/touchus','4511980'])
  }

  goHome(){

    let  queryParam:NavigationExtras={
      queryParams:{"name":"哪吒"} 
    }

    // let  queryp={
    //   queryParams:{"name":"哪吒2"} 
    // }
    this.router.navigate(['/home'],queryParam)
  }
}
