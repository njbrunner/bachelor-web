<template>
  <div class="container-fluid">
    <div class="row">
      <contestant-card
        v-for="(contestant, index) in contestants"
        :key="index"
        :contestant="contestant"
        @contestantClicked="handleContestantClicked(contestant)"
      ></contestant-card>
    </div>
    <contestant-modal
      v-if="showContestantModal"
      :contestant="clickedContestant"
      @closeModal="handleCloseContestantModalClicked"
    ></contestant-modal>
  </div>
</template>

<script>
import ContestantCard from '../contestant/components/ContestantCard';
import ContestantModal from '../contestant/components/ContestantModal';

export default {
  name: "Home",
  components: {
    ContestantCard,
    ContestantModal
  },
  data() {
    return {
      clickedContestant: {},
      showContestantModal: false,
      players: [],
    };
  },
  created() {
    this.loadContestants();
  },
  methods: {
    loadContestants() {
      this.$store.dispatch('fetchContestants');
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
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.styled-card {
  margin-left: 10px;
  margin-right: 10px;
}

.styled-header {
  margin-left: 15px;
  margin-top: 5px;
}

.drafted {
  background-color: lightgrey !important;
}

.styled-round-text {
  position: absolute;
  right: 0;
  margin-right: 150px;
  margin-top: 15px;
}

.scroll-pane {
  height: 90vh;
  overflow: scroll;
}

.notActive {
    background: lightgrey;
    height: 100%;
    width: 100%;
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    left: 0;
    bottom: 0;
    opacity: .75;
    border-radius: 1px;
}
</style>
