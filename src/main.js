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
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
