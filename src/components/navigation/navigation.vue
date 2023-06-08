<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-04-12 09:59:54
 * @LastEditors: Huccct
 * @LastEditTime: 2023-06-02 21:08:11
-->
<template>
  <div class="box">
    <div class="left">
      <img src="http://47.95.211.240:9000/photo/Logo.png" alt="logo" />
    </div>
    <div class="right">
      <el-menu
        :default-active="'/' + this.$route.path.split('/')[1]"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#ccc"
        active-text-color="#01a6ff"
        :router="true"
        @select="handleSelect"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/service">园区服务</el-menu-item>
        <el-menu-item index="/enterprise-storm">企业风采</el-menu-item>
        <el-menu-item index="/maker-port">厚德创客港</el-menu-item>
        <el-menu-item index="/cooperation">招商合作</el-menu-item>
        <el-menu-item index="/policy-release">政策发布</el-menu-item>
        <el-menu-item index="/contact">联系我们</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      activeIndex: '/'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
      //存储index的值
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
}

.left {
  display: flex;
  align-items: center;
  padding-top: 82px;
  padding-left: 320px;
  img {
    width: 130px;
    height: 130px;
  }
}

.right {
  width: 1078px;
  padding-right: 220px;
  width: 978px;
  padding-right: 20px;
  padding-top: 23px;
}

.el-menu {
  text-align: center;
  width: 978px;
  border-bottom: none !important;
  background-color: transparent !important;
  &::after {
    width: 99.5%;
    content: '';
    border: 1px solid #e6e6e6;
  }
}

.el-menu-item {
  width: 120px;
  font-size: 18px;
  background-color: transparent !important;
  color: #fff !important;
  font-weight: lighter;
  border-bottom-width: 4px !important;
}

.el-menu-item.is-active,
.el-submenu.is-active > .el-submenu__title {
  color: #fff !important; /* 修改为自己需要的颜色 */
  border-bottom-color: #fff !important;
  font-weight: 700;
  // border-bottom-width: 20px !important;
}
</style>
