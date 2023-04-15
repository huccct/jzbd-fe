<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-04-11 10:37:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-13 09:18:09
-->
<template>
  <div id="app">
    <navigation-bar />
    <router-view />
    <el-footer>
      <Bottom />
    </el-footer>
  </div>
</template>

<script>
import DevicePixelRatio from '@/utils/devicePixelRatio';
import NavigationBar from '@/components/navigation/navigation.vue';
import Bottom from '@/components/bottom/bottom.vue';
export default {
  name: 'App',
  components: { NavigationBar, Bottom },
  data() {
    return {};
  },
  created() {
    new DevicePixelRatio().init();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.el-footer {
  padding: 0 !important;
}
.el-main {
  padding: 0 !important;
}
.el-header {
  padding: 0 !important;
}
</style>
