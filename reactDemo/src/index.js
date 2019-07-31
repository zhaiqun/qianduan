import React from 'react'

import ReactDom from 'react-dom'

//#region 
//211
//#endregin
class TestBindEvent extends React.Component {

    constructor(){
        super()
        this.state={
            msg:"哈哈",
            age:9,
            gender:'难'
        }
   
    }

    render() {

        return <div><p>{this.state.gender}</p> 
         <input type = "button"  value = "点我呀" onClick={()=>this.myClick('🐷')}/>
         <input type = "button"  value = "修改值" onClick={()=>this.updateState('🐷')}/>
       <p></p>
        <input  ref="msg" type="text" value={this.state.msg}  onClick={()=>{this.bindValRef()}}/>
        
        <input  type="text"  value={this.state.gender}  onChange={(e)=>{this.bindValue(e)}}/>
         </div>
    }

    myClick(arg){

        console.log(`${arg}点击了`)
    }
    updateState = (arg)=>{
        this.setState({msg:arg},()=>{
            console.dir(this.state)

        })

        console.dir(this.state)
    }

    bindValue=(e)=>{

        console.dir(e)
        this.setState({gender:e.target.value})
    }
  
    bindValRef=()=>{

        this.setState({msg:this.refs.value})
    }
}

ReactDom.render(<TestBindEvent></TestBindEvent>,document.querySelector('#app'))