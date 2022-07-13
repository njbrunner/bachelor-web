<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <input
          class="form-control"
          type="text"
          placeholder="New Team"
          v-model="teamName"
        />
      </div>
      <div class="col-md-4">
        <button class="btn btn-success form-control" @click="addNewTeam">
          Add
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AddTeam",
  data() {
    return {
      teamName: null,
      teamOwner: null,
    };
  },
  methods: {
    addNewTeam() {
      axios
        .post("https://bachelor-draft.herokuapp.com/team/new", {
          name: this.teamName,
          owner: this.teamOwner,
        })
        .then(
          (response) => {
            if (response.status == 200) {
              this.$emit("newTeam");
            }
          },
          (error) => {
            console.log(error); // eslint-disable-line no-console
          }
        );
      this.teamName = null;
      this.teamOwner = null;
    },
  },
};
</script>
<style></style>
