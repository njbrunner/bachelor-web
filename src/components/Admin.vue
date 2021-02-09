<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <contestant-card-admin
            v-for="(contestant, index) in contestants"
            :key="index"
            :contestant="contestant"
            @contestantClicked="handleContestantClicked(contestant)"
            @onDraftContestant="draftContestant(contestant)"
          ></contestant-card-admin>
        </div>
      </div>
      <div class="col-md-3">
        <div class="admin-control-container">
          <div class="admin-control-panel">
            <p>Remaining Contestants: {{ activeContestants }}</p>
            <p>Undrafted Contestants: {{ undraftedContestants }}</p>

            <h6 class="header">All:</h6>
            <div class="row">
              <div class="col-md-6">
                <button class="btn btn-primary" @click="addRoseToAllActive">
                  +
                </button>
              </div>
              <div class="col-md-6">
                <button
                  class="btn btn-primary"
                  @click="subtractRoseFromAllActive"
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <br />
          <h3 class="heading">Teams</h3>
          <hr />
          <ul class="list-group">
            <li
              class="list-group-item"
              :class="{ active: isSelected(team) }"
              v-for="(team, index) in this.teams"
              :key="index"
              @click="selectTeam(team)"
              style="cursor: pointer;"
            >
              <div class="flex-container">
                <h4 style="flex-grow: 8">{{ team.name }}</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <contestant-modal
      v-if="showContestantModal"
      :contestant="clickedContestant"
      @closeModal="handleCloseContestantModalClicked"
    ></contestant-modal>
  </div>
</template>
<script>
import ContestantCardAdmin from "../contestant/components/ContestantCardAdmin";
import ContestantModal from "../contestant/components/ContestantModal";

export default {
  name: "Admin",
  components: {
    ContestantCardAdmin,
    ContestantModal,
  },
  data() {
    return {
      clickedContestant: {},
      showContestantModal: false,
      selectedTeam: undefined,
    };
  },
  methods: {
    noRose(contestant) {
      this.$store.dispatch("disableContestant", contestant._id);
    },
    addRoseToAllActive() {
      this.$store.dispatch("addRoseToAllActive");
    },
    subtractRoseFromAllActive() {
      this.$store.dispatch("subtractRoseFromAllActive");
    },
    handleContestantClicked(contestant) {
      this.clickedContestant = contestant;
      this.showContestantModal = true;
    },
    handleCloseContestantModalClicked() {
      this.showContestantModal = false;
    },
    isSelected(team) {
      if (this.selectedTeam) {
        return team.name == this.selectedTeam.name;
      }
      return false;
    },
    selectTeam(team) {
      this.selectedTeam = team;
    },
    draftContestant(contestant) {
      this.$store.dispatch("draftContestant", {
        teamId: this.selectedTeam._id,
        contestantId: contestant._id,
      });
    },
  },
  computed: {
    teams() {
      let teams = this.$store.getters.getAllTeams;
      return teams;
    },
    contestants() {
      return this.$store.getters.getAllContestants;
    },
    activeContestants() {
      return this.contestants.filter(function(contestant) {
        return contestant.active == true;
      }).length;
    },
    undraftedContestants() {
      return this.contestants.filter(function(contestant) {
        return contestant.active == true && contestant.drafted == false;
      }).length;
    },
  },
  created() {
    this.$store.dispatch("fetchContestants");
    this.$store.dispatch("fetchTeams");
  },
};
</script>
<style>
.admin-control-container {
  position: fixed;
}

.admin-control-panel {
  background-color: lightgrey;
  padding: 16px;
  border: 1px solid var(--primary);
  border-radius: 10px;
}
</style>
