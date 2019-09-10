import   React   from 'react'


export  default  class  Movie  extends  React.Component{
    constructor(props){
        super(props)
 //console.log(this.props)undefined
        this.state={

           
            routeParams:props.match.params
        }
    }

    render(){
        console.log(this)
        return  <div>
            movie {this.props.match.params.type}{this.props.match.params.id}

            <br/>
            { this.state.routeParams.type}========{this.state.routeParams.id}
        </div>
    }

}