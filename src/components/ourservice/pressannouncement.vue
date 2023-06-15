<!--
 * @Author: hayyot
 * @Date: 2023-04-13 08:45:56
 * @Description: 铁沸物
 * @FilePath: \jzbd-fe\src\components\ourservice\pressannouncement.vue
-->
<template>
  <div class="pa-box">
    <!-- <div class="pa-bg">
      <img src="http://47.95.211.240:9000/photo/service/%E8%B7%AF%E5%BE%84%2069.png" alt="">
    </div> -->
    <div class="pa-topic">
      <div>
        <p>02&nbsp;<span></span>&nbsp;<span>Parks News</span></p>
      </div>
      <p>园区新闻</p>
    </div>
    <div class="pa-content">
      <div class="pa-content_left">
        <div>
          <img style="width: 538px; height: 380px" :src="list_data2.newsImg" />
          <div>{{ list_data2.createTime }}</div>
        </div>
        <p
          @click="
            $router.push('/policy-release/information/' + list_data2.newsId).catch(err => err)
          "
        >
          {{ list_data2.newsTitle }}
        </p>
        <hr />
        <p
          @click="
            $router.push('/policy-release/information/' + list_data2.newsId).catch(err => err)
          "
        >
          {{ list_data2.newsTitle }}>
          {{ list_data2.remark }}
        </p>
        <!-- <div>
          <img
            src="http://47.95.211.240:9000/photo/service/a546ff9406d87b46a9a7dbad6bb84b91e8860ae12028d-CUQjrp.png"
          />
          <div>2022-12-18</div>
        </div>
        <p>高新区举办政府项目精准谋划与平台公司合规...</p>
        <hr />
        <p>
          近日，记者在高新区资阳石油钢管有限公司了解到，今年国家管网重点工程已经保供完成，正在进行社会市场管线的生产工作...
        </p> -->
        <button @click="$router.push('/policy-release/list').catch(err => err)">详情>></button>
      </div>
      <div class="pa-content_right">
        <div v-for="item in list_data.slice(1)" :key="item.newsId" class="pa-content_right1">
          <div>
            <span
              @click="$router.push('/policy-release/information/' + item.newsId).catch(err => err)"
              >{{ item.createTime.slice(5, 10).replace('-', '/') }}</span
            >
            <span
              @click="$router.push('/policy-release/information/' + item.newsId).catch(err => err)"
              >{{ item.createTime.slice(0, 4) }}</span
            >
          </div>
          <div></div>
          <div>
            <p
              @click="$router.push('/policy-release/information/' + item.newsId).catch(err => err)"
            >
              {{ item.newsTitle }}
            </p>
            <p
              @click="$router.push('/policy-release/information/' + item.newsId).catch(err => err)"
            >
              {{ item.remark }}
            </p>
          </div>
        </div>
        <!-- <div class="pa-content_right1">
          <div>
            <span>12/18</span>
            <span>2022</span>
          </div>
          <div></div>
          <div>
            <p>高新区举办特色金融产品专题推介会</p>
            <p>近日，记者在高新区资阳石油钢管有限公司了解到，今年国家管网重点工程已经保供完成。</p>
          </div>
        </div>
        <div class="pa-content_right1">
          <div>
            <span>12/18</span>
            <span>2022</span>
          </div>
          <div></div>
          <div>
            <p>高新区举办特色金融产品专题推介会</p>
            <p>近日，记者在高新区资阳石油钢管有限公司了解到，今年国家管网重点工程已经保供完成。</p>
          </div>
        </div>
        <div class="pa-content_right1">
          <div>
            <span>12/18</span>
            <span>2022</span>
          </div>
          <div></div>
          <div>
            <p>高新区举办特色金融产品专题推介会</p>
            <p>近日，记者在高新区资阳石油钢管有限公司了解到，今年国家管网重点工程已经保供完成。</p>
          </div>
        </div> -->
        <!-- <div class="pa-content_right1">
          <p class="pa-content_right_topic">12/18</p>
        </div>
        <div class="pa-content_right1">
          <p class="pa-content_right_topic">12/18</p>
        </div>
        <div class="pa-content_right1">
          <p class="pa-content_right_topic">12/18</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getAllList } from '@/api/modules/park-service';

