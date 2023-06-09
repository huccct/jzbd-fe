import { uploadCompany, policyInformation, policyDetailInformation } from '@/api/modules/policy';
const state = {
  PolicyInformation: [],
  policyDetailInformation: []
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
  },
  async policyDetailInformation({ commit }, url, params) {
    let res = await policyDetailInformation(url, params);
    if (res.code === 200) {
      state.policyDetailInformation = res.data;
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
