import _ from 'lodash'
import './style/index.css'

import './style/index.scss'

function creatDom() {
    let domEle = document.createElement('div')
    domEle.innerHTML = _.join(['baidu.com', '你好', 'zq'], '')
    return domEle
}

let item = creatDom()
item.classList.add('red')
    // console.log(a);
console.log(document.body)
document.body.appendChild(item)

let a = 'hello'
a = 123

console.log(a)

// console.log(b)

var c
console.log(c)