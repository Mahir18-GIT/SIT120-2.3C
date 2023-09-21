// src/main.js

import Vue from 'vue';
import App from './App.vue';
import router from './router';  // Make sure you import your router

new Vue({
  render: h => h(App),
  router  // Use the router in your Vue instance
}).$mount('#app');
