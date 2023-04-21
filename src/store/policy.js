import { uploadCompany, policyInformation } from '@/api/modules/policy';
const state = {
  PolicyInformation: []
};

const mutations = {};

const actions = {
  async getPolicyInformation() {
    let res = await policyInformation();
    if (res.code === 200) {
      state.PolicyInformation = res.rows;
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
