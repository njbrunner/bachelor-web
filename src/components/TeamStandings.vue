<template>
<div class="container">
  <div v-if="players">
    <h3>Standings</h3>

    <table class="table">
      <thead>
        <th scope="col">Team</th>
        <th scope="col">Remaining Contestants</th>
        <th></th>
      </thead>
      <tbody>
        <tr
          v-for="(team, index) in sortedTeams"
          :key="index"
        >
          <td>{{team.name}}</td>
          <td>{{getTeamPoints(team)}}</td>
          <td>
            <button class="btn btn-info" @click="viewTeam(team)">View Team</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>

  <!-- <div class="modal" id="teamModal" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5>{{clickedTeam.name}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h5>Team</h5>
          <hr>
          <ul class="list-group">
            <li class="list-group-item" v-for="(member, index) in clickedTeam.team" :key="index">{{member.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div> -->

  <!-- <b-modal 
    ref="team-modal"
    hide-footer 
    :title=clickedTeam.name
    size="lg">
    <div v-if="clickedTeam">
      <h5>Team</h5>
      <hr>
      <ul class="list-group">
        <li class="list-group-item" v-for="(member, index) in clickedTeam.team" :key="index">{{member.name}}</li>
      </ul>
    </div>

  </b-modal> -->

  <team-modal v-if="showTeamModal" :team="clickedTeam" @closeModal="closeTeamModal"></team-modal>


</div>
</template>
<script>
import TeamModal from './TeamModal.vue';

export default {
  name: "TeamStandings",
  components: {
    TeamModal,
  },
  data() {
    return {
      players: [],
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
      return this.$store.state.teams.all;
    },
  },
  methods: {
    loadTeams() {
      this.$store.dispatch('fetchTeams');
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
    compare(aTeam, bTeam) {
      // console.log(aPlayer); // eslint-disable-line no-console
      const aTeamActiveMembers = this.getTeamPoints(aTeam);
      const bTeamActiveMembers = this.getTeamPoints(bTeam);

      return bTeamActiveMembers - aTeamActiveMembers;
    }
  },
  created() {
      this.loadTeams();
  }
};
</script>
<style>


</style>