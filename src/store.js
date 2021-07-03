import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API_URL: "https://60beb3776035840017c17899.mockapi.io/users2",
    data: [],
  },
  actions: {
    postUsuario({ commit }, usuario) {
      commit("executePostRequest", usuario);
    },

    getUsuarios({ commit }) {
      commit("executeGetRequest");
    },
  },
  mutations: {
    async executePostRequest(state, usuario) {
      try {
        await axios.post(state.API_URL, usuario, {
          "content-type": "application/json",
        });
      } catch (error) {
        console.error(error);
      }
    },

    async executeGetRequest(state) {
      try {
        console.log("test");
        let respuesta = await axios(state.API_URL);
        state.data = respuesta.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
