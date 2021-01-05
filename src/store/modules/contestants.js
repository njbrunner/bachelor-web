import axios from 'axios';

const state = {
    all: []
};

const getters = {};

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
    disableContestant({ rootState, dispatch }, contestant_id) {
        axios({
            method: 'post',
            url: 'https://bachelor-draft.herokuapp.com/contestant/norose/' + contestant_id,
            headers: {
                Authorization: 'Bearer ' + rootState.auth.bachelorToken
            }
        })
        .then(() => {
            dispatch('fetchContestants');
        })
        .catch(error => {
            console.log(error); // eslint-disable-line no-console
        });
    }
};

const mutations = {
    updateContestants: (state, contestants) => {
        state.all = contestants;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};