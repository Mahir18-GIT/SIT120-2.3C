<template>
  <div class="home-view">
    <h2>Welcome to My Portfolio</h2>
    <p>Welcome to my portfolio homepage.</p>
    <router-link to="/about" class="about-link">Learn more about me</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6B73FF, #000DFF);
  color: #f5f5f5;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

.home-view h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

.home-view p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.about-link {
  background-color: #F5F5F5;
  color: #333;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s;
}

.about-link:hover {
  background-color: #DDD;
}
</style>
