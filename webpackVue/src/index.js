// import './style/index.css'

import Vue from 'vue';
// import vue from '../node_modules/vue/dist/vue.js'
import VueRouter from 'vue-router'
import router from './router.js'
import app from './app.vue'
Vue.use(VueRouter);
let vm = new Vue({
    el: '#app',
    data: { msg: 'zq' },
    methods: {},
    router,
    render: c => c(app)
})

// import m, { title, age as suishu } from './test'
// console.log(`${m}==============${title}=======${suishu}`)