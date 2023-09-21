<template>
    <div id="app">
      <header>
        <h1>Virtual Health & Fitness Coach</h1>
        <nav>
          <a href="#workouts">Workouts</a>
          <a href="#nutrition">Nutrition</a>
          <a href="#community">Community</a>
          <a href="#signup">Sign Up</a>
        </nav>
      </header>
  
      <section id="intro">
        <h2>Your Personalized Fitness Guide</h2>
        <p>Welcome to your one-stop platform for all things health & fitness. Join our community today and start your journey!</p>
      </section>
  
      <section id="workouts">
        <h2>Workouts Tailored For You</h2>
        <p>From strength training to yoga, find workouts that suit your lifestyle and goals.</p>
      </section>
  
      <section id="nutrition">
        <h2>Nutrition and Diet Tracking</h2>
        <p>Track your meals, understand your nutritional intake, and get guidance on healthier eating habits.</p>
      </section>
  
      <section id="community">
        <h2>Join Our Community</h2>
        <p>Engage with fitness enthusiasts, share your journey, and get motivated every day.</p>
      </section>
  
      <section id="signup">
        <h2>Start Your Fitness Journey</h2>
        <form @submit.prevent="signup">
          <input type="text" placeholder="Full Name" required>
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Sign Up Now</button>
        </form>
      </section>
  
      <footer>
        <p>© 2023 Virtual Health & Fitness Coach. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      signup() {
        // Placeholder for signup logic or navigation to a signup page
        alert("Sign up feature coming soon!");
      }
    }
  }
  </script>
  
  <style>
  body, html {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #83a4d4, #b6fbff);
  }
  
  #app {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background: #eef2f3;
    border-radius: 15px;
    box-shadow: -10px -10px 30px #c8d1d9, 10px 10px 30px #ffffff;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  
  header h1 {
    font-size: 24px;
    color: #333;
  }
  
  nav a {
    margin-left: 20px;
    text-decoration: none;
    color: #007BFF;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  nav a:hover {
    background-color: rgba(0,123,255,0.1);
  }
  
  section {
    margin-top: 40px;
    padding: 20px;
    background: #eef2f3;
    border-radius: 8px;
    box-shadow: inset 4px 4px 10px #c8d1d9, inset -4px -4px 10px #ffffff;
  }
  
  section h2 {
    font-size: 20px;
    color: #333;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 4px 4px 10px #c8d1d9, -4px -4px 10px #ffffff;
    transition: all 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  footer {
    margin-top: 40px;
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    color: #aaa;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  input {
    padding: 10px;
    border: none;
    border-radius: 50px;
    box-shadow: inset 4px 4px 10px #c8d1d9, inset -4px -4px 10px #ffffff;
    transition: box-shadow 0.3s;
  }
  
  input:focus {
    box-shadow: inset 2px 2px 5px #c8d1d9, inset -2px -2px 5px #ffffff;
    outline: none;
  }
  </style>
  