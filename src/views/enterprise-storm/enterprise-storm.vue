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
        <img src="../../assets/enterprise-storm/bg.png" alt="" />
      </div>
      <div class="head-content">
        <span>CORPORATE STYLE</span>
        <span>企业风采</span>
        <span
          >胶州市正加快建设上合组织地方经贸合作示范区，全力打造“一带一路”国际合作新平台，
          把胶州历史性地推到国家对外开放的战略前沿。</span
        >
        <div class="m-btn-us">
          <el-button class="btn-us" type="primary" @click="$router.push(`/contact`)"
            >联系我们</el-button
          >
        </div>
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
              <span class="name">{{ data_list[0]?.companyCname }}</span>
              <span class="number">01</span>
              <img src="https://s1.ax1x.com/2023/04/13/ppxwB8g.png" alt="" />
              <span id="aboutMessage_first">{{ data_list[0]?.aboutMessage }}</span>
            </div>
            <div class="phone">
              <img src="http://114.116.21.170:9000/photo/enterprise-storm/电话@2x.png" alt="" />
            </div>
            <div class="phonenum">
              <span>联系方式</span>
              <span>{{ data_list[0]?.contactPhone }}</span>
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
              <span style="margin-left: 887px" class="sl3" v-html="joinStr(0, ';<br/>')"> </span>
            </div>
            <div class="border1"></div>
            <div class="trophy">
              <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 70@2x.png" alt="" />
            </div>
            <div class="honor">
              <span>荣誉奖项</span>
              <span
                class="honor_win"
                v-html="data_list[0]?.honorMessage.split(';').join(';<br/>')"
              ></span>
            </div>
            <button
              class="white-outline-button"
              @click="$router.push(`/enterprise-storm/more-enterprise/1`)"
            >
              查看更多>>
            </button>
          </div>
        </div>
      </div>
      <!-- <div style="margin-bottom: 200px"></div> -->
    </div>
    <div class="company">
      <div
        v-for="(item, index) in data_list.slice(1)"
        :key="index"
        class="company_one companyFlex_one"
      >
        <img :src="item.companyImg" alt="" />
        <div class="title">{{ item.companyCname }}</div>
        <div class="des">
          {{ item.aboutMessage }}
        </div>
        <span class="company_one-number">{{ index + 2 < 10 ? '0' + (index + 2) : index + 2 }}</span>
        <div class="phone">
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 59@2x.png" alt="" />
          <span class="phone_des">联系方式：</span>
          <span>{{ data_list[1].contactPhone }}</span>
        </div>
        <div class="classification">
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 60@2x.png" alt="" />
          <span class="classification_des">主营产品：</span>
          <span class="classification_content">{{ joinStr(index + 1, '、') }}</span>
        </div>
        <div class="honor">
          <img src="http://114.116.21.170:9000/photo/enterprise-storm/组 61@2x.png" alt="" />
          <span class="honor_des">荣誉奖项：</span>
          <span class="classification_content">{{ data_list[1].honorMessage }}</span>
        </div>
        <button
          class="see_more"
          @click="$router.push(`/enterprise-storm/more-enterprise/${item.companyId}`)"
        >
          查看更多>>
        </button>
      </div>
    </div>
    <button v-if="data_list_isall" class="see_more_last" @click="getEnterpriceAllList">
      查看更多
    </button>
  </div>
</template>

<script>
import { getEnterpriceAll } from '@/api/modules/enterprice';
import DevicePixelRatio from '@/utils/devicePixelRatio';
export default {
  name: 'JzbdFeEnterpriseStorm',
  components: {},

  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      data_list: [],
      data_list_page: 1,
      data_list_isall: true,
      product: '',
      product1: ''
    };
  },

  mounted() {
    this.getEnterpriceAllList();
  },

  created() {
    new DevicePixelRatio().init();
  },

  methods: {
    getEnterpriceAllList() {
      let text = 3;
      if (this.data_list_page == 1) {
        text = 4;
      } else {
        text = 3;
      }
      console.log(text);
      getEnterpriceAll(text, this.data_list_page).then(res => {
        // this.data_list = res.rows;
        console.log(res.rows);
        res.rows.forEach(e => {
          this.data_list.push(e);
        });
        if (res.total <= this.data_list_page * 3 + 1) {
          this.data_list_isall = false;
        }
        this.data_list_page = this.data_list_page + 1;
        console.log(1111, res.total, this.data_list_page * 3 + 1);

        // data_list[1].productAndServices[0].productServiceTitle
      });
    },
    joinStr(idx, met) {
      return this.data_list[idx]?.productAndServices
        ?.map(item => item.productServiceTitle)
        .join(met);
    }
  }
};
</script>

