import React from 'react'
import ReactDom from 'react-dom'
// import 'antd/dist/antd.css';  /**全部导入，推荐采取按需导入babel-plugin-import */
import CmtItemList from './components/cmtItemListNew'
import App from './components/routerDemo/app'


import AntdFirstDemo from './components/antdDemo/antdfirstDemo'
import TwoSidesBind from './components/twoSidesBind'


// import './css/reset.css'

// ReactDom.render(
//     <CommentList > </CommentList> 
//  , document.querySelector('#app'))

// ReactDom.render(
//     <App></App>,document.querySelector('#app')
// )

ReactDom.render(<div> <AntdFirstDemo></AntdFirstDemo>
        <CmtItemList></CmtItemList>
        </div> , document.querySelector('#app'))
   