<!--
 * @Author: hayyot
 * @Date: 2023-04-12 15:00:08
 * @Description: 铁沸物
 * @FilePath: \jzbd-fe\src\views\enterprise-storm\enterprise-storm.vue
-->
<template>
  <div class="enterprise-box">
    <div class="enterprise-elheader">
      <div class="enterprise-sliderbox">
        <img src="http://114.116.21.170:9000/photo/enterprise-storm/%E7%BB%84%2084.png" alt="" />
      </div>
      <div class="head-content">
        <span>CORPORATE STYLE</span>
        <span>企业风采</span>
        <span
          >胶州市正加快建设上合组织地方经贸合作示范区，全力打造“一带一路”国际合作新平台，
          把胶州历史性地推到国家对外开放的战略前沿。</span
        >
        <button class="head-content_contactus">联系我们</button>
      </div>
    </div>
    <div>
      <!-- Service content -->
      <div class="enterprise-content_one">
        <div class="enterprise-content_one-topic">
          <div>
            <p>01&nbsp;<span></span>&nbsp;<span>Corporate style</span></p>
          </div>
          <p>企业风采</p>
          <div class="enterprise-content_two">
            <div class="enterprise-content_two-img">
              <img
                src="http://114.116.21.170:9000/photo/enterprise-storm/photo-1524414139215-35c99f80112d@3x.png"
                alt=""
              />
            </div>
            <div class="enterprise-message">
              <span class="name">青岛联盈创科精密仪器有限公司</span>
              <span class="number">01</span>
              <img src="https://s1.ax1x.com/2023/04/13/ppxwB8g.png" alt="" />
              <span
                >青岛联盈创科精密仪器有限公司，主营绘图、计算及
                测量仪器制造，技术服务、技术开发、技术咨询等！</span
              >
            </div>
            <div class="phone">
              <img src="http://114.116.21.170:9000/photo/enterprise-storm/电话@2x.png" alt="" />
            </div>
            <div class="phonenum">
              <span>联系方式</span>
              <span>0532-123123</span>
            </div>
            <div class="border"></div>
            <div class="classification">
              <img
                src="http://114.116.21.170:9000/photo/enterprise-storm/%E7%BB%84%2069@2x.png"
                alt=""
              />
            </div>
            <div class="project">
              <span>主营产品</span>
              <span
                >计算及测量仪器制造；计算及测量仪器销售； 机械设备销售；<br />
                机械设备研发；<br />
                ...</span
              >
            </div>
            <div class="border1"></div>
            <div class="trophy">
              <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 70@2x.png" alt="" />
            </div>
            <div class="honor">
              <span>荣誉奖项</span>
              <span
                >年度优秀企业；<br />
                先进技术；<br />
                胶州市龙头企业；<br />
                先进团队奖；<br />
                ...</span
              >
            </div>
            <button class="white-outline-button">查看更多>></button>
          </div>
        </div>
      </div>
      <div style="margin-bottom: 200px"></div>
    </div>
  </div>
</template>