<style lang="scss" scoped>
.enterprise-box {
  position: relative;
  width: 100%;
  margin-top: -65px;
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
  span:nth-child(1) {
    color: #cccccc;
    font-size: 24px;

    font-family: Microsoft YaHei-Bold;
  }
  :nth-child(2) {
    padding-top: 27px;
    display: block;
    color: #ffffff;
    font-size: 66px;
    font-weight: 700;
    font-family: Microsoft YaHei-Bold;
  }
  :nth-child(3) {
    padding-top: 36px;
    display: block;
    width: 676px;
    color: #ffffff;
    font-size: 24px;
    font-weight: 400;
    font-family: Microsoft YaHei-Regular;
  }
  .m-btn-us {
    margin-top: 87px;
    .btn-us {
      width: 210px;
      height: 58px;
      font-size: 24px;
      font-weight: 400;
    }
  }
  span:nth-child(4) {
    color: #fff;
  }
}
.enterprise-content_one {
  // margin-top: 107px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  width: 1280px;
  .enterprise-content_one-topic {
    // margin-left: 320px;
    // z-index: -1;
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
  position: relative;
  // left: 50%;
  left: 0;
  // transform: translateX(-50%);
  z-index: 0;
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
    cursor: pointer;
  }
}
.company {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 1280px;
  margin-bottom: 240px;
  display: flex;
  align-content: space-between;
  table-layout: fixed;
  white-space: normal;
  justify-content: space-between;
  flex-wrap: wrap;
}
.see_more_last {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 80px;
  background-color: #00a6ff;
  color: #fff;
  border: 2px solid #fff;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  // left: 810px;
  bottom: -120px;
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
.companyFlex_one {
  width: 410px;
  height: 580px;
  background: #ffffff;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1608);
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  & img {
    height: 280px;
    width: 410px;
    object-fit: cover;
  }
  & > .title {
    width: 280px;
    height: 20px;
    font-size: 20px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: 700;
    color: #333333;
    margin-left: 20px;
    margin-top: 28px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > .company_one-number {
    position: absolute;
    margin-top: 300px;
    margin-left: 302px;
    width: 112px;
    height: 96px;
    font-size: 90px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: 700;
    color: #cdcdcd;
    opacity: 30%;
  }
  & > .des {
    width: 358px;
    height: 63px;
    font-size: 16px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    margin-top: 20px;
    margin-left: 20px;
    z-index: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /*想省略几行就写几*/
    -webkit-box-orient: vertical;
  }
  & > .phone {
    margin-top: 22px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    & > img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
    & > .phone_des {
      margin: 0 10px;
    }
  }
  & > .classification {
    margin-top: 10px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    & > img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
    & > .classification_des {
      margin: 0 10px;
    }
  }
  & > .honor {
    margin-top: 10px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    & > img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
    & > .honor_des {
      margin: 0 10px;
    }
  }
  & > .see_more {
    color: white;
    height: 35px;
    width: 120px;
    background-color: #00a6ff;
    border: none;
    font-size: 16px;
    font-weight: 400;
    font-family: Microsoft YaHei-Regular;
    margin-top: 22px;
    margin-left: 20px;
    cursor: pointer;
  }
}

#aboutMessage_first {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /*想省略几行就写几*/
  -webkit-box-orient: vertical;
}
.classification_content {
  width: 236px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /*想省略几行就写几*/
  -webkit-box-orient: vertical;
}
.sl3 {
  display: block;
  height: 62px !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /*想省略几行就写几*/
  -webkit-box-orient: vertical;
}
::v-deep .honor_win {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /*想省略几行就写几*/
  -webkit-box-orient: vertical;
  // margin-bottom: 10px;
}
</style>
