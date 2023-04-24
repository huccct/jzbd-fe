<!--
 * @Author: hayyot
 * @Date: 2023-04-14 22:52:08
 * @Description: 铁沸物
 * @FilePath: \jzbd-fe\src\views\park-service\details\servicedetails.vue
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
      <p class="xwgg">新闻公告</p>
    </div>
    <div class="si-content">
      <div class="si-content-top">
        <img src="http://114.116.21.170:9000/photo/service/information/%E7%BB%84%2079.png" alt="" />
        <el-breadcrumb class="el-breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/service' }">园区服务</el-breadcrumb-item>
          <el-breadcrumb-item>新闻公告</el-breadcrumb-item>
        </el-breadcrumb>
        <hr />
      </div>
      <ul class="list_wrapped">
        <li
          v-for="item in data_list"
          :key="item.newsId"
          class="list_item"
          @click="godetails(item.newsId)"
        >
          <div class="title">{{ item.newsTitle }}</div>
          <div class="des">{{ item.newsTitle }}</div>
          <div class="date">{{ item.createTime }}</div>
        </li>
      </ul>
      <div class="pagination">
        <el-pagination
          background
          :page-size="pageSize"
          layout=" prev, pager, next, jumper"
          :total="total"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllList } from '@/api/modules/park-service';
import router from '@/router';
export default {
  name: 'JzbdFeServicedetails',

  data() {
    return {
      data_list: {},
      total: 0,
      pageSize: 10
    };
  },

  mounted() {
    getAllList().then(res => {
      this.data_list = res.rows;
      this.total = res.total;
      // console.log(res.rows);
    });
  },

  beforeCreate() {},

  methods: {
    godetails(index) {
      this.$router.push('/service/information/' + index);
    },
    async handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      await getAllList({
        pageNum: val,
        pageSize: this.pageSize
      }).then(res => {
        this.data_list = res.rows;
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
  .xwgg {
    text-align: left;
    position: absolute;
    left: 321px;
    top: 220px;
    width: 304px;
    height: 87px;
    font-size: 66px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #ffffff;
    line-height: 27px;
    // letter-spacing: 200px;
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
}
.list_wrapped {
  text-align: left;
  //   height: 2189px;
  margin-top: 80px;
  margin-bottom: 80px;
  & > .list_item {
    cursor: pointer;
    border-bottom: 2px solid #f2f2f2;
    height: 195px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    & > .title {
      font-size: 22px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: bold;
      color: #0e7fdb;
    }
    & .des {
      font-size: 18px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    & .date {
      margin-bottom: 30px;
      //   width: 152px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #cdcdcd;
    }
    &:nth-child(1) ~ .list_item {
      margin-top: 20px;
    }
  }
}
.pagination {
  display: flex;
  justify-content: center;
  width: 594px;
  margin: 0 auto;
  height: 160px;
  &::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #0e7fdb;
  }
  &::v-deep .el-pager li {
    background-color: #fff;
    font-size: 15px;
    border: 1px solid #666666 !important;
    border-radius: 8px 8px 8px 8px !important;
    line-height: 26px;
  }
  &::v-deep .btn-next {
    background-color: #fff;
    color: #666666;
    font-size: 15px;
    border: 1px solid #666666;
    border-radius: 8px 8px 8px 8px;
  }
  &::v-deep .btn-prev {
    background-color: #fff;
    color: #666666;
    font-size: 15px;
    border: 1px solid #666666;
    border-radius: 8px 8px 8px 8px;
  }
  &::v-deep .el-pagination {
    font-size: 20px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
  }
}
</style>