export default {
  name: 'JzbdFePressannouncement',

  data() {
    return {
      list_data: [],
      list_data2: {}
    };
  },

  created() {
    getAllList({
      pageNum: 1,
      pageSize: 5
    }).then(res => {
      // console.log(res.rows);
      this.list_data = res.rows;
      this.list_data2 = res.rows[0];
      this.list_data2.createTime = res.rows[0].createTime.slice(0, 10);
      // console.log(this.list_data2);
      if (this.list_data2.newsImg != null) {
        this.list_data2.newsImg = this.list_data2.newsImg.split(',')[0];
      }
      // console.log(this.list_data2.newsImg.split(',')[0]);
    });
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.pa-box {
  background-image: url('http://47.95.211.240:9000/photo/service/%E8%B7%AF%E5%BE%84%2069.png');
  background-repeat: no-repeat;
  height: 1165px;
  width: 100%;
  // min-width: 1900px;
  .pa-bg {
    position: absolute;
    z-index: -1;
  }
  .pa-topic {
    padding-top: 80px;
    margin-left: 320px;
    div:nth-child(1) {
      p:nth-child(1) {
        color: #007dc0;
        font-size: 30px;
        font-family: DIN-Bold-Regular;
        text-align: center;
        line-height: 30px;
        display: flex;
        span:nth-child(1) {
          margin-left: 14px;
          margin-top: 15px;
          width: 80px;
          border-top: 2px solid #cdcdcd;
          margin-right: 14px;
        }
        span:nth-child(2) {
          display: inline;
          font-size: 30px;
          color: #cdcdcd;
          font-weight: Regular;
          font-family: DIN-Bold-Regular;
        }
      }
    }
    p {
      margin-top: 34px;
      font-weight: 700;
      font-family: Microsoft YaHei-Bold;
      color: #333333;
      font-size: 50px;
    }
  }
  .pa-content {
    // display: inline-block;
    .pa-content_left {
      display: inline-block;
      margin-top: 85px;
      margin-left: 320px;
      width: 538px;
      div:nth-child(1) {
        img {
          z-index: 0;
          // position: absolute;
        }
        div {
          float: none;
          position: relative;
          z-index: 100;
          // top: 100px;
          top: -54px;
          line-height: 50px;
          vertical-align: middle;
          text-align: center;
          height: 50px;
          width: 200px;
          font-size: 24px;
          font-weight: 400;
          color: #ffffff;
          background-color: #00a6ff;
        }
      }
      p:nth-child(2) {
        position: relative;
        top: -54px;
        cursor: pointer;
        height: 26px;
        width: 521px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        // -webkit-line-clamp: 1;
        // -webkit-box-orient: vertical;
        // display: -webkit-box;
        margin-top: 20px;
        margin-bottom: 20px;
        font-family: Microsoft YaHei-Bold;
        font-weight: 700;
        font-size: 20px;
        color: #333333;
      }
      hr:nth-child(3) {
        position: relative;
        top: -54px;
      }
      p:nth-child(4) {
        cursor: pointer;
        position: relative;
        top: -54px;
        width: 538px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        height: 48px;
        margin-top: 20px;
        margin-bottom: 20px;
        font-family: Microsoft YaHei-Regular;
        font-weight: 400;
        font-size: 18px;
        color: #666666;
      }
      button {
        position: relative;
        top: -54px;
        border: none;
        height: 40px;
        width: 100px;
        color: #ffffff;
        border-radius: 5px 5px 5px 5px;
        background-color: #00a6ff;
      }
      button:hover {
        background-color: #66b1ff;
        cursor: pointer;
      }
    }
    .pa-content_right {
      // background-color: #cdcdcd;
      position: relative;
      top: -100px;
      display: inline-block;
      width: 800px;
      margin-left: 20px;
      .pa-content_right1 {
        margin-bottom: 25px;
        // background: #606669;
        height: 110px;
        display: inline-block;
        div:nth-child(1) {
          margin-top: -20px;
          display: inline-block;
          width: 117px;
          :nth-child(1) {
            position: relative;
            top: 0px;
            // display: inline-block;
            width: 117px;
            height: 42px;
            font-size: 42px;
            font-weight: 400;
            color: #333333;
            font-family: Microsoft YaHei-Regular;
          }
          :nth-child(2) {
            display: inline-block;
            margin-left: 69px;
            margin-top: 18px;
            margin-right: 1px;
            font-family: Microsoft YaHei-Regular;
            font-size: 20px;
            color: #333333;
            // text-align: right;
            font-weight: 400;
          }
        }
        div:nth-child(2) {
          margin-left: 19px;
          margin-right: 30px;
          display: inline-block;
          height: 110px;
          border-left: 1px solid #707070;
        }
        div:nth-child(3) {
          display: inline-block;
          :nth-child(1) {
            width: 556px;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 20px;
            font-weight: 700;
            color: #333333;
            line-height: 20px;
          }
          :nth-child(2) {
            margin-top: 20px;
            width: 556px;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 18px;
            font-weight: 400;
            color: #666666;
            line-height: 24px;
            // padding-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
