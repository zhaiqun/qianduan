
import  React   from 'react'

import cssobj  from '../css/cmtItem.css'
console.log(cssobj)
export  default  class  CmtItem  extends  React.Component{
    render(){

        return  <div className={cssobj.cmtItemContainner}>
             <p className='test'>子组件测试样式</p>
            <h4  className={cssobj.cmtContainner}>测试一下下</h4>
            <p>{this.props.content}</p>
            <p><span>{this.props.author}</span><span>{this.props.time}</span></p>
        </div>
    }

}