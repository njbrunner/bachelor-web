<template>
    <nav class="navbar navbar-expand navbar-light bg-transparent">
        <router-link class="navbar-brand" to="/">Fantasy Suites</router-link>

        <div class="navbar-nav ml-auto">
            <router-link href="#" class="nav-item nav-link" to="/standings">Standings</router-link>
            <router-link href="#" v-if="!authorized" class="nav-link" to="/admin">Admin</router-link>
            <a v-else class="nav-link" @click="logout">Logout</a>
        </div>

    </nav>
</template>
<script>
export default {
    name: 'NavBar',
    computed: {
        authorized() {
            return this.$store.state.bachelorToken;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/');
        }
    }
}
</script>
<style>

</style>