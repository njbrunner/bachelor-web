<template>
  <div class="container-fluid">
    <div class="row">
      <contestant-card-admin
        v-for="(contestant, index) in contestants"
        :key="index"
        :contestant="contestant"
        @contestantClicked="handleContestantClicked(contestant)"
      ></contestant-card-admin>
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
<style></style>
