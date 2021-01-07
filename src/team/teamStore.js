import axios from 'axios';

const state = {
    all: []
};

const getters = {
    getAllTeams: state => {
        return state.all;
    }
};

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
    },
    updateTeams({ commit }, teams) {
        commit('updateTeams', teams);
    },
    addTeam({ dispatch }, teamName) {
        axios.post('https://bachelor-draft.herokuapp.com/player/new', {"name": teamName})
        .then(() => {
            dispatch('fetchTeams');
        })
        .catch(error => {
            console.log(error); // eslint-disable-line no-console
        });
    },
    removeTeam({ dispatch }, teamId) {
        axios.delete('https://bachelor-draft.herokuapp.com/player/remove/' + teamId)
        .then(() => {
            dispatch('fetchTeams');
        })
        .catch(error => {
            console.log(error); // eslint-disable-line no-console
        });
    },
    shuffleTeams({ dispatch }) {
        axios.put('https://bachelor-draft.herokuapp.com/player/shuffle')
        .then(() => {
            dispatch('fetchTeams');
        })
        .catch(error => {
            console.log(error); // eslint-disable-line no-console
        });
    },
    draftContestant({ dispatch }, payload) {
        axios.put('https://bachelor-draft.herokuapp.com/player/draft/' + payload.teamId, {"contestant_id": payload.contestantId})
        .then(() => {
            dispatch('fetchContestants');
            dispatch('fetchTeams');
        })
        .catch(error => {
            console.log(error); // eslint-disable-line no-console
        });
    }
};

const mutations = {
    updateTeams: (state, teams) => {
        state.all = teams;
    },
    updateTeam: (state, updatedTeam) => {
        const team = state.all.find(item => item._id === updatedTeam._id);
        Object.assign(team, updatedTeam);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
