import { reqNewsPolicy } from '@/api/modules/home';
const state = {
  PolicyNews: []
};

const mutations = {};

const actions = {
  async getNewsPolicy() {
    let res = await reqNewsPolicy();
    if (res.code === 200) {
      state.PolicyNews = res.rows;
    } else {
      console.log('err');
    }
  }
};
const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
