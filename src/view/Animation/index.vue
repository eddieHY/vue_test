<template>
  <div>
    <div id="lottie"></div>
    <router-link :to="{path: '/Second'}">Next</router-link>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import animationData from '@/static/animation/index.json'
export default {
  mounted () {
    const params = {
      container: document.getElementById('lottie'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData,
      assetsPath: 'static/images/index/'
    }
    /* eslint-disable-next-line */
    let anim = lottie.loadAnimation(params)
  }
}
</script>

<style scoped>

</style>
