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
  width: 100%;
  left: 0;
  height: 190px;
  line-height: 90px;
  text-align: center;
}
.footer-content-top img {
  width: 100%;
}
.divider {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.footer-content-bottom span {
  color: #666666;
  font-size: 12px;
  position: absolute;
  bottom: -35px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>
