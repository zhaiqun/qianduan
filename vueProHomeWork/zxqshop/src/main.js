// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
// import { Header, Tabbar, TabItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:8080/api'
Vue.config.productionTip = false
Vue.use(MintUI)
    // Vue.component(Header.name, Header);
    // Vue.component(Tabbar.name, Tabbar);
    // Vue.component(TabItem.name, TabItem);
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})