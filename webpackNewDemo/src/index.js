import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'
$(function() {

    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', 'pink')
})

class Test {

    constructor(name) {

        this.name = name
    }
    static type = '人类'
}

console.log(new Test('zq').name)

console.log(Test.type)