import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Order from '@/components/Order'
import Vip from '@/components/Vip'

import Products from '@/components/Products'
import News from '@/components/News'
import productDetail from '@/components/productDetail'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/Cart',
            name: 'Cart',
            component: Cart
        }, {
            path: '/Order',
            name: 'Order',
            component: Order
        },
        {
            path: '/Vip',
            name: 'Vip',
            component: Vip
        },
        {
            path: '/Products',
            name: 'Products',
            component: Products
        }, {
            path: '/News',
            name: 'News',
            component: News
        }, {
            path: '/productDetail/:id',
            name: 'productDetail',
            component: productDetail
        }
    ]
})