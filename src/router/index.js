import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/accountSettings',
    name: 'AcountSettings',
    component: () => import('../views/AccountSettings/AccountSettingsIndex.vue')
  },
  {
    path: '/accountSettingsEdit',
    name: 'AcountSettingsEdit',
    component: () => import('../views/AccountSettings/AccountSettingsEdit.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/shoppingCard',
    name: 'ShoppingCard',
    component: () => import('../views/GeneralShoppingCard.vue')
  },
  {
    path: '/registerProduct',
    name: 'RegisterProduct',
    component: () => import('../views/Products/RegisterProduct.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
