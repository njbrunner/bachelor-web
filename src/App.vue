<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="styled-header">Bachelor Draft</h1>
      <h3 class="styled-round-text" v-if="drafting">Round: {{draftRound}}</h3>
      <button class="btn btn-warning styled-start-draft-button" v-if="!drafting" @click="startDraft">Start Draft</button>
      <button class="btn btn-danger styled-start-draft-button" v-else @click="endDraft">End Draft</button>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-9 scroll-pane">
        <div class="row">
          <div col-md-4 v-for="(contestant, index) in contestants" :key="index">
            <a @click="showContestantDetail(contestant)">
              <b-card
                :title="contestant.name"
                :img-src="contestant.image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 styled-card"
                :class="{'drafted': contestant['drafted'] && drafting}"
              >
                <b-card-text>
                  {{ contestant.age }}
                  <br />
                  {{ contestant.occupation }}
                  <br />
                  {{ contestant.location }}
                </b-card-text>

                <b-button class="form-control" variant="primary" v-if="drafting && !contestant['drafted']" @click="draftContestant($event, contestant, index)">Draft</b-button>
              </b-card>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <SideBar :drafting="drafting" :currentDraftPosition="currentDraftPosition" @viewTeam="showTeam" @updatePlayers="updatePlayers"></SideBar>
      </div>
    </div>
    <b-modal 
      ref="contestant-modal" 
      hide-footer 
      :title=clickedContestant.name
      size="lg">
      <div class="row">
        <div class="col-md-6">
          <img class="styled-image" :src="clickedContestant.image">
        </div>
        <div class="col-md-6">

          <ul class="list-group">
            <li class="list-group-item" v-for="(fact, index) in clickedContestant.facts" :key="index">{{fact}}</li>
          </ul>
        </div>
      </div>
      <p class="styled-paragraph">{{clickedContestant.detail}}</p>
    </b-modal>
    <b-modal 
      ref="team-modal" 
      hide-footer 
      :title=clickedTeam.name
      size="lg">
      <h5>Team</h5>
      <hr>
      <ul class="list-group">
        <li class="list-group-item" v-for="(member, index) in clickedTeam.team" :key="index">{{member.name}}</li>
      </ul>

    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
import SideBar from "./components/SideBar.vue";

export default {
  name: "app",
  components: {
    SideBar
  },
  data() {
    return {
      clickedContestant: {
        name: "",
        image: "",
        facts: "",
        detail: ""
      },
      clickedTeam: {
        name: "",
        team: []
      },
      drafting: false,
      currentDraftPosition: 0,
      contestants: null,
      players: [],
      reverseOrder: false,
      endOfLineFirstPick: false,
      firstPick: true,
      draftRound: 1
    };
  },
  created() {
    this.loadContestants();
  },
  methods: {
    showTeam(player) {
      this.clickedTeam = player;
      this.$refs["team-modal"].show();
    },
    showContestantDetail(contestant) {
      this.clickedContestant = contestant;
      this.$refs["contestant-modal"].show();
    },
    startDraft() {
      this.drafting = true;
      this.firstPick = true;
      console.log(this.currentDraftPosition); // eslint-disable-line no-console
    },
    endDraft() {
      this.drafting = false;
      this.firstPick = true;
      this.currentDraftPosition = 0;
    },
    movePositions() {
      if (this.currentDraftPosition == this.players.length - 1 && this.reverseOrder == false) {
        this.reverseOrder = true;
        this.draftRound += 1;
      } else if (this.currentDraftPosition == 0 && this.reverseOrder == true) {
        this.reverseOrder = false;
        this.draftRound += 1;
      }
      if (this.reverseOrder == false) {
        if ((this.currentDraftPosition == 0 && this.endOfLineFirstPick == false) && this.firstPick == false) {
          this.endOfLineFirstPick = true;
        } else {
          this.endOfLineFirstPick = false;
          this.currentDraftPosition += 1;
        }
      } else {
        if (this.currentDraftPosition == this.players.length - 1 && this.endOfLineFirstPick == false) {
          this.endOfLineFirstPick = true;
        } else {
          this.endOfLineFirstPick = false;
          this.currentDraftPosition -=1;
        }
      }
      this.firstPick = false;
    },
    loadContestants() {
      axios.get("https://bachelor-draft.herokuapp.com/contestant/")
        .then((response) => {
          this.contestants = response.data['data']
        }, (error) => {
          console.log(error); // eslint-disable-line no-console
        });
    },
    draftContestant(event, contestant, index) {
      event.stopPropagation();
      axios.post("https://bachelor-draft.herokuapp.com/player/draft/" + this.currentDraftPlayer['_id'], {'contestant_id': contestant['_id']})
        .then((response) => {
          // console.log(response); // eslint-disable-line no-console
          var updated_player_data = response.data;
          this.players[this.currentDraftPosition]['team'] = updated_player_data['team'];
          this.disableContestant(contestant, index);
          this.movePositions();
        }, (error) => {
          console.log(error); // eslint-disable-line no-console
        });
    },
    updatePlayers(players) {
      this.players = players;
    },
    disableContestant(contestant, index) {
      this.contestants[index]['drafted'] = true;
    }
  },
  computed: {
    currentDraftPlayer() {
      return this.players[this.currentDraftPosition];
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

.styled-image {
  border: lightgray 1px solid;
}

.styled-paragraph {
  border: lightgray 1px solid;
  padding: 15px;
  margin-top: 30px;
}

.styled-card {
  margin-left: 10px;
  margin-right: 10px;
}

.styled-start-draft-button {
  color: white !important;
  position: absolute;
  right: 0;
  margin-right: 15px;
  margin-top: 15px;
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
</style>
