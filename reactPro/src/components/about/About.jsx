import React from 'react'
import { Pagination,DatePicker   } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
export default class About extends React.Component{
constructor(){
super()
}
render(){

return <div>
    About
    <ul>
        <li>
            这是低1个
            这是低2个
            这是低3个
            这是低4个
            这是低5个
            这是低6个
            这是低7个
        </li>
    </ul>
 
    <DatePicker onChange={(c,s)=>{console.log(s)}} /><br></br>
    <MonthPicker onChange={(c,s)=>{console.log(s)}} placeholder="Select month" />
    <Pagination
      showSizeChanger
      onShowSizeChange={(c,s)=>{console.log(c+s)}}
      defaultCurrent={3}
      total={500}
    />
    <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={(c)=>{console.log(c)}}
      defaultCurrent={3}
      total={500}
      disabled
    />
</div>
}

}