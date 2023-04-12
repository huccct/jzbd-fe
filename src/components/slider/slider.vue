<template>
  <div class="slider" :style="{ width: sliderWidth + 'px', height: sliderHeight + 'px' }">
    <div
      class="slider-wrapper"
      :style="{
        transform: 'translateX(' + offset + 'px)',
        width: items.length * sliderWidth + 'px'
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
    <!-- <div class="slider-controls">
      <span
        class="slider-control"
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="handleControlClick(index)"
      ></span>
    </div> -->
    <div class="slider-arrows">
      <span class="slider-arrow slider-arrow-prev" @click="prev">
        <i class="fas fa-chevron-left"></i>
      </span>
      <span class="slider-arrow slider-arrow-next" @click="next">
        <i class="fas fa-chevron-right"></i>
      </span>
    </div>
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
        }, 3000);
      }
    },
    stopAutoPlay() {
      clearInterval(this.timer);
      this.timer = null;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.offset = -this.currentIndex * this.sliderWidth;
      this.stopAutoPlay();
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.offset = -this.currentIndex * this.sliderWidth;
      this.stopAutoPlay();
    },
    handleControlClick(index) {
      this.currentIndex = index;
      this.offset = -this.currentIndex * this.sliderWidth;
      this.stopAutoPlay();
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
  .slider-controls {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .slider-control {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 6px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.5s ease;
    &.active {
      background-color: #333;
    }
  }
  .slider-arrows {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    .slider-arrow {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: background-color 0.5s ease;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
      &.slider-arrow-prev {
        left: 20px;
        i {
          transform: translate(-50%, -50%) rotate(180deg);
        }
      }
      &.slider-arrow-next {
        right: 20px;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
      &:disabled {
        cursor: not-allowed;
        background-color: rgba(0, 0, 0, 0.1);
      }
      svg {
        width: 20px;
        height: 20px;
        fill: #fff;
      }
    }
  }
}
</style>
