<template>
  <nav class="navbar navbar-expand navbar-light bg-transparent">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/rose.png" height="40" />
      <span class="fancy-script title">Fantasy Suites</span>
    </router-link>
    <div class="navbar-nav ml-auto">
      <router-link href="#" class="nav-item nav-link" to="/standings"
        >Standings</router-link
      >
      <router-link class="nav-item nav-link" v-if="authorized" to="/draft"
        >Draft</router-link
      >
      <router-link href="#" class="nav-link" to="/admin">Admin</router-link>
      <a href="" v-if="authorized" class="nav-link" @click="logout">Logout</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    authorized() {
      return this.$store.getters.isAuthorized;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 30px;
  color: var(--primary);
}
</style>
