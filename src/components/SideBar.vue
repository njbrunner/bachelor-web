<template>
    <div>
        <AddPlayer v-if="!drafting" @newPlayer=addNewPlayer></AddPlayer>
        <br>
        <div class="row">
            <h3>Teams</h3>
            <button class="btn btn-warning styled-shuffle-button" v-if="!drafting" @click="shuffle(players)">Shuffle</button>
        </div>
        <hr>
        <ul class="list-group">
            <li class="list-group-item" :class="{'active': isActive(index)}" v-for="(player, index) in players" :key="index">
                <div class="row">
                    <h4 class="col-md-8">{{ player.name }}</h4>
                    <button class="btn btn-info col-md-4" @click="viewTeam(player)">View Team</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import _ from 'lodash'
import AddPlayer from './AddPlayer.vue'
export default {
    name: "SideBar",
    components: {AddPlayer},
    props: ["drafting", "currentDraftPosition"],
    data() {
        return {
            players: []
        }
    },
    methods: {
        addNewPlayer(newPlayer) {
            this.players.push(newPlayer);
        },
        viewTeam(player) {
            this.$emit("viewTeam", player);
        },
        shuffle() {
            this.players = _.shuffle(this.players);
        },
        isActive(index) {
            if (this.drafting) {
                if (this.currentDraftPosition == index) {
                    return true;
                }
            }
            return false;
        }
    },
    computed: {
        
    }
}
</script>
<style>
.styled-shuffle-button {
    color: white !important;
    position: absolute;
    right: 0;
    margin-right: 15px;
}
</style>