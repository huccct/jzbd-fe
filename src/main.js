/*
 * @Author: hayyot
 * @Date: 2023-04-13 08:20:38
 * @Description: 铁沸物
 * @FilePath: \jzbd-fe\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';

import * as API from '@/api';
import '@/mock';
import { Message } from 'element-ui';
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
    Vue.prototype.$message = Message;
  },
  render: h => h(App)
}).$mount('#app');
