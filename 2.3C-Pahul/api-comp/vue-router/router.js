// src/routes.js

import Vue from 'vue';
import VueRouter from 'vue-router';

// Import your component views
import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/about',
        name: 'about',
        component: AboutComponent
    }
    // ... add other routes as needed
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
