/*
 * @Author: hayyot
 * @Date: 2023-04-16 19:29:19
 * @Description: 铁沸物
 * @FilePath: \jzbd-fe\src\store\service.js
 */
import { getAllList, getOneList } from '@/api/park-service';
const state = {};

const mutations = {};

const actions = {
  async GetAllList() {
    let res = await getAllList();
    console.log(res);
  },
  async GetOneList() {
    let res = await getOneList();
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
