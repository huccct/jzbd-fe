import { reqTest } from '@/api';
const state = {};

const mutations = {};

const actions = {
  async Test() {
    let res = await reqTest();
    console.log(res);
  }
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
};
