import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import service from './service';
import policy from './policy';
import cooperation from './cooperation';
import contact from './contact';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    service,
    policy,
    cooperation,
    contact
  }
});
