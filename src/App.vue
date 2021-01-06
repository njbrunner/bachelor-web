<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./layout/components/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import './assets/bachelorTheme.scss';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fancy-script {
  font-family: 'Great Vibes', cursive;
}
</style>
