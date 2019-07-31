import  React  from 'react'
import  CmtItem  from './cmtItem'

const   CmtListStyles={div:{color:'red',fontSize:'25px',textAlign:"center"}}
export  default  class CmtList  extends  React.Component{

    constructor(){
        super()
        this.state={
            cmtList:[
                {id:1,content:'喜欢你呀大丰市',author:'tony',datetime:'2019-08-09'},
                {id:2,content:'喜欢你呀芒果',author:'jack',datetime:'2019-08-09'},
                {id:2,content:'哈哈支持你呀',author:'rose',datetime:'2019-01-09'}
            ]
        }
    }
    render(){

        return  <div>
            <h4  style={CmtListStyles.div}>评论区域</h4>
            {this.state.cmtList.map(c=>{
               return <CmtItem  key={c.id} {...c}></CmtItem>

            })}

        </div>
    }

}