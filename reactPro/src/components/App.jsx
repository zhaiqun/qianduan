import  React  from  'react'
import { Layout, Menu } from 'antd';
import  {Route,Link,HashRouter} from  'react-router-dom'
import  AppCss  from  '../css/App.scss'
import  Home  from './home/Home'

import  About  from './about/About'

import  Movie  from  './movie/Movie'
const { Header, Content, Footer } = Layout;
import { Pagination,DatePicker   } from 'antd';
export  default  class  App  extends  React.Component{
    constructor(){

        super()
        this.state={

        }
    }
    render(){
      console.log(AppCss)
      return <HashRouter>
    <Layout className={`layout  ${AppCss.appContainner}`} >
    <Header>
      <div className={AppCss.logo} />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home"><Link  to='/home'>首页</Link></Menu.Item>
        <Menu.Item key="movie"><Link  to='/movie/in_theaters/1'>电影</Link></Menu.Item>
        <Menu.Item key="about"><Link  to='/about'>关于</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ background: '#fff',height:'100%'}}>
    <Route  path='/home'  component={Home}></Route>
    <Route  path='/movie'  component={Movie}></Route>
    <Route  path='/about'  component={About}></Route>


    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </HashRouter>


}
}