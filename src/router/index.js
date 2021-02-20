import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')
const Cart = () => import('views/cart/Cart')
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
  },
  { 
    path:'/detail/:iid',
    component:Detail
  },
  { 
    path:'/cart',
    component:Cart
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
