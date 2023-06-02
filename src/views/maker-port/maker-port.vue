<template>
  <div class="box">
    <div class="slider-box">
      <img src="../../assets/make-port/bg.png" alt="组1" />
    </div>
    <div class="m-btn">
      <el-button type="primary"> 大众创业、万众创新 </el-button>
    </div>
    <div class="m-content">
      <span class="title">厚德创客港</span><br />
      <span class="content">
        厚德创客港设立公共服务区配套综合管理服务中心，包含创客管理服务体系、投融资运作体系、
        线上管理服务体系、专项招商体系、创客文化及导师队伍建设体系等。
      </span>
    </div>
    <div class="m-btn-us">
      <el-button class="btn-us" type="primary" @click="toContact">联系我们</el-button>
    </div>
    <div class="introduce">
      <div class="text">
        <span>01</span>
        <span>&emsp;——&emsp;</span>
        <span>Introduction to the Park</span><br />
        <div>厚德创客港</div>
        <br />
        <div>产业园区介绍</div>
        <br />
        <div>
          厚德创客港是胶州市积极响应“大众创业、万众创新”的号召，全面落实青岛市实施创新驱动发展战略会议精神，
          立足青岛市“创新之城、创业之都、创客之岛”的高标定位，统筹全市“三创”资源打造的低成本、全要素、
          开放式、 便利化的新型科技创新公共服务平台。厚德创客港按照“一核多点”即“1+N”的空间布局思路，
          依托国家级胶州经济技术开发区已建成的创业大厦、西安交大青岛研究院、中国机械研究总院青岛分院等现有资源，
          着力打造创客空间、孵化器、创客学院、互联网+、大学生创业基地、创客教育、创客集市、农业创客、众筹资金九大板块。
        </div>
        <div class="data">
          <table>
            <tr>
              <td>{{ 30 }}+<span>家</span></td>
              <td>{{ 1000 }}<span>万</span></td>
              <td>{{ 2017 }}<span>年</span></td>
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
            :class="{ op: flag_le1 }"
            :disabled="bt_le1"
            type="primary"
            :autofocus="false"
            class="icon-left"
            @click="prev()"
          >
            <img src="http://47.95.211.240:9000/photo/maker-port/left.png" alt="left" />
          </el-button>
          <el-button
            :class="{ op: flag_ri1 }"
            :disabled="bt_ri1"
            type="primary"
            :autofocus="false"
            class="icon-right"
            @click="next()"
          >
            <img src="http://47.95.211.240:9000/photo/maker-port/right.png" alt="right" />
          </el-button>
        </div>
        <el-carousel
          ref="img"
          :interval="4000"
          height="870px"
          arrow="never"
          :autoplay="false"
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
        <span>Service content of the park</span><br />
        <div>园区服务内容</div>
        <div>
          <ul>
            <li :class="{ liHover: flag3 === 0 }" @click="setActiveItem(0)">创业培训</li>
            <li :class="{ liHover: flag3 === 1 }" @click="setActiveItem(1)">科技指导</li>
            <li :class="{ liHover: flag3 === 2 }" @click="setActiveItem(2)">软件开发</li>
            <li :class="{ liHover: flag3 === 3 }" @click="setActiveItem(3)">融资众筹</li>
            <li :class="{ liHover: flag3 === 4 }" @click="setActiveItem(4)">项目孵化</li>
          </ul>
        </div>
      </div>
      <div class="service-box">
        <div>
          为协助创客团队有效地进行创业活动，青岛厚德创客港依托高校科研院所，调动社会各界资源，协同京东、
          有住等新兴互联网+企业，设立“京东厚德创客营”和“厚德科技创新服务平台”，为入驻创客提供创业培训、
          科技指导、软件开发、融资众筹、项目孵化等帮助，为创客团队打造过硬的平台支撑。
        </div>
        <div class="m-btn-us">
          <el-button class="btn-us" @click="toContact">联系我们</el-button>
        </div>
      </div>
      <div class="service-icon">
        <el-button
          :class="{ op: flag_le2 }"
          :disabled="bt_le2"
          type="primary"
          class="icon-left"
          @click="prev2()"
        >
          <img src="http://47.95.211.240:9000/photo/maker-port/left.png" alt="left" />
        </el-button>
        <el-button
          :class="{ op: flag_ri2 }"
          :disabled="bt_ri2"
          type="primary"
          class="icon-right"
          @click="next2()"
        >
          <img src="http://47.95.211.240:9000/photo/maker-port/right.png" alt="right" />
        </el-button>
      </div>
      <el-carousel
        ref="img2"
        :interval="4000"
        height="1000px"
        arrow="never"
        :autoplay="false"
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
      flag_le1: true,
      flag_ri1: false,
      bt_le1: true,
      bt_ri1: false,
      bt_le2: true,
      bt_ri2: false,
      flag_le2: true,
      flag_ri2: false,
      flag3: 0,
      src: [
        {
          id: 1,
          src: 'http://47.95.211.240:9000/photo/maker-port/%E7%9F%A9%E5%BD%A2223.png'
        },
        {
          id: 2,
          src: 'http://47.95.211.240:9000/photo/maker-port/%E7%9F%A9%E5%BD%A2242.png'
        },
        {
          id: 3,
          src: 'http://47.95.211.240:9000/photo/maker-port/%E7%9F%A9%E5%BD%A2243.png'
        }
      ],
      src2: [
        {
          id: 1,
          src: 'http://47.95.211.240:9000/photo/maker-port/%E7%BB%842.png'
        },
        {
          id: 2,
          src: 'http://47.95.211.240:9000/photo/maker-port/%E7%BB%843.png'
        },
        {
          id: 3,
          src: 'http://47.95.211.240:9000/photo/maker-port/%E7%BB%844.png'
        },
        {
          id: 4,
          src: 'http://47.95.211.240:9000/photo/maker-port/%E7%BB%845.png'
        },
        {
          id: 5,
          src: 'http://47.95.211.240:9000/photo/maker-port/%E7%BB%846.png'
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
      if (e === 0) {
        this.flag_le1 = true;
        this.bt_le1 = true;
        this.bt_ri1 = false;
      } else if (e === 2) {
        this.flag_ri1 = true;
        this.bt_le1 = false;
        this.bt_ri1 = true;
      } else {
        this.flag_le1 = false;
        this.flag_ri1 = false;
        this.bt_le1 = false;
        this.bt_ri1 = false;
      }
    },
    change2(e) {
      // console.log(e)
      if (e === 0) {
        this.flag_le2 = true;
        this.bt_le2 = true;
        this.bt_ri2 = false;
      } else if (e === 4) {
        this.flag_ri2 = true;
        this.bt_le2 = false;
        this.bt_ri2 = true;
      } else {
        this.flag_le2 = false;
        this.flag_ri2 = false;
        this.bt_le2 = false;
        this.bt_ri2 = false;
      }
      this.flag3 = e;
    },
    setActiveItem(e) {
      this.$refs.img2.setActiveItem(e);
    },
    toContact() {
      this.$router.push('/contact');
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

.el-button--primary {
  width: 279px;
  height: 46px;
  font-size: 26px;
}
.m-btn {
  position: absolute;
  top: 242px;
  left: 320px;
  width: 279px;
  height: 46px;
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
    font-size: 22px;
  }
}

.m-content {
  position: absolute;
  top: 336px;
  left: 320px;

  .title {
    color: #fff;
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
    color: #fff;
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

      .icon-left {
        width: 50%;
        height: 80px;
        background: #00a6ff;
        border-radius: 50px 0 0 50px;
        margin-right: -10px;
        border-style: none;
      }

      .icon-right {
        width: 50%;
        height: 80px;
        background: #00a6ff;
        border-radius: 0 50px 50px 0;
        margin-left: 10px;
        border-style: none;
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
      margin-top: 90px;
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
          line-height: 70px;
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

    .icon-left {
      width: 50%;
      height: 80px;
      background: #00a6ff;
      border-radius: 50px 0 0 50px;
      margin-right: -10px;
      border-style: none;
    }

    .icon-right {
      width: 50%;
      height: 80px;
      background: #00a6ff;
      border-radius: 0 50px 50px 0;
      margin-left: 10px;
      border-style: none;
    }
  }
}

.op {
  opacity: 0.4;
}

.liHover {
  cursor: pointer;
  text-decoration: underline;
  text-decoration-thickness: 2px;
}
</style>
