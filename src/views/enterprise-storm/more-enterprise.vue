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
    <div class="bg-box">
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
    </div>
    <div class="products-services">
      <div class="text">
        <span>02</span>
        <span>&emsp;———&emsp;</span>
        <span>Products and services</span><br />
        <div>产品与服务</div>
      </div>
      <div class="product-details">
        <div class="product-details_one left">
          <span>01</span>
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 124@2x.png" alt="" />
          <span>测量仪器制造</span>
          <span>测量仪器制造测量仪器制造测量仪器制造</span>
        </div>
        <div class="product-details_one center">
          <span>02</span>
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 125@2x.png" alt="" />
          <span>测量仪器销售</span>
          <span>测量仪器制造测量仪器制造测量仪器制造</span>
        </div>
        <div class="product-details_one">
          <span>03</span>
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 126@2x.png" alt="" />
          <span>机械设备研发</span>
          <span>测量仪器制造测量仪器制造测量仪器制造</span>
        </div>
        <div class="product-details_one left_one">
          <span>04</span>
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 127@2x.png" alt="" />
          <span>技术服务</span>
          <span>测量仪器制造测量仪器制造测量仪器制造</span>
        </div>
        <div class="product-details_one center_one">
          <span>05</span>
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 128@2x.png" alt="" />
          <span>技术推广</span>
          <span>测量仪器制造测量仪器制造测量仪器制造</span>
        </div>
        <div class="product-details_one right_one">
          <span>06</span>
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 129@2x.png" alt="" />
          <span>技术开发</span>
          <span>测量仪器制造测量仪器制造测量仪器制造</span>
        </div>
      </div>
    </div>
    <div class="contact_us">
      <div class="text">
        <span>03</span>
        <span>&emsp;———&emsp;</span>
        <span>Contact us</span><br />
        <div>联系我们</div>
      </div>
      <div class="box-bgc">
        <div class="bgc_img-one">
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 106@2x.png" alt="" />
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 107@2x.png" alt="" />
        </div>
        <div class="address">
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 108@2x.png" alt="" />
          <span class="address_des-one">地&nbsp;&nbsp;&nbsp;址：</span>
          <span class="address_des-two">山东省青岛市胶州市上合示范区闽江路60号</span>
        </div>
        <div class="phone address">
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 109@2x.png" alt="" />
          <span class="address_des-one">电&nbsp;&nbsp;&nbsp;话：</span>
          <span class="address_des-two">0532-123456</span>
        </div>
        <div class="email address">
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 110@2x.png" alt="" />
          <span class="address_des-one">邮&nbsp;&nbsp;&nbsp;箱：</span>
          <span class="address_des-two">123456789@163.com</span>
        </div>
      </div>
    </div>
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
.bg-box {
  background: #eff8ff;
  width: 1920px;
  height: 932px;
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
.products-services {
  width: 1920px;
  height: 978px;
  & > .text {
    font-size: 30px;
    margin-top: 87px;
    margin-left: 320px;
    & > span:nth-child(1) {
      width: 37px;
      height: 30px;
      font-size: 30px;
      font-family: DIN-Bold-Regular, DIN-Bold;
      font-weight: 400;
      color: #007dc0;
    }
    & > span:nth-child(2) {
      width: 80px;
      height: 2px;
      color: #cdcdcd;
      border-radius: 0px 0px 0px 0px;
    }
    & > span:nth-child(3) {
      width: 318px;
      height: 30px;
      font-size: 30px;
      font-family: DIN-Bold-Regular, DIN-Bold;
      font-weight: 400;
      color: #cdcdcd;
    }
    & > div {
      margin-top: 34px;
      width: 250px;
      height: 50px;
      font-size: 50px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: 700;
      color: #333333;
    }
  }
  & > .product-details {
    display: flex;
    flex-wrap: wrap;
    & > .left {
      margin-right: 163px;
      margin-left: 320px;
    }
    & > .center {
      margin-right: 163px;
    }
    & > .left_one {
      margin-top: 107px;
      margin-right: 163px;
      margin-left: 320px;
    }
    & > .center_one {
      margin-top: 107px;
      margin-right: 163px;
    }
    & > .right_one {
      margin-top: 107px;
    }
  }
}
.contact_us {
  background: #eff8ff;
  width: 1920px;
  height: 859px;
  margin-bottom: 240px;
  & > .text {
    position: absolute;
    font-size: 30px;
    margin-top: 87px;
    margin-left: 320px;
    & > span:nth-child(1) {
      width: 37px;
      height: 30px;
      font-size: 30px;
      font-family: DIN-Bold-Regular, DIN-Bold;
      font-weight: 400;
      color: #007dc0;
    }
    & > span:nth-child(2) {
      width: 80px;
      height: 2px;
      color: #cdcdcd;
      border-radius: 0px 0px 0px 0px;
    }
    & > span:nth-child(3) {
      width: 318px;
      height: 30px;
      font-size: 30px;
      font-family: DIN-Bold-Regular, DIN-Bold;
      font-weight: 400;
      color: #cdcdcd;
    }
    & > div {
      margin-top: 34px;
      width: 250px;
      height: 50px;
      font-size: 50px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: 700;
      color: #333333;
    }
  }
  & > .box-bgc {
    position: absolute;
    width: 1920px;
    height: 532px;
    background: #00a6ff;
    margin-top: 327px;
    & > .bgc_img-one {
      & > img {
        position: absolute;
        width: 652px;
        height: 266px;
        object-fit: contain;
        margin-left: 320px;
        margin-top: -41px;
      }
      & > img:nth-child(2) {
        position: absolute;
        width: 378px;
        height: 197px;
        object-fit: contain;
        margin-left: 594px;
        margin-top: 255px;
      }
    }
    & > .phone {
      margin-top: 51px;
    }
    & > .email {
      margin-top: 51px;
    }
  }
}
.address {
  margin-top: 146px;
  padding-left: 1012px;
  display: flex;
  align-items: center;
  & > img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  & > .address_des-one {
    width: 83px;
    height: 24px;
    font-size: 24px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: 700;
    color: #ffffff;
    margin-left: 20px;
    margin-right: 30px;
  }
  & > .address_des-two {
    width: 384px;
    height: 20px;
    font-size: 20px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
  }
}
.product-details_one {
  margin-right: 320px;
  & > span:nth-child(1) {
    position: absolute;
    display: block;
    margin-top: 74px;
    width: 68px;
    height: 60px;
    font-size: 60px;
    font-family: AvantGardeITCbyBT-Book-Regular, AvantGardeITCbyBT-Book;
    font-weight: 400;
    color: #d8dee2;
    margin-right: 10px;
  }
  & > img {
    width: 95px;
    height: 82px;
    object-fit: contain;
    margin-top: 74px;
    margin-left: 78px;
  }
  & > span:nth-child(3) {
    display: block;
    width: 180px;
    height: 30px;
    font-size: 30px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: 700;
    color: #333333;
    margin-top: 36px;
    margin-left: 78px;
    margin-bottom: 28px;
  }
  & > span:nth-child(4) {
    display: block;
    width: 240px;
    height: 55px;
    font-size: 24px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #666666;
    margin-left: 78px;
  }
}
</style>
