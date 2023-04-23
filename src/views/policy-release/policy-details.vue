<template>
  <div>
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/policy-release' }">政策发布</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/policy-release/more-policies' }"
          >更多政策</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/policy-release/details' }">详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <div class="title">{{ detailsInfo.policyTitle }}</div>
      <div class="date">{{ detailsInfo.creatTime }}</div>
      <div class="article" v-html="detailsInfo.specificContent"></div>
    </div>
    <div class="div" style="height: 60px"></div>
  </div>
</template>
<script>
import { policyDetailInformation } from '@/api/modules/policy';
export default {
  name: 'JzbdFeMorePoliciesDetails',
  components: {},
  data() {
    return {
      artId: 0,
      detailsInfo: {}
    };
  },
  async created() {
    this.artId = this.$route.params.id;
    // const data = await policyDetailInformation(`/news/policy/t/${this.$route.params.id}`, {
    //   policyId: this.$route.params.id
    // });
    // console.log('da', data);
    await this.$store.dispatch('policy/policyDetailInformation', `/news/policy/t/${this.artId}`, {
      policyId: this.artId
    });
    this.detailsInfo = this.$store.state.policy.policyDetailInformation;
    console.log(this.detailsInfo);
  }
};
</script>
<style lang="scss" scoped>
.bread {
  margin-top: 80px;
}
.main {
  margin-top: 50px;
  height: 2011px;

  & .article {
    margin-top: 52px;
    font-size: 28px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #333333;
  }
  & .title {
    font-size: 30px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #333333;
  }
  & .date {
    margin-top: 30px;
    font-size: 16px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #666666;
  }
}
</style>
