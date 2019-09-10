import  React  from  'react'
import { ConfigProvider, DatePicker, message,Pagination } from 'antd';
import  appCss  from  '../../css/app.scss'
console.log(appCss)
import { Layout, Menu } from 'antd';
import  {Route,Link,HashRouter} from  'react-router-dom'
const { Header, Content, Footer } = Layout;
import cssobj  from '../../css/cmtItem.css'
console.log("cssobj:"+cssobj)
export   default  class  AntdFirstDemo extends  React.Component{
    constructor(){
        super()

    }
    render(){
        console.log(appCss)
        return  <HashRouter>
        <Layout className={`layout  ${appCss.appContainner}`} >
        <Header>
        <div className={appCss.logo} />
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
     
        <DatePicker onChange={(c,s)=>{console.log(s)}} /><br></br>
       
        <Pagination
          showSizeChanger
          onShowSizeChange={(c,s)=>{console.log(c+s)}}
          defaultCurrent={3}
          total={500}
        />
    
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      </HashRouter>
    
    
    }

}