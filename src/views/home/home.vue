<template>
  <div class="box">
    <div class="header">
      <div class="slider-box">
        <Slider />
      </div>
      <div class="h-btn">
        <el-button type="primary"> 大众创业、万众创新 </el-button>
      </div>
      <div class="h-content">
        <span>提供一条龙的运营孵化体系</span>
        <span>协助企业高质量发展</span>
      </div>
    </div>
    <div class="basic">
      <div class="d-bg">
        <img src="http://114.116.21.170:9000/photo/home4.png" alt="" />
      </div>
      <div class="d-head">
        <span>01</span>
        <div class="l"></div>
        <span>Basic information</span>
        <div class="d-title">
          <span>园区基本情况</span>
        </div>
        <div class="d-title2">
          <span>青岛上合企业创新产业园</span>
        </div>
        <div class="d-text">
          <span
            >青岛上合企业创新产业园是胶州湾发展集团围绕上合示范区建设总体方案，重点打造的科技
            企业孵化园区，地理位置优越，交通便利，15分钟车程即可到达西海岸新区和青岛主城区。
            项目总投资约2亿元，建筑面积约5.2万平方米，目前已建成含办公区的工业厂房10栋（包含
            6座单层厂房和4座双层厂房），同时为逐步打造国家级孵化器和青岛市级标杆孵化器，园区
            正在建设6000平方米的办公楼，办公楼建成后，园区将彻底实现从单一的厂房租赁到创客空
            间、孵化器、加速器、专业园区完整产业生态链。园区2019-2020年先后年获评青岛市中小
            企业产业园和胶州市级孵化器，2022年将努力争创青岛市级孵化器。</span
          >
        </div>
      </div>
      <div class="d-changeimg">
        <div ref="imgleft" class="img-left" @click="arrowClick('prev')">
          <img src="http://114.116.21.170:9000/photo/home2.png" alt="" />
        </div>
        <div ref="imgright" class="img-right" @click="arrowClick('next')">
          <img src="http://114.116.21.170:9000/photo/home3.png" alt="" />
        </div>
      </div>
      <div class="d-img">
        <el-carousel
          ref="cardShow"
          height="600px"
          :autoplay="false"
          indicator-position="none"
          arrow="never"
          class="my-carousel"
        >
          <el-carousel-item v-for="(list, index) in Basicimg" :key="index">
            <img class="imgshow" :src="list.img" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <router-link to="/contact">
        <div class="d-btn">
          <span>加入我们</span>
          <div>
            <div class="d-btn-up"></div>
            <div class="d-btn-down"></div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="policy">
      <div class="d-head">
        <span>02</span>
        <div class="l"></div>
        <span>Policy news</span>
        <div class="d-title">
          <span>政策新闻</span>
        </div>
      </div>
      <div class="p-img">
        <ul class="p-imglist">
          <el-carousel
            ref="imglistid"
            height="440px"
            :autoplay="false"
            indicator-position="outside"
            arrow="never"
            trigger="click"
            @change="changecilist"
          >
            <el-carousel-item v-for="(list, index) in PolicyNews.slice(0, 4)" :key="index">
              <div class="p-imglistdiv">
                <img src="http://114.116.21.170:9000/photo/home5.png" />
                <div class="p-imglistdivdiv">
                  <div class="title">
                    <p>[{{ list.label }}]</p>
                  </div>
                  <div class="l">
                    <img src="http://114.116.21.170:9000/photo/home5-.png" alt="" />
                  </div>
                  <div class="name">
                    <p>{{ list.policyTitle }}</p>
                  </div>
                  <div class="text ellipsis2">
                    <p>{{ list.specificContent.replace(/<([^>]+)>/gi, '') }}</p>
                  </div>
                </div>
              </div>
              <div class="more" @click="goDetails(list.policyId)"><span>>>详情</span></div>
            </el-carousel-item>
          </el-carousel>
        </ul>
      </div>
      <div class="p-changeimg">
        <div class="p-cilist">
          <div
            v-for="(list, index) in PolicyNews.slice(0, 4)"
            :key="index"
            ref="cilist"
            class="p-cidiv"
            tabIndex="1"
            @click="cilist(index)"
          >
            <div class="p-title">
              <div class="p-cinumber">
                <span>{{ index + 1 }}</span>
              </div>
              <div class="title">
                <span>[{{ list.label }}]</span>
              </div>
              <div class="name">
                <span>{{ list.policyTitle }}</span>
              </div>
            </div>
            <div class="text ellipsis">
              <span>{{ list.specificContent.replace(/<([^>]+)>/gi, '') }}</span>
            </div>
            <br />
            <div class="timer">
              <span>{{ list.creatTime | formatDate }}</span>
            </div>
            <div class="p-ciactivity"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="excellent">
      <div class="d-head">
        <span>03</span>
        <div class="l"></div>
        <span>Excellent enterprise</span>
        <div class="d-title">
          <span>优秀企业</span>
        </div>
      </div>
      <div class="e-show">
        <div class="e-div">
          <img src="http://114.116.21.170:9000/photo/home8.png" alt="" />
        </div>
        <div class="e-div">
          <div class="text">
            <span> 青岛能蜂电气</span>
            <p>青岛能蜂电气有限公司，主营信息系统集成服务等。</p>
          </div>
        </div>
        <div class="e-div">
          <img src="http://114.116.21.170:9000/photo/home10.png" alt="" />
        </div>
        <div class="e-div">
          <div class="text">
            <span>同方工业青岛分公司</span>
            <p>同方工业青岛分公司，主营软件开发；货物进出口、技术进出口等。</p>
          </div>
        </div>
        <div class="e-div">
          <div class="text">
            <span>青岛联盈创科</span>
            <p>青岛联盈创科精密仪器有限公司，主营绘图、计算及测量仪器制造等。</p>
          </div>
        </div>
        <div class="e-div">
          <img src="http://114.116.21.170:9000/photo/home9.png" alt="" />
        </div>
        <div class="e-div">
          <div class="text">
            <span>青岛格林维尔</span>
            <p>
              青岛格林维尔环保技术有限公司位于青岛上海合作组织经济示范区核心区域,是一家由国家级高端人才和外籍院士团队着力打造的国内外技术领先的高科技绿色能源环保技术公司。
            </p>
          </div>
        </div>
        <div class="e-div">
          <img src="http://114.116.21.170:9000/photo/home11.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation/navigation.vue';
