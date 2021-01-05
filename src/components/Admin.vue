<template>
  <div class="container-fluid">
    <div class="row">
        <div class="row">
            <div col-md-4 v-for="(contestant, index) in contestants" :key="index">
                <a>
                    <b-card
                    :title="contestant.name"
                    :img-src="contestant.image"
                    img-top
                    tag="article"
                    style="width: 300px;"
                    class="mb-2 styled-card"
                    disabled>
                    <b-card-text>
                        {{ contestant.age }}
                        <br />
                        {{ contestant.occupation }}
                        <br />
                        {{ contestant.location }}
                    </b-card-text>
                    <button class="btn btn-danger form-control" @click="noRose(contestant)">No Rose</button>
                    <div v-if="!contestant.active" class="notActive"></div>
                    </b-card>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    name: 'Admin',
    methods: {
        noRose(contestant) {
            this.$store.dispatch('disableContestant', contestant._id);
        },
    },
    computed: mapState({
        contestants: state => state.contestants.all
    }),
    created() {
        this.$store.dispatch('fetchContestants');
    },
};
</script>
<style>

</style>
