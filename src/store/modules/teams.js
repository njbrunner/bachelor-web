import axios from 'axios';

const state = {
    all: []
};

const getters = {};

const actions = {
    fetchTeams({ commit }) {
        axios({
            method: 'get',
            url: 'https://bachelor-draft.herokuapp.com/player/'
        })
        .then(response => {
            commit('updateTeams', response.data.data);
        })
        .catch(error => {
            console.log(error); // eslint-disable-line no-console
        });
    }
};

const mutations = {
    updateTeams: (state, teams) => {
        state.all = teams;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};