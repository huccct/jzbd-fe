/*
 * @Description:
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-06-14 13:52:05
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-06-14 15:41:32
 * @FilePath: \jzbd-fe\src\store\home.js
 */
import { reqNewsPolicy, reqGetHomeInfo, reqExcellentEnterprise } from '@/api/modules/home';
const state = {
  PolicyNews: [],
  title: '',
  text: '',
  imgList: [],
  excellentEnterprise: []
};

const mutations = {
  CHANGEINFO(state, data) {
    state.title = data.title;
    state.text = data.text;
    var arr = data.imgUrl.split(',');
    state.imgList = arr;
  },
  setExcellentEnterprise(state, data) {
    state.excellentEnterprise = data;
    console.log('asn', state.excellentEnterprise);
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
  },
  async getExcellentEnterprise({ commit }) {
    let res = await reqExcellentEnterprise();
    // console.log(res);
    if (res.code === 200) {
      commit('setExcellentEnterprise', res.data);
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
