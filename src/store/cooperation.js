import { reqParkinfoList, reqDetailsList, getAllList } from '@/api/modules/cooperation';
const state = {
  ParkinfoList: [],
  DetailsList: [],
  getAllList: []
};

const mutations = {};

const actions = {
  async getParkinfoList() {
    let res = await reqParkinfoList();
    console.log(res);
    if (res.code === 200) {
      state.ParkinfoList = res.rows;
    } else {
      console.log('err');
    }
  },
  async getDetailsList() {
    let res = await reqDetailsList(1);
    if (res.code === 200) {
      state.DetailsList = res.data;
      console.log(res.data);
    } else {
      console.log('err');
    }
  },
  async GetAllList() {
    let res = await getAllList({ pageNum: 1, pageSize: 10 });
    state.getAllList = res.data;
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
