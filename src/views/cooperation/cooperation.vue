<template>
  <div class="box">
    <div class="home">
      <div class="h-content"><span>2023园区招商引资，入驻园区，享企业优惠政策</span><br /></div>
      <div class="h-title h-title1">
        <div class="h-logo">
          <img src="http://114.116.21.170:9000/photo/cooperation2.png" alt="" />
        </div>
        <div class="h-text1"><span>产业优惠政策</span></div>
        <div class="l"></div>
        <div class="h-text2"><span>商务贸易·现代服务·工业制造·持股平台</span></div>
        <div class="h-btn" @click="homemore('industry')">
          <span>更多产业</span>
          <div class="h-btn-down">
            <img src="http://114.116.21.170:9000/photo/cooperation4.png" alt="" />
          </div>
        </div>
      </div>
      <div class="h-title h-title2">
        <div class="h-logo">
          <img src="http://114.116.21.170:9000/photo/cooperation3.png" alt="" />
        </div>
        <div class="h-text1"><span>园区历史资料</span></div>
        <div class="l"></div>
        <div class="h-text2"><span>发展情况·上市扶持·总部经济·产业扶持</span></div>
        <div class="h-btn" @click="homemore('details')">
          <span>更多资料</span>
          <div class="h-btn-down">
            <img src="http://114.116.21.170:9000/photo/cooperation4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="data">
      <div class="d-head">
        <span>01</span>
        <div class="l"></div>
        <span>Parkinformation</span>
        <div class="d-title">
          <span>园区资料</span>
        </div>
      </div>
      <div class="d-demo">
        <el-carousel
          ref="cardShow"
          trigger="click"
          height="621px"
          style="width: 1300px"
          :autoplay="false"
          arrow="never"
        >
          <el-carousel-item
            v-for="(item, index) in Parkinfor.slice(0, Math.ceil(this.Parkinfor.length / 6))"
            :key="index"
            height="621px"
            style="width: 1300px; z-index: 10"
          >
            <div ref="alldiv" class="d-alldiv"></div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="page">
      <div ref="imgleft" class="left" @click="changepage('prev')">
        <img src="http://114.116.21.170:9000/photo/cooperation7.png" alt="" />
      </div>
      <div ref="imgright" class="right" @click="changepage('next')">
        <img src="http://114.116.21.170:9000/photo/cooperation8.png" alt="" />
      </div>
    </div>
    <div class="message">
      <div class="d-head">
        <span>02</span>
        <div class="l"></div>
        <span>Service content of the park</span>
        <div class="d-title">
          <span>园区招商信息</span>
        </div>
      </div>
      <div class="m-demo">
        <div class="m-demo-left">
          <div class="m-left-div">
            <div v-for="(list, index) in Service" :key="index" ref="demodiv" class="m-left-demo">
              <div class="l"></div>
              <div class="text" @click="changeService(index)">
                <span>{{ list.title }}</span>
              </div>
            </div>
          </div>
          <div class="m-left-demo-down" @click="changeService(-1)">
            <img src="http://114.116.21.170:9000/photo/cooperation9.png" alt="" />
          </div>
        </div>
        <div class="m-demo-right">
          <div class="m-right-title">
            <span>{{ showService.title }}</span>
          </div>
          <div class="m-right-text">
            <span>{{ showService.text }}</span>
          </div>
          <div class="m-right-img1">
            <span>{{ Servicenumber2 }}</span>
          </div>
          <div class="m-right-img2">
            <img src="http://114.116.21.170:9000/photo/cooperation6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation/navigation.vue';
