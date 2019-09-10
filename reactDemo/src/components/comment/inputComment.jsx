import React   from  'react'

export  default  class  extends  React.Component{
    constructor(props){
        super()

        // this.state={

        //     user:'',
        //     cmt:''
        // }

    }


    add=()=>{
        var obj={
            user:this.refs.userTxt.value,
            cmt:this.refs.cmtTxt.value
        }

        console.log(obj)
       var  cmtList= JSON.parse(localStorage.getItem('rectCmt')  || '[]')   
       console.log(cmtList)
       cmtList.unshift(obj)
       console.log(cmtList)
       localStorage.setItem('rectCmt',JSON.stringify(cmtList))
       console.log('0k')
       this.refs.userTxt.value=this.refs.cmtTxt.value=''
       this.props.reload()
    }
    render(){

        return <div>

            <label htmlFor=""> user: <input type="text" ref='userTxt'/> </label>
            <label htmlFor=""> comment: <input type="text"  ref='cmtTxt'/> </label>

            <button  onClick={this.add}>add</button>
        </div>
    }

}
