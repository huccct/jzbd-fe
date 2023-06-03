<!--
 * @Author: 袁十一
 * @Date: 2023-04-12 16:34:50
 * @LastEditTime: 2023-06-02 21:05:12
 * @LastEditors: Huccct
 * @Description: 联系我们页面
 * @FilePath: \jzbd-fe\src\views\contact\contact.vue
 * 初心不变，意志坚定
-->
<template>
  <div class="contract">
    <div class="contract-header">
      <div class="sliderbox">
        <img src="http://47.95.211.240:9000/photo/contract/background.png" alt="" />
      </div>
      <div class="text">
        <div class="c-title">CONTACT US</div>
        <div class="l-title">联系我们</div>
      </div>
    </div>
    <div class="container">
      <div class="part-one">
        <div class="contract-content">
          <p>01&nbsp;<span></span>&nbsp;<span> Enterprise settled apply</span></p>
          <p>企业入驻申请</p>
        </div>
        <el-card style="margin: 30px 0">
          <el-steps :active="active">
            <el-step title="企业基本情况"> </el-step>
            <el-step title="知识产权情况"></el-step>
            <el-step title="股权结构"></el-step>
            <el-step title="高层次人才需求"></el-step>
            <el-step title="人孵需求"></el-step>
            <el-step title="附件上传"></el-step>
          </el-steps>
        </el-card>
        <el-menu :default-active="active" class="el-menu-demo" mode="horizontal">
          <el-menu-item v-show="active === 1" index="1">企业基本情况</el-menu-item>
          <el-menu-item v-show="active === 2" index="2">知识产权情况</el-menu-item>
          <el-menu-item v-show="active === 3" index="3">股权结构</el-menu-item>
          <el-menu-item v-show="active === 4" index="4">高层次人才需求</el-menu-item>
          <el-menu-item v-show="active === 5" index="5">人孵需求</el-menu-item>
          <el-menu-item v-show="active === 6" index="6">附件上传</el-menu-item>
        </el-menu>
        <div v-show="active === 1" class="step-box1">
          <el-form>
            <el-row :gutter="30">
              <el-col :span="8">
                <el-form-item label="企业名称">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="成立时间">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="法定代表人">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="8">
                <el-form-item label="现注册地址">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系电话">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="电子邮箱">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="8">
                <el-form-item label="入驻时间">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="注册资本">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="上年度销售额">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="8">
                <el-form-item label="资产总额">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="下年度纳税额">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="发展阶段">
                  <br />
                  <el-checkbox label="研发阶段"></el-checkbox>
                  <el-checkbox label="推广阶段"></el-checkbox>
                  <el-checkbox label="成长阶段"></el-checkbox>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-form-item label="荣誉资质及项目资金扶金情况">
                <el-input type="textarea" :rows="6"></el-input>
              </el-form-item>
            </el-row>
          </el-form>
        </div>
        <div v-show="active === 2" class="step-box2">
          <el-form>
            <el-row :gutter="30">
              <el-col :span="12">
                <el-form-item label="发明专利">
                  <el-input type="textarea"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="软件著作权">
                  <el-input type="textarea"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="12">
                <el-form-item label="实用新型专利">
                  <el-input type="textarea"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="商标">
                  <el-input type="textarea"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div v-show="active === 3" class="step-box3">
          <el-form>
            <el-row v-for="(item, index) in formItems" :key="index">
              <el-row :gutter="30">
                <el-col :span="8">
                  <el-form-item label="姓名">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="身份证号">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="职务">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="8">
                  <el-form-item label="职称">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="占股比例">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-row>
            <el-row :span="24">
              <center><el-button @click="addFormItem">新增一个（最多填报三个）</el-button></center>
            </el-row>
          </el-form>
        </div>
        <div v-show="active === 4" class="step-box4">
          <el-form>
            <el-row v-for="(item, index) in formItems" :key="index">
              <el-row :gutter="30">
                <el-col :span="8">
                  <el-form-item label="姓名">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="职务">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="年龄">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="8">
                  <el-form-item label="学历">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="职称">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="联系方式">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-row>
            <el-row :span="24">
              <center><el-button @click="addFormItem">新增一个（最多填报三个）</el-button></center>
            </el-row>
          </el-form>
        </div>
        <div v-show="active === 5" class="step-box5">
          <el-form>
            <el-row>
              <el-col :span="8">
                <el-form-item label="发展阶段">
                  <br />
                  <el-checkbox label="办公用房"></el-checkbox>
                  <el-checkbox label="生产厂房"></el-checkbox>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="面积">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-form-item label="其他需求">
                <el-input type="textarea" :rows="6"></el-input>
              </el-form-item>
            </el-row>
          </el-form>
        </div>
        <div v-show="active === 6" class="step-box6">
          <el-form>
            <el-row>
              <el-col :span="2">
                <el-menu :default-active="activeIndex">
                  <el-menu-item index="6-1" @click="activeIndex = '6-1'">已成立企业</el-menu-item>
                  <el-menu-item index="6-2" @click="activeIndex = '6-2'">未成立企业</el-menu-item>
                </el-menu>
              </el-col>
              <el-col v-show="activeIndex === '6-1'" :span="22">
                <el-row style="margin-left: 160px">
                  <el-col :span="12"
                    ><el-form-item label="公司简介"
                      ><br /><el-upload
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
                              src="http://47.95.211.240:9000/photo/police/上合产业园网站_slices/附件.png"
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
                      </el-upload></el-form-item
                    ></el-col
                  >
                  <el-col :span="12">
                    <el-form-item label="法定人代表身份证复印件"
                      ><br /><el-upload
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
                              src="http://47.95.211.240:9000/photo/police/上合产业园网站_slices/附件.png"
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
                      </el-upload></el-form-item
                    >
                  </el-col>
                </el-row>
                <el-row style="margin-left: 160px">
                  <el-col :span="12">
                    <el-form-item label="三证合一营业执照复印件"
                      ><br /><el-upload
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
                              src="http://47.95.211.240:9000/photo/police/上合产业园网站_slices/附件.png"
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
                      </el-upload></el-form-item
                    >
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="企业相关资质证书(如有)"
                      ><br /><el-upload
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
                              src="http://47.95.211.240:9000/photo/police/上合产业园网站_slices/附件.png"
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
                      </el-upload></el-form-item
                    ></el-col
                  >
                </el-row>
                <el-row style="margin-left: 160px">
                  <el-col :span="12">
                    <el-form-item label="上一年度财务报表(如有)"
                      ><br /><el-upload
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
                              src="http://47.95.211.240:9000/photo/police/上合产业园网站_slices/附件.png"
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
                      </el-upload></el-form-item
                    ></el-col
                  >
                  <el-col :span="12">
                    <el-form-item label="高层次人才履历证书"
                      ><br /><el-upload
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
                              src="http://47.95.211.240:9000/photo/police/上合产业园网站_slices/附件.png"
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
                      </el-upload></el-form-item
                    ></el-col
                  >
                </el-row>
              </el-col>
              <el-col v-show="activeIndex === '6-2'" :span="22">
                <el-row style="margin-left: 160px">
                  <el-col :span="12"
                    ><el-form-item label="入孵申请书"
                      ><br /><el-upload
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
                              src="http://47.95.211.240:9000/photo/police/上合产业园网站_slices/附件.png"
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
                      </el-upload></el-form-item
                    ></el-col
                  >
                  <el-col :span="12">
                    <el-form-item label="项目主要情况概述"
                      ><br /><el-upload
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
                              src="http://47.95.211.240:9000/photo/police/上合产业园网站_slices/附件.png"
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
                      </el-upload></el-form-item
                    >
                  </el-col>
                </el-row>
                <el-row style="margin-left: 160px">
                  <el-col :span="12">
                    <el-form-item label="项目负责人身份证复印件及履历介绍"
                      ><br /><el-upload
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
                              src="http://47.95.211.240:9000/photo/police/上合产业园网站_slices/附件.png"
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
                      </el-upload></el-form-item
                    >
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <center>
          <el-button type="primary" style="margin-top: 12px" @click="next">下一步 </el-button>
        </center>
      </div>
      <div class="part-two">
        <div class="contract-content">
          <p>02&nbsp;<span></span>&nbsp;<span> Contact us</span></p>
          <p>联系我们</p>
        </div>
        <div class="contract-logos clearfix">
          <div class="logo first clearfix">
            <img src="http://47.95.211.240:9000/photo/contract/location.png" alt="" />
            <p class="p1">园区位置</p>
            <p class="p2">{{ contractText.address }}</p>
          </div>
          <div class="logo">
            <img src="http://47.95.211.240:9000/photo/contract/person.png" alt="" />
            <p class="p1">联系人</p>
            <p class="p2">{{ contractText.person }}</p>
          </div>
          <div class="logo">
            <img src="http://47.95.211.240:9000/photo/contract/phone.png" alt="" />
            <p class="p1">联系方式</p>
            <p class="p2">{{ contractText.phone }}</p>
          </div>
          <div class="logo">
            <img src="http://47.95.211.240:9000/photo/contract/email.png" alt="" />
            <p class="p1">邮箱</p>
            <p class="p2">{{ contractText.email }}</p>
          </div>
        </div>
        <div class="contract-map">
          <img
            src="https://restapi.amap.com/v3/staticmap?location=120.095191,36.165253&zoom=12&size=1280%2A484&markers=-1,http://47.95.211.240:9000/photo/contract/location-2.png,0:120.095191,36.165253&key=900b95537e99785a8b0d415ee9160fd1"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contractText: {
        address: '山东省青岛市胶州上合示范区闽江路60号',
        person: '李先生',
        phone: '0532-85279551',
        email: 'shqycxcyy@163.com'
      },
      active: 1,
      formItems: [
        {
          field1: '',
          field2: '',
          field3: ''
        }
      ],
      activeIndex: '6-1'
    };
  },
  methods: {
    next() {
      if (this.active++ > 5) this.active = 1;
    },
    addFormItem() {
      this.formItems.push({
        field1: '',
        field2: '',
        field3: ''
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.step-box6 {
  .uploadInfo_wrapped {
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
      background: url('http://47.95.211.240:9000/photo/police/上合产业园网站_slices/组_57.png')
        no-repeat;
    }
    &:nth-child(1) ~ .uploadInfo {
      margin-top: 19px;
    }
  }
}
//清除浮动
.clearfix::after {
  content: '';
  clear: both;
  display: block;
}
/*
主内容区容器开始
*/
.container {
  width: 1280px;
  margin: 0 320px;
  margin-top: 101px;
}
.contract-content {
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
  p {
    margin-top: 34px;
    font-weight: 700;
    font-family: Microsoft YaHei-Bold;
    color: #333333;
    font-size: 36px;
  }
}
.contract-logos {
  margin-top: 141px;
}
.contract-logos .logo {
  text-align: center;
}
.contract-logos .first {
  margin-left: 64px;
}
.contract-logos .logo {
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  margin-right: 120px;
  float: left;
}
.contract-logos .logo:nth-child(4) {
  margin-right: 0;
}
.contract-logos .logo .p1 {
  font-size: 16px;
  color: #333333;
  line-height: 32px;
  margin-top: 20px;
}
.contract-logos .logo .p2 {
  font-size: 20px;
  color: #333333;
  line-height: 32px;
  margin-top: 30px;
}
.contract-map {
  margin-top: 114px;
  margin-bottom: 100px;
  position: relative;
}
.contract-map img {
  width: 1280px;
}
/*
主内容区容器结束
*/

/*
头部块开始
*/
.contract {
  width: 100%;
  // min-width: 1902px;
}
.contract .contract-header {
  display: block;
  height: 900px;
  padding-top: 268px;
}
.sliderbox {
  // width: 1902px;
  height: 1000px;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  img {
    width: 100%;
  }
}
.text {
  width: 1271px;
  height: 268px;
  margin: 0 auto;
  position: relative;
}
.text .c-title {
  font-size: 190px;
  font-family: DIN-Bold, DIN;
  font-weight: bold;
  color: #ffffff;
  line-height: 268px;
  opacity: 0.2;
}
.text .l-title {
  width: 304px;
  height: 87px;
  font-size: 66px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  z-index: 2;
  left: 492px;
  top: 132px;
  letter-spacing: 10px;
}
/*
头部块结束
*/
</style>
