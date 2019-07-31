import  React  from 'react'
// import   ReactDom  from 'react-dom'


// const   styles={
//     item:{border:"1px solid  #ccc",margin:"10px"},
//     p:{display:"flex",justifyContent:"spaceBetween"}
// }

import  styles  from './styles'

export  default  class CmtItem extends  React.Component{
      
        render(){

            return <div  style={styles.item}>
                <p>{this.props.content}</p>
                 <p ><span>{this.props.author}</span>
                 <span >{this.props.datatime}</span>
            </p>
            </div>
        }

}