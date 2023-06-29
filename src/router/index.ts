import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        //路由初始指向
        path: '/',
        name: '主页',
        component: Layout,
        children: [
            {
                path: '/',
                name: '主页',
                component: () => import('@/view/homeView/index.vue'),
            },
            {
                path: '/companyIntroduce',
                component: () => import('@/view/companyIntroduce/index.vue'),
            },
            {
                path: '/companyService',
                component: () => import('@/view/companyService/index.vue'),
            },
            {
                path: '/aboutUs',
                name: '测试',
                component: () => import('@/view/homeViewTest/index.vue'),
            },
        ],
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
