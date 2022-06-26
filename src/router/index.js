import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'todos',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoListView')
  },
  {
    path: '/todo/:id',
    name: 'todo',
    component: () => import('../views/TodoItemView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
