import  React  from 'react'
import { Button, Icon } from 'antd';
import  FetchJsonp  from 'fetch-jsonp'
import  MovieDetailCss  from '../../css/MovieDetail.scss'

export  default  class  MovieItemDetail extends React.Component{
    constructor(){

        super()

        this.state={
            info:[]
        }
    }

    goBack=()=>{
        this.props.history.goBack()
    }
    componentWillMount(){

        this.loadData()
    }
    loadData=()=>{
        FetchJsonp(`https://douban.uieee.com/v2/movie/${this.props.match.params.id}`).then((res)=>{
            return  res.json()
        }).then((res)=>{ 
            console.log(res)
            this.setState({
            info:res

         })
        })
    }

    render(){

        return  <div  className={MovieDetailCss.detailContain}> 
          
        <Button    type="primary"  onClick={this.goBack}>
        <Icon type="left" />
        返回电影列表页面
        </Button>
        <div className={MovieDetailCss.content}>
      
 
        <h1>{this.state.info.title}</h1>
        <img src={this.state.info.image} alt=""/>
        <p className={MovieDetailCss.summary}>{this.state.info.summary}</p>

        </div>
    
      </div>
    }

}