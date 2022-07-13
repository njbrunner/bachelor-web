import axios from "axios";

const state = {
  all: [],
};

const getters = {
  getAllTeams: (state) => {
    return state.all;
  },
};

const actions = {
  fetchTeams({ commit }) {
    axios({
      method: "get",
      url: "https://bachelor-draft.herokuapp.com/team/",
    })
      .then((response) => {
        console.log(response.data.data); // eslint-disable-line no-console
        commit("updateTeams", response.data.data);
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  },
  updateTeams({ commit }, teams) {
    commit("updateTeams", teams);
  },
  addTeam({ dispatch }, teamData) {
    axios
      .post("https://bachelor-draft.herokuapp.com/team/new", {
        name: teamData.name,
        owner: teamData.owner,
      })
      .then(() => {
        dispatch("fetchTeams");
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  },
  removeTeam({ dispatch }, teamId) {
    axios
      .delete("https://bachelor-draft.herokuapp.com/team/remove/" + teamId)
      .then(() => {
        dispatch("fetchTeams");
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  },
  shuffleTeams({ dispatch }) {
    axios
      .put("https://bachelor-draft.herokuapp.com/team/shuffle")
      .then(() => {
        dispatch("fetchTeams");
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  },
  draftContestant({ dispatch }, payload) {
    axios
      .put(
        "https://bachelor-draft.herokuapp.com/team/draft/" + payload.teamId,
        { contestant_id: payload.contestantId }
      )
      .then(() => {
        dispatch("fetchContestants");
        dispatch("fetchTeams");
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  },
};

const mutations = {
  updateTeams: (state, teams) => {
    state.all = teams;
  },
  updateTeam: (state, updatedTeam) => {
    const team = state.all.find((item) => item._id === updatedTeam._id);
    Object.assign(team, updatedTeam);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
