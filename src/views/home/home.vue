<template>
  <div class="box">
    <div class="slider-box">
      <Slider />
    </div>
    <div class="h-btn">
      <el-button type="primary"> EXPLORE A NEW WORLD TOGETHER </el-button>
    </div>
    <div class="h-content">
      <span>提供一条龙的运营孵化体系</span><br />
      <span>协助企业高质量发展</span>
    </div>
    <div class="main">
      <div class="main-box1">
        <div class="main-box1-left">
          <div class="main-description">
            <span>01</span>
            <div class="divider"></div>
            <span>Basic information</span>
          </div>
          <div class="main-title1">
            <span>园区基本情况</span>
          </div>
          <div class="main-title2">
            <span>青岛上合企业创新产业园</span>
          </div>
          <div class="main-content">
            <span
              >青岛上合企业创新产业园是胶州湾发展集团围绕上合示范区建设总体方案，重点打造的科技<br />
              企业孵化园区，地理位置优越，交通便利，15分钟车程即可到达西海岸新区和青岛主城区。<br />
              项目总投资约2亿元，建筑面积约5.2万平方米，目前已建成含办公区的工业厂房10栋（包含<br />
              6座单层厂房和4座双层厂房），同时为逐步打造国家级孵化器和青岛市级标杆孵化器，园区<br />
              正在建设6000平方米的办公楼，办公楼建成后，园区将彻底实现从单一的厂房租赁到创客空<br />
              间、孵化器、加速器、专业园区完整产业生态链。园区2019-2020年先后年获评青岛市中小<br />
              企业产业园和胶州市级孵化器，2022年将努力争创青岛市级孵化器。</span
            >
          </div>
          <div class="main-btn">
            <el-button type="primary">加入我们</el-button>
          </div>
        </div>
        <div class="main-box1-right">
          <div class="main-box1-img">
            <img src="http://114.116.21.170:9000/photo/01slider1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="main-box2"></div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation/navigation.vue';
import Slider from '@/components/slider/slider.vue';

export default {
  components: { NavigationBar, Slider }
};
</script>

<style lang="scss" scoped>
.slider-box {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.h-btn {
  position: absolute;
  top: 350px;
  left: 320px;
}

.h-content {
  position: absolute;
  top: 404px;
  left: 320px;
  span {
    color: #fff;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 12px;
  }
}

.main-description {
  position: relative;
  top: 807px;
  left: 320px;
  display: flex;
  width: 600px;
  align-items: center; /*将元素垂直居中*/
  span:nth-child(1) {
    width: 33px;
    height: 30px;
    font-size: 30px;
    font-family: DIN-Bold-Regular, DIN-Bold;
    font-weight: 400;
    color: #007dc0;
    line-height: 30px;
  }
  span:nth-child(3) {
    width: 250px;
    height: 30px;
    font-size: 30px;
    font-family: DIN-Bold-Regular, DIN-Bold;
    font-weight: 400;
    color: #cdcdcd;
    line-height: 30px;
  }
  .divider {
    width: 80px;
    height: 2px;
    background: #cdcdcd;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    margin: 0 10px;
  }
}

.main-title1 {
  position: relative;
  top: 841px;
  left: 320px;
  width: 300px;
  height: 50px;
  font-size: 50px;
}

.main-title2 {
  position: relative;
  top: 931px;
  left: 320px;
  width: 264px;
  height: 24px;
  font-size: 24px;
}

.main-content {
  position: relative;
  top: 966px;
  left: 320px;
  width: 648px;
  height: 184px;
  font-size: 16px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
}

.main-btn {
  position: relative;
  top: 1047px;
  left: 320px;
  width: 80px;
  height: 20px;
  font-size: 20px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
}

.main-box1-right {
  position: absolute;
  top: 873px;
  right: 0;
}
.main-box1-img img {
  width: 800px;
  height: 600px;
}
</style>
