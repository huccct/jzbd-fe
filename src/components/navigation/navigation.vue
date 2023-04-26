<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-04-12 09:59:54
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-04-25 21:46:25
-->
<template>
  <div class="box">
    <div class="left">
      <img src="http://114.116.21.170:9000/photo/Logo.png" alt="logo" />
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
  created() {
    //生命周期获取index并赋值
  },
  mounted() {
    console.log(this.$route.path);
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
  padding-top: 18px;
  padding-left: 320px;
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
}
</style>
