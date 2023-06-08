import { reqUploadAllInfo } from '@/api/modules/contact';

const state = {
  part1Form: {},
  part2Form: {},
  part3Form: [],
  part4Form: [],
  part5Form: {}
};

const mutations = {
  setForm1(state, data) {
    state.part1Form = data;
    console.log('res1', state.part1Form);
  },
  setForm2(state, data) {
    state.part2Form = data;
    console.log('res2', state.part2Form);
  },
  setForm3(state, data) {
    state.part3Form = data;
    console.log('res3', state.part3Form);
  },
  setForm4(state, data) {
    state.part4Form = data;
    console.log('res4', state.part4Form);
  },
  setForm5(state, data) {
    state.part5Form = data;
    console.log('res5', state.part5Form);
  }
};

const actions = {
  async uploadAllInfo({ commit }) {
    let res = await reqUploadAllInfo();
    console.log(res);
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
