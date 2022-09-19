import AuthTest from '../views/dev/AuthTest.vue';

const devPrefix = '/dev'

const devRoutes = [
  {
    path: `${devPrefix}/auth-test`,
    name: 'Auth test page',
    component: AuthTest
  },
]



export default devRoutes;
