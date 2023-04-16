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
        v-for="(item, index) in items.slice(1)"
        :key="index"
        class="slider-item"
        :style="{ width: sliderWidth + 'px' }"
      >
        <img :src="item.src" alt="" />
      </div>
    </div>
    <div class="slider-arrows">
      <span class="slider-arrow slider-arrow-prev" @click="prev">
        <img src="http://114.116.21.170:9000/photo/aleft.png" class="fas fa-chevron-left" />
      </span>
      <span class="slider-arrow slider-arrow-next" @click="next">
        <img src="http://114.116.21.170:9000/photo/aright.png" class="fas fa-chevron-right" />
      </span>
    </div>
    <div class="slider-index1">{{ (currentIndex + 1).toString().padStart(2, '0') }}</div>
    <div class="slider-index2">/{{ (items.length - 1).toString().padStart(2, '0') }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: 'http://114.116.21.170:9000/photo/slider1.png' },
        { src: 'http://114.116.21.170:9000/photo/slider2.png' },
        { src: 'http://114.116.21.170:9000/photo/slider3.png' },
        { src: 'http://114.116.21.170:9000/photo/slider4.png' },
        { src: 'http://114.116.21.170:9000/photo/slider5.png' }
      ],
      currentIndex: 0,
      offset: 0,
      sliderWidth: 1920,
      sliderHeight: 991,
      timer: null,
      autoPlay: true
    };
  },
  mounted() {
    this.sliderWidth = this.$el.parentNode.offsetWidth;

    // Duplicate the last item and insert it at the beginning
    const lastItem = this.items[this.items.length - 1];
    this.items.unshift(lastItem);

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
      this.currentIndex = (this.currentIndex + 1) % (this.items.length - 1);
      this.offset = -this.currentIndex * this.sliderWidth;

      if (this.currentIndex === 0) {
        // Reset to the first item after the duplicate item
        setTimeout(() => {
          this.offset = 0;
        }, 500);
      }
    },

    prev() {
      if (this.currentIndex === 0) {
        // Jump to the duplicate last item before the first item
        this.currentIndex = this.items.length - 1;
        this.offset = -this.currentIndex * this.sliderWidth;
      } else {
        this.currentIndex = (this.currentIndex - 1) % (this.items.length - 1);
        this.offset = -this.currentIndex * this.sliderWidth;
      }
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
  .slider-index1 {
    position: absolute;
    line-height: 60px;
    font-family: D-DIN-Bold, D-DIN;
    font-size: 72px;
    font-weight: 700;
    top: 300px;
    right: 384px;
    color: #ffffff;
    z-index: 1;
  }
  .slider-index2 {
    position: absolute;
    top: 300px;
    right: 303px;
    font-weight: 700;
    font-size: 42px;
    line-height: 42px;
    color: #ffffff;
    z-index: 1;
  }
}
</style>
