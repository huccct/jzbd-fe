<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-04-12 11:36:59
 * @LastEditors: Huccct
 * @LastEditTime: 2023-04-12 17:49:30
-->
<template>
  <div class="foot-menu">
    <div class="footer-content-top">
      <img src="http://114.116.21.170:9000/photo/bottom.png" alt="" />
    </div>
    <div class="divider">
      <el-divider></el-divider>
    </div>
    <div class="footer-content-bottom">
      <span>{{ companyInfo }}</span>
    </div>
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
  margin: 0 auto;
  color: #fff;
  height: 247px;
  width: 100% !important;
  text-align: center;
}
.footer-content-top img {
  width: 100% !important;
}
.divider {
  width: 100% !important;
  position: relative;
  bottom: 48px;
}
.footer-content-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 48px;
  line-height: 48px;
}
.footer-content-bottom span {
  color: #666666;
  font-size: 12px;
}
.el-divider {
  margin: 0 !important;
}
</style>
