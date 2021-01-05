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
          @onViewTeam="handleViewTeamClicked"
        >
        </sidebar>
      </div>
    </div>
    <add-team-modal
      v-if="showAddTeamModal"
      @closeModal="handleCloseModal"
      @saveNewTeam="handleSaveNewTeam"
    ></add-team-modal>
    <team-modal
      v-if="showTeamModal"
      :team="clickedTeam"
      @closeModal="handleCloseModal"
    ></team-modal>
  </div>
</template>

<script>
import Sidebar from "./SideBar";
import AddTeamModal from "./AddTeamModal";
import TeamModal from "../../team/components/TeamModal";
import _ from "lodash";

export default {
  name: "Draft",
  components: {
    Sidebar,
    AddTeamModal,
    TeamModal,
  },
  data() {
    return {
      showAddTeamModal: false,
      showTeamModal: false,
      clickedTeam: undefined,
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
    handleViewTeamClicked(team) {
      this.clickedTeam = team;
      this.showTeamModal = true;
    },
    handleCloseModal() {
      this.showAddTeamModal = false;
      this.showTeamModal = false;
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
      this.$store.dispatch("updateTeams", shuffledTeams);
    },
  },
  created() {
    this.fetchTeams();
  },
};
</script>

<style></style>
