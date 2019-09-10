
import  React  from 'react'
import  ReactTypes  from 'prop-types'

import  CounterSon  from './CounterSon'
export  default  class  Counter  extends   React.Component{

    constructor(props){

      super()
      this.state={
          title:'计数器',
          initcount:props.initcount
      }
    }
//在react中，使用静态的defaultProps属性，来设置组件的默认属性值
    static  defaultProps={
        // initcount:this.props.initcount
    }

    static propTypes={

        initcount:ReactTypes.number
    }

    componentWillMount(){

        console.log('componentWillMount()此时组件还位挂载，虚拟dom也没有创建好')

        console.log(document.querySelector('#htitle'))

        console.log(this.props.initcount+this.state.title)
        // this.say()
    }

    increat=()=>{

        this.setState({initcount:this.state.initcount+1})
    }


    shouldComponentUpdate(nextProps,nextState){
        //在 shouldComponentUpdate中，如果返回值是false,这不会执行后续的生命周期函数，而是直接返回到了运行中的状态
        //此时有后续的render函数并没有被调用，因此页面不会被更新，但是组件的state状态确被修改了
        // return  false

        //经过测试，发现this.state.initcount拿到的是上一次的旧数据
        // console.log(this.state.initcount)
        // return  this.state.initcount % 2===0?true:false 

        // return  nextState.initcount%2===0?true:false
        return  true;
    }


//组件是旧的，此时尚未更新，在进入这个生命周期函数的时候，内存中的虚拟dom是旧的，页面上dom元素也是旧的
    componentWillUpdate(){

        console.log( 'componentWillUpdate里h3的值'+ document.querySelector('#h3').innerHTML)


        console.log(this.refs.h3.innerHTML)
    }
    componentDidMount(){
        console.log('componentDidMount()此时组件已经挂载，可以获取dom元素')
        console.log(document.querySelector('#htitle'))

        // document.querySelector('#btn').onclick=()=>{

        //     alert(this.state.initcount)
        //     this.setState({
        //         initcount: this.state.initcount+1
        //     },()=>{
        //         console.log(this.state.initcount)
        //     })
        // }
    }
    say(){
        alert('我是组件里的方法')
    }

    componentDidUpdate(){

        console.log(`componentDidUpdate()触发：${this.refs.h3.innerHTML}  `)
    }

    change=()=>{
        this.setState({
            title:'修改后的计时器title'
        })
    }
    render(){

        console.log('render()触发：'+(this.refs.h3  && this.refs.h3.innerHTML))
        return <div>
        <h4  id='htitle'>计数器</h4>
        <button id='btn'  onClick={this.increat}t>+1</button>
        <hr/>

        当前的数字是:
        <h3 id="h3"  ref='h3'>  {this.state.initcount}</h3>
      

        <button  onClick={this.change}>改变组件的title值</button>
        <CounterSon   title={this.state.title}></CounterSon>

    </div>
        
    }

}