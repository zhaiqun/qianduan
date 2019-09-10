import  React  from 'react'
import  CommentItem from './commentItem'
import  InputComment  from './inputComment'

export  default  class  CommentList  extends React.Component{

    constructor(){
        super()

        this.state={
            commentList:[
                // {id:1,  user:'tony',comment:'我是linux的大粉条'},
                // {id:2,user:'tom',comment:'我是瑜伽的大粉条'},
                // {id:3,  user:'qq',comment:'我是qq的大粉条'}
            ]
        }
    }
    

    loadCmtList=()=>{
      var  listStr= localStorage.getItem('rectCmt')||'[]'
      this.setState({
        commentList:JSON.parse(listStr)
      })
    }


    componentWillMount(){
        this.loadCmtList()

    }
    render(){

      return  <div>
      {     this.state.commentList.map(
         (c)=> {return <CommentItem key={c.id} {...c}></CommentItem>})
      
     }
      <InputComment  reload={this.loadCmtList}></InputComment>
      </div> 
    }

}