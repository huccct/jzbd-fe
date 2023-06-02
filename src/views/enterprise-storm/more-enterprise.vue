<template>
  <div class="box">
    <div class="slider-box">
      <img :src="data_list.companyImg" alt="组1" style="width: 100%; height: 100%" />
    </div>
    <div class="m-content">
      <span class="title">{{ data_list.companyCname }}</span
      ><br />
      <span class="content_one">{{ data_list.companyEname }}</span>
      <span class="content_two">
        {{ data_list.headline?.slice(0, 14)
        }}<span style="color: #00a6ff">{{ data_list.headline?.slice(-4) }}</span>
      </span>
    </div>
    <div class="bg-box">
      <div class="introduce">
        <div class="text">
          <span>01</span>
          <span>&emsp;———&emsp;</span>
          <span>About us</span><br />
          <div>关于我们</div>
          <br />
          <div class="title">{{ data_list.aboutTitle }}</div>
          <div v-if="cur === 0" class="content_main">
            <br />
            <div class="des">
              {{ data_list.aboutMessage }}
            </div>
          </div>
          <div v-if="cur === 1" class="content_main">
            <br />
            <div class="des">
              {{ data_list.honorMessage }}
            </div>
          </div>
          <div v-if="cur === 2" class="content_main">
            <br />
            <div class="des">
              {{ data_list.cultureMessage }}
            </div>
          </div>
          <div class="data">
            <div class="profile">
              <img
                v-if="cur === 0"
                src="http://47.95.211.240:9000/photo/enterprise-storm/组 94@2x.png"
                alt=""
              />
              <img v-else src="http://47.95.211.240:9000/photo/homepage01.png" alt="" />
              <span :style="{ color: cur === 0 ? '#07a9ff' : '' }">企业简介</span>
              <span :style="{ color: cur === 0 ? '#07a9ff' : '' }">Introduction</span>
            </div>
            <div class="honor">
              <img
                v-if="cur != 1"
                src="http://47.95.211.240:9000/photo/enterprise-storm/组 95@2x.png"
                alt=""
              />
              <img v-else src="http://47.95.211.240:9000/photo/enterprise-storm/组 95.png" alt="" />
              <span :style="{ color: cur === 1 ? '#07a9ff' : '' }">荣誉资质</span>
              <span :style="{ color: cur === 1 ? '#07a9ff' : '' }">Honorary</span>
            </div>
            <div class="honor">
              <img
                v-if="cur != 2"
                src="http://47.95.211.240:9000/photo/enterprise-storm/组 96@2x.png"
                alt=""
              />
              <img v-else src="http://47.95.211.240:9000/photo/enterprise-storm/组 96.png" alt="" />
              <span :style="{ color: cur === 2 ? '#07a9ff' : '' }">企业文化</span>
              <span :style="{ color: cur === 2 ? '#07a9ff' : '' }">Culture</span>
            </div>
          </div>
          <br />
        </div>
        <div class="img">
          <div class="icon">
            <div
              ref="leftbtn"
              type="primary"
              class="icon-left"
              :disabled="cur === 0"
              @click="prev()"
            >
              <img src="http://47.95.211.240:9000/photo/maker-port/left.png" alt="left" />
            </div>
            <div
              ref="rightbtn"
              type="primary"
              class="icon-right"
              :disabled="cur === src.length - 1"
              @click="next()"
            >
              <img src="http://47.95.211.240:9000/photo/maker-port/right.png" alt="right" />
            </div>
          </div>
          <el-carousel
            ref="img"
            :interval="4000"
            height="750px"
            arrow="never"
            indicator-position="none"
            :loop="false"
            :initial-index="cur"
            :autoplay="false"
            @change="carousel_change"
          >
            <el-carousel-item v-for="item in src" :key="item">
              <img
                :src="item"
                :alt="item"
                style="height: 750px; border-radius: 40px 0px 0px 40px"
              />
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
      <!-- productAndServices 这个数组只有两个，你咋写这么多 -->
      <div v-if="data_list.productAndServices" class="product-details">
        <div
          v-for="(item, index) in data_list.productAndServices"
          :key="index"
          class="product-details_one"
        >
          <span>{{ `${(index + 1).toString().padStart(2, '0')}` }}</span>
          <img src="http://47.95.211.240:9000/photo/enterprise-storm/组 124@2x.png" alt="" />
          <span>{{ item.productServiceExplain }}</span>
          <span>{{ item.productServiceTitle }}</span>
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
          <img src="http://47.95.211.240:9000/photo/enterprise-storm/组 106@2x.png" alt="" />
          <img src="http://47.95.211.240:9000/photo/enterprise-storm/组 107@2x.png" alt="" />
        </div>
        <div class="address">
          <img src="http://47.95.211.240:9000/photo/enterprise-storm/组 108@2x.png" alt="" />
          <span class="address_des-one">地&nbsp;&nbsp;&nbsp;址：</span>
          <span class="address_des-two">{{ data_list.contactAddress }}</span>
        </div>
        <div class="phone address">
          <img src="http://47.95.211.240:9000/photo/enterprise-storm/组 109@2x.png" alt="" />
          <span class="address_des-one">电&nbsp;&nbsp;&nbsp;话：</span>
          <span class="address_des-two">{{ data_list.contactPhone }}</span>
        </div>
        <div class="email address">
          <img src="http://47.95.211.240:9000/photo/enterprise-storm/组 110@2x.png" alt="" />
          <span class="address_des-one">邮&nbsp;&nbsp;&nbsp;箱：</span>
          <span class="address_des-two">{{ data_list.contactEmail }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      src: [],
      cur: 0,
      nowpag: 1,
      prev() {
        this.$refs.img.prev();
        if (this.nowpag > 1) {
          this.nowpag--;
        }
      },
      next() {
        this.$refs.img.next();
        if (this.nowpag < 3) {
          this.nowpag++;
        }
      },
      data_list: {},
      nowData: []
    };
  },
  watch: {
    nowpag(newvalue) {
      // console.log(newvalue);
      // console.log(this.$refs.leftbtn);

      if (newvalue == 1) {
        this.$refs.leftbtn.style.opacity = 0.4;
        this.$refs.leftbtn.style.cursor = 'no-drop';
        this.$refs.rightbtn.style.opacity = 1;
        this.$refs.rightbtn.style.cursor = 'pointer';
      } else if (newvalue == 3) {
        this.$refs.rightbtn.style.opacity = 0.4;
        this.$refs.rightbtn.style.cursor = 'no-drop';
        this.$refs.leftbtn.style.opacity = 1;
        this.$refs.leftbtn.style.cursor = 'pointer';
      } else {
        this.$refs.rightbtn.style.opacity = 1;
        this.$refs.rightbtn.style.cursor = 'pointer';
        this.$refs.leftbtn.style.opacity = 1;
        this.$refs.leftbtn.style.cursor = 'pointer';
      }
    }
  },
  async created() {
    await this.loadPage();
    console.log(this.data_list);
  },
  methods: {
    carousel_change(e) {
      this.cur = e;
    },
    async loadPage() {
      const res = await axios.get('/companylist/company/t/' + this.$route.params.id);
      this.data_list = res.data.data;
      this.src.push(this.data_list.aboutImg, this.data_list.cultureImg, this.data_list.honorImg);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-button:focus {
  color: none;
  background-color: none;
  border-color: none;
}
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
  width: 1920px;
  height: 1000px;
}
.bg-box {
  background: #eff8ff;
  width: 1920px;
  height: 932px;
}
.introduce {
  width: 80%;
  height: 932px;
  position: absolute;
  left: 350px;

  .text {
    color: #333333;
    width: 42%;
    height: 100%;
    margin-top: 89px;

    & > div {
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

    & .des {
      width: 648px;
      height: 234px; /* 9行文字的高度，每行高度根据line-height属性决定 */
      color: #666666;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 9;
      -webkit-box-orient: vertical;
    }
    & .data {
      margin-top: 76px;
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
          color: #333333;
          font-weight: 700;
        }
        :nth-child(3) {
          width: 89px;
          height: 14px;
          font-size: 14px;
          font-weight: 700;
          color: #333333;
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
    & > .title {
      width: 384px;
      height: 24px;
      font-size: 24px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: 700;
      color: #333333;
      line-height: 24px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: -30px;
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
        // background-color: #00a6ff;
        opacity: 0.4;
        border-radius: 50px 0 0 50px;
        margin-right: -10px;
        background-color: #00a6ff;
        cursor: no-drop;
      }

      .icon-right {
        width: 50%;
        height: 80px;
        opacity: 1;
        background-color: #00a6ff;
        cursor: pointer;
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
      // color: #007dc0;
      color: #333333;
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
    margin-left: 320px;
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
    width: 100%;
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
  width: 30%;
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
    width: 240px;
    height: 38px;
    font-size: 30px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: 700;
    color: #333333;
    margin-top: 36px;
    margin-left: 78px;
    margin-bottom: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
