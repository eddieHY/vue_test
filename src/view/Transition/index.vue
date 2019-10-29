<template>
<div>
  <div>
    <button v-on:click="show = !show">
      fade
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
  <div id="example-1">
    <button @click="slideFade = !slideFade">
      slide-fade
    </button>
    <transition name="slide-fade">
      <p v-if="slideFade">hello</p>
    </transition>
  </div>
  <div id="example-1">
    <button @click="aniShow = !aniShow">
      animation
    </button>
    <transition enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutRight"><!-- :duration="{enter: 200, leave: 400}"-->
      <p v-if="aniShow">hello</p>
    </transition>
  </div>
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import animate from 'animate.css'
export default {
  data () {
    return {
      show: true,
      slideFade: true,
      aniShow: true
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(60px);
  opacity: 0;
}
</style>
