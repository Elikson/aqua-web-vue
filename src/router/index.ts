import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useLoginStore } from '@/stores/login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/HomeView.vue') },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/home',
          name: 'Overview',
          component: () => import('../views/OverviewView.vue')
        },
        {
          path: '/devices',
          name: 'Devices',
          component: () => import('../views/DevicesView.vue')
        },
        {
          path: '/users',
          name: 'Users',
          component: () => import('../views/UsersView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  const loginStore = useLoginStore()

  const isAuthenticated = loginStore.logged
  if (!isAuthenticated && to.name !== 'Login'
  ) {
    return { name: 'Login' }
  } else if (isAuthenticated && to.name === 'Login'){
    return { name: 'Home' }
  }
})

export default router
