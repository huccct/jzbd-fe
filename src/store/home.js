import { reqNewsPolicy, reqGetHomeInfo } from '@/api/modules/home';
const state = {
  PolicyNews: [],
  title: '',
  text: '',
  imgList: []
};

const mutations = {
  CHANGEINFO(state, data) {
    state.title = data.title;
    state.text = data.text;
    var arr = data.imgUrl.split(',');
    state.imgList = arr;
  }
};

const actions = {
  async getNewsPolicy() {
    let res = await reqNewsPolicy();

    if (res.code === 200) {
      state.PolicyNews = res.rows;
    } else {
      console.log('err');
    }
  },
  async getHomeInfo({ commit }) {
    let res = await reqGetHomeInfo();
    // console.log(res);
    if (res.code === 200) {
      commit('CHANGEINFO', res.data);
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
