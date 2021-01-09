<template>
  <form>
    <div class="login-container">
      <h3 class="heading">Admin Login</h3>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <button class="btn btn-primary form-control" @click="login">
          Login
        </button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      password: null,
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      this.$store.dispatch("doLogin", this.password);
    },
  },
};
</script>
<style scoped>
.login-container {
  max-width: 600px !important;
  text-align: center;
  margin: auto;
}

.heading {
  color: var(--primary);
}
</style>
