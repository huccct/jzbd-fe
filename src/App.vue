<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-04-11 10:37:48
 * @LastEditors: Huccct
 * @LastEditTime: 2023-04-11 19:29:28
-->
<template>
  <div id="app">
    <navigation-bar />
    <router-view />
    <Bottom />
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation/navigation.vue';
import Bottom from '@/components/bottom/bottom.vue';
export default {
  name: 'App',
  components: { NavigationBar, Bottom }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
