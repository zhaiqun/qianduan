import login from './main/login.vue'

import account from './main/account.vue'
import goodList from './main/goodList.vue'

import register from './main/register.vue'


import VueRouter from 'vue-router'
var router = new VueRouter({
    routes: [{

        path: '/account',
        component: account,
        children: [{
            path: 'login',
            component: login
        }, {
            path: 'register',
            component: register
        }]
    }, {

        path: '/goodList',
        component: goodList
    }]

})

export default router