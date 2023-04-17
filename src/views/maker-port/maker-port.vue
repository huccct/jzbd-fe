<template>
  <div class="box">
    <div class="slider-box">
      <img src="http://114.116.21.170:9000/photo/maker-port/%E7%BB%841.png" alt="组1" />
    </div>
    <div class="m-btn">
      <el-button class="m-btn-ex" type="primary" plain disabled>
        EXPLORE A NEW WORLD TOGETHER
      </el-button>
    </div>
    <div class="m-content">
      <span class="title">厚德创客港</span><br />
      <span class="content">
        厚德创客港产业园区解决方案以”科技赋能园区，助力产业转型”为愿景目标，打造“服、管、控、营”一体化的智慧产业园区。
      </span>
    </div>
    <div class="m-btn-us">
      <el-button class="btn-us" type="primary">联系我们</el-button>
    </div>
    <div class="introduce">
      <div class="text">
        <span>01</span>
        <span>&emsp;———&emsp;</span>
        <span>IntroductiontothePark</span><br />
        <div>厚德创客港</div>
        <br />
        <div>产业园区介绍</div>
        <br />
        <div>
          华为智慧产业园区解决方案以”科技赋能园区，助力产业转型”为愿景目标，基于“平台+生态”的架构，借助5G、物联网、云计算、大数据和人工智能等新ICT技术，
          实现人、物、事、产业、服务、生活等多维度的联接和融合。通过华为城市赋能云展车参观，华为（苏州）DevCloud创新中心技术工程师就华为软件开发云、
          城市赋能云、工业互联网等解决方案讲解，使各部门和观展企业进一步了解华为云在大数据、云计算、工业互联网等领域的领先优势，现场互动取得了很好的效果。
          此次巡展是华为（苏州）DevCloud创新中心举办的一次体验互动性活动，众多园区企业前来参观交流。同时，此次活动也让更多客户认识华为、走近华为。
        </div>
        <div class="data">
          <table>
            <tr>
              <td>{{ 60 }}+<span>家</span></td>
              <td>{{ 1000 }}<span>万</span></td>
              <td>{{ 2021 }}<span>年</span></td>
            </tr>
            <tr>
              <td>入驻企业</td>
              <td>产业园补助资金</td>
              <td>成立年限</td>
            </tr>
          </table>
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
          :interval="4000"
          height="800px"
          arrow="never"
          indicator-position="none"
        >
          <el-carousel-item v-for="item in src" :key="item.id">
            <img :src="item.src" :alt="item.id" style="height: 800px" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="service">
      <div class="service-text">
        <span>02</span>
        <span>&emsp;———&emsp;</span>
        <span>IntroductiontothePark</span><br />
        <div>园区服务内容</div>
        <div>
          <ul>
            <li>国有土地</li>
            <li>高标厂房</li>
            <li>定制厂房</li>
            <li>集体用地</li>
          </ul>
        </div>
      </div>
      <div class="service-box">
        <div>
          厚德创客港解决方案以”科技赋能园区，助力产业转型”为愿景目标，基于“平台+生态”的架构，
          借助5G、物联网、云计算、大数据和人工智能等新ICT技术，实现人、物、事、产业、服务
          、生活等多维度的联接和融合。
        </div>
        <div class="m-btn-us">
          <el-button class="btn-us">联系我们</el-button>
        </div>
      </div>
      <div class="service-icon">
        <el-button type="primary" class="icon-left" @click="prev2()">
          <img src="http://114.116.21.170:9000/photo/maker-port/left.png" alt="left" />
        </el-button>
        <el-button type="primary" class="icon-right" @click="next2()">
          <img src="http://114.116.21.170:9000/photo/maker-port/right.png" alt="right" />
        </el-button>
      </div>
      <el-carousel
        ref="img2"
        :interval="4000"
        height="1000px"
        arrow="never"
        indicator-position="none"
      >
        <el-carousel-item v-for="item in src2" :key="item.id">
          <img class="ser-img" :src="item.src" :alt="item.id" style="height: 900px" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: [
        {
          id: 1,
          src: 'http://114.116.21.170:9000/photo/maker-port/%E7%9F%A9%E5%BD%A2242.png'
        },
        {
          id: 2,
          src: 'http://114.116.21.170:9000/photo/maker-port/%E7%9F%A9%E5%BD%A2223.png'
        },
        {
          id: 3,
          src: 'http://114.116.21.170:9000/photo/maker-port/%E7%9F%A9%E5%BD%A2242.png'
        },
        {
          id: 4,
          src: 'http://114.116.21.170:9000/photo/maker-port/%E7%9F%A9%E5%BD%A2223.png'
        }
      ],
      src2: [
        {
          id: 1,
          src: 'http://114.116.21.170:9000/photo/maker-port/%E7%BB%842.png'
        },
        {
          id: 2,
          src: 'http://114.116.21.170:9000/photo/maker-port/%E7%BB%843.png'
        },
        {
          id: 3,
          src: 'http://114.116.21.170:9000/photo/maker-port/%E7%BB%844.png'
        }
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

.m-btn {
  position: relative;
  top: -780px;
  left: 250px;

  .m-btn-ex {
    font-size: 14px;
    font-weight: bolder;
  }
}

.m-btn-us {
  position: absolute;
  top: 600px;
  left: 250px;

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
  left: 250px;

  .title {
    color: #333333;
    letter-spacing: 12px;
    font-size: 65px;
    font-weight: bolder;
  }

  .content {
    position: absolute;
    padding-top: 20px;
    width: 540px;
    color: rgba(0, 0, 0, 0.2);
    font-size: 18px;
    font-family: 'Microsoft YaHei UI', serif;
    font-weight: bold;
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
  margin-top: 40px;
  left: 330px;

  .text {
    color: black;
    width: 42%;
    height: 100%;
    margin-top: 150px;
    margin-left: -30px;

    div {
      margin-top: 20px;
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
      font-weight: bolder;
    }

    div:nth-child(7) {
      margin-top: -10px;
      color: #000000;
      font-size: 30px;
      font-weight: bolder;
    }

    div:nth-child(9) {
      color: #bdb4b4;
      font-size: 16px;
      font-weight: bold;
      line-height: 30px;
    }
  }

  .data {
    position: absolute;
    padding-top: 70px;
    left: -110px;

    table {
      font-weight: bolder;
      text-align: center;
      border-collapse: collapse;

      td {
        width: 250px;
        height: 30px;
      }

      tr:nth-child(1) {
        font-size: 35px;

        span {
          font-size: 16px;
        }

        td:nth-child(2) {
          border-right: 2px solid #e7e9eb;
          border-left: 2px solid #e7e9eb;
        }
      }

      tr:nth-child(2) {
        td:nth-child(2) {
          border-right: 2px solid #e7e9eb;
          border-left: 2px solid #e7e9eb;
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
  margin-bottom: 340px;
  right: -50px;
  left: 0;

  .service-text {
    position: absolute;
    z-index: 10;
    left: 300px;
    color: white;
    top: 200px;

    div {
      margin-top: 20px;
    }

    span:nth-child(1) {
      font-weight: bolder;
      color: #00a6ff;
      font-size: 25px;
      margin-bottom: 50px;
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
      font-size: 50px;
      font-weight: bolder;
    }

    div:nth-child(6) {
      font-weight: bold;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.8);

      ul {
        list-style-type: none;

        li {
          line-height: 80px;
          width: 80px;
        }

        li:hover {
          cursor: pointer;
          text-decoration: underline;
          text-decoration-thickness: 2px;
        }
      }
    }
  }

  .service-box {
    position: absolute;
    z-index: 10;
    height: 40%;
    width: 50%;
    background: #00a6ff;
    right: 0;
    bottom: -180px;
    border-radius: 50px 0 0 0;

    div {
      margin-top: 60px;
      margin-left: 80px;
      width: 710px;
      height: 100px;
      font-size: 18px;
      font-weight: 400;
      color: #ffffff;
      line-height: 35px;
    }

    .m-btn-us {
      position: absolute;
      top: 150px;
      left: 30px;

      .btn-us {
        color: #00a6ff;
        width: 200px;
        height: 60px;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }

  .ser-img {
    width: 100%;
  }

  .service-icon {
    position: relative;
    z-index: 10;
    display: flex;
    width: 180px;
    height: 80px;
    text-align: center;
    top: 98%;
    left: 15%;

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
</style>