<script>
import DevicePixelRatio from '@/utils/devicePixelRatio';
import NavigationBar from '@/components/navigation/navigation.vue';
import Slider from '@/components/slider/slider.vue';
export default {
  name: 'JzbdFeParkService',

  components: {
    NavigationBar,
    Slider
  },

  data() {
    return {};
  },

  mounted() {},

  created() {
    new DevicePixelRatio().init();
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.enterprise-box {
  width: 100%;
}
.enterprise-elheader {
  display: block;
  height: 1000px;
}
.enterprise-sliderbox {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  // min-width: 1900px;
  width: 100%;
  height: 1000px;
  img {
    width: 100%;
    height: 1000px;
  }
}

.head-content {
  position: absolute;
  top: 271px;
  left: 320px;
  :nth-child(1) {
    color: #333333;
    font-size: 24px;
    font-weight: 700;
    font-family: Microsoft YaHei-Bold;
    // letter-spacing: 12px;
  }
  :nth-child(2) {
    padding-top: 27px;
    display: block;
    color: #333333;
    font-size: 66px;
    font-weight: 700;
    font-family: Microsoft YaHei-Bold;
    // letter-spacing: 12px;
  }
  :nth-child(3) {
    padding-top: 36px;
    display: block;
    width: 676px;
    color: #666666;
    font-size: 24px;
    font-weight: 400;
    font-family: Microsoft YaHei-Regular;
    // letter-spacing: 12px;
  }
  .head-content_contactus {
    margin-top: 87px;
    color: white;
    height: 58px;
    width: 210px;
    background-color: #00a6ff;
    border: none;
    font-size: 24px;
    font-weight: 400;
    font-family: Microsoft YaHei-Regular;
  }
}
.enterprise-content_one {
  margin-top: 107px;
  display: inline-block;
  .enterprise-content_one-topic {
    margin-left: 320px;
    div:nth-child(1) {
      p:nth-child(1) {
        color: #007dc0;
        font-size: 30px;
        font-family: DIN-Bold-Regular;
        text-align: center;
        line-height: 30px;
        display: flex;
        span:nth-child(1) {
          margin-left: 14px;
          margin-top: 15px;
          width: 80px;
          border-top: 2px solid #cdcdcd;
          margin-right: 14px;
        }
        span:nth-child(2) {
          display: inline;
          font-size: 30px;
          color: #cdcdcd;
          font-weight: Regular;
          font-family: DIN-Bold-Regular;
        }
      }
    }
    p {
      margin-top: 34px;
      font-weight: 700;
      font-family: Microsoft YaHei-Bold;
      color: #333333;
      font-size: 50px;
    }
  }
}
.enterprise-content_two {
  background-color: #00a6ff;
  width: 1280px;
  height: 750px;
  margin-top: 173px;
  z-index: -1;
  :nth-child(2) {
    :nth-child(1) {
      position: absolute;
      width: 420px;
      height: 30px;
      font-size: 30px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: 700;
      color: #f2f2f2;
      line-height: 30px;
      margin-left: 656px;
      margin-top: 93px;
    }
    :nth-child(2) {
      position: absolute;
      width: 124px;
      height: 100px;
      font-size: 100px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: 700;
      color: #ffffff;
      line-height: 100px;
      margin-left: 1157px;
      margin-top: 62px;
      opacity: 60%;
    }
    :nth-child(3) {
      position: absolute;
      margin-top: 195px;
      margin-left: 656px;
      width: 40px;
      height: 10px;
    }
    :nth-child(4) {
      position: absolute;
      width: 557px;
      height: 64px;
      font-size: 24px;
      color: #f2f2f2;
      line-height: 32px;
      margin-top: 255px;
      margin-left: 656px;
    }
  }
  :nth-child(3) {
    position: absolute;
    width: 41px;
    height: 40px;
    margin-top: 382px;
    margin-left: 684px;
  }
  :nth-child(4) {
    :nth-child(1) {
      position: absolute;
      width: 96px;
      height: 24px;
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      line-height: 24px;
      margin-top: 437px;
      margin-left: 656px;
    }
    :nth-child(2) {
      position: absolute;
      width: 101px;
      height: 16px;
      font-size: 16px;
      color: #f2f2f2;
      line-height: 16px;
      margin-top: 494px;
      margin-left: 652px;
    }
  }
  .border {
    position: absolute;
    width: 0px;
    height: 150px;
    border: 1px solid #ffffff;
    margin-top: 408px;
    margin-left: 807px;
  }
  .border1 {
    position: absolute;
    width: 0px;
    height: 150px;
    border: 1px solid #ffffff;
    margin-top: 408px;
    margin-left: 1060px;
  }
  .classification {
    position: absolute;
    width: 41px;
    height: 41px;
    margin-top: 382px;
    margin-left: 914px;
  }
  .trophy {
    position: absolute;
    width: 41px;
    height: 41px;
    margin-top: 382px;
    margin-left: 1145px;
  }
  .project {
    :nth-child(1) {
      position: absolute;
      width: 96px;
      height: 24px;
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      line-height: 24px;
      margin-top: 437px;
      margin-left: 887px;
    }
    :nth-child(2) {
      position: absolute;
      width: 160px;
      height: 96px;
      font-size: 16px;
      color: #f2f2f2;
      margin-top: 478px;
      margin-left: 855px;
    }
  }
  .honor {
    :nth-child(1) {
      position: absolute;
      width: 96px;
      height: 24px;
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      line-height: 24px;
      margin-top: 437px;
      margin-left: 1117px;
    }
    :nth-child(2) {
      position: absolute;
      width: 128px;
      height: 96px;
      font-size: 16px;
      color: #f2f2f2;
      margin-top: 478px;
      margin-left: 1102px;
    }
  }
  .white-outline-button {
    position: absolute;
    width: 180px;
    height: 60px;
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    font-size: 24px;
    margin-top: 612px;
    margin-left: 652px;
  }
}
.enterprise-content_two-img {
  img {
    position: absolute;
    width: 500px;
    height: 750px;
    margin-left: 100px;
    margin-top: -88px;
  }
}
</style>
