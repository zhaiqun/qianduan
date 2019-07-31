import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // public  cityList:any=[

  // ]

  public  peopleInfo:any={
      name:'',
      sex:'1',
      city:'上海',
      cityList:['北京','上海','广州','深圳'],
      hobby:[{
         title:'吃饭',
         checked:false

      },{
        title:'睡觉',
        checked:false

     },{
      title:'打豆豆',
      checked:true

   }],mark:'去饲·'
   
  }
  constructor() { }

  ngOnInit() {
  }
  submit(){

    // let dom:any=document.getElementById('nameInput')
    // console.log(dom.value)

    console.log(this.peopleInfo)
  }
}
