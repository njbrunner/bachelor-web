import Vue from 'vue';
import Vuex from 'vuex';

import contestants from './modules/contestants.js';
import auth from './modules/auth.js';
import teams from './modules/teams.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contestants,
    auth,
    teams,
  }
});