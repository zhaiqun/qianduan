import  React  from  'react'
// import   ReactDom  from  'react-dom'
import  {Route,BrowserRouter  as Router,Link,HashRouter}  from 'react-router-dom'

import  Home  from  './home'
import  Movie  from  './Movie'
import  About  from  './About'
export  default  class  App  extends  React.Component{

        constructor(){
            super() 
            this.state={}
        }
        render(){

            return  <div>
                <h1>我是根组件</h1><Router>
               <Link  to='/home'>首页</Link> &nbsp;&nbsp;
               <Link  to='/about'>About</Link>&nbsp;&nbsp;
               <Link  to='/movie/gongfu/100' >Movie</Link>&nbsp;&nbsp;
            <hr/>
                <Route  path='/home'  component={Home}></Route>
            <hr/>
            {/*默认情况下，路由中的规则，是模糊匹配的，如果路由可以部分匹配成功，则默认暂时这个路由对应的组件
            比如to='/home/100'   规则里的path设置为 path='/movie' 也是可以匹配的，但是规则跟to反过来就不行了  另外如果加了exact就不行了 */   }
            <Route  path='/movie/:type/:id' exact  component={Movie}></Route>
            <hr/>
            <Route  path='/about'  component={About}></Route> <hr/>
            
            </Router>
</div>

           

           
        }
       

}