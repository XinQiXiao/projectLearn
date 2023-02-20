import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
];

const router = new VueRouter({
    routes, // `routes: routes` 的缩写
});

export default router;