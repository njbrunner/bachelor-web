const state = {
    isDrafting: false
};

const getters = {
    getDraftStatus: state => {
        return state.isDrafting;
    }
};

const actions = {
    updateDraftStatus({ commit }, draftStatus) {
        commit('updateDraftStatus', draftStatus);
    }
};

const mutations = {
    updateDraftStatus: (state, draftStatus) => {
        state.isDrafting = draftStatus;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
