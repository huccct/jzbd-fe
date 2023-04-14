<template>
  <div class="policeRelease">
    <div class="content">
      <div class="imgWrapped"></div>
      <div class="textWrapped">
        <div class="topTitle">上合新区发展新政</div>
        <div class="topDescription">
          为助推上合新区高质量发展，8月2日下午，海关税务支持上合新区发展政策发布暨战略合作协议签约仪式
          在上合国家客厅举行。在发布会上，青岛海关发布支持上合新区发展的“532工程”，旨在将上合 ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JzbdFePolicyRelease',
  components: {}
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.policeRelease {
  width: 100%;
  & > .content {
    margin-top: 20px;
    width: 100%;
    height: 1000px;
    & > .imgWrapped {
      width: 100%;
      height: 100%;
      background: url('http://114.116.21.170:9000/photo/police/上合产业园网站_slices/VCG41N1163690562.png')
        no-repeat left top;
      background-size: cover;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
    }
    & > .textWrapped {
      margin-top: 312px;
      margin-left: 320px;
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
    }
  }
}
</style>
