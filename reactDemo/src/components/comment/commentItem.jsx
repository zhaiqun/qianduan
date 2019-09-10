import   React  from  'react'

export  default  class  CommentItem  extends  React.Component{
    constructor(props){

        super()
        this.state={

        }
    }
    render(){

        return <div>
            <ul>
                <li>{this.props.user}:{this.props.cmt}  </li>
            </ul>
        </div>
    }

}