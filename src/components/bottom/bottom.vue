<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-04-12 11:36:59
 * @LastEditors: Huccct
 * @LastEditTime: 2023-04-12 17:49:30
-->
<template>
  <div class="foot-menu">
    <div class="footer-content-bg">
      <img src="http://114.116.21.170:9000/photo/bottom.png" alt="" />
    </div>
    <div class="footer-content-header">
      <div class="footer-content-menu">
        <ul>
          <li v-for="(item, index) in govList" :key="index">
            <span style="font-size: 16px">{{ item.name }}</span>
            <span><img :src="item.src" alt="" /></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-content-main">
      <div class="left">
        <span>联系我们</span>
        <span>电话：0532-12341234</span>
        <span>邮箱：15618790211@163.com</span>
        <span>地址：山东省青岛市胶州上合示范区闽江路60号</span>
      </div>
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
        'copyright ◎2014- 2022 scodpt.com青岛上合企业创新产业园All Rights Reserved京ICP备2022015806号',
      govList: [
        {
          id: 1,
          name: '中国政府网',
          src: 'http://114.116.21.170:9000/photo/barrow.png'
        },
        {
          id: 2,
          name: '山东政府网站',
          src: 'http://114.116.21.170:9000/photo/barrow.png'
        },
        {
          id: 3,
          name: '市级政府网站',
          src: 'http://114.116.21.170:9000/photo/barrow.png'
        },
        {
          id: 4,
          name: '省级政府网站',
          src: 'http://114.116.21.170:9000/photo/barrow.png'
        },
        {
          id: 5,
          name: '其他',
          src: 'http://114.116.21.170:9000/photo/barrow.png'
        }
      ]
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
.footer-content-bg img {
  width: 100% !important;
}
.footer-content-header {
  position: absolute;
  top: -60px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #0e7fdb;
}
.footer-content-menu {
  padding-left: 380px;
}
.footer-content-menu ul {
  list-style: none;
  display: flex;
}

.footer-content-menu li {
  display: flex;
  align-items: center;
  width: 256px;
  font-size: 16px;
}
.footer-content-menu li:not(:last-child) span {
  height: 16px;
  line-height: 16px;
}
.footer-content-menu li:nth-child(1) span:nth-child(1) {
  width: 80px;
  white-space: nowrap;
}
.footer-content-menu li:nth-child(2) span:nth-child(1),
.footer-content-menu li:nth-child(3) span:nth-child(1),
.footer-content-menu li:nth-child(4) span:nth-child(1) {
  width: 96px;
  white-space: nowrap;
}
.footer-content-menu li:nth-child(5) span:nth-child(1) {
  width: 32px;
  white-space: nowrap;
}
.footer-content-menu li:not(:first-child) {
  padding: 0 60px;
}
.footer-content-menu li:not(:last-child) {
  border-right: 1px solid #fff;
  margin-top: 20px;
  height: 20px;
}

.footer-content-menu li:nth-child(1) span:nth-child(2) {
  margin-left: 74px;
}
.footer-content-menu li:nth-child(2) span:nth-child(2),
.footer-content-menu li:nth-child(3) span:nth-child(2),
.footer-content-menu li:nth-child(4) span:nth-child(2) {
  margin-left: 58px;
}
.footer-content-menu li:nth-child(5) span:nth-child(2) {
  margin-left: 122px;
}
.footer-content-main {
  position: absolute;
  top: 30px;
  left: 320px;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .left span {
    color: #333333;
    margin-bottom: 28px;
    text-align: left;
    font-weight: 400;
  }
  .left span:nth-child(1) {
    height: 24px;
    font-size: 24px;
    line-height: 24px;
  }
  .left span:nth-child(2) {
    height: 16px;
    font-size: 18px;
  }
  .left span:nth-child(3) {
    height: 16px;
    font-size: 18px;
  }
  .left span:nth-child(4) {
    height: 16px;
    font-size: 18px;
  }
}
.divider {
  width: 100%;
  position: relative;
  bottom: 48px;
}
.footer-content-bottom {
  position: absolute;
  top: 267px;
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