import Slider from '@/components/slider/slider.vue';
export default {
  name: 'home',
  components: { NavigationBar, Slider },
  filters: {
    formatDate(value) {
      return value.slice(5); // 返回“04-26”
    }
  },
  data() {
    return {
      PolicyNews: [],
      Basicimg: [
        {
          img: 'http://114.116.21.170:9000/photo/home1.png'
        },
        {
          img: 'http://114.116.21.170:9000/photo/home1.1.png'
        },
        {
          img: 'http://114.116.21.170:9000/photo/home1.2.png'
        },
        {
          img: 'http://114.116.21.170:9000/photo/home1.3.png'
        },
        {
          img: 'http://114.116.21.170:9000/photo/home1.4.png'
        },
        {
          img: 'http://114.116.21.170:9000/photo/home1.5.png'
        },
        {
          img: 'http://114.116.21.170:9000/photo/home1.6.png'
        }
      ],
      Basicimgpage: 0
    };
  },
  async created() {
    await this.$store.dispatch('home/getNewsPolicy');
    this.PolicyNews = this.$store.state.home.PolicyNews;
    this.$nextTick(() => {
      this.$refs.cilist[0].className = 'p-cidiv p-cidivadd';
    });
  },
  methods: {
    arrowClick(val) {
      if (val == 'next') {
        if (this.Basicimgpage != this.Basicimg.length - 1) {
          this.$refs.cardShow.next();
          this.Basicimgpage++;
        }
      } else {
        if (this.Basicimgpage != 0) {
          this.Basicimgpage--;
          this.$refs.cardShow.prev();
        }
      }
      if (this.Basicimgpage == 0) {
        this.$refs.imgleft.style.opacity = 0.4;
        this.$refs.imgleft.style.cursor = 'no-drop';
        this.$refs.imgright.style.opacity = 1;
      } else if (this.Basicimgpage == this.Basicimg.length - 1) {
        this.$refs.imgright.style.opacity = 0.4;
        this.$refs.imgright.style.cursor = 'no-drop';
        this.$refs.imgleft.style.opacity = 1;
      } else {
        this.$refs.imgleft.style.opacity = 1;
        this.$refs.imgright.style.opacity = 1;
        this.$refs.imgright.style.cursor = 'pointer';
        this.$refs.imgleft.style.cursor = 'pointer';
      }
    },
    cilist(index) {
      this.$refs.imglistid.setActiveItem(index);
      this.$refs.cilist.forEach(e => {
        e.className = 'p-cidiv';
      });
      // .className = "p-cidiv"
      this.$refs.cilist[index].className = 'p-cidiv p-cidivadd';
    },
    changecilist(index) {
      this.$refs.cilist.forEach(e => {
        e.className = 'p-cidiv';
      });
      this.$refs.cilist[index].className = 'p-cidiv p-cidivadd';
    },
    goDetails(id) {
      this.$router.push({
        path: `/policy-release/more-policies/details/${id}`,
        params: id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  .header {
    position: relative;
    margin-top: -65px;
    width: 100%;
  }

  .slider-box {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    // min-width: 1900px;
  }
  .el-button--primary {
    width: 280px !important;
    height: 46px !important;
    font-size: 26px;
  }
  .h-btn {
    position: absolute;
    width: 252px !important;
    height: 44px !important;
    top: 350px;
    left: 320px;
    z-index: 2;
  }

  .h-content {
    position: absolute;
    top: 445px;
    left: 320px;
    width: 984px;
    height: 70px;
    z-index: 2;

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

  .d-head {
    // width: 1920px;
    display: flex;
    position: relative;

    span {
      position: relative;
      top: 107px;
      left: 320px;
      width: auto;
      height: 30px;
      font-size: 30px;
      font-family: D-DIN-Regular, D-DIN;
      font-weight: 400;
      color: #007dc0;
      line-height: 30px;
    }

    .l {
      position: absolute;
      top: 119px;
      left: 367px;
      width: 80px;
      height: 2px;
      background: #cdcdcd;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
    }

    span:nth-child(3) {
      position: absolute;
      top: 107px;
      left: 459px;
      width: 260px;
      height: 30px;
      font-size: 30px;
      font-family: D-DIN-Regular, D-DIN;
      font-weight: 400;
      color: #cdcdcd;
      line-height: 30px;
    }

    .d-title {
      span {
        position: absolute;
        top: 171px;
        left: 320px;
        width: 300px;
        height: 50px;
        font-size: 50px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: 700;
        color: #333333;
        line-height: 50px;
      }
    }

    .d-title2 {
      span {
        position: absolute;
        top: 311px;
        left: 320px;
        width: 264px;
        height: 24px;
        font-size: 24px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: 700;
        color: #333333;
        line-height: 24px;
      }
    }

    .d-text {
      position: absolute;
      top: 263px;
      width: 648px;
      height: 184px;

      span {
        font-size: 16px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 16px;
      }
    }
  }

  .basic {
    position: relative;
    margin-top: 0;
    width: 100%;
    // min-width: 1900px;
    height: 900px;
    background: #ffffff;
    border-radius: 0px 0px 0px 0px;

    .d-bg {
      z-index: -1;

      img {
        position: absolute;
        top: 166px;
        width: 100%;
        // width: 1900px;
        height: 600px;
      }
    }

    .d-changeimg {
      position: absolute;
      left: 1010px;
      top: 240px;
      display: flex;

      .img-left {
        width: 90px;
        height: 80px;
        background: #00a6ff;
        border-radius: 40px 0px 0px 40px;
        opacity: 0.4;
        cursor: no-drop;
        img {
          position: absolute;
          left: 36px;
          top: 26px;
        }
      }

      .img-right {
        cursor: pointer;
        z-index: 10;
      }
    }

    .d-img {
      position: absolute;
      width: 799px;
      height: 600px;
      left: 1100px;
      top: 100px;
    }

    .d-btn {
      position: absolute;
      left: 320px;
      top: 635px;
      width: 141px;
      height: 44px;
      background: #0e7fdb;
      border-radius: 5px 5px 5px 5px;
      opacity: 1;
      display: flex;

      span {
        position: absolute;
        top: 13px;
        left: 20px;
        width: 80px;
        height: 20px;
        font-size: 20px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        line-height: 20px;
      }

      div {
        top: 20px;
        left: 115px;

        .d-btn-up {
          position: absolute;
          top: 14px;
          width: 2px;
          height: 12px;
          background: #ffffff;
          border-radius: 10px 10px 10px 10px;
          opacity: 1;
          transform: rotate(135deg);
        }

        .d-btn-down {
          position: absolute;
          top: 21px;
          width: 2px;
          height: 12px;
          background: #ffffff;
          border-radius: 10px 10px 10px 10px;
          opacity: 1;
          transform: rotate(225deg);
        }
      }
    }
  }

  .policy {
    width: 100%;
    // width: 1900px;
    height: 828px;
    background-image: url('http://114.116.21.170:9000/photo/home7.png');
    background-size: 100% 100%;

    .p-img {
      position: absolute;
      top: 2172px;
      left: 320px;
      z-index: 2;
      .more {
        position: absolute;
        top: 360px;
        right: 70px;
        width: 70px;
        height: 30px;
        color: #fff;
        font-size: 18px;
        z-index: 2;
        cursor: pointer;
      }

      .p-imglist {
        position: relative;
        // top: 100px;
        width: 910px;
        height: 440px;
        .p-imglistdiv {
          .p-imglistdivdiv {
            position: absolute;
            top: 0px;
            left: 50px;
            .title {
              position: absolute;
              top: 66px;
              p {
                width: 200px;
                height: 34px;
                font-size: 34px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
                line-height: 34px;
              }
            }
            .name {
              position: absolute;
              top: 141px;
              p {
                white-space: nowrap;
                width: auto;
                height: 34px;
                font-size: 34px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
                line-height: 34px;
              }
            }
            .l {
              position: relative;
              top: 230px;
            }
            .text {
              position: absolute;
              top: 277px;
              p {
                width: 619px;
                height: 82px;
                font-size: 20px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
                line-height: 26px;
              }
            }
          }
        }
        img {
          z-index: 0;
          width: 100%;
          height: auto;
        }
      }

      .p-imglast {
        position: absolute;
        top: 386px;
        left: 50px;
        display: flex;
        z-index: 3;
      }
    }

    .p-changeimg {
      position: absolute;
      left: 910px;
      width: 370px;
      z-index: 1;
      top: 2172px;
      // top: 306px;
      left: 320px;
      width: 1280px;
      height: 440px;
      background: #ffffff;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;

      .p-cilist {
        position: absolute;
        left: 910px;
        width: 370px;

        .p-cidiv {
          height: 110px;
          padding: 0;
          margin: 0;
          cursor: pointer;
          .p-title {
            display: flex;

            .p-cinumber {
              margin-top: 10px;
              margin-left: 10px;
              margin-right: 5px;
              width: 20px;
              height: 20px;
              background: #d5e0ee;
              border-radius: 2px 2px 2px 2px;
              opacity: 1;

              span {
                margin-left: 4px;
                margin-top: 3px;
                width: 11px;
                height: 18px;
                font-size: 18px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
                line-height: 18px;
              }
            }

            .title {
              margin-top: 10px;
              margin-right: 10px;
              // margin-top: -18px;
              // width: 100px;
              // width: 90px;
              height: 18px;
              font-size: 18px;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              line-height: 18px;

              span {
                white-space: nowrap;
              }
            }

            .name {
              // margin-left: 93px;
              // margin-top: -18px;
              margin-top: 10px;
              width: 250px;
              height: 18px;
              font-size: 18px;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              line-height: 18px;
            }
          }

          .text {
            margin-left: 35px;
            margin-top: 10px;
            width: 306px;
            height: 36px;
            font-size: 14px;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            line-height: 18px;
          }

          .timer {
            margin-left: 310px;
            margin-top: -6px;
            width: 40px;
            height: 18px;
            font-size: 14px;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            line-height: 18px;
          }

          .p-ciactivity {
            position: absolute;
            width: 10px;
            height: 110px;
            margin-top: -110px;
            margin-left: 360px;
          }
        }

        .p-cidivadd {
          // border: 2px solid red;
          background-color: #ebf4ff;
          outline: none;
          .p-ciactivity {
            background-image: url('http://114.116.21.170:9000/photo/home6.png');
          }
          .p-title {
            .p-cinumber {
              background: #00a6ff;
              span {
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }

  .excellent {
    width: 100%;
    // width: 1900px;
    height: 1050px;

    .d-head {
      span {
        width: auto;
      }
    }

    .e-show {
      position: relative;
      top: 258px;
      left: 308px;
      width: 1304px;
      height: 664px;
      background-size: 100%;
      background-image: url('http://114.116.21.170:9000/photo/home12.png');
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      align-content: flex-start;
      .e-div {
        padding: -10px;
        width: 320px;
        height: 320px;
        position: relative;
        left: 12px;
        top: 9px;
        img {
          width: 320px;
          height: 320px;
        }
        .text {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          span {
            width: auto;
            height: 24px;
            font-size: 24px;
            font-family: Microsoft YaHei-Bold, Microsoft YaHei;
            font-weight: 700;
            color: #333333;
            line-height: 24px;
          }

          p {
            margin-top: 22px;
            text-align: start;
            width: 297px;
            height: auto;
            font-size: 18px;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            line-height: 24px;
          }
        }
      }
    }
  }
}
::v-deep .el-carousel__indicators {
  position: absolute;
  bottom: 23px;
  left: 50px;
}
::v-deep .el-carousel__button {
  width: 18px;
  height: 18px;
  background: white;
  opacity: 0.5;
  border: 1px solid #707070;
  margin-right: 10px;
  border-radius: 100%;
  margin-left: -7px;
}
.ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
