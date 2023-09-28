<template>
  <div id="app">
    <HeaderApp />
    
    <!-- Including the ResponsiveButtons component -->
    <div class="responsive-btn-container">
      <ResponsiveButtons />
    </div>

    <main>
      <router-view />
    </main>
    
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from '@/components/Header.vue';
import FooterApp from '@/components/footer.vue';
import ResponsiveButtons from '@/components/ResponsiveButtons.vue'; 

export default {
  components: {
    HeaderApp,
    FooterApp,
    ResponsiveButtons, 
  },
};
</script>

<style scoped>
/* global styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('https://wallpaperaccess.com/full/5652030.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh; 
  display: flex;
  flex-direction: column;
}

.responsive-btn-container {
  margin: 20px 0;
}

main {
  flex: 1;  /* Allows the main content to grow and use all the available space */
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
