<template>
  <div class="home-container">
    <h2>Welcome to SportsZone!</h2>
    <p>Your one-stop solution to all the latest football news, updates, and stats. Dive into the world of football with us!</p>

    <h3>Top Football Teams</h3>
    <ul class="team-list">
      <li v-for="team in teams" :key="team.id">
        <router-link :to="`/team/${team.id}`">{{ team.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      teams: [
        { id: 1, name: "FC Barcelona" },
        { id: 2, name: "Real Madrid" },
        { id: 3, name: "Manchester United" },
        { id: 4, name: "Liverpool FC" },
        { id: 5, name: "Bayern Munich" }
        //... add more teams or fetch from an API
      ]
    };
  }
};
</script>

<style scoped>
.home-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2, h3 {
  margin-bottom: 20px;
}

.team-list {
  list-style-type: none;
  padding: 0;
}

.team-list li {
  margin: 10px 0;
}

.router-link-active {
  color: blue;
}
</style>

