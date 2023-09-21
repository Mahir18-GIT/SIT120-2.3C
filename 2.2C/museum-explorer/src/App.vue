<template>
  <div id="app">
    <header>
      <h1>Virtual Museum Explorer</h1>
    </header>
    <MuseumExplorer></MuseumExplorer>
  </div>
</template>

<script>
import MuseumExplorer from './components/MuseumExplorer.vue';

export default {
  name: 'App',
  components: {
    MuseumExplorer
  }
}
</script>

<style>
/* Global Styles and Resets */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}


</style>

