import axios from 'axios';
import router from '../../router';

const state = {
    bachelorToken: null,
};

const getters = {
  isAuthorized: state => {
    return !!state.bachelorToken;
  }
};

const actions = {
    doLogin({ commit }, password) {
      axios.post('https://bachelor-draft.herokuapp.com/auth/login', {
        'password': password
      })
      .then(response => {
        localStorage.setItem('bachelorToken', response.data.access_token);
        commit('updateAccessToken', response.data.access_token);
        router.push('/admin');
      })
      .catch(error => {
        console.log(error); // eslint-disable-line no-console
        commit('updateAccessToken', null);
      });
    },
    fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('bachelorToken'));
    },
    logout({ commit }) {
      localStorage.removeItem('bachelorToken');
      commit('logout');
    },
};

const mutations = {
    updateAccessToken: (state, bachelorToken) => {
      state.bachelorToken = bachelorToken;
    },
    logout: (state) => {
      state.bachelorToken = null;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
