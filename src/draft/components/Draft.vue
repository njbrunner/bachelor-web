<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <contestant-card-draft
            v-for="(contestant, index) in contestants"
            :key="index"
            :contestant="contestant"
            :isDrafting="isDrafting"
            @onContestantClicked="handleContestantClicked(contestant)"
            @onDraftContestant="handleDraftContestant"
          ></contestant-card-draft>
        </div>
      </div>
      <div class="col-md-3">
        <sidebar
          :players="teams"
          :isDrafting="isDrafting"
          :currentDraftPosition="currentDraftPosition"
          @onAddTeamClicked="handleAddTeamClicked"
          @onRemoveTeam="handleRemoveTeam"
          @onViewTeam="handleViewTeamClicked"
          @onStartDraft="handleStartDraft"
          @onEndDraft="handleEndDraft"
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
import AddTeamModal from "../../team/components/AddTeamModal";
import TeamModal from "../../team/components/TeamModal";
import ContestantCardDraft from "../../contestant/components/ContestantCardDraft";

export default {
  name: "Draft",
  components: {
    Sidebar,
    AddTeamModal,
    TeamModal,
    ContestantCardDraft,
  },
  data() {
    return {
      showAddTeamModal: false,
      showTeamModal: false,
      clickedTeam: undefined,
      isDrafting: false,
      currentDraftPosition: 0,
      reverseOrder: false,
      endOfLineFirstPick: false,
      firstPick: true,
      draftRound: 1,
    };
  },
  computed: {
    contestants() {
      return this.$store.getters.getAllContestants;
    },
    teams() {
      return this.$store.getters.getAllTeams;
    },
    currentDraftPlayer() {
      return this.teams[this.currentDraftPosition];
    },
  },
  methods: {
    fetchTeams() {
      this.$store.dispatch("fetchTeams");
    },
    fetchContestants() {
      this.$store.dispatch("fetchContestants");
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
      this.handleCloseModal();
    },
    handleRemoveTeam(teamId) {
      this.$store.dispatch("removeTeam", teamId);
    },
    handleStartDraft() {
      this.isDrafting = true;
    },
    handleEndDraft() {
      this.isDrafting = false;
    },
    handleDraftContestant(contestant) {
      this.$store.dispatch("draftContestant", {
        teamId: this.currentDraftPlayer._id,
        contestantId: contestant._id,
      });
      this.movePositions();
    },
    movePositions() {
      if (
        this.currentDraftPosition == this.teams.length - 1 &&
        this.reverseOrder == false
      ) {
        this.reverseOrder = true;
        this.draftRound += 1;
      } else if (this.currentDraftPosition == 0 && this.reverseOrder == true) {
        this.reverseOrder = false;
        this.draftRound += 1;
      }
      if (this.reverseOrder == false) {
        if (
          this.currentDraftPosition == 0 &&
          this.endOfLineFirstPick == false &&
          this.firstPick == false
        ) {
          this.endOfLineFirstPick = true;
        } else {
          this.endOfLineFirstPick = false;
          this.currentDraftPosition += 1;
        }
      } else {
        if (
          this.currentDraftPosition == this.teams.length - 1 &&
          this.endOfLineFirstPick == false
        ) {
          this.endOfLineFirstPick = true;
        } else {
          this.endOfLineFirstPick = false;
          this.currentDraftPosition -= 1;
        }
      }
      this.firstPick = false;
    },
  },
  created() {
    this.fetchContestants();
    this.fetchTeams();
  },
};
</script>

<style></style>
