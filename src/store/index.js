import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import service from './service';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    service
  }
});
