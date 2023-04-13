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
        <span>提供一条龙的运营孵化体系</span>
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
  top: 445px;
  left: 320px;
  width: 984px;
  height: 70px;
  span {
    display: block;
    float: left;
    margin-bottom: 40px;
    width: 984px;
    height: 70px;
    font-size: 70px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    line-height: 70px;
    letter-spacing: 12px;
  }
}
</style>
