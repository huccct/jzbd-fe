<template>
  <div class="box">
    <div class="slider-box">
      <img src="http://114.116.21.170:9000/photo/maker-port/%E7%BB%841.png" alt="组1" />
    </div>
    <div class="m-btn">
      <span class="m-btn-ex"> EXPLORE A NEW WORLD TOGETHER </span>
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
        <span>&emsp;——&emsp;</span>
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
          <el-button
            :class="{ op: flag1 }"
            :disabled="flag1"
            type="primary"
            class="icon-left"
            @click="prev()"
          >
            <img src="http://114.116.21.170:9000/photo/maker-port/left.png" alt="left" />
          </el-button>
          <el-button
            :class="{ op: !flag1 }"
            :disabled="!flag1"
            type="primary"
            class="icon-right"
            @click="next()"
          >
            <img src="http://114.116.21.170:9000/photo/maker-port/right.png" alt="right" />
          </el-button>
        </div>
        <el-carousel
          ref="img"
          :interval="4000"
          height="870px"
          arrow="never"
          indicator-position="none"
          @change="change1"
        >
          <el-carousel-item v-for="item in src" :key="item.id">
            <img :src="item.src" :alt="item.id" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="service">
      <div class="service-text">
        <span>02</span>
        <span>&emsp;——&emsp;</span>
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
        <el-button
          :class="{ op: flag2 }"
          :disabled="flag2"
          type="primary"
          class="icon-left"
          @click="prev2()"
        >
          <img src="http://114.116.21.170:9000/photo/maker-port/left.png" alt="left" />
        </el-button>
        <el-button
          :class="{ op: !flag2 }"
          :disabled="!flag2"
          type="primary"
          class="icon-right"
          @click="next2()"
        >
          <img src="http://114.116.21.170:9000/photo/maker-port/right.png" alt="right" />
        </el-button>
      </div>
      <el-carousel
        ref="img2"
        :interval="4000"
        height="1000px"
        arrow="never"
        indicator-position="none"
        @change="change2"
      >
        <el-carousel-item v-for="item in src2" :key="item.id">
          <img class="ser-img" :src="item.src" :alt="item.id" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag1: true,
      flag2: true,
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
      ]
    };
  },
  method: {},
  methods: {
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
    },
    change1(e) {
      // console.log(e)
      this.flag1 = e % 2 === 0;
    },
    change2(e) {
      // console.log(e)
      if (e === 0) {
        this.flag2 = true;
      } else if (e === 2) {
        this.flag2 = false;
      }
    }
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
  position: absolute;
  top: 253px;
  left: 320px;
  width: 293px;
  height: 34px;
  background: #ecf9ff;
  border-radius: 0 0 0 0;
  opacity: 1;
  text-align: center;

  .m-btn-ex {
    font-size: 16px;
    font-family: DIN-Medium-Regular, DIN-Medium;
    font-weight: 400;
    color: #00a6ff;
    line-height: 34px;
  }
}

.m-btn-us {
  position: absolute;
  top: 576px;
  left: 320px;

  .btn-us {
    width: 210px;
    height: 58px;
    background: #00a6ff;
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
    font-size: 16px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: 700;
    color: #ffffff;
    line-height: 16px;
    letter-spacing: 2px;
  }
}

.m-content {
  position: absolute;
  top: 336px;
  left: 320px;

  .title {
    color: #333333;
    width: 378px;
    height: 66px;
    font-size: 66px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: 700;
    line-height: 66px;
    letter-spacing: 11px;
  }

  .content {
    width: 543px;
    height: 50px;
    font-size: 18px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #999999;
    position: absolute;
    padding-top: 30px;
  }
}

.slider-box {
  position: relative;
  z-index: -1;
  left: 0;
  width: 1920px;
  height: 1000px;
}

