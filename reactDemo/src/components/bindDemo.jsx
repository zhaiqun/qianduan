import   React  from  'react'




export  default  class   BindDemo  extends  React.Component{
    constructor(){
        super()
        this.state={

            msg:"hello,qq",
            content:'我是原内容',
            arg:'参数2'
        }
        this.change2= this.change2.bind(this,this.state.arg);

    }
    change(arg){

        this.setState({
            msg:'hello,tony'+arg
        })
    }

    change2(arg2){
        
            this.setState({
                content:'我是被修改后的内容'+arg2
            })
   
    }
    render(){

        return  <div>  <h1>{this.state.msg}</h1>

<h2>{this.state.content}</h2>
        <button  onClick={this.change.bind(this,'参数1')}>点我呀</button>
        <button  onClick={this.change2}>点我呀</button>
        </div>
    }


}