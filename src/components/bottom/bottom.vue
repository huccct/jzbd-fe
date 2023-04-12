<template>
  <div class="foot-menu">
    <el-footer>
      <div class="footer-content-top"></div>
      <div class="divider">
        <el-divider></el-divider>
      </div>
      <div class="footer-content-bottom">
        <span>{{ companyInfo }}</span>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data() {
    return {
      companyInfo:
        'copyright ◎2014- 2022 scodpt.com青岛上合企业创新产业园All Rights Reserved京ICP备2022015806号'
    };
  }
};
</script>

<style lang="scss" scoped>
.foot-menu {
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  color: #fff;
  width: 100%;
  background-color: rgba(136, 136, 136, 0.48);
  height: 190px;
  line-height: 90px;
  text-align: center;
}
.divider {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.footer-content-bottom span {
  color: #fff;
  font-size: 14px;
  position: relative;
  bottom: -135px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>
