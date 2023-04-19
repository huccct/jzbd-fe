/*
 * @Author: hayyot
 * @Date: 2023-04-16 19:29:19
 * @Description: 铁沸物
 * @FilePath: \jzbd-fe\src\store\service.js
 */
import { getAllList, getOneList } from '@/api/modules/park-service';
const state = {
  allList_data: [],
  oneList_data: []
};

const mutations = {
  AllList(state, searchList) {
    state.searchList = searchList;
  }
};

const actions = {
  async GetAllList({ commit }) {
    let res = await getAllList({ pageNum: 1, pageSize: 10 });
    console.log(res);
    commit('AllList', res.rows);
  },
  async GetOneList() {
    let res = await getOneList();
    console.log(res);
    // state.oneList_data = res.data
  }
};
const getters = {
  RAllList(state) {
    return state.allList_data || [];
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
