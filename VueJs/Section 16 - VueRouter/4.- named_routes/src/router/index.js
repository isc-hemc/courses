import Router from 'vue-router'
import User from '@/components/User/index.vue'
import Details from '@/components/User/Details.vue'
import Start from '@/components/User/Start.vue'
import Edit from '@/components/User/Edit.vue'
import Home from '@/components/Home.vue'
import Vue from 'vue'

Vue.use(Router);

export const routerMap = [
    {
        path: '/user',
        component: User,
        name: 'user',
        children: [
            { path: '', component: Start, name: 'start' },
            { path: ':id', component: Details, name: 'details' },
            { path: ':id/edit', component: Edit, name: 'edit' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'home'
    }
]

export default new Router({
    scrollBehavior: () => ({ y:0 }),
    mode: 'history',
    routes: routerMap
})