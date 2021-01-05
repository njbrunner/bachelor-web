<template>
  <div>
    <div class="well">
      <button class="btn btn-info form-control" @click="addTeamClicked">
        Add Team
      </button>
      <button class="btn btn-warning form-control" @click="shuffleTeams">
        Shuffle Teams
      </button>
      <button class="btn btn-danger form-control">Start Draft</button>
    </div>
    <!-- <AddPlayer v-if="!drafting" @newPlayer="getPlayers"></AddPlayer> -->
    <br />
    <div class="row">
      <h3>Teams</h3>
      <!-- <button
        class="btn btn-warning styled-shuffle-button"
        v-if="!drafting"
        @click="shuffle(players)"
      >Shuffle</button> -->
    </div>
    <hr />
    <ul class="list-group">
      <li
        class="list-group-item"
        :class="{ active: isActive(index) }"
        v-for="(player, index) in players"
        :key="index"
      >
        <div class="row">
          <h4 class="col-md-8">{{ player.name }}</h4>
          <button class="btn btn-info col-md-3" @click="viewTeam(player)">
            View Team
          </button>
          <!-- <p class="col-md-1">{{ getTeamPoints(player) }}</p> -->
          <button
            class="btn btn-danger col-md-1"
            v-if="!drafting"
            @click="removePlayer(player)"
          >
            X
          </button>
        </div>
      </li>
    </ul>
    <!-- <div v-if="players">
      <h3>Standings</h3>
      <hr />
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(player, index) in sortedPlayers"
          :key="index">
          <div class="row">
            <h4 class="col-md-11">{{ player.name }}</h4>
            <p class="col-md-12">{{ getTeamPoints(player) }}</p>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import _ from "lodash";

export default {
  name: "SideBar",
  components: {},
  props: ["drafting", "currentDraftPosition", "players"],
  computed: {
    sortedPlayers() {
      const players = this.players.slice();
      return players.sort(this.compare);
    },
  },
  methods: {
    addTeamClicked() {
      this.$emit("onAddTeamClicked");
    },
    viewTeam(player) {
      this.$emit("viewTeam", player);
    },
    shuffle() {
      this.players = _.shuffle(this.players);
      this.$emit("updatePlayers", this.players);
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
      this.$emit("onRemoveTeam", player._id);
    },
    shuffleTeams() {
      this.$emit("onShuffleTeams");
    },
  },
};
</script>
<style>
.styled-shuffle-button {
  color: white !important;
  position: absolute;
  right: 0;
  margin-right: 15px;
}
.well {
  background: lightgrey;
  padding: 16px;
  border-radius: 10px;
}
</style>
