<template>
  <div class="box">
    <el-container>
      <el-header>
        <div class="slider-box">
          <img src="http://114.116.21.170:9000/photo/maker-port/%E7%BB%841.png" alt="组1">
        </div>
        <div class="m-btn">
          <el-button class="m-btn-ex" type="primary" plain disabled>EXPLORE A NEW WORLD TOGETHER</el-button>
        </div>
        <div class="m-content">
          <span class="title">厚德创客港</span><br>
          <span class="content">
            厚德创客港产业园区解决方案以”科技赋能园区，助力产业转型”为愿景目标，打造“服、管、控、营”一体化的智慧产业园区。
          </span>
        </div>
        <div class="m-btn-us">
          <el-button class="btn-us" type="primary">联系我们</el-button>
        </div>
      </el-header>
      <el-main>
        <div class="service-img">
          <!--          <img src="http://114.116.21.170:9000/photo/maker-port/%E7%BB%842.png" alt="组2">-->
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
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

.m-btn {
  position: absolute;
  top: 300px;
  left: 180px;

  .m-btn-ex {
    font-size: 14px;
    font-weight: bolder;
  }
}

.m-btn-us {
  position: absolute;
  top: 600px;
  left: 180px;

  .btn-us {
    width: 200px;
    height: 60px;
    font-weight: bold;
    font-size: 18px;
  }
}

.m-content {
  position: absolute;
  top: 390px;
  left: 180px;

  .title {
    color: #000000;
    letter-spacing: 12px;
    font-size: 70px;
    font-weight: bolder;
  }

  .content {
    position: absolute;
    padding-top: 20px;
    width: 540px;
    color: rgba(0, 0, 0, 0.2);
    font-size: 18px;
    font-family: "Microsoft YaHei UI",serif;
    font-weight: bold;
  }
}

.service-img {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
