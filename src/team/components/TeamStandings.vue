<template>
  <div class="container">
    <div v-if="teams">
      <h3 class="header title">Standings</h3>

      <table class="table table-striped">
        <thead class="heading">
          <th scope="col">Team</th>
          <th scope="col">Total Roses</th>
          <th scope="col">Remaining Contestants</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="(team, index) in sortedTeams" :key="index">
            <td>{{ team.name }}</td>
            <td>{{ getTotalRoses(team) }}</td>
            <td>{{ getTeamPoints(team) }}</td>
            <td>
              <button class="btn btn-primary" @click="viewTeam(team)">
                View Team
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <team-modal
      v-if="showTeamModal"
      :team="clickedTeam"
      @closeModal="closeTeamModal"
    ></team-modal>
  </div>
</template>
<script>
import TeamModal from "./TeamModal.vue";

export default {
  name: "TeamStandings",
  components: {
    TeamModal,
  },
  data() {
    return {
      clickedTeam: null,
      showTeamModal: false,
    };
  },
  computed: {
    sortedTeams() {
      const teams = this.teams.slice();
      return teams.sort(this.compare);
    },
    teams() {
      return this.$store.getters.getAllTeams;
    },
  },
  methods: {
    loadTeams() {
      this.$store.dispatch("fetchTeams");
    },
    viewTeam(team) {
      this.clickedTeam = team;
      this.showTeamModal = true;
      // this.$refs["team-modal"].show();
      // $("#teamModal").modal('show');
      // document.getElementById('teamModal').click();
    },
    closeTeamModal() {
      this.showTeamModal = false;
    },
    getTeamPoints(team) {
      var activeMembers = 0;
      for (const member of team.team) {
        if (member.active) {
          activeMembers += 1;
        }
      }
      return activeMembers;
    },
    getTotalRoses(team) {
      let totalRoses = 0;
      for (const member of team.team) {
        totalRoses += member.roses;
      }
      return totalRoses;
    },
    compare(aTeam, bTeam) {
      const aTeamTotalRoses = this.getTotalRoses(aTeam);
      const bTeamTotalRoses = this.getTotalRoses(bTeam);

      if (aTeamTotalRoses != bTeamTotalRoses) {
        return bTeamTotalRoses - aTeamTotalRoses;
      }

      const aTeamRemainingContestants = this.getTeamPoints(aTeam);
      const bTeamReaminingContestants = this.getTeamPoints(bTeam);

      return bTeamReaminingContestants - aTeamRemainingContestants;
    },
  },
  created() {
    this.loadTeams();
  },
};
</script>
<style scoped>
.heading {
  color: var(--primary);
}

.title {
  margin-bottom: 32px;
}
</style>
