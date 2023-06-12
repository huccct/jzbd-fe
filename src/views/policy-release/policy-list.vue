<template>
  <div>
    <div class="header">
      <div class="bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/policy-release' }">政策新闻</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/policy-release/more-policies' }"
            >更多政策</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
      <div class="search">
        <el-input v-model="iptVal" class="ipt"></el-input>
        <el-button type="primary" class="searchBtn" @click="search">立即查询</el-button>
      </div>
    </div>
    <ul class="list_wrapped">
      <div class="bg"></div>
      <li
        v-for="item in policeInfoList.rows"
        :key="item.policyId"
        class="list_item"
        @click="goDetails(item.policyId)"
      >
        <div class="title">{{ item.policyTitle }}</div>
        <div class="des">{{ removeHtmlTags(item.specificContent) }}</div>
        <div class="date">{{ item.creatTime }}</div>
      </li>
    </ul>
    <div class="pagination">
      <el-pagination
        background
        :page-size="pageSize"
        layout=" prev, pager, next, jumper"
        :total="policeInfoList.total"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JzbdFeMorePoliciesList',
  components: {},
  data() {
    return {
      iptVal: '',
      policeInfoList: [],
      pageSize: 10
    };
  },
  computed: {
    removeHtmlTags() {
      return str => str.replace(/<[^>]*>/g, '');
    }
  },
  async created() {
    await this.$store.dispatch('policy/getPolicyInformation', {
      pageNum: 1,
      pageSize: this.pageSize
    });
    this.policeInfoList = this.$store.state.policy.PolicyInformation;
    console.log(this.policeInfoList);
  },
  methods: {
    async search() {
      await this.$store.dispatch('policy/getPolicyInformation', {
        policyTitle: this.iptVal
      });
      this.policeInfoList = this.$store.state.policy.PolicyInformation;
    },
    async handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      await this.$store.dispatch('policy/getPolicyInformation', {
        pageNum: val,
        pageSize: this.pageSize
      });
      this.policeInfoList = this.$store.state.policy.PolicyInformation;
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
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.header {
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
.list_wrapped {
  position: relative;
  height: 2189px;
  margin-top: 80px;
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
      width: 152px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #cdcdcd;
    }
    &:nth-child(1) ~ .list_item {
      margin-top: 20px;
    }
  }
  & .bg {
    z-index: -1;
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('http://47.95.211.240:9000/photo/police/上合产业园网站_slices/112.png')
      no-repeat;
    background-position: bottom 235px right 0;
    background-size: contain;
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
