import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import heads from '@/components/head'
import lostList from '@/components/lostList'
import detail from '@/components/detail'
Vue.use(Router)


export default new Router({
    routes: [{
        path: '/',
        name: 'heads',
        component: heads
    }, {
        path: '/test',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/lostList',
        name: 'lostList',
        component: lostList
    }, {
        path: '/detail',
        name: 'detail',
        component: detail
    }]
})