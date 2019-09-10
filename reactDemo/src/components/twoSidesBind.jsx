import React  from 'react'

export  default  class TwoSidesBind   extends  React.Component{
    constructor(){
        super()

        this.state={
            input:'请输入关键词'
        }
    }


    change=(e)=>{
        // this.setState({input:this.refs.inputTxt.value})

        //this.state.input=e.target.value;   
         this.setState({input:e.target.value})
        console.log(  this.state.input)
     
    }
    render(){

        return <div>
            <input type="text" ref='inputTxt'  value={this.state.input} onChange={this.change}/>
        </div>
    }



}