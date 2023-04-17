<!--
 * @Author: hayyot
 * @Date: 2023-04-14 22:52:08
 * @Description: 铁沸物
 * @FilePath: \jzbd-fe\src\views\park-service\information\information.vue
-->
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
        <img src="http://114.116.21.170:9000/photo/service/information/%E7%BB%84%2078.png" alt="" />
      </div>
    </div>
    <div class="si-content">
      <div class="si-content-top">
        <img src="http://114.116.21.170:9000/photo/service/information/%E7%BB%84%2079.png" alt="" />
        <el-breadcrumb class="el-breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/service' }">园区服务</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/service' }">新闻公告</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
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
          <span>{{ data_list.Now.newsTitle }}</span>
          <img
            src="http://114.116.21.170:9000/photo/service/information/%E7%BB%84%2081.png"
            alt=""
            @click="next()"
          />
        </div>
        <div class="sic-middle-topic2">
          <span>来源：{{ data_list.Now.newsSource }}</span>
          <span>时间：{{ data_list.Now.createTime }}</span>
          <span>浏览量：{{ data_list.Now.pageViews }}</span>
          <span
            >分享：<img
              src="http://114.116.21.170:9000/photo/service/information/%E7%BB%84%2043.png"
              alt="" />&nbsp;&nbsp;<img
              src="http://114.116.21.170:9000/photo/service/information/%E7%BB%84%2044.png"
              alt=""
          /></span>
        </div>
        <hr style="margin-top: 22px" />
        <div class="sic-middle-content" v-html="this.data_list.Now.specificContent"></div>
        <!-- <p>
            12月30日，上合新区发出首张个体工商户经营者变更营业执照。个体工商户谢女士在上合新区市场监管窗口申请办理个体工商户经营者变更登记，用了不到半个小时的时间就完成了相关办理手续。她拿着现场颁发的营业执照表示：“现在太方便了，这么短时间就能变更到经营者了，实在是太省心省时了。”
          </p>
          <img
            src="http://114.116.21.170:9000/photo/service/information/c05bf273d90c1d651621defa03e0776f_202212140900142692.png"
            alt=""
          />
          <p>
            《促进个体工商户发展条例》的实施，首次将个体工商户经营者变更办理流程由“一注一开”模式调整为直接申请办理经营者变更登记，进一步简化了个体工商户变更流程，有效满足了个体工商户经营权的转让需求，有利于个体工商户的可持续发展。下一步，市监分局将加大宣传力度，向个体工商户充分宣传解读《促进个体户发展条例》，切实加强政策知晓度和惠及面，为个体工商户提供更加高效便捷的登记服务，进一步激发市场活力，营造为高新区良好的营商环境。
          </p> -->

        <div class="sic-middle-bottom">
          <span
            >上一篇：<span
              style="color: #00a6ff; cursor: pointer"
              @click="
                $router.push('/service/information/' + data_list.Before.newsId).catch(err => err);
                $router.go(0);
              "
              >{{ data_list.Before != null ? data_list.Before.newsTitle : '空' }}</span
            ></span
          >
          <span
            >下一篇：<span
              style="color: #00a6ff; cursor: pointer"
              @click="
                $router.push('/service/information/' + data_list.After.newsId).catch(err => err);
                $router.go(0);
              "
              >{{ data_list.After != null ? data_list.After.newsTitle : '空' }}</span
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllList, getOneList } from '@/api/modules/park-service';
import { mapGetters, mapState } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'JzbdFeInformation',

  data() {
    return {
      content_id: '',
      data_list: []
    };
  },

  mounted() {
    console.log(this.$store.getters.RAllList);
    // this.$store.getters.RAllList;
    getAllList({ pageNum: 1, pageSize: 10 }).then(res => {
      console.log(res.rows);
    });
  },

  beforeCreate() {
    document.documentElement.scrollTop = 0;
    this.content_id = this.$route.params.id;
    // this.getList()
    getOneList(this.content_id).then(res => {
      console.log(res);
      this.data_list = res.data;
      console.log(this.data_list);
    });
  },

  methods: {
    next() {
      this.$router.push('/service/information/' + this.data_list.After.newsId).catch(err => err);
      location.reload();
    },
    beforee() {
      this.$router.push('/service/information/' + this.data_list.Before.newsId).catch(err => err);
      location.reload();
    },
    async getList() {
      await getOneList(this.content_id).then(res => {
        console.log(res);
        this.data_list = res.data;
        console.log(this.data_list);
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
      p {
        text-align: left;
        font-size: 28px;
        font-weight: 400;
        line-height: 37px;
        text-indent: 2em;
      }
      img {
        margin-top: 30px;
        margin-bottom: 30px;
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
  }
}
</style>
