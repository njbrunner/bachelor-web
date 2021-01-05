import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';
import Home from './components/Home.vue';
import Admin from './components/Admin.vue';
import Login from './auth/components/Login';
import TeamStandings from './team/components/TeamStandings';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/standings', component: TeamStandings},
    { path: '/admin', component: Admin },
    { path: '/login', component: Login },
    { path: '*', redirect: Home }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
});

router.beforeEach((to, from, next) => {
    store.dispatch('fetchAccessToken');
    if (to.fullPath === '/admin') {
      if (!store.getters.isAuthorized) {
        next('/login');
      }
    }
    if (to.fullPath === '/login') {
      if (store.getters.isAuthorized) {
        next('/admin');
      }
    }
    next();
  });

  export default router;
