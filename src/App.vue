<template>
  <div id="app">
    <Carousel></Carousel>
  </div>
</template>

<script>
import Carousel from './components/Carousel'

export default {
  name: 'app',
  components: {
    Carousel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 图标 */
@font-face {
  font-family: "iconfont";
  src: url('./assets/font/iconfont.eot'); /* IE9*/
  src: url('./assets/font/iconfont.woff') format('woff'), /* chrome, firefox */
  url('./assets/font/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./assets/font/iconfont.svg') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:20px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.icon-chevronleft:before { content: "\e600"; }
.icon-chevronright:before { content: "\e601"; }
</style>
