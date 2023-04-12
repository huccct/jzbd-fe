<template>
  <div class="box">
    <div class="left">
      <img src="http://114.116.21.170:9000/photo/Logo.png" alt="logo" />
    </div>
    <div class="right">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#ccc"
        active-text-color="#01a6ff"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">园区服务</el-menu-item>
        <el-menu-item index="3">企业风采</el-menu-item>
        <el-menu-item index="4">厚德创客港</el-menu-item>
        <el-menu-item index="5">招商合作</el-menu-item>
        <el-menu-item index="6">政策发布</el-menu-item>
        <el-menu-item index="7">联系我们</el-menu-item>
      </el-menu>
      <div class="right-fix">
        <el-divider />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  align-items: center;
  padding-top: 28px;
  padding-left: 180px;
}

.right {
  padding-right: 120px;
  &-fix {
    position: absolute;
    top: 38px;
    right: 0;
    width: 130px;
  }
}

.el-menu {
  background-color: transparent !important;
}

.el-menu-item {
  background-color: transparent !important;
}
</style>