.introduce {
  width: 80%;
  height: 870px;
  position: absolute;
  margin-top: 110px;
  left: 320px;

  .text {
    color: black;
    width: 42%;
    height: 100%;
    margin-top: 150px;
    margin-left: -30px;

    div {
      margin-top: 32px;
    }

    span:nth-child(1) {
      width: 33px;
      height: 30px;
      font-size: 30px;
      font-family: DIN-Bold, DIN;
      font-weight: 700;
      color: #00a6ff;
      line-height: 30px;
    }

    span:nth-child(2) {
      color: #cdcdcd;
      font-size: 30px;
      font-weight: lighter;
    }

    span:nth-child(3) {
      width: 326px;
      height: 30px;
      font-size: 30px;
      font-family: DIN-Bold, DIN;
      font-weight: 700;
      color: #cdcdcd;
      line-height: 30px;
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
      width: 641px;
      height: 212px;
      color: #666666;
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;
    }

    .data {
      position: absolute;
      padding-top: 70px;
      left: -110px;

      table {
        font-weight: bolder;
        text-align: center;
        border-collapse: collapse;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;

        td {
          width: 250px;
          height: 30px;
        }

        tr:nth-child(1) {
          font-size: 40px;

          span {
            font-size: 14px;
          }

          td:nth-child(2) {
            border-right: 2px solid #e7e9eb;
            border-left: 2px solid #e7e9eb;
          }
        }

        tr:nth-child(2) {
          font-size: 16px;
          color: #333333;

          td:nth-child(2) {
            border-right: 2px solid #e7e9eb;
            border-left: 2px solid #e7e9eb;
          }
        }
      }
    }
  }

  .img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: -60px;

    .icon {
      position: relative;
      z-index: 10;
      display: flex;
      width: 180px;
      height: 80px;
      top: 220px;
      left: -90px;
      text-align: center;
      line-height: 90px;
      border-style: none;

      .icon-left {
        width: 50%;
        height: 80px;
        background: #00a6ff;
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
  margin-top: 65%;
  margin-bottom: 340px;
  right: -50px;
  left: 0;

  .service-text {
    position: absolute;
    z-index: 10;
    left: 300px;
    color: white;
    top: 89px;

    div {
      margin-top: 32px;
    }

    span:nth-child(1) {
      width: 33px;
      height: 30px;
      font-size: 30px;
      font-family: DIN-Bold, DIN;
      font-weight: 700;
      color: #00a6ff;
      line-height: 30px;
    }

    span:nth-child(2) {
      color: #cdcdcd;
      font-size: 30px;
      font-weight: lighter;
    }

    span:nth-child(3) {
      width: 366px;
      height: 30px;
      font-size: 30px;
      font-family: DIN-Bold, DIN;
      font-weight: 700;
      color: #cdcdcd;
      line-height: 30px;
    }

    div:nth-child(5) {
      width: 300px;
      height: 50px;
      font-size: 50px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: 700;
      color: #ffffff;
      line-height: 50px;
    }

    div:nth-child(6) {
      margin-top: 147px;
      width: 80px;
      height: 20px;
      font-size: 20px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;

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
    height: 390px;
    width: 920px;
    background: #00a6ff;
    right: 0;
    bottom: -200px;
    border-radius: 50px 0 0 0;

    div:nth-child(1) {
      margin-top: 70px;
      margin-left: 90px;
      width: 710px;
      height: 100px;
      font-size: 18px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 32px;
    }

    .m-btn-us {
      position: absolute;
      top: 287px;
      left: 90px;

      .btn-us {
        width: 210px;
        height: 58px;
        background: #ffffff;
        border-radius: 4px 4px 4px 4px;
        opacity: 1;
        font-size: 16px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: 700;
        color: #00a6ff;
        line-height: 16px;
        letter-spacing: 2px;
      }
    }
  }

  .ser-img {
    width: 100%;
  }

  .service-icon {
    position: absolute;
    z-index: 10;
    display: flex;
    width: 180px;
    height: 80px;
    text-align: center;
    top: 98%;
    left: 15%;
    border-style: none;

    .icon-left {
      width: 50%;
      height: 80px;
      background: #00a6ff;
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

.op {
  opacity: 0.4;
}
</style>
