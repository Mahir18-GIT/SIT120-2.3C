<!-- src/App.vue -->

<template>
  <div id="app">
    <!-- Add a navigation (optional) -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    
    <!-- This is where your routed component will be injected -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

