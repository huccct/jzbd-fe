import { uploadCompany, policyInformation } from '@/api/modules/policy';
const state = {
  PolicyInformation: []
};

const mutations = {};

const actions = {
  async getPolicyInformation({ commit }, params) {
    let res = await policyInformation(params);
    if (res.code === 200) {
      state.PolicyInformation = res;
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
