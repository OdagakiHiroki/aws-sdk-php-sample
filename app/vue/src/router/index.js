import Vue from 'vue';
import VueRouter from 'vue-router';
import UserLogin from '@/components/pages/UserLogin.vue';
import TopPage from '@/components/pages/TopPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', name: 'Login', component: UserLogin },
  { path: '/top', name: 'Top', component: TopPage },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
