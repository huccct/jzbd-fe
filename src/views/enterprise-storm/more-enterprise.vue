<template>
  <div class="box">
    <div class="slider-box">
      <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 105.png" alt="组1" />
    </div>
    <div class="m-content">
      <span class="title">青岛联盈创科精密仪器有限公司</span><br />
      <span class="content_one"> Qingdao Lianying Chuangke Precision Instrument Co., Ltd </span>
      <span class="content_two"
        >致力于成为精密仪器行业<br />发展的
        <span class="content_two-1">领军企业</span>
      </span>
      <button class="head-content_contactus">联系我们</button>
    </div>
    <div class="introduce">
      <div class="text">
        <span>01</span>
        <span>&emsp;———&emsp;</span>
        <span>About us</span><br />
        <div>关于我们</div>
        <br />
        <div>唯实创新·追求卓越·共赢未来</div>
        <br />
        <div>
          青岛上合企业创新产业园是胶州湾发展集团围绕上合示范区建设总体方案，重点打造的科技企业孵化园区，地理位置优越，交通便利，15分钟车程即可到达西海岸新区和青岛主城区。
          项目总投资约2亿元，建筑面积约5.2万平方米，目前已建成含办公区的工业厂房10栋（包含6座单层厂房和4座双层厂房），同时为逐步打造国家级孵化器和青岛市级标杆孵化器，园区正在建设6000平方米的办公楼，办公楼建成后，园区将彻底实现从单一的厂房租赁到创客空间、孵化器、加速器、专业园区完整产业生态链。园区2019-2020年先后年获评青岛市中小
          企业产业园和胶州市级孵化器，2022年将努力争创青岛市级孵化器。
        </div>
        <div class="data">
          <div class="profile">
            <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 94@2x.png" alt="" />
            <span>企业简介</span>
            <span>Introduction</span>
          </div>
          <div class="honor">
            <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 95@2x.png" alt="" />
            <span>荣誉资质</span>
            <span>Honorary</span>
          </div>
          <div class="honor">
            <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 96@2x.png" alt="" />
            <span>企业文化</span>
            <span>Culture</span>
          </div>
        </div>
        <br />
      </div>
      <div class="img">
        <div class="icon">
          <el-button type="primary" class="icon-left" @click="prev()">
            <img src="http://114.116.21.170:9000/photo/maker-port/left.png" alt="left" />
          </el-button>
          <el-button type="primary" class="icon-right" @click="next()">
            <img src="http://114.116.21.170:9000/photo/maker-port/right.png" alt="right" />
          </el-button>
        </div>
        <el-carousel
          ref="img"
          interval="4000"
          height="750px"
          arrow="never"
          indicator-position="none"
        >
          <el-carousel-item v-for="item in src" :key="item">
            <img :src="item" :alt="item" style="height: 750px" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="service"></div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      src: [
        'http://114.116.21.170:9000/photo/enterprise-storm/cd7b1847da60c59f8d2c84459b2613f93ae795f32b51f-7ShcoL_fw1200@2x.png'
      ],
      src2: [
        'http://114.116.21.170:9000/photo/maker-port/%E7%BB%842.png',
        'http://114.116.21.170:9000/photo/maker-port/%E7%BB%843.png',
        'http://114.116.21.170:9000/photo/maker-port/%E7%BB%844.png'
      ],
      prev() {
        this.$refs.img.prev();
      },
      next() {
        this.$refs.img.next();
      },
      prev2() {
        this.$refs.img2.prev();
      },
      next2() {
        this.$refs.img2.next();
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.box {
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-top: -65px;
  padding: 0;
}

.head-content_contactus {
  margin-top: 359px;
  color: white;
  height: 58px;
  width: 210px;
  background-color: #00a6ff;
  border: none;
  font-size: 24px;
  font-weight: 400;
}

.m-content {
  position: absolute;
  top: 298px;
  left: 320px;

  .title {
    width: 560px;
    height: 40px;
    font-size: 40px;
    font-weight: 700;
    color: #ffffff;
    line-height: 40px;
  }
  .content_one {
    position: absolute;
    margin-top: 29px;
    width: 698px;
    height: 24px;
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    line-height: 24px;
  }
  .content_two {
    position: absolute;
    margin-top: 120px;
    width: 756px;
    height: 132px;
    font-size: 66px;
    font-weight: 700;
    color: #ffffff;
    line-height: 66px;
    letter-spacing: 2px;
    opacity: 80%;
    .content_two-1 {
      color: #00a6ff;
      opacity: 100%;
    }
  }
}

.slider-box {
  position: relative;
  z-index: -1;
  left: 0;
  width: 100%;
  height: 100%;
}

.introduce {
  width: 80%;
  height: 900px;
  position: absolute;
  margin-top: 20px;
  left: 350px;

  .text {
    color: #333333;
    width: 42%;
    height: 100%;
    margin-top: 89px;
    margin-left: -30px;

    div {
      margin-top: 30px;
    }
    span:nth-child(1) {
      color: #00a6ff;
      font-size: 25px;
      margin-bottom: 50px;
      font-weight: bolder;
    }

    span:nth-child(2) {
      color: #cdcdcd;
      font-size: 20px;
      font-weight: lighter;
    }

    span:nth-child(3) {
      color: #cdcdcd;
      font-size: 25px;
      font-weight: bolder;
    }

    div:nth-child(5) {
      color: #333333;
      font-size: 50px;
      font-weight: 700;
      line-height: 50px;
    }

    div:nth-child(7) {
      margin-top: 10px;
      color: #333333;
      font-size: 24px;
      font-weight: bolder;
    }

    div:nth-child(9) {
      width: 648px;
      height: 184px;
      color: #666666;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
    .data {
      display: flex;
      justify-content: space-between;
      :nth-child(1) {
        width: 90px;
        height: 87px;
        :nth-child(2) {
          margin-top: 14px;
          margin-left: 5px;
          width: 80px;
          height: 20px;
          color: #00a6ff;
          font-weight: 700;
        }
        :nth-child(3) {
          width: 89px;
          height: 14px;
          font-size: 14px;
          font-weight: 700;
          color: #00a6ff;
          line-height: 14px;
        }
      }
      :nth-child(2) {
        width: 90px;
        height: 87px;
        :nth-child(2) {
          margin-top: 14px;
          margin-left: 5px;
          width: 80px;
          height: 20px;
          font-size: 20px;
          font-weight: 700;
          color: #333333;
          line-height: 20px;
        }
        :nth-child(3) {
          width: 68px;
          height: 14px;
          font-size: 14px;
          font-weight: 700;
          color: #333333;
          line-height: 14px;
          margin-left: 13px;
        }
      }
      :nth-child(3) {
        width: 90px;
        height: 87px;
        :nth-child(2) {
          margin-top: 14px;
          margin-left: 5px;
          width: 80px;
          height: 20px;
          font-size: 20px;
          font-weight: 700;
          color: #333333;
          line-height: 20px;
        }
        :nth-child(3) {
          width: 68px;
          height: 14px;
          font-size: 14px;
          font-weight: 700;
          color: #333333;
          line-height: 14px;
          margin-left: 17px;
        }
      }
    }
  }

  .img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: -50px;
    margin-left: 60px;

    .icon {
      position: relative;
      z-index: 10;
      display: flex;
      width: 180px;
      height: 80px;
      top: 200px;
      left: -90px;
      text-align: center;
      line-height: 90px;

      .icon-left {
        width: 50%;
        height: 80px;
        background: #00a6ff;
        opacity: 0.4;
        border-radius: 50px 0 0 50px;
        margin-right: -10px;
      }

      .icon-right {
        width: 50%;
        height: 80px;
        background: #00a6ff;
        border-radius: 0 50px 50px 0;
        margin-left: 10px;
      }
    }
  }
}

.service {
  width: 1920px;
  height: 800px;
  position: relative;
  margin-top: 55%;
  margin-bottom: 240px;
  right: -50px;
  left: 0;
}
</style>
