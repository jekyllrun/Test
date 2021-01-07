import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    // 指定的组件
    component:Home
  },
  {
    path:'/category',
    component:Category
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
