import  React  from  'react'


export  default  class CounterSon  extends  React.Component{

    constructor(props){
        super()
        this.state={

        }
      
    }

    componentWillReceiveProps(next){

        console.log('componentWillReceiveProps触发了:'+this.props.title+"==="+next.title)

        // console.log()
    }
    render(){
        return <div>{this.props.title}  子组件</div>
    }
}