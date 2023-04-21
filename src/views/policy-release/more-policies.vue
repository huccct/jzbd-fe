<template>
  <div class="more_policies">
    <div class="top"></div>
    <div class="main">
      <div class="container">
        <div class="header">
          <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/policy-release' }">政策发布</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/policy-release/more-policies' }"
                >更多政策</el-breadcrumb-item
              >
            </el-breadcrumb>
          </div>
          <div class="search">
            <el-input v-model="iptVal" class="ipt"></el-input>
            <el-button type="primary" class="searchBtn">立即查询</el-button>
          </div>
        </div>
        <ul class="list_wrapped">
          <li v-for="index in 10" :key="index" class="list_item">
            <div class="title">关于印发青岛市促进航运产业高质量发展15条政策的通知</div>
            <div class="des">
              一、鼓励航运企业落户发展。对我市新引进或在我市新设立并实际经营一年以上的独立法人船公司，给予一次性奖励，对上年度在青岛港口完成外贸集装箱装卸量
              分别超过10万标准箱、20万标准箱和50万标准箱，或完成内贸集装箱装卸量分别超过50万标准箱、100万标准箱和200万标准箱的，分档奖励
              ...
            </div>
            <div class="date">2022-12-29 09:36</div>
          </li>
        </ul>
        <div class="pagination">
          <el-pagination
            background
            :current-page="currentPage4"
            :page-size="10"
            layout=" prev, pager, next, jumper"
            :total="60"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JzbdFeMorePolicies',
  components: {},
  data() {
    return {
      iptVal: '',
      policeInfoList: []
    };
  },
  async created() {
    await this.$store.dispatch('policy/getPolicyInformation');
    this.policeInfoList = this.$store.state.policy.PolicyInformation;
    console.log(this.policeInfoList);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.more_policies {
  .container {
    width: 1280px;
    margin: 0 auto;
  }
  & > .top {
    position: relative;
    width: 100%;
    height: 400px;
    margin-top: -65px;
    background: url('http://114.116.21.170:9000/photo/police/上合产业园网站_slices/zsBg.png')
      no-repeat;
    background-size: cover;
  }
  & .main {
    height: 2482px;
    background: url('http://114.116.21.170:9000/photo/police/上合产业园网站_slices/112.png')
      no-repeat;
    background-position: bottom 568px right 0;
    background-size: contain;
    & .header {
      margin-top: 80px;
      & > .search {
        margin-top: 80px;
        display: flex;
        & > .ipt {
          margin-left: 159px;
          width: 800px;
          height: 58px;
          background: #f2f2f2;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          border: 1px solid #cdcdcd;
          & ::v-deep .el-input__inner {
            height: 100%;
            font-size: 20px;
          }
        }
        & > .searchBtn {
          margin-left: 30px;
          width: 130px;
          height: 58px;
          font-size: 20px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
        }
      }
    }
    & .list_wrapped {
      margin-top: 80px;
      & > .list_item {
        border-bottom: 2px solid #f2f2f2;
        height: 193px;
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
        }
        & .date {
          margin-bottom: 30px;
          width: 152px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: #cdcdcd;
        }
      }
    }
    & .pagination {
      width: 594px;
      margin: 0 auto;
      margin-top: 100px;
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
  }
}
</style>
