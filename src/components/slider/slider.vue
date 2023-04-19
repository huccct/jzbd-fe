<template>
  <div class="slider">
    <el-carousel
      ref="carousel"
      :height="height"
      :interval="3000"
      arrow-direction="none"
      :indicator-position="'none'"
      :arrow-prev-icon="prevArrow"
      :arrow-next-icon="nextArrow"
      :arrow="'never'"
      @change="handleCarouselChange"
    >
      <el-carousel-item v-for="item in items" :key="item.id">
        <img :src="item.src" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="slider-arrows">
      <span class="slider-arrow slider-arrow-prev" @click="prev">
        <img src="http://114.116.21.170:9000/photo/aleft.png" class="fas fa-chevron-left" />
      </span>
      <span class="slider-arrow slider-arrow-next" @click="next">
        <img src="http://114.116.21.170:9000/photo/aright.png" class="fas fa-chevron-right" />
      </span>
    </div>
    <div class="slider-index1">{{ (currentIndex + 1).toString().padStart(2, '0') }}</div>
    <div class="slider-index2">/{{ items.length.toString().padStart(2, '0') }}</div>
  </div>
</template>

<script>
import { debounce } from 'lodash';
export default {
  data() {
    return {
      items: [
        { id: 1, src: 'http://114.116.21.170:9000/photo/slider1.png' },
        { id: 2, src: 'http://114.116.21.170:9000/photo/slider2.png' },
        { id: 3, src: 'http://114.116.21.170:9000/photo/slider3.png' },
        { id: 4, src: 'http://114.116.21.170:9000/photo/slider4.png' },
        { id: 5, src: 'http://114.116.21.170:9000/photo/slider5.png' }
      ],
      height: '1000px',
      currentIndex: 0,
      isAnimating: false
    };
  },
  computed: {
    prevArrow() {
      return `<img src="http://114.116.21.170:9000/photo/aleft.png">`;
    },
    nextArrow() {
      return `<img src="http://114.116.21.170:9000/photo/aright.png">`;
    }
  },
  methods: {
    handleCarouselChange(index) {
      if (this.isAnimating) {
        return;
      }
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
      this.currentIndex = index;
    },
    next: debounce(function () {
      console.log('111');
      this.$refs.carousel.next();
    }, 500),
    prev: debounce(function () {
      this.$refs.carousel.prev();
    }, 500)
  }
};
</script>

<style lang="scss" scoped>
.slider-index1 {
  position: absolute;
  line-height: 60px;
  font-family: D-DIN-Bold, D-DIN;
  font-size: 72px;
  font-weight: 700;
  top: 300px;
  right: 384px;
  color: #ffffff;
  z-index: 2;
}
.slider-index2 {
  position: absolute;
  top: 300px;
  right: 303px;
  font-weight: 700;
  font-size: 42px;
  line-height: 42px;
  color: #ffffff;
  z-index: 2;
}
.slider-arrows {
  position: absolute;
  top: 436px;
  z-index: 2;
  left: 0;
  right: 0;
  .slider-arrow {
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.5s ease;
    &.slider-arrow-prev {
      float: left;
    }
    &.slider-arrow-next {
      float: right;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
