<!--
 * @Author: 袁十一
 * @Date: 2023-04-12 16:34:50
 * @LastEditTime: 2023-04-14 11:47:05
 * @LastEditors: 袁十一
 * @Description: 联系我们页面
 * @FilePath: \jzbd-fe\src\views\contact\contact.vue
 * 初心不变，意志坚定
-->
<template>
  <div class="contract">
    <div class="contract-header">
      <div class="sliderbox">
        <img src="http://114.116.21.170:9000/photo/contract/background.png" alt="" />
      </div>
      <div class="text">
        <div class="c-title">CONTACT US</div>
        <div class="l-title">联系我们</div>
      </div>
      <div class="container">
        <div class="contract-top">
          <p>01&nbsp;<span></span>&nbsp;<span> Contact us</span></p>
          <p>联系我们</p>
        </div>
        <div class="contract-logos clearfix">
          <div class="logo first clearfix">
            <img src="http://114.116.21.170:9000/photo/contract/location.png" alt="" />
            <p class="p1">园区位置</p>
            <p class="p2">胶州上合示范区长江路1216号</p>
          </div>
          <div class="logo">
            <img src="http://114.116.21.170:9000/photo/contract/person.png" alt="" />
            <p class="p1">联系人</p>
            <p class="p2">招商部&nbsp;张三</p>
          </div>
          <div class="logo">
            <img src="http://114.116.21.170:9000/photo/contract/phone.png" alt="" />
            <p class="p1">联系方式</p>
            <p class="p2">153&nbsp;1502&nbsp;0155</p>
          </div>
          <div class="logo">
            <img src="http://114.116.21.170:9000/photo/contract/email.png" alt="" />
            <p class="p1">邮箱</p>
            <p class="p2">15315020155@163.com</p>
          </div>
        </div>
        <div class="contract-map">
          <img src="http://114.116.21.170:9000/photo/contract/map.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//清除浮动
.clearfix::after {
  content: '';
  clear: both;
  display: block;
}
/*
主内容区容器开始
*/
.container {
  width: 1280px;
  height: 300px;
  margin: 0 320px;
  margin-top: 101px;
}
.contract-top {
  p:nth-child(1) {
    color: #007dc0;
    font-size: 30px;
    font-family: DIN-Bold-Regular;
    text-align: center;
    line-height: 30px;
    display: flex;
    span:nth-child(1) {
      margin-left: 14px;
      margin-top: 15px;
      width: 80px;
      border-top: 2px solid #cdcdcd;
      margin-right: 14px;
    }
    span:nth-child(2) {
      display: inline;
      font-size: 30px;
      color: #cdcdcd;
      font-weight: Regular;
      font-family: DIN-Bold-Regular;
    }
  }
  p {
    margin-top: 34px;
    font-weight: 700;
    font-family: Microsoft YaHei-Bold;
    color: #333333;
    font-size: 36px;
  }
}
.contract-logos {
  margin-top: 141px;
}
.contract-logos .logo {
  text-align: center;
}
.contract-logos .first {
  margin-left: 64px;
}
.contract-logos .logo {
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  margin-right: 120px;
  float: left;
}
.contract-logos .logo:nth-child(4) {
  margin-right: 0;
}
.contract-logos .logo .p1 {
  font-size: 16px;
  color: #333333;
  line-height: 32px;
  margin-top: 20px;
}
.contract-logos .logo .p2 {
  font-size: 20px;
  color: #333333;
  line-height: 32px;
  margin-top: 30px;
}
.contract-map {
  margin-top: 114px;
}
/*
主内容区容器结束
*/

/*
头部块开始
*/
.contract {
  width: 100%;
}
.contract .contract-header {
  display: block;
  height: 1000px;
}
.sliderbox {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1000px;
  img {
    width: 100%;
    height: 1000px;
  }
}
.text {
  width: 1271px;
  height: 268px;
  position: relative;
  margin: 368px 324px 363px 325px;
}
.c-title {
  width: 100%;
  height: 100%;
  font-size: 190px;
  font-family: DIN-Bold, DIN;
  font-weight: bold;
  color: #ffffff;
  opacity: 0.2;
}
.l-title {
  line-height: 87px;
  width: 304px;
  height: 87px;
  font-size: 66px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  line-height: 24px;
  position: absolute;
  z-index: 2;
  left: 492px;
  top: 155px;
  letter-spacing: 10px;
}
/*
头部块结束
*/
</style>
