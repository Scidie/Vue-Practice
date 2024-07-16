import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    data: null,
    isLoggedIn: false,

  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setLoggedIn(state) {
      state.isLoggedIn = true;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await axios.post("http://localhost:3000/login", { username, password });
        if (response.data.isLoggedIn) {
          commit('setLoggedIn');
          commit('setData', response.data.userData)
        }
      } catch (error) {
        console.log("debug2")
        message.value = error.response.data || 'Error logging in';
      }
    },
    async getData({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/account2");
        if (response.data.isLoggedIn) {
          console.log(response.data)
          commit('setLoggedIn');
          commit('setData', response.data.userData)
        } else {
          console.log("response from server", response.data)
        }
      } catch (error) {
        console.log("debug2")
        message.value = error.response.data || 'Error logging in';
      }
    }
  },
  getters: {
    getData: state => state.data,
    isLoggedIn: state => state.isLoggedIn,
  }
});

export default store;