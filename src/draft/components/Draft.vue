<template>
  <div class="container-fluid">
    <h1>Draft</h1>
    <div class="row">
      <div class="col-md-9"></div>
      <div class="col-md-3">
        <sidebar
          @onAddTeamClicked="handleAddTeamClicked"
          :players="teams"
          @onRemoveTeam="handleRemoveTeam"
          @onShuffleTeams="shuffleTeams"
        >
        </sidebar>
      </div>
    </div>
    <add-team-modal
      v-if="showAddTeamModal"
      @closeModal="handleCloseAddTeamModal"
      @saveNewTeam="handleSaveNewTeam"
    ></add-team-modal>
  </div>
</template>

<script>
import Sidebar from "./SideBar";
import AddTeamModal from "./AddTeamModal";
import _ from 'lodash';

export default {
  name: "Draft",
  components: {
    Sidebar,
    AddTeamModal,
  },
  data() {
    return {
      showAddTeamModal: false,
    };
  },
  computed: {
    teams() {
      return this.$store.getters.getAllTeams;
    },
  },
  methods: {
    fetchTeams() {
      this.$store.dispatch("fetchTeams");
    },
    handleAddTeamClicked() {
      this.showAddTeamModal = true;
    },
    handleCloseAddTeamModal() {
      this.showAddTeamModal = false;
    },
    handleSaveNewTeam(teamName) {
      this.$store.dispatch("addTeam", teamName);
      this.handleCloseAddTeamModal();
    },
    handleRemoveTeam(teamId) {
      this.$store.dispatch("removeTeam", teamId);
    },
    shuffleTeams() {
      let shuffledTeams = _.shuffle(this.teams);
      this.$store.dispatch('updateTeams', shuffledTeams);
    },
  },
  created() {
    this.fetchTeams();
  },
};
</script>

<style></style>
