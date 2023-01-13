import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Styling from '../views/Styling.vue'
import devPages from "@/router/devRoutes"
import adminRoutes from "@/router/adminRoutes"
import CreateTrip from '../views/Trip/CreateTrip.vue'
import UserView from '../views/User/UserView.vue'
import User from '@/Model/User';
import Login from '../views/Auth/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/home',
      meta: {
        requiresAuth: true,
      },
      component: CreateTrip
    },
    // {
    //   path: '/styling',
    //   name: 'styling',
    //   component: Styling
    // },
    {
      path: '/user',
      name: 'user',
      meta: {
        requiresAuth: true,
      },
      component: UserView
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    ...devPages,
    ...adminRoutes,
  ]
})
checkState()
function checkState() {
  let state = false;
  const response = fetch("http://127.0.0.1:5000/api/user/state")
      .then(response => {console.log(response); return response})
      .then(response => response.json())
      .then(data => {
        console.log(data)
        state = data.state
      })
  console.log(state)
  return state
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (checkState()) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});

export default router
