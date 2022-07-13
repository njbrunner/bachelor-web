import Vue from 'vue';
import Vuex from 'vuex';

import contestantStore from './contestant/contestantStore';
import teamStore from './team/teamStore';
import authStore from './auth/authStore';
import draftStore from './draft/draftStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contestantStore,
    authStore,
    teamStore,
    draftStore,
  }
});
