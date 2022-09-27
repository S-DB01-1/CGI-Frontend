import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Styling from '../views/Styling.vue'
import devPages from "@/router/devRoutes"
import CreateTrip from '../views/Trip/CreateTrip.vue'
import UserView from '../views/User/UserView.vue'
import User from '@/Model/User';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/styling',
      name: 'styling',
      component: Styling
    },
    {
      path: '/trip/aanmaken',
      name: 'trip',
      component: CreateTrip
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
    ...devPages
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
