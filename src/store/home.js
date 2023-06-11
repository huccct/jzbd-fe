import { reqNewsPolicy, reqGetHomeInfo } from '@/api/modules/home';
const state = {
  PolicyNews: [],
  title: '',
  text: ''
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
  },
  async getHomeInfo() {
    let res = await reqGetHomeInfo();
    // console.log(res);
    if (res.code === 200) {
      state.text = res.data.text;
      state.title = res.data.title;
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
