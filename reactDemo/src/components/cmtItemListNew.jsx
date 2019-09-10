import  React  from 'react'

import  ReactDom  from 'react-dom'


import cssobj  from '../css/cmtList.scss'

console.dir (cssobj)
import  CmtItem   from './cmtItemNew'
export  default  class  CmtItemList  extends  React.Component{
      constructor(){
        super()
        this.state={

            cmtData:[{id:1,content:"真的厉害了",author:'tony',time:'2019-09-12'},{id:1,content:"!!真的厉害了",author:'jack',time:'2019-02-12'},{id:1,content:"真的赞赞",author:'rose',time:'2019-09-12'}]
        }
    }
        render(){

            return  <div  >

                
                <h4   className={cssobj.cmtContainner}>评论区域</h4>
            <p className='test'>全局样式写写在：:global(),不会被模块化</p>

            <p  className={[cssobj.localBg,'test'].join('  ')}>组合样式</p>
                {this.state.cmtData.map(c=>{

                    return <CmtItem key={c.id}  {...c}></CmtItem>
                })}
            </div>
        }
      


}