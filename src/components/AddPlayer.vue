<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <input class="form-control" type="text" placeholder="New Player" v-model="playerName" />
      </div>
      <div class="col-md-4">
        <button class="btn btn-success form-control" @click="addNewPlayer">Add</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AddPlayer",
  data() {
    return {
      playerName: null
    };
  },
  methods: {
    addNewPlayer() {
      // console.log(this.player) // eslint-disable-line no-console
      axios
        .post("https://bachelor-draft.herokuapp.com/player/new", {
          name: this.playerName
        })
        .then(
          response => {
            if (response.status == 200) {
              this.$emit("newPlayer");
            }
          },
          error => {
            console.log(error); // eslint-disable-line no-console
          }
        );
      // this.$emit("newPlayer", {
      //   name: this.playerName,
      //   team: [],
      //   active: false
      // });
      this.playerName = null;
    }
  }
};
</script>
<style>
</style>