<!--
 * @Description: 
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-04-21 23:03:17
 * @LastEditors: Huccct
 * @LastEditTime: 2023-06-02 21:07:34
 * @FilePath: \jzbd-fe\src\views\policy-release\policy-details.vue
-->
<template>
  <div>
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/policy-release' }">政策发布</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/policy-release/more-policies/list' }"
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
    <div class="mediaList">
      <div
        v-for="(item, index) in detailsInfo.downloadAddress?.split(',')"
        :key="index"
        class="mediaItem"
        @click="downLoad"
      >
        <img src="http://47.95.211.240:9000/photo/police/上合产业园网站_slices/附件-1.png" alt="" />
        <div class="mediaDes">
          <a :href="item" :download="filename(item)">{{ filename(item) }}</a>
        </div>
      </div>
    </div>
    <div class="div" style="height: 60px"></div>
  </div>
</template>
<script>
import { policyDetailInformation } from '@/api/modules/policy';
import { extractFilename } from '@/utils/sizeConversion';
export default {
  name: 'JzbdFeMorePoliciesDetails',
  components: {},
  data() {
    return {
      artId: 0,
      detailsInfo: {}
    };
  },
  computed: {
    filename() {
      return url => extractFilename(url);
    }
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
  },
  methods: {
    downLoad() {}
  }
};
</script>
<style lang="scss" scoped>
.bread {
  margin-top: 80px;
}
.main {
  margin-top: 50px;
  // height: 1750px;
  // overflow-y: auto;

  & .article {
    margin-top: 52px;
    font-size: 28px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    &::v-deep p {
      margin: 10px 0;
      color: #333333;

      font-size: 28px;
    }
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
.mediaList {
  margin: 50px 0 150px 0;
  & > .mediaItem {
    cursor: pointer;
    display: flex;
    align-items: center;
    & > img {
      width: 25px;
      height: 22px;
      object-fit: cover;
    }
    & > .mediaDes {
      margin-left: 19px;
      & > a {
        font-size: 26px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #00a6ff;
        text-decoration: none;
      }
    }
    &:not(:first-child) {
      margin-top: 28px;
    }
  }
}
</style>
