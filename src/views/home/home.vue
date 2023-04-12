<template>
  <div class="box">
    <el-container>
      <el-header>
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
      </el-header>
      <el-main> </el-main>
    </el-container>
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
.box {
  width: 100%;
}

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
  top: 300px;
  left: 180px;
}

.h-content {
  position: absolute;
  top: 390px;
  left: 180px;
  span {
    color: #fff;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 12px;
  }
}
</style>
