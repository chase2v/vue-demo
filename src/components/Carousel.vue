<template lang="pug">
  .container
    img.carousel-img(:src="'static/images/' + imgSrcEnter + '.png'", :class="[enterClass, enterActiveClass]" ref="enterImg")
    img.carousel-img(:src="'static/images/' + imgSrcLeave + '.png'", :class="[leaveClass, leaveActiveClass]" ref="leaveImg")
    .button.button-left(@click="clickLeft")
      i.iconfont.icon-chevronleft
    .button.button-right(@click="clickRight")
      i.iconfont.icon-chevronright
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      text: 'Hello, this is my vue-demo!',
      imgSrcEnter: 1,
      imgSrcLeave: 0,
      enterClass: 'carousel-img-enter',
      enterActiveClass: '',
      leaveClass: 'carousel-img-leave',
      leaveActiveClass: '',
      changeState: 0,
      interval: undefined,
      direction: 'left',
      buttonKey: 1
    }
  },
  watch: {
    imgSrcEnter (v, ov) { // v 为新值， ov 为旧值
      this.changeState = 0
      this.imgSrcLeave = ov
      this.enterActiveClass = ''
      this.leaveActiveClass = ''
    },
    changeState (v) {
      if (v === 2 && this.direction === 'left') {
        this.enterActiveClass = 'carousel-img-enter-active'
        this.leaveActiveClass = 'carousel-img-leave-active'
        setTimeout(() => {
          this.buttonKey = 1
        }, 1000)
      } else if (v === 2 && this.direction === 'right') {
        this.enterActiveClass = 'carousel-img-leave-active-right'
        this.leaveActiveClass = 'carousel-img-enter-active-right'
        setTimeout(() => {
          this.buttonKey = 1
        }, 1000)
      }
    }
  },
  methods: {
    clickLeft () {
      if (this.imgSrcEnter === 3) {
        return
      }
      if (this.buttonKey) {
        this.buttonKey = 0
        clearInterval(this.interval)
        this.enterClass = 'carousel-img-enter'
        this.leaveClass = 'carousel-img-leave'
        this.direction = 'left'
        this.imgSrcEnter++
      }
    },
    clickRight () {
      if (this.imgSrcEnter === 1) {
        return
      }
      if (this.buttonKey === 1) {
        this.buttonKey = 0
        clearInterval(this.interval)
        this.enterClass = 'carousel-img-leave-right'
        this.leaveClass = 'carousel-img-enter-right'
        this.direction = 'right'
        this.imgSrcEnter--
      }
    }
  },
  mounted () {
    this.$refs.enterImg.onload = () => {
      setTimeout(() => {
        this.changeState++
      }, 100)
    }
    this.$refs.leaveImg.onload = () => {
      setTimeout(() => {
        this.changeState++
      }, 100)
    }

    this.interval = setInterval(() => {
      this.imgSrcEnter++

      if (this.imgSrcEnter >= 4) {
        this.imgSrcEnter = 1
      }
    }, 2100)
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 592px;
  height: 396px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  .carousel-img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    // 图片切换过渡效果
    &.carousel-img-enter {
      left: 100%;
      z-index: 1;

      &.carousel-img-enter-active {
        left: 0;
        transition: left 1s ease-in-out;
      }
    }

    &.carousel-img-enter-right {
      left: 0;
      z-index: 1;

      &.carousel-img-enter-active-right {
        left: 100%;
        transition: left 1s ease-in-out;
      }
    }

    &.carousel-img-leave {
      left: 0;

      &.carousel-img-leave-active {
        left: -100%;
        transition: left 1s ease-in-out;
      }
    }

    &.carousel-img-leave-right {
      left: -100%;

      &.carousel-img-leave-active-right {
        left: 0;
        transition: left 1s ease-in-out;
      }
    }
  }

  .button {
    position: absolute;
    z-index: 1;
    cursor: pointer;
    top: 50%;
    margin-top: -10px;

    &.button-left {
      left: 0;
    }

    &.button-right {
      right: 0;
    }
  }
}
</style>
