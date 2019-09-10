import React from 'react'; //创建组件虚拟dom
import ReactDom from 'react-dom' //将创建的组件dom渲染到页面
import { Range } from 'react-range';

const h11 = React.createElement('h1', { id: "myh1" }, '我是h');
// const div1 = React.createElement('div', { id: 'div1' }, '', h11)
// const myDivElement = <div className = "foo"> 222</div> ;

let arr = [ < a > 百度 < /a>, <a> 天猫 </a >

]


const strArr = ['小虎队', 'f4', '飞儿乐团'];
const arrDom = [];
strArr.forEach(a => {

    const tem = < h4 > { a } < /h4>;
    arrDom.push(tem);
})

let a = 9;
let b = true;



//#region 
{
    /* // ReactDom.render(
    // <div> {arrDom}{9+56}<h1>{  String(b)}</h1>{h11}{arr}
    // {strArr.map(item=>{
    //     return <h6  key={item}>{item}</h6>
    // })}
    // </div>

    // , document.querySelector('#app')); */
}


//#endregion



let dog = {
        name: "小白",
        age: 18
    }
    // 创建组件的第一种方式无状态方式
function Hi(props) {
    return <div > 无状态组件, 组件外部传入参数小狗的名字： { props.dog.name } < /div>
}

//创建组件的第二种方式 有状态方式
class Movie extends React.Component {

    constructor() {

        super()
        this.state = {
            msg: "我是state里的数据"
        }
    }

    render() {
        this.state.msg = "我是修改后的state数据"
        return <div > 有状态组件： class实现的组件， 组件里定义了state数据： { this.state.msg }，
        外部传入参数： { this.props.name } < /div>
    }
}

import Testcom from './components/classComponent'
import Hello from 'src/components/Hello'


ReactDom.render( < div > < Hi dog = { dog } > < /Hi><Hello></Hello > < Movie name = { dog.name } > < /Movie>  <Testcom  name={dog.name}></Testcom > < /div> ,
    document.querySelector('#app'))