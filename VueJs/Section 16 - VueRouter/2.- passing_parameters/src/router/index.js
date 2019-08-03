import Router from 'vue-router'
import User from '@/components/User/index.vue'
import Home from '@/components/Home.vue'
import Vue from 'vue'

Vue.use(Router);

export const routerMap = [
    /*
     * Each route needs a path, the component we want to load every
     * time we visit this path and a name for identifying the route. 
     */
    {
        path: '/user/:id',
        component: User,
        name: 'user'
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