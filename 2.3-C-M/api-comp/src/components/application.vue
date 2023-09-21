<template>
    <!-- Header Section -->
    <div class="header">
      <h1>Welcome to SportsZone</h1>
      <p>{{ message }}</p>
    </div>
  
    <!-- Display Football Team's Logo (Raw HTML for example purpose) -->
    <div v-html="rawHtml"></div>
  
    <!-- Football Team Information -->
    <div class="team-info">
      <div v-bind:id="dynamicId">Team ID: {{ dynamicId }}</div>
      <p>Team Name: {{ reversedMessage }}</p>
    </div>
  
    <!-- List of Players -->
    <h2>Players</h2>
    <ul class="players-list">
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
        <button v-if="item.show" @click="sayHello">Show Stats</button>
      </li>
    </ul>
  
    <!-- Search Player -->
    <div>
      <label for="player-search">Search Player: </label>
      <input v-model="inputText" id="player-search" placeholder="Enter player name...">
      <button v-on:click="clickHandler">Search</button>
    </div>
  
    <!-- User Feedback -->
    <div>
      <textarea v-model="message" placeholder="Leave your feedback..."></textarea>
      <button @click="submitFeedback">Submit Feedback</button>
    </div>
  </template>
  
  <script setup>
    import { ref, computed, watch } from 'vue'
  
    // Site's Header Message
    let message = ref("Explore the world of football!")
    let rawHtml = ref("<img src='path_to_team_logo.png' alt='Team Logo'>")
    let dynamicId = ref("team-123")
    let reversedMessage = computed(() => `Team: ${message.value.split(' ').pop()}`)
  
    // List of Players
    let items = ref([
      { text: "Lionel Messi", show: true, id: 1 },
      { text: "Cristiano Ronaldo", show: true, id: 2 }
    ])
  
    // Methods
    function sayHello() {
      alert('Player stats coming soon!')
    }
  
    function clickHandler() {
      alert(`Searching for player: ${inputText.value}`)
    }
  
    function submitFeedback() {
      alert('Thank you for your feedback!')
    }
  
    // Form Input Bindings
    let inputText = ref("")
  </script>
  
  <style scoped>
  /* SportsZone Styling */
  .header {
    background-color: #007BFF;
    color: white;
    text-align: center;
    padding: 20px;
  }
  
  .team-info {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
  }
  
  .players-list {
    list-style-type: none;
    padding: 0;
  }
  
  .players-list li {
    border-bottom: 1px solid #e9ecef;
    padding: 10px;
  }
  
  button {
    margin-left: 10px;
  }
  </style>
  