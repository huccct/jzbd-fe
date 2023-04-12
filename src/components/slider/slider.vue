<template>
  <div
    class="slider"
    :style="{ width: sliderWidth + 'px', height: sliderHeight + 'px' }"
    @mouseenter="enter"
    @mouseleave="leave"
  >
    <div
      ref="sw"
      class="slider-wrapper"
      :style="{
        transform: 'translateX(' + offset + 'px)',
        width: (items.length + 1) * sliderWidth + 'px'
      }"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="slider-item"
        :style="{ width: sliderWidth + 'px' }"
      >
        <img :src="item.src" alt="" />
      </div>
    </div>
    <div class="slider-arrows">
      <span class="slider-arrow slider-arrow-prev" @click="prev">
        <img src="" class="fas fa-chevron-left" />
      </span>
      <span class="slider-arrow slider-arrow-next" @click="next">
        <img src="" class="fas fa-chevron-right" />
      </span>
    </div>
    <div class="slider-index1">{{ (currentIndex + 1).toString().padStart(2, '0') }}</div>
    <div class="slider-index2">/{{ items.length.toString().padStart(2, '0') }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: 'http://114.116.21.170:9000/photo/slider1.png' },
        { src: 'http://114.116.21.170:9000/photo/slider1.png' },
        { src: 'http://114.116.21.170:9000/photo/slider1.png' },
        { src: 'http://114.116.21.170:9000/photo/slider1.png' }
      ],
      currentIndex: 0,
      offset: 0,
      sliderWidth: 1900,
      sliderHeight: 1000,
      timer: null,
      autoPlay: true
    };
  },
  mounted() {
    this.sliderWidth = this.$el.parentNode.offsetWidth;
    this.startAutoPlay();
  },
  methods: {
    startAutoPlay() {
      if (this.autoPlay) {
        this.timer = setInterval(() => {
          this.next();
        }, 1500);
      }
    },
    stopAutoPlay() {
      clearInterval(this.timer);
      this.timer = null;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.offset = -this.currentIndex * this.sliderWidth;
    },

    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.offset = -this.currentIndex * this.sliderWidth;
    },
    handleControlClick(index) {
      this.currentIndex = index;
      this.offset = -this.currentIndex * this.sliderWidth;
      this.stopAutoPlay();
    },
    enter() {
      this.timer && clearInterval(this.timer);
    },
    leave() {
      if (this.autoPlay) {
        this.startAutoPlay();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  overflow: hidden;
  .slider-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }
  .slider-item {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .slider-arrows {
    position: absolute;
    top: 436px;
    z-index: 1;
    left: 0;
    right: 0;
    .slider-arrow {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: background-color 0.5s ease;
      &.slider-arrow-prev {
        float: left;
      }
      &.slider-arrow-next {
        float: right;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
      &:disabled {
        cursor: not-allowed;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
  .slider-index1 {
    position: absolute;
    top: 254px;
    right: 386px;
    color: rgba(255, 255, 255);
    padding: 4px 10px;
    border-radius: 4px;
    margin-left: 10px;
    font-size: 60px;
    z-index: 1;
  }
  .slider-index2 {
    position: absolute;
    top: 259px;
    right: 317px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 36px;
    padding: 4px 10px;
    border-radius: 4px;
    margin-left: 10px;
    z-index: 1;
  }
}
</style>
