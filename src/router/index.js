import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('views/home/Home')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    // 指定的组件
    component:Home
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
