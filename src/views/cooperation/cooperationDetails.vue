<template>
  <div class="service-information">
    <div class="si-top">
      <div class="si-top1">
        <img
          src="http://114.116.21.170:9000/photo/service/information/VCG211187142439.png"
          alt=""
        />
      </div>
      <div class="si-top2">
        <img src="http://114.116.21.170:9000/photo/cooperation-2.3.png" alt="" />
        <div class="si-title">
          <span>ATRACT INVESTMENT</span>
          <p>招商合作>></p>
        </div>
      </div>
    </div>
    <div class="si-content">
      <div class="si-content-top">
        <img src="http://114.116.21.170:9000/photo/service/information/%E7%BB%84%2079.png" alt="" />
        <el-breadcrumb class="el-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/cooperation' }">招商合作</el-breadcrumb-item>
          <el-breadcrumb-item>详细资料</el-breadcrumb-item>
        </el-breadcrumb>
        <hr />
      </div>
      <div class="si-content-middle">
        <div class="sic-middle-topic">
          <img
            src="http://114.116.21.170:9000/photo/service/information/%E7%BB%84%2080.png"
            alt=""
            @click="beforee()"
          />
          <span>{{ data_list.Now.parkInformationTitle }}</span>
          <img
            src="http://114.116.21.170:9000/photo/service/information/%E7%BB%84%2081.png"
            alt=""
            @click="next()"
          />
        </div>
        <div class="sic-middle-topic2">
          <span>来源：{{ data_list.Now.createBy != null ? data_list.Now.createBy : '未知' }}</span>
          <span>时间：{{ data_list.Now.createTime.slice(0, 10) }}</span>
          <span>浏览量：{{ data_list.Now.parkInformationPageView }}</span>
        </div>
        <hr style="margin-top: 22px" />
        <div class="sic-middle-content" v-html="this.data_list.Now.parkInformationContent"></div>
        <div class="sic-middle-bottom">
          <span
            >上一篇：<span
              style="color: #00a6ff; cursor: pointer"
              @click="
                $router
                  .push('/park_information/park_information/t/' + data_list.Before.parkId)
                  .catch(err => err);
                $router.go(0);
              "
              >{{ data_list.Before != null ? data_list.Before.parkInformationTitle : '空' }}</span
            ></span
          >
          <span
            >下一篇：<span
              style="color: #00a6ff; cursor: pointer"
              @click="
                $router
                  .push('/park_information/park_information/t/' + data_list.After.parkId)
                  .catch(err => err);
                $router.go(0);
              "
              >{{ data_list.After != null ? data_list.After.parkInformationTitle : '空' }}</span
            ></span
          >
        </div>
        <div class="downbtn">
          <p>下载资料</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllList, reqDetailsList } from '@/api/modules/cooperation';
export default {
  name: 'cooperationDetails',
  data() {
    return {
      content_id: '',
      data_list: []
    };
  },

  mounted() {
    console.log(this.$store.getters.RAllList);
    getAllList({ pageNum: 1, pageSize: 10 }).then(res => {
      console.log(res.rows);
    });
  },

  beforeCreate() {
    document.documentElement.scrollTop = 0;
    this.content_id = this.$route.params.id;
    reqDetailsList(this.content_id).then(res => {
      console.log(1, res);
      this.data_list = res.data;
      console.log(2, this.data_list);
    });
  },

  methods: {
    next() {
      this.$router
        .push('/park_information/park_information/t/' + this.data_list.After.parkId)
        .catch(err => err);
      location.reload();
    },
    beforee() {
      this.$router
        .push('/park_information/park_information/t/' + this.data_list.Before.parkId)
        .catch(err => err);
      location.reload();
    },
    async getList() {
      await reqDetailsList(this.content_id).then(res => {
        console.log(1, res);
        this.data_list = res.data;
        console.log(2, this.data_list);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.service-information {
  text-align: center;
}
.si-top {
  // display: inline-block;
  height: 400px;
  // height: 1000px;
  .si-top1 {
    position: absolute;
    top: 0px;
    width: 100%;
    min-width: 1900px;
    img {
      width: 100%;
    }
  }
  .si-top2 {
    position: absolute;
    top: 99px;
    width: 100%;
    min-width: 1900px;
    img {
      width: 100%;
    }
    .si-title {
      position: absolute;
      top: 74px;
      left: 420px;
      span {
        width: 135px;
        height: 20px;
        font-size: 20px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: 700;
        color: #ffffff;
        line-height: 20px;
      }
      p {
        margin-top: 19px;
        width: 194px;
        height: 35px;
        font-size: 35px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: 700;
        color: #ffffff;
        line-height: 35px;
      }
    }
  }
}
::v-deep .si-content {
  margin-top: 8px;
  display: inline-block;
  width: 1280px;
  // background-color: antiquewhite;
  .si-content-top {
    text-align: left;
    img {
      height: 18px;
      width: 18px;
      // cursor:pointer;
    }
    .el-breadcrumb {
      display: inline-block;
      margin-left: 20px;
    }
    hr {
      margin-top: 13px;
    }
  }
  .si-content-middle {
    margin-bottom: 238px;
    .sic-middle-topic {
      width: 100%;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      img {
        cursor: pointer;
      }
      img:nth-child(1) {
        height: 60px;
        width: 60px;
      }
      span:nth-child(2) {
        position: relative;
        top: 17px;
        font-weight: 700;
        color: #333333;
        font-size: 30px;
        line-height: 30px;
        font-family: Microsoft YaHei-Bold;
      }
      img:nth-child(3) {
        height: 60px;
        width: 60px;
      }
    }
    .sic-middle-topic2 {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 18px;
        font-weight: 400;
        color: #333333;
        font-family: Microsoft YaHei-Regular;
      }
    }
    .sic-middle-content {
      margin-top: 80px;
      p {
        text-align: left;
        // font-size: 20px;
        font-weight: 400;
        line-height: 37px;
        text-indent: 2em;
        margin-top: 50px;
      }
    }
    .sic-middle-bottom {
      margin-top: 104px;
      display: flex;
      justify-content: space-around;
      span {
        font-size: 18px;
        font-family: Microsoft YaHei-Regular;
        font-weight: 400;
      }
    }
    .downbtn {
      margin-top: 71px;
      margin-left: 586px;
      width: 120px;
      height: 32px;
      background: linear-gradient(270deg, #00a6ff 0%, #00ddff 100%);
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      cursor: pointer;
      p {
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
  }
}
</style>