export default {
  components: { NavigationBar },
  data() {
    return {
      Parkinfor: [],
      Parkinforpage: 0,
      Service: [
        {
          title: '新一代信息技术',
          text: '新一代信息技术基于互联网、物联网、大数据和人工智能等技术，具有高速传输、海量存储、智能处理等特点，广泛应用于各个领域，并推动着数字化时代的到来。'
        },
        {
          title: '高端制造',
          text: '高端制造利用先进技术和制造工艺生产出品质卓越、性能优良、附加值高的产品，涉及机器人、3D打印等前沿技术，并广泛应用于航空航天、汽车、新能源等领域。'
        },
        {
          title: '新材料技术',
          text: '新材料技术，通过制造新型材料满足需求。具有高强度、轻质、超导等特性，应用广泛。同时改良传统材料，提高性能，降低成本。'
        },
        {
          title: '生物医药',
          text: '生物医药利用生命科学、化学和信息技术等手段制造药品，涵盖基因工程、蛋白质工程、细胞疗法等领域，广泛应用于治疗多种疾病，具有高效、精准、个性化等特点。'
        },
        {
          title: '新能源',
          text: '新能源利用可再生资源如太阳能、风能等，具有环保、可持续性等优点，广泛应用于发电、交通、建筑等领域，并逐步取代传统能源，成为全球能源发展的重要方向之一。'
        },
        {
          title: '节能环保',
          text: '节能环保利用各种技术和手段，降低资源消耗和环境污染，提高能源利用率、减少温室气体排放并保护生态环境。包括清洁能源、能源储存、工业废弃物处理等领域。'
        },
        {
          title: '现代物流',
          text: '现代物流利用信息技术和设施实现商品全过程管理，具有高效、快速、准确等特点，广泛应用于多个领域。旨在提供可定制化、精细化的物流服务以满足客户需求。'
        },
        {
          title: '现代金融',
          text: '现代金融利用信息技术、大数据和人工智能等创新手段，发展新型金融产品和服务，提供高效、便捷、安全、透明的服务，推动经济可持续发展。'
        },
        {
          title: '医养健康',
          text: '医养健康是一种综合性的医疗护理模式，旨在维护人们的身体和心理健康。它包括医疗、养生、康复等多个方面，广泛应用于老年人护理、慢性病管理等领域。'
        },
        {
          title: '会展产业',
          text: '会展产业以举办各种展览、会议、活动为主，推动城市经济发展。它包括展览设计、场馆建设、活动策划等，广泛应用于旅游、文化、商贸等领域。'
        },
        {
          title: 'RCEP',
          text: 'RCEP是亚太地区的自由贸易协定，涵盖东南亚国家联盟、中国、日本、韩国、澳大利亚、新西兰等15个国家和地区。它旨在促进地区贸易自由化和投资便利化。'
        },
        {
          title: '现代农业',
          text: '现代农业利用高科技手段提高农业效率、保障粮食安全。它包括智能农机、精准农业等领域，推动农业产业创新和可持续发展。'
        },
        {
          title: '商贸产业',
          text: '商贸产业包括批发、零售、物流等领域，是商品流通和商业服务的重要组成部分。它促进了经济增长和国际贸易，提供就业机会和便利消费者的生活。'
        },
        {
          title: '文旅产业',
          text: '产业包括文化、旅游、体育等领域，以创意和体验为核心，提供丰富多样的文化产品和旅游服务。它促进了文化传承、旅游经济发展，提高城市形象和居民生活质量。'
        }
      ],
      Servicenumber: 1,
      Servicenumber2: '01',
      showService: {},
      scrollTop: 0
    };
  },
  async created() {
    await this.$store.dispatch('cooperation/getParkinfoList');
    // console.log(this.$store.state.cooperation.ParkinfoList)
    this.Parkinfor = this.$store.state.cooperation.ParkinfoList;
    console.log(this.$store.state.cooperation.ParkinfoList);
    // console.log(Math.ceil(this.Parkinfor.length / 6));
    await this.$refs;
    await this.$refs.alldiv.forEach((e, index) => {
      // console.log("index", index);
      let i = 0;
      let k = 0;
      if (this.Parkinfor.length - 6 * (index + 1) >= 0) {
        k = 6;
      } else {
        k = this.Parkinfor.length % 6;
      }
      for (i = 0; i < k; i++) {
        var imgdiv = `<div class="d-div">
                  <div class="d-logo">
                    <img src="http://114.116.21.170:9000/photo/cooperation5.png"
                         alt="" />
                  </div>
                  <div class="d-mtitle"><span>${
                    this.Parkinfor[i + index * 6].parkInformationTitle
                  }</span></div>
                  <div class="d-mtext">
                    <span>${this.Parkinfor[i + index * 6].parkInformationContent}</span>
                  </div>
                  <div class="d-mtime"><span>发表于 ${this.Parkinfor[
                    i + index * 6
                  ].createTime.slice(0, 10)}</span></div>
                  <div class="d-mdownload" onclick="downURL(${
                    this.Parkinfor[i + index * 6].parkInformationDownloadAddress
                  })" ><span>下载资料</span></div>
                  <div class="d-mdocheck" onclick="moreURL(${
                    this.Parkinfor[i + index * 6].parkId
                  })""><span>查看资料</span></div>
                </div>
                `;
        e.innerHTML += imgdiv;
      }
    });
    this.$refs.demodiv[0].setAttribute('class', 'm-left-demo demoactive');
    this.$refs.demodiv[0].style.height = '56px';
    this.showService = {
      title: '新一代信息技术',
      text: '新一代信息技术基于互联网、物联网、大数据和人工智能等技术，具有高速传输、海量存储、智能处理等特点，广泛应用于各个领域，并推动着数字化时代的到来。'
    };
    if (this.Parkinfor.length > 6) {
      this.$refs.imgright.style.opacity = 1;
      this.$refs.imgright.style.cursor = 'pointer;';
    }
  },

  mounted() {
    window.addEventListener('scroll', this.windowScrollListener);
    // this.$refs.alldiv
    const _this = this;
    window.downURL = function (url) {
      _this.downURL(url);
    };
    window.moreURL = function (id) {
      _this.moreURL(id);
    };
  },
  methods: {
    windowScrollListener() {
      //获取操作元素最顶端到页面顶端的垂直距离
      this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    },
    homemore(val) {
      if (val == 'industry') {
        console.log('');
      } else {
        console.log(111);
        this.$router.push('/park_information/park_information/t/1');
      }
    },
    changepage(val) {
      let allpage = Math.ceil(this.Parkinfor.length / 6);
      if (this.Parkinfor.length >= 6) {
        if (val == 'next') {
          if (this.Parkinforpage != allpage - 1) {
            this.Parkinforpage++;
            this.$refs.cardShow.next();
          }
        } else {
          if (this.Parkinforpage != 0) {
            this.Parkinforpage--;
            this.$refs.cardShow.prev();
          }
        }
        if (this.Parkinforpage == 0) {
          this.$refs.imgleft.style.opacity = 0.4;
          this.$refs.imgleft.style.cursor = 'no-drop';
          this.$refs.imgright.style.opacity = 1;
        } else if (this.Parkinforpage == allpage - 1) {
          this.$refs.imgright.style.opacity = 0.4;
          this.$refs.imgright.style.cursor = 'no-drop';
          this.$refs.imgleft.style.opacity = 1;
        } else {
          this.$refs.imgleft.style.opacity = 1;
          this.$refs.imgright.style.opacity = 1;
          this.$refs.imgright.style.cursor = 'pointer';
          this.$refs.imgleft.style.cursor = 'pointer';
        }
      }
    },
    downURL(url) {
      window.location.href = url;
    },
    moreURL(id) {
      this.$router.push('/park_information/park_information/t/' + id);
    },

    changeService(index) {
      let a = this.scrollTop;
      if (index == -1) {
        if (this.Servicenumber <= this.Service.length - 1) {
          this.$refs.demodiv[this.Servicenumber - 1].setAttribute('class', 'm-left-demo');
          this.Servicenumber++;
          this.$refs.demodiv[this.Servicenumber - 1].setAttribute(
            'class',
            'm-left-demo demoactive'
          );
          this.showService = {
            title: this.Service[this.Servicenumber - 1].title,
            text: this.Service[this.Servicenumber - 1].text
          };
          if (this.Servicenumber == 6 || (this.Servicenumber - 6) % 5 == 0) {
            this.$refs.demodiv[this.Servicenumber - 1].scrollIntoView({
              behavior: 'instant',
              inline: 'center'
            });
          }
        } else {
          this.$refs.demodiv[0].scrollIntoView({
            behavior: 'instant',
            inline: 'center'
          });
          this.$refs.demodiv[this.Servicenumber - 1].setAttribute('class', 'm-left-demo');
          this.$refs.demodiv[0].setAttribute('class', 'm-left-demo demoactive');
          this.Servicenumber = 1;
          this.Servicenumber2 = `01`;
          this.showService = {
            title: this.Service[0].title,
            text: this.Service[0].text
          };
        }
      } else {
        this.Servicenumber = index + 1;
        this.$refs.demodiv.forEach(e => {
          e.setAttribute('class', 'm-left-demo');
        });
        this.$refs.demodiv[this.Servicenumber - 1].setAttribute('class', 'm-left-demo demoactive');
        this.showService = {
          title: this.Service[this.Servicenumber - 1].title,
          text: this.Service[this.Servicenumber - 1].text
        };
        if (this.Servicenumber == 6 || (this.Servicenumber - 6) % 5 == 0) {
          this.$refs.demodiv[this.Servicenumber - 1].scrollIntoView({
            behavior: 'instant',
            inline: 'center'
          });
        }
      }
      console.log(this.Servicenumber);
      if (this.Servicenumber < 10) {
        this.Servicenumber2 = `0${this.Servicenumber}`;
      } else {
        this.Servicenumber2 = this.Servicenumber;
      }
      window.scrollTo(a - 1080, a);
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 2997px;
  padding: 0;
  position: relative;
  margin-top: -65px;
  z-index: 0;
  span {
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    color: #ffffff;
  }
  .home {
    width: 100%;
    // min-width: 1900px;
    height: 1000px;
    position: absolute;
    z-index: 0;
    top: 0px;
    left: 0;
    background-repeat: no-repeat;
    background-image: url('http://114.116.21.170:9000/photo/cooperation1.png');
    .h-content {
      position: relative;
      top: 304px;
      left: 283px;
      width: 1348px;
      span {
        height: 60px;
        line-height: 60px;
        font-size: 60px;
        font-weight: 700;
        letter-spacing: 2px;
      }
    }
    .h-title {
      position: relative;
      left: 416px;
      width: 1089px;
      height: 70px;
      background: rgba(#ffffff, 0.18);
      border-radius: 35px 35px 35px 35px;
      display: flex;
    }
    .h-title1 {
      top: 407px;
    }
    .h-title2 {
      top: 494px;
      // margin-top: 39px;
    }
    .h-text1 {
      position: absolute;
      width: 144px;
      height: 24px;
      left: 155px;
      top: 25px;
      span {
        font-size: 24px;
        font-weight: 700;
        line-height: 24px;
      }
    }
    .h-logo {
      // display: flex;
      margin: 5px;
      img {
        // display: flex;
        // margin-top: 10px;
        width: 60px;
        height: 60px;
        // background: linear-gradient(110deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
      }
    }
    .l {
      position: absolute;
      left: 329px;
      top: 24px;
      width: 1px;
      height: 24px;
      background: #ffffff;
      border-radius: 0px 0px 0px 0px;
      opacity: 0.86;
    }
    .h-text2 {
      position: absolute;
      // width: 144px;
      // height: 24px;
      left: 360px;
      top: 25px;
      span {
        width: 444px;
        height: 24px;
        font-size: 24px;
        font-weight: 400;
        color: #ffffff;
        line-height: 24px;
      }
    }
    .h-btn {
      position: absolute;
      left: 904px;
      width: 185px;
      height: 70px;
      background: linear-gradient(180deg, #ffcb52 0%, #ff8138 100%);
      border-radius: 35px 35px 35px 35px;
      opacity: 1;
      border: 3px solid #ffffff;
      cursor: pointer;
      z-index: 999;
      span {
        width: 96px;
        height: 24px;
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        position: absolute;
        left: 32px;
        bottom: 21px;
      }
      .h-btn-down {
        img {
          position: absolute;
          left: 137px;
          // top: 32px;
          bottom: 26px;
        }
      }
    }
  }
  .d-head {
    // width: 1920px;
    display: flex;
    position: relative;
    span {
      position: relative;
      top: 437px;
      left: 320px;
      width: 33px;
      height: 30px;
      font-size: 30px;
      font-family: DIN-Bold, DIN;
      font-weight: 700;
      color: #00a6ff;
      line-height: 30px;
    }
    .l {
      position: absolute;
      top: 449px;
      left: 367px;
      width: 80px;
      height: 2px;
      background: #cdcdcd;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
    }
    span:nth-child(3) {
      position: absolute;
      top: 437px;
      left: 459px;
      width: 234px;
      height: 30px;
      font-size: 30px;
      font-family: DIN-Bold, DIN;
      font-weight: 700;
      color: #cdcdcd;
      line-height: 30px;
    }
    .d-title {
      span {
        position: absolute;
        top: 499px;
        left: 320px;
        width: 200px;
        height: 50px;
        font-size: 50px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: 700;
        color: #333333;
        line-height: 50px;
      }
    }
  }
  .data {
    z-index: -2;
    position: relative;
    width: 100%;
    // min-width: 1900px;
    height: 1354px;
    top: 670px;
    left: 0px;
    background: #eff8ff;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    .d-demo {
      position: absolute;
      top: 633px;
      left: 320px;
      height: 621px;
      // background: #00ddff;
      width: 1300px;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      ::v-deep .el-carousel__item {
        z-index: 999;
        ::v-deep button {
          z-index: 0;
          width: 200px;
        }
        .d-alldiv {
          display: flex;
          // position: absolute;
          width: 1300px;
          height: 600px;
          // background: red;
          top: 500px;
          left: 5000px;
          flex-wrap: wrap;
          // background: #00ddff;
          .d-div {
            width: 414px;
            height: 301px;
            background: #ffffff;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
            margin-right: 19px;
            margin-bottom: 19px;
            display: line;

            .d-logo {
              img {
                margin-top: 28px;
                margin-left: 30px;
              }
            }
            .d-mtitle {
              position: relative;
              margin-top: -24px;
              margin-left: 66px;
              span {
                width: 289px;
                height: 20px;
                font-size: 20px;
                font-family: Microsoft YaHei-Bold, Microsoft YaHei;
                font-weight: 700;
                color: #333333;
                line-height: 20px;
              }
            }
            .d-mtext {
              margin-top: 32px;
              margin-left: 30px;
              width: 354px;
              span {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                word-break: break-all; // 注意这个文字多行很重要
                -webkit-box-orient: vertical;
                height: 60px;
                font-size: 14px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #666666;
                line-height: 20px;
              }
            }
            .d-mtime {
              margin-top: 30px;
              margin-left: 30px;
              span {
                width: 106px;
                height: 12px;
                font-size: 12px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #999999;
                line-height: 12px;
                // -webkit-background-clip: text;
                // -webkit-text-fill-color: transparent;
              }
            }
            .d-mdownload {
              margin-top: 34px;
              margin-left: 30px;
              width: 120px;
              height: 32px;
              background: linear-gradient(270deg, #00a6ff 0%, #00ddff 100%);
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
              cursor: pointer;
              span {
                position: absolute;
                margin-top: 9px;
                margin-left: 28px;
                width: 64px;
                height: 16px;
                font-size: 16px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
                line-height: 16px;
                // -webkit-background-clip: text;
                // -webkit-text-fill-color: transparent;
              }
            }
            .d-mdocheck {
              margin-top: -32px;
              margin-left: 184px;
              width: 120px;
              height: 32px;
              background: #e8f7ff;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
              cursor: pointer;
              span {
                position: absolute;
                margin-top: 9px;
                margin-left: 28px;
                width: 64px;
                height: 16px;
                font-size: 16px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #00a6ff;
                line-height: 16px;
              }
            }
          }
        }
      }
    }
  }
  .page {
    display: flex;
    position: absolute;
    width: 180px;
    height: 90px;
    left: 870px;
    top: 1984px;
    z-index: 1;
    .left {
      width: 90px;
      height: 80px;
      background: #00a6ff;
      border-radius: 50px 0px 0px 50px;
      opacity: 0.4;
      // cursor: pointer;
      cursor: no-drop;
      img {
        position: relative;
        top: 27px;
        left: 37px;
      }
    }
    .right {
      width: 90px;
      height: 80px;
      background: #00a6ff;
      border-radius: 0px 50px 50px 0px;
      opacity: 0.4;
      cursor: no-drop;
      img {
        position: relative;
        top: 27px;
        left: 37px;
      }
    }
  }
  .message {
    position: absolute;
    // top: 2173px;
    top: 2020px;
    width: 100%;
    // min-width: 1900px;
    height: 1000px;
    border-radius: 0px 0px 0px 0px;
    .d-head {
      display: flex;
      span {
        top: 137px;
      }
      .l {
        top: 149px;
      }
      span:nth-child(3) {
        top: 137px;
        width: 409px;
      }
      .d-title {
        span {
          top: 199px;
          width: 300px;
        }
      }
    }
    .m-demo {
      position: absolute;
      top: 411px;
      display: flex;
      .m-demo-left {
        // position: relative;
        position: absolute;
        // position: fixed;
        left: 320px;
        width: 204px;
        height: 420px;
        // background: linear-gradient(180deg, #56e8ff 0%, #57c4ff 100%);
        border-radius: 0px 0px 0px 0px;
        z-index: 99;
        .m-left-div {
          position: relative;
          top: 18px;
          width: 204px;
          height: 364px;
          overflow: hidden;
          .m-left-demo {
            width: 204px;
            height: 45px;
            // margin-top: -20px;
            cursor: pointer;
            z-index: 999;
            .text {
              margin-top: 20px;
              span {
                margin-left: 30px;
                width: 420px;
                height: 16px;
                font-size: 16px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #333333;
                line-height: 16px;
              }
            }
          }
          .demoactive {
            background: linear-gradient(270deg, #c5f3ff 0%, rgba(197, 243, 255, 0) 100%);
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
            display: flex;
            height: 56px;
            .text {
              span {
                height: 18px;
                font-size: 18px;
                font-family: Microsoft YaHei-Bold, Microsoft YaHei;
                font-weight: 700;
                color: #00a6ff;
                line-height: 18px;
              }
            }
            .l {
              width: 4px;
              height: 56px;
              background: #00a6ff;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
            }
          }
        }
        .m-left-demo-down {
          z-index: 20;
          position: absolute;
          top: 384px;
          left: 0px;
          width: 204px;
          height: 36px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.102) 0%, #ffffff 100%);
          border-radius: 0px 0px 0px 0px;
          opacity: 0.6;
          cursor: pointer;
          img {
            position: absolute;
            top: 14px;
            left: 96px;
            cursor: pointer;
          }
        }
      }
      .m-demo-left::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        background: linear-gradient(180deg, #56e8ff 0%, #57c4ff 100%);
        opacity: 0.2;
        z-index: 0;
      }
      .m-demo-right {
        position: absolute;
        left: 534px;
        width: 1066px;
        height: 420px;
        background: linear-gradient(97deg, #00a6ff 0%, #29beff 100%);
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        .m-right-title {
          position: absolute;
          top: 104px;
          left: 60px;
          width: 154px;
          height: 22px;
          span {
            font-size: 22px;
            font-family: Microsoft YaHei-Bold, Microsoft YaHei;
            font-weight: 700;
            color: #ffffff;
            line-height: 22px;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
          }
        }
        .m-right-text {
          position: absolute;
          top: 146px;
          left: 60px;
          width: 480px;
          height: 78px;
          span {
            font-size: 14px;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
            line-height: 26px;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
          }
        }
        .m-right-img1 {
          position: absolute;
          left: 10px;
          top: 200px;
          span {
            width: 205px;
            height: 242px;
            font-size: 200px;
            font-family: DIN-Medium-Regular, DIN-Medium;
            font-weight: 400;
            color: #ffffff;
            line-height: 242px;
            opacity: 0.15;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
          }
        }
        .m-right-img2 {
          img {
            position: absolute;
            left: 626px;
            top: 20px;
          }
        }
      }
    }
  }
}
</style>
