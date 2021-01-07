import axios from 'axios';

const state = {
    all: []
};

const getters = {
    getAllContestants: state => {
        return state.all;
    }
};

const actions = {
    fetchContestants({ commit }) {
        axios({
            method: 'get',
            url: 'https://bachelor-draft.herokuapp.com/contestant/'
        })
        .then(response => {
            commit('updateContestants', response.data.data);
        })
        .catch(error => {
            console.log(error); // eslint-disable-line no-console
        });
    },
    updateContestant({ commit }, contestant) {
        commit('updateContestant', contestant);
    },
    disableContestant({ rootState, dispatch }, contestant_id) {
        axios({
            method: 'put',
            url: 'https://bachelor-draft.herokuapp.com/contestant/norose/' + contestant_id,
            headers: {
                Authorization: 'Bearer ' + rootState.authStore.bachelorToken
            }
        })
        .then(() => {
            dispatch('fetchContestants');
        })
        .catch(error => {
            console.log(error); // eslint-disable-line no-console
        });
    },
    resetDraft({ rootState, dispatch }) {
        axios({
            method: 'put',
            url: 'https://bachelor-draft.herokuapp.com/contestant/draft/reset/all',
            headers: {
                Authorization: 'Bearer ' + rootState.authStore.bachelorToken
            }
        })
        .then(() => {
            dispatch('fetchContestants');
            dispatch('fetchTeams');
        })
        .catch(error => {
            console.log(error); // eslint-disable-line no-console
        });
    },
};

const mutations = {
    updateContestants: (state, contestants) => {
        state.all = contestants;
    },
    updateContestant: (state, updatedContestant) => {
        const contestant = state.all.find(item => item._id === updatedContestant._id);
        Object.assign(contestant, updatedContestant);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
