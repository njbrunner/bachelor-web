<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="styled-header">Bachelor Draft</h1>
      <button class="btn btn-warning styled-start-draft-button" v-if="!drafting" @click="startDraft">Start Draft</button>
      <button class="btn btn-danger styled-start-draft-button" v-else @click="endDraft">End Draft</button>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-9">
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
              >
                <b-card-text>
                  {{ contestant.age }}
                  <br />
                  {{ contestant.occupation }}
                  <br />
                  {{ contestant.location }}
                </b-card-text>

                <b-button class="form-control" variant="primary" v-if="drafting">Draft</b-button>
              </b-card>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <SideBar :drafting="drafting" :currentDraftPosition="currentDraftPosition" @viewTeam="showTeam"></SideBar>
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
      <ui class="list-group">
        <li v-for="(member, index) in clickedTeam.team" :key="index">member.name</li>
      </ui>

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
      contestants: null
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
      console.log(this.currentDraftPosition); // eslint-disable-line no-console
    },
    endDraft() {
      this.drafting = false;
    },
    movePositions() {

    },
    loadContestants() {
      axios.get("https://bachelor-draft.herokuapp.com/contestant/")
        .then((response) => {
          this.contestants = response.data['data']
        }, (error) => {
          console.log(error); // eslint-disable-line no-console
        });
    }
  },
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
</style>
