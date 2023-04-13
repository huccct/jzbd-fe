<template>
  <div class="box">
    <div class="header">
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
