import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestReceived.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/notFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    {
      path: '/register',
      component: CoachRegistration,
    },
    {
      path: '/requests',
      component: RequestsReceived,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
    {
      path: '/auth',
      component: UserAuth,
    },
  ],
});
export default router;