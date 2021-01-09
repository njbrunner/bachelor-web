<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-11">
        <div class="row">
          <contestant-card-admin
            v-for="(contestant, index) in contestants"
            :key="index"
            :contestant="contestant"
            @contestantClicked="handleContestantClicked(contestant)"
          ></contestant-card-admin>
        </div>
      </div>
      <div class="col-md-1">
        <div class="admin-control-panel">
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
  },
  computed: {
    contestants() {
      return this.$store.getters.getAllContestants;
    },
  },
  created() {
    this.$store.dispatch("fetchContestants");
  },
};
</script>
<style>
.admin-control-panel {
  background-color: lightgrey;
  padding: 16px;
  border: 1px solid var(--primary);
  border-radius: 10px;
}
</style>
