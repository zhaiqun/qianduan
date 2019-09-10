import  React  from 'react'
import { Spin, Alert,Pagination   } from 'antd';
import    MovieListCss   from  '../../css/MovieList.scss'

import  FetchJsonp  from 'fetch-jsonp'

import  MovieListItem  from './MovieListItem'

export  default  class MovieList  extends React.Component{
    constructor(props){
        super(props)

        this.state={
            isLoading:true,
            pageSize:14,
            pageIndex:parseInt(props.match.params.page) ||1,
            total:0,
            movies:[],
            movieType:props.match.params.type

        }
       
    }
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            isLoading:true,
            pageIndex:nextProps.match.params.page || 1,
            movieType:nextProps.match.params.type,
            movies:[],
        },()=>{
            this.loadMovie()
        })
    }
    loadingSpin=()=>{
        if(this.state.isLoading){

            return   <Spin tip="Loading...">
            <Alert
              message="正在请求数据"
              description="精彩内容马上呈现"
              type="info"
            />
          </Spin>
        }
    }

    componentWillMount(){
        // fetch('/api/getSwape').then((res)=>{
        //    return   res.json()
        // }).then((res)=>{
        //     console.log(res)
        // }
            
        // )

        this.loadMovie()
  
    }

    pageChange=(page)=>{
        // window.location.href=`/#/movie/${this.state.movieType}/${page}`
        this.props.history.push(`/movie/${this.state.movieType}/${page}`)
    }
    loadMovie=()=>{

        // const url=`api/${this.state.movieType}`
        // console.log(url)
        // fetch(url).then((res)=>{
        //     return  res.json()
        // }).then((res)=>{
        //     console.log(res)
        //     this.setState({
        //         isLoading:false,
        //         movies:res.subjects,
        //         total:res.total
        //     })
        // })
        const url=`https://douban.uieee.com/v2/movie/${this.state.movieType}?start=${this.state.pageSize*(this.state.pageIndex-1)}&count=${this.state.pageSize}`
        console.log(url)
        FetchJsonp(url).then((res)=>{
            return  res.json()
        }).then((res)=>{
            console.log(res)
            this.setState({
                isLoading:false,
                movies:res.subjects,
                total:res.total
            })
        })
    }
    onShowSizeChange=(current,pageSize)=>{
        console.log(current)
        this.setState({
            pageIndex:current,
            pageSize,
            isLoading:true,
        

        },()=>{
            this.loadMovie()
            console.log('重新加载')
        })
    }
    render(){
        return <div> 
            <div  style={{overflow:'hidden'}}>
             {
                this.loadingSpin()
            } 
            {this.state.movies.map(e => {
                 return    <MovieListItem onClick={console.log('被点击了')} history={this.props.history}    key={e.id}  {...e}></MovieListItem>
            })}
            </div>
            <div  style={{padding:'10px'}}>
         
            <Pagination
                showSizeChanger
                onShowSizeChange={this.onShowSizeChange}
                defaultCurrent={this.state.pageIndex}
                total={this.state.total}
                onChange={this.pageChange}
            />

            </div>




        </div>


    }


}