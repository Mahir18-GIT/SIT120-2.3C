// src/routes.js

import Vue from 'vue';
import VueRouter from 'vue-router';




// Import your component views
import HomeComponent from './components/homecomponent.vue';
import AboutComponent from './components/aboutcomponent.vue';

Vue.use(VueRouter);

const VueRouter = [
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


export default router;
