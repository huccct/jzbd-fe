<template>
  <div class="more_policies">
    <div class="top"></div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JzbdFeMorePolicies',
  components: {}
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
  position: relative;
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
  // & .bg {
  //   z-index: -1;
  //   bottom: 0;
  //   left: 0;
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   background: url('http://114.116.21.170:9000/photo/police/上合产业园网站_slices/112.png')
  //     no-repeat;
  //   background-position: bottom 220px right 0;
  //   background-size: contain;
  //   & .header {
  //     margin-top: 80px;
  //     & > .search {
  //       margin-top: 80px;
  //       display: flex;
  //       & > .ipt {
  //         margin-left: 159px;
  //         width: 800px;
  //         height: 58px;
  //         background: #f2f2f2;
  //         border-radius: 0px 0px 0px 0px;
  //         opacity: 1;
  //         border: 1px solid #cdcdcd;
  //         & ::v-deep .el-input__inner {
  //           height: 100%;
  //           font-size: 20px;
  //         }
  //       }
  //       & > .searchBtn {
  //         margin-left: 30px;
  //         width: 130px;
  //         height: 58px;
  //         font-size: 20px;
  //         font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  //         font-weight: 400;
  //         color: #ffffff;
  //       }
  //     }
  //   }
  //   & .list_wrapped {
  //     height: 2189px;
  //     margin-top: 80px;
  //     & > .list_item {
  //       border-bottom: 2px solid #f2f2f2;
  //       height: 195px;
  //       display: flex;
  //       flex-flow: column nowrap;
  //       justify-content: space-around;
  //       & > .title {
  //         font-size: 22px;
  //         font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  //         font-weight: bold;
  //         color: #0e7fdb;
  //       }
  //       & .des {
  //         font-size: 18px;
  //         font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  //         font-weight: 400;
  //         color: #666666;
  //         overflow: hidden;
  //         text-overflow: ellipsis;
  //         display: -webkit-box;
  //         -webkit-line-clamp: 2;
  //         -webkit-box-orient: vertical;
  //       }
  //       & .date {
  //         margin-bottom: 30px;
  //         width: 152px;
  //         font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  //         font-weight: 400;
  //         color: #cdcdcd;
  //       }
  //       &:nth-child(1) ~ .list_item {
  //         margin-top: 20px;
  //       }
  //     }
  //   }
  //   & .pagination {
  //     display: flex;
  //     justify-content: center;
  //     width: 594px;
  //     margin: 0 auto;
  //     height: 160px;
  //     &::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  //       background-color: #0e7fdb;
  //     }
  //     &::v-deep .el-pager li {
  //       background-color: #fff;
  //       font-size: 15px;
  //       border: 1px solid #666666 !important;
  //       border-radius: 8px 8px 8px 8px !important;
  //       line-height: 26px;
  //     }
  //     &::v-deep .btn-next {
  //       background-color: #fff;
  //       color: #666666;
  //       font-size: 15px;
  //       border: 1px solid #666666;
  //       border-radius: 8px 8px 8px 8px;
  //     }
  //     &::v-deep .btn-prev {
  //       background-color: #fff;
  //       color: #666666;
  //       font-size: 15px;
  //       border: 1px solid #666666;
  //       border-radius: 8px 8px 8px 8px;
  //     }
  //     &::v-deep .el-pagination {
  //       font-size: 20px;
  //       font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  //       font-weight: 400;
  //     }
  //   }
  // }
}
</style>
