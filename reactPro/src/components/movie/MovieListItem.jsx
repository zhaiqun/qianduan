import  React  from 'react'
import { Rate } from 'antd';
import  MovieItem  from  '../../css/MovieItem.scss'

export  default  class  MovieListItem extends React.Component{
    constructor(props){
        super()

        console.log(props)
    }


                componentWillMount(){

    }
    goDetail=()=>{
        this.props.history.push(`/movie/detail/${this.props.id}`)
    }
    render(){

        return  <div  onClick={this.goDetail}  className={MovieItem.movieItem}>
            <img src={this.props.images.small} alt=""/>
            <h4 className={MovieItem.h4}>{this.props.title.includes('：') ? this.props.title.replace('：','(')+')':this.props.title}</h4>
            <h4 className={MovieItem.h4}>上映年份：{this.props.year}</h4>
            <h4 className={MovieItem.h4}>电影类型：{this.props.genres}</h4>
            <Rate  disabled allowHalf   defaultValue={this.props.rating.average/2}/>
        </div>
    }
}