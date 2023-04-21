import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import service from './service';
import policy from './policy';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    service,
    policy
  }
});
