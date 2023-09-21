<template>
  <div class="player-container">
    <h2>{{ player.name }}</h2>
    <img :src="player.imageUrl" :alt="player.name + ' Image'" class="player-image">
    <p><strong>Position:</strong> {{ player.position }}</p>
    <p><strong>Current Team:</strong> {{ player.team }}</p>
    <p><strong>Biography:</strong> {{ player.bio }}</p>

    <div class="player-stats">
      <h3>Statistics</h3>
      <p><strong>Goals:</strong> {{ player.stats.goals }}</p>
      <p><strong>Assists:</strong> {{ player.stats.assists }}</p>
      <p><strong>Appearances:</strong> {{ player.stats.appearances }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerPage",
  data() {
    return {
      player: {
        // Mock data for demonstration. You can fetch real data from an API.
        id: this.$route.params.id,
        name: "Lionel Messi",
        position: "Forward",
        team: "FC Barcelona",
        bio: "Lionel Messi is an Argentine professional footballer who plays as a forward for FC Barcelona and the Argentina national team. Widely considered one of the greatest football players of all time.",
        imageUrl: "path_to_image/messi.jpg",
        stats: {
          goals: 650,
          assists: 280,
          appearances: 750
        }
      }
    };
  },
  // If using an API, you could fetch the player data in the `mounted` or `created` lifecycle hooks
  // created() {
  //   fetchPlayerData(this.$route.params.id).then(data => {
  //     this.player = data;
  //   });
  // }
};
</script>

<style scoped>
.player-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.player-image {
  width: 200px;
  height: auto;
  margin: 20px 0;
}

.player-stats {
  border-top: 1px solid #ccc;
  padding-top: 20px;
  margin-top: 20px;
}
</style>

