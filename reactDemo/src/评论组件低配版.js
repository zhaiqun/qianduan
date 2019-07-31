import React from 'react'
import ReactDom from 'react-dom'



class  ComItem  extends React.Component{
    constructor(){
        super();
    }
    render(){  
            return <div>
                <p>{this.props.content}</p>
                <p>{this.props.author}  {this.props.datetime}</p>
            </div>
    }
}

class ComList extends React.Component {
    constructor(){
        super();
        this.state={

            comData:[{id:0, content:'我好喜欢你呀',author:'tony',datetime:'2019-07-25'},
            {id:1,content:'我也好喜欢你呀',author:'tom',datetime:'2019-07-25'},
            {id:2,content:'我好喜欢你呀大粉丝呀',author:'monica',datetime:'2019-07-25'}]
        }
    }
    render(){

        return  <div>
            <h4>评论区域</h4>
            {this.state.comData.map(c=>{

                return  <ComItem key={c.id}  {...c}></ComItem>
            })}
        </div>
    }
   
}

ReactDom.render(<ComList>  </ComList>,document.querySelector('#app'))