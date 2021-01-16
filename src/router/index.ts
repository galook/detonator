import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import View from '../views/View.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'View',
    component: View
  },
  {
    path: '/num/:no',
    name: 'h',
    component: View
  },
  {
    path: '/create/:no',
    name: 'Create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Create.vue')
  },
  {
    path: '/edit/:no',
    name: 'Edit',
    
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Edit.vue')
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
