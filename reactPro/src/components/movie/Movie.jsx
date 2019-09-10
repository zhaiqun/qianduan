import  React  from  'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link,Route,Switch}  from 'react-router-dom'
import MovieList from './MovieList';
import  MovieItemDetail  from './MovieItemDetail'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export  default  class  Movie  extends React.Component{
    constructor(){
        super()
    }

    render(){

        return    <Layout style={{  background: '#fff' ,height: '100%'}}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['hot']}
            style={{ height: '100%' }}
          >    
              <Menu.Item key="in_theaters">

               <Link  to='/movie/in_theaters/1'   >正在热映</Link>
              </Menu.Item>
              <Menu.Item key="coming_soon">
              <Link   to='/movie/coming_soon/1'>即将上映</Link>
                  </Menu.Item>
              <Menu.Item key="top_250">
              <Link   to='/movie/top250/1'>top250</Link>
                  </Menu.Item>
         
                  
          </Menu>
        </Sider>
        <Content  style={{  height: '100%' }}>
          <Switch>
           <Route  exact path='/movie/detail/:id' component={MovieItemDetail}></Route>
            <Route  exact path='/movie/:type/:page'  component={MovieList}></Route>
            </Switch>
        </Content >
      </Layout>
    }

}