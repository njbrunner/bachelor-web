<template>
  <div>
    <AddPlayer v-if="!drafting" @newPlayer="getPlayers"></AddPlayer>
    <br />
    <div class="row">
      <h3>Players</h3>
      <button
        class="btn btn-warning styled-shuffle-button"
        v-if="!drafting"
        @click="shuffle(players)"
      >Shuffle</button>
    </div>
    <hr />
    <ul class="list-group">
      <li
        class="list-group-item"
        :class="{'active': isActive(index)}"
        v-for="(player, index) in players"
        :key="index"
      >
        <div class="row">
          <h4 class="col-md-8">{{ player.name }}</h4>
          <button class="btn btn-info col-md-3" @click="viewTeam(player)">View Team</button>
          <button class="btn btn-danger col-md-1" @click="removePlayer(player)">X</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import _ from "lodash";
import axios from "axios";
import AddPlayer from "./AddPlayer.vue";

export default {
  name: "SideBar",
  components: { AddPlayer },
  props: ["drafting", "currentDraftPosition"],
  data() {
    return {
      players: []
    };
  },
  methods: {
    getPlayers() {
      // this.players.push(newPlayer);
      axios
        .get("https://bachelor-draft.herokuapp.com/player")
        .then(
          response => {
            this.players = response.data['data'];
            // console.log(this.players); // eslint-disable-line no-console
            this.$emit('updatePlayers', this.players);
          },
          error => {
            console.log(error); // eslint-disable-line no-console
          }
        );
    },
    viewTeam(player) {
      // this.getPlayers();
      this.$emit("viewTeam", player);
    },
    shuffle() {
      this.players = _.shuffle(this.players);
      this.$emit('updatePlayers', this.players);
    },
    isActive(index) {
      if (this.drafting) {
        if (this.currentDraftPosition == index) {
          return true;
        }
      }
      return false;
    },
    removePlayer(player) {
      axios
        .delete("https://bachelor-draft.herokuapp.com/player/remove/" + player['_id'])
        .then(
          response => {
            if (response.status == 200) {
              this.getPlayers();
            }
          },
          error => {
            console.log(error); // eslint-disable-line no-console
          }
        );
    }
  },
  created() {
      this.getPlayers();
  }
};
</script>
<style>
.styled-shuffle-button {
  color: white !important;
  position: absolute;
  right: 0;
  margin-right: 15px;
}
</style>