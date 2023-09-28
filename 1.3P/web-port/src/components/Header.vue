<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderView',
  };
  </script>
  
  <style scoped>
  /* Styling the header component */
  header {
    background-color: #2E2E2E;
    color: #F5F5F5;
    padding: 15px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  a {
    color: #F5F5F5;
    text-decoration: none;
    font-weight: 600;
    padding: 5px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  </style>
  
