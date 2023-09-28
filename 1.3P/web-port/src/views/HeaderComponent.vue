<template>
    <header>
      <h1>Mahir Seth's Portfolio</h1>
      <nav>
  <ul>
    <li><router-link to="/about">About Me</router-link></li>
    <li><router-link to="/experience">Experience</router-link></li>
    <li><router-link to="/contact">Contact</router-link></li>
  </ul>
</nav>

    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  }
  </script>
  
  <style scoped>
  /* Styles specific to HeaderComponent */
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    background-color: #333;
    color: white;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
  
  header h1 {
    font-size: 24px;
    margin: 0;
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
  }
  
  nav li {
    display: inline;
  }
  
  nav a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: color 0.3s ease;
  }
  
  nav a:hover {
    color: #4CAF50;
  }
  
  @media screen and (max-width: 768px) {
    nav ul {
      display: none;
    }
  
    /* You can add styles for a mobile navigation menu here */
  }
  
  </style>