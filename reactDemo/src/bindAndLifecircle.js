import React from 'react'

import ReactDom from 'react-dom'
import Counter from './components/Counter'

import BindDemo from './components/bindDemo'


import TwoSidesBind from './components/twoSidesBind';
ReactDom.render( <div> <Counter initcount = { 2 } > </Counter>

        <BindDemo > </BindDemo> <p></p >
        <TwoSidesBind></TwoSidesBind>

        </div>,document.querySelector('#app'))

        // ReactDom.render(<div><Counter initcount='我是数字'></Counter></div>,document.querySelector('#app'))