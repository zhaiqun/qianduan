import React from 'react'

export  default class Testcom extends React.Component {
    render() {

        return <div>有状态组件： 我是用jsx外部引入class实现的组件，组件外部传入参数小狗的名字：{this.props.name} </div>
    }

}