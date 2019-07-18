import Vue from 'vue'
import { Button } from 'mint-ui';
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import app from './app.vue'
import 'bootstrap/dist/css/bootstrap.css'

import './lib/mui/css/mui.css'

import './css/app.css'

Vue.component(Button.name, Button)
    // Vue.use(MintUI)

new Vue({
    el: '#app',
    render: c => c(app)
})