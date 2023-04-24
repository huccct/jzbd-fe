<template>
  <div class="policeRelease">
    <div class="top">
      <div class="textWrapped">
        <div class="topTitle">上合新区发展新政</div>
        <div class="topDescription">
          为助推上合新区高质量发展，8月2日下午，海关税务支持上合新区发展政策发布暨战略合作协议签约仪式
          在上合国家客厅举行。在发布会上，青岛海关发布支持上合新区发展的“532工程”，旨在将上合 ...
        </div>
        <div class="detailBtn">查看详情</div>
      </div>
    </div>
    <div class="policeInfo">
      <div class="container">
        <div class="title">
          <div class="titlf">01</div>
          <div class="titrg">Policy information</div>
        </div>
        <div class="description">
          <div class="deslf">政策信息</div>
          <div class="desrg" @click="$router.push(`/policy-release/more-policies/list`)">
            更多政策>>
          </div>
        </div>
        <div class="policeInfoMain">
          <div class="topImg">
            <img
              src="http://114.116.21.170:9000/photo/police/上合产业园网站_slices/VCG211285793655.png"
              alt=""
            />
          </div>
          <div
            v-for="item in policeInfoList.rows?.slice(0, 4)"
            :key="item.policyId"
            class="policeInfoBoxLf"
            @click="goDetails(item.policyId)"
          >
            <div class="lf">
              <div class="monthDay">{{ dateChange(item.creatTime).monthDay }}</div>
              <div class="year">{{ dateChange(item.creatTime).year }}</div>
            </div>
            <div class="rg">{{ item.policyTitle }}</div>
          </div>
          <div
            v-for="item in policeInfoList.rows?.slice(-5)"
            :key="item.policyId"
            class="policeInfoBoxRg"
            @click="goDetails(item.policyId)"
          >
            <div class="top">{{ item.policyTitle }}</div>
            <div class="bottom">{{ item.creatTime }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="enterpriseInfo">
      <div class="container">
        <div class="title">
          <div class="titlf">02</div>
          <div class="titrg">Enterprise information</div>
        </div>
        <div class="description">企业信息</div>
        <!-- 表单区域 -->
        <div v-if="!isSuccess" class="enterpriseInfoForm">
          <el-form ref="form" :model="form" label-width="90px" :label-position="labelPosition">
            <el-form-item label="企业名称:">
              <el-input v-model="form.enterpriseName" placeholder="请输入企业名称"></el-input>
            </el-form-item>
            <el-form-item label="联系人:">
              <el-input v-model="form.name" placeholder="请输入联系人"></el-input>
            </el-form-item>
            <el-form-item label="联系方式:">
              <el-input v-model="form.ContactInformation" placeholder="请输入联系方式"></el-input>
            </el-form-item>
            <el-form-item label="添加附件:">
              <template>
                <div v-for="(item, index) in uploadInfo" :key="index" class="uploadInfo">
                  <img
                    src="http://114.116.21.170:9000/photo/police/上合产业园网站_slices/附件.png"
                    alt=""
                  />
                  <img
                    class="close"
                    src="http://114.116.21.170:9000/photo/police/上合产业园网站_slices/组_57.png"
                    alt=""
                    @click="del(item)"
                  />
                  <div class="upload_rg">
                    <div class="fileName">
                      {{ item.name }}
                      <img
                        v-if="item.progressPercent === 100"
                        src="http://114.116.21.170:9000/photo/police/上合产业园网站_slices/对号（圆圈对号）.png"
                      />
                    </div>
                    <el-progress
                      v-if="item.progressPercent !== 100"
                      style="width: 260px; height: 6px"
                      :percentage="item.progressPercent"
                      color="#00CC06"
                      :show-text="false"
                      :auto-upload="false"
                    />
                    <div v-else class="fileSize">
                      {{ filterS(item.size) }}
                    </div>
                  </div>
                </div>
              </template>
              <el-upload
                ref="upload"
                class="upload_policy"
                multiple
                :show-file-list="false"
                :http-request="uploadFiles"
                action="https://jsonplaceholder.typicode.com/posts/"
                accept=".zip,.rar,.jpg,.png,.ppt,.pdf"
              >
                <div slot="trigger" class="uploadInfo_wrapped">
                  <div style="display: flex; margin-top: 13px">
                    <img
                      src="http://114.116.21.170:9000/photo/police/上合产业园网站_slices/附件.png"
                      alt=""
                    />
                    <div class="chooseFiles">选取文件</div>
                  </div>
                </div>
                <div slot="tip" class="el-upload__tip">
                  请上传 大小不超过 <span style="color: #0e7fdb">10MB</span> 格式为：<span
                    style="color: #0e7fdb"
                    >rar、zip、jpg、png、pdf、ppt 的文件</span
                  >
                </div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="submitBtn" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-else class="success">
          <img
            src="http://114.116.21.170:9000/photo/police/上合产业园网站_slices/success.png"
            alt=""
          />
          <div class="success_des">提交成功！</div>
          <div class="jump">页面自动 跳转 等待时间：{{ count }}秒</div>
        </div>
      </div>
    </div>
    <div style="height: 160px"></div>
  </div>
</template>

<script>
import { filterSize } from '@/utils/sizeConversion';
import { uploadCompany, uploadFile } from '@/api/modules/policy';
export default {
  name: 'JzbdFePolicyRelease',
  components: {},
  data() {
    return {
      form: {
        name: '',
        enterpriseName: '',
        ContactInformation: ''
      },
      fileList: [],
      labelPosition: 'left',
      uploadInfo: [],
      file: {},
      isSuccess: false,
      count: 3,
      policeInfoList: []
    };
  },
  computed: {
    dateChange() {
      return date => {
        let dateArr = date.split('-');
        let year = dateArr[0];
        let month = dateArr[1];
        let day = dateArr[2];
        let monthDay = month + '/' + day;
        return {
          monthDay,
          year
        };
      };
    }
  },
  async created() {
    await this.$store.dispatch('policy/getPolicyInformation', { pageNum: 1, pageSize: 10 });
    this.policeInfoList = this.$store.state.policy.PolicyInformation;
    console.log(this.policeInfoList);
  },
  methods: {
    async onSubmit() {
      const { code } = await uploadCompany({
        companyName: this.form.enterpriseName,
        contactsPeople: this.form.name,
        contactPhone: this.form.ContactInformation,
        url: this.uploadInfo.map(item => item.url).join(','),
        status: '0'
      });
      if (code === 200) {
        this.$message.success('提交成功');
        this.isSuccess = true;
        const timer = setInterval(() => {
          this.count--;
          if (this.count <= 0) {
            clearInterval(timer);
            this.$router.push('/');
          }
        }, 1000);
      }
    },
    async uploadFiles(param) {
      console.log(param);
      const file = param.file;
      this.file = file;
      console.log('fi', file);
      if (file.size >= 10485760) {
        this.$message.error('文件不能超过10M！');
        return;
      }
      file.progressPercent = 0;
      this.uploadInfo.push(file);
      const formData = new FormData();
      formData.append('file', file);
      const { url } = await uploadFile(formData, {
        onUploadProgress: progress => {
          // 格式化成百分数
          this.uploadInfo = this.uploadInfo.map(item => {
            item === file &&
              (item.progressPercent = Math.floor((progress.loaded / progress.total) * 100));
            return item;
          });
        }
      });
      file.url = url;
      // axios
      //   .post(
      //     'http://127.0.0.1:4523/m1/2574207-0-default/companyinfo/companyinfo/t/upload/minio',
      //     formData,
      //     {
      //       onUploadProgress: progress => {
      //         // 格式化成百分数
      //         this.uploadInfo = this.uploadInfo.map(item => {
      //           item === file &&
      //             (item.progressPercent = Math.floor((progress.loaded / progress.total) * 100));
      //           return item;
      //         });
      //       }
      //     }
      //   )
      //   .then(res => {
      //     file.url = res.data.url;
      //   });
    },
    filterS(size) {
      return filterSize(size);
    },
    del(file) {
      this.uploadInfo = this.uploadInfo.filter(item => item !== file);
      console.log(this.uploadInfo);
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

contain
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.title {
  position: relative;
  margin-top: 99px;
  width: 390px;
  display: flex;
  justify-content: space-between;
  &::after {
    content: '';
    position: absolute;
    top: 13px;
    left: 47px;
    width: 80px;
    // border: 2px solid #cdcdcd;
    height: 2px;
    background-color: #cdcdcd;
  }
  & > .titlf {
    width: 33px;
    height: 36px;
    font-size: 30px;
    font-family: DIN-Bold, DIN;
    font-weight: bold;
    color: #007dc0;
    line-height: 27px;
  }
  & > .titrg {
    width: 249px;
    height: 36px;
    line-height: 32px;
    font-size: 26px;
    font-family: DIN-Bold, DIN;
    font-weight: bold;
    color: #cdcdcd;
  }
}
.policeRelease {
  width: 100%;
  & .container {
    width: 1368px;
    margin: 0 auto;
  }
  & > .top {
    width: 100%;
    height: 1000px;
    margin-top: -65px;
    background: url('http://114.116.21.170:9000/photo/police/上合产业园网站_slices/VCG41N1163690562.png')
      no-repeat;
    background-size: cover;
    & > .textWrapped {
      // margin-top: 413px;
      // margin-left: 320px;
      padding-top: 413px;
      padding-left: 320px;
      & > .topTitle {
        width: 620px;
        height: 87px;
        font-size: 66px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
        line-height: 27px;
        letter-spacing: 10px;
      }
      & > .topDescription {
        width: 831px;
        height: 54px;
        font-size: 18px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        line-height: 30px;
      }
      & > .detailBtn {
        margin-top: 144px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 210px;
        height: 58px;
        background: #ffffff;
        border-radius: 4px 4px 4px 4px;
        opacity: 1;
        border: 1px solid #707070;
        font-size: 16px;
        color: #0e7fdb;
      }
    }
  }
  & > .policeInfo {
    height: 1303px;
    & .container > .description {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > .deslf {
        width: 144px;
        height: 47px;
        font-size: 36px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: bold;
        color: #333333;
        // line-height: 24px;
      }
      & > .desrg {
        width: 78px;
        height: 19px;
        font-size: 14px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: bold;
        color: #0e7fdb;
        cursor: pointer;
      }
    }
    & .container > .policeInfoMain {
      width: 100%;
      height: 850px;
      margin-top: 80px;
      display: flex;
      flex-flow: column wrap;
      align-content: space-between;
      & > .topImg {
        width: 620px;
        height: 250px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50px 50px 0px 0px;
        }
      }
      & > .policeInfoBoxLf {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 620px;
        height: 150px;
        & > .lf {
          & > .monthDay {
            width: 82px;
            height: 39px;
            font-size: 32px;
            font-family: DIN-Bold, DIN;
            font-weight: bold;
            color: #333333;
            line-height: 25px;
          }
          & > .year {
            width: 38px;
            height: 22px;
            font-size: 18px;
            font-family: DIN-Regular, DIN;
            font-weight: 400;
            color: #cdcdcd;
            line-height: 26px;
          }
        }
        & > .rg {
          width: 462px;
          height: 62px;
          font-size: 22px;
          font-family: Microsoft YaHei-Bold, Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          line-height: 33px;
        }
      }
      & .policeInfoBoxLf:nth-child(2) ~ .policeInfoBoxLf {
        border-top: 2px solid #eff8ff;
      }
      & > .policeInfoBoxRg {
        padding-left: 50px;
        display: flex;
        flex-direction: column;
        align-items: self-start;
        justify-content: center;
        width: 606px;
        height: 145px;
        background-color: #ffffff;
        box-shadow: 0px 3px 6px 1px #e6e6e6;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;

        & > .top {
          width: 415px;
          height: 29px;
          font-size: 22px;
          font-family: Microsoft YaHei-Bold, Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          line-height: 33px;
        }
        & > .bottom {
          margin-top: 17px;
          width: 92px;
          height: 22px;
          font-size: 14px;
          font-family: DIN-Regular, DIN;
          font-weight: 400;
          color: #cdcdcd;
          line-height: 26px;
        }
      }
      & > .policeInfoBoxRg:nth-child(6) ~ .policeInfoBoxRg {
        margin-top: 24px;
      }
      & > .policeInfoBoxRg:hover {
        background-color: #00a6ff;
        box-shadow: 0px 3px 10px 1px #006499;
        & > .top,
        .bottom {
          color: #ffffff;
        }
      }
    }
  }
  & > .enterpriseInfo {
    height: 850px;
    background: url(http://114.116.21.170:9000/photo/police/上合产业园网站_slices/bg.png) no-repeat;
    background-size: cover;
    padding-top: 100px;
    & .container > .title {
      width: 440px;
      margin-top: 0;
      margin-left: 62px;
      & > .titrg {
        width: 300px;
      }
    }
    & > .container > .description {
      width: 144px;
      height: 47px;
      font-size: 36px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: bold;
      color: #333333;
      line-height: 24px;
      margin-top: 20px;
      margin-left: 62px;
    }
    & .container > .enterpriseInfoForm {
      margin-top: 80px;
      margin-left: 204px;
      width: 814px;
      ::v-deep .el-input {
        width: 699px;
        height: 50px;
      }
      ::v-deep .el-form-item__label {
        font-size: 16px;
      }
      & .uploadInfo_wrapped {
        display: flex;
        flex-direction: column;
        & .chooseFiles {
          margin-left: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 78px;
          height: 30px;
          border-radius: 10px 10px 10px 10px;
          opacity: 1;
          border: 1px solid #0e7fdb;
          font-size: 14px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: #0e7fdb;
        }
      }
      .uploadInfo {
        z-index: 999;
        position: relative;
        // margin-top: 19px;
        width: 699px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        & > img {
          width: 25.4px;
          height: 29.3px;
          object-fit: cover;
        }
        & > .upload_rg {
          flex: 1;
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          & > .fileName {
            width: 100%;
            display: flex;
            margin-top: 2px;
            height: 21px;
            line-height: normal;
            font-size: 14px;
            justify-content: space-between;
            & img {
              width: 14px;
              height: 14px;
              object-fit: cover;
            }
          }
          & > .fileSize {
            height: 21px;
            line-height: normal;
            font-size: 12px;
            color: #666666;
          }
        }
        & .close {
          cursor: pointer;
          position: absolute;
          bottom: 3px;
          left: 19px;
          width: 14px;
          height: 14px;
          background: url('http://114.116.21.170:9000/photo/police/上合产业园网站_slices/组_57.png')
            no-repeat;
        }
        &:nth-child(1) ~ .uploadInfo {
          margin-top: 19px;
        }
      }
      & .submitBtn {
        margin-left: 224px;
        width: 136px;
        height: 50px;
        background: #0e7fdb;
        border-radius: 15px 15px 15px 15px;
        opacity: 1;
        font-size: 20px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
      }
    }
    & > .container > .success {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > div {
        flex: 1;
      }
      & > .success_des {
        font-size: 40px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        line-height: 32px;
        margin-top: 31px;
        margin-bottom: 40px;
      }
      & > .jump {
        font-size: 18px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        line-height: 32px;
      }
    }
  }
}
</style>
