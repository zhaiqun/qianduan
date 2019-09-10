import  React  from  'react'
import  HomeCss  from  '../../css/Home.scss'

import { Pagination,DatePicker,Result, Button,Input, Icon      } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
export   default class  extends  React.Component{
    constructor(){
        super()
    }

    render(){

        return  <div className={HomeCss.searchContianner}>
      
        <div className={HomeCss.searchDiv}>
         <Input placeholder="请输入关键词"  className={HomeCss.searchInput} />
          <span className={HomeCss.searchIcon}></span>
        
         </div>

      <DatePicker onChange={(c,s)=>{console.log(s)}} /><br></br>
        
      </div>


    }

}  