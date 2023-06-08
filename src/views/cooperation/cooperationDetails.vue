<template>
  <div class="service-information">
    <div class="si-top">
      <div class="si-top1">
        <img src="http://47.95.211.240:9000/photo/service/information/VCG211187142439.png" alt="" />
      </div>
      <div class="si-top2">
        <img src="http://47.95.211.240:9000/photo/cooperation-2.3.png" alt="" />
        <div class="si-title">
          <span>ATRACT INVESTMENT</span>
          <p>招商合作>></p>
        </div>
      </div>
    </div>
    <div v-if="Object.keys(data_list).length" class="si-content">
      <div class="si-content-top">
        <img src="http://47.95.211.240:9000/photo/service/information/%E7%BB%84%2079.png" alt="" />
        <el-breadcrumb class="el-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/cooperation' }">招商合作</el-breadcrumb-item>
          <el-breadcrumb-item>详细资料</el-breadcrumb-item>
        </el-breadcrumb>
        <hr />
      </div>
      <div class="si-content-middle">
        <div class="sic-middle-topic">
          <img
            src="http://47.95.211.240:9000/photo/service/information/%E7%BB%84%2080.png"
            alt=""
            @click="beforee()"
          />
          <span>{{ data_list.Now.parkInformationTitle }}</span>
          <img
            src="http://47.95.211.240:9000/photo/service/information/%E7%BB%84%2081.png"
            alt=""
            @click="next()"
          />
        </div>
        <div class="sic-middle-topic2">
          <span>来源：{{ data_list.Now.createBy != null ? data_list.Now.createBy : '未知' }}</span>
          <span>时间：{{ data_list.Now.createTime.slice(0, 10) }}</span>
          <span
            >浏览量：{{
              data_list.Now.parkInformationPageView != null
                ? data_list.Now.parkInformationPageView
                : 0
            }}</span
          >
        </div>
        <hr style="margin-top: 22px" />
        <div class="sic-middle-content" v-html="this.data_list.Now.parkInformationContent"></div>
        <div class="sic-middle-bottom">
          <span
            >上一篇：<span style="color: #00a6ff; cursor: pointer" @click="routerpush('shang')">{{
              data_list.Before != null ? data_list.Before.parkInformationTitle : '空'
            }}</span></span
          >
          <span
            >下一篇：<span style="color: #00a6ff; cursor: pointer" @click="routerpush('xia')">{{
              data_list.After != null ? data_list.After.parkInformationTitle : '空'
            }}</span></span
          >
        </div>
        <div class="downbtn">
          <p :download="data_url" :href="data_url" @click="downinfo">下载资料</p>
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
      data_list: {},
      data_url: ''
    };
  },

  mounted() {
    console.log(this.$store.getters.RAllList);
    getAllList({ pageNum: 1, pageSize: 10 }).then(res => {
      console.log(res.rows);
    });
  },

  async beforeCreate() {
    document.documentElement.scrollTop = 0;
    this.content_id = this.$route.params.id;
    await reqDetailsList(this.content_id).then(res => {
      console.log(1, res);
      this.data_list = res.data;
      this.data_url = this.data_list.Now.parkInformationDownloadAddress;
      console.log(2, this.data_list.Now.parkInformationDownloadAddress);
    });
  },

  methods: {
    next() {
      this.$router.push('/cooperation/t/' + this.data_list.After.parkId).catch(err => err);
      location.reload();
    },
    beforee() {
      this.$router.push('/cooperation/t/' + this.data_list.Before.parkId).catch(err => err);
      location.reload();
    },

    downinfo() {
      window.open(this.data_url);
    },
    routerpush(val) {
      if (val == 'shang') {
        if (this.data_list.Before != null) {
          this.$router.push('/cooperation/t/' + this.data_list.Before.parkId).catch(err => err);
          this.$router.go(0);
        } else {
          this.$message({
            message: '这是第一条,没有上一条了',
            type: 'warning'
          });
        }
      } else {
        if (this.data_list.After != null) {
          this.$router.push('/cooperation/t/' + this.data_list.After.parkId).catch(err => err);
          this.$router.go(0);
        } else {
          this.$message({
            message: '这是最后一条,没有下一条了',
            type: 'warning'
          });
        }
      }
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
    img {
      width: 100%;
    }
  }
  .si-top2 {
    position: absolute;
    top: 99px;
    width: 100%;
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
