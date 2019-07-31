import React from 'react'
import ReactDom from 'react-dom'


// 样式模块化只是针对id选择器和class选择器  标签选择器只能是全局的
import ItemList from './components/cmtItemListNew'
ReactDom.render( <ItemList > </ItemList>, document.querySelector('#app'))