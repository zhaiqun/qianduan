import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  public  flag:boolean=true
  public  orderStatus:number=0

  public  datatime:any=new Date()
  public attr:string='yellow'
  title='我是新闻组件'

  public newsList:any[]=[{
    title:'体育新闻',
    content:"霍顿被打脸了，肿成胖子了"
   

  },{ title:'娱乐新闻',
  content:'马伊琍和文章宣布离婚'}]
  constructor() { }

  ngOnInit() {
  }

  public cars:any[]=[{
    cate:'宝马',
    list:['宝马1','宝马2','宝马3']

  },{
    cate:'奥迪',
    list:['奥迪A1','奥迪A2','奥迪A3']
  }]

  run(e){
   var  dom:any= e.target
   dom.style.color='blue'
    alert('被点击了')
  }
  getData(){

    alert(this.title)
  }
  setData(){
    this.title='我是被修改的title'
  }

  keyDown(e){
    if (e.keyCode==13) {
      console.log('enter被按下')
      
    }else{

      console.log(e.target.value)
    }

  }

  keyUp(e){
    console.log(e.keyCode)
    console.log(e.target.value)

  }
  setKeyWords(){

    this.keywords='修改那'
  }
  public  keywords:string='默认值'
}
