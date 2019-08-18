<template>
  <div>
    <div id="lottie"></div>
    <router-link :to="{path: '/Seven'}">Next</router-link>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import animationData from '@/static/animation/six.json'
export default {
  mounted () {
    const params = {
      container: document.getElementById('lottie'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData,
      assetsPath: 'static/images/six/'
    }
    /* eslint-disable-next-line */
    let anim = lottie.loadAnimation(params)
  }
}
</script>

<style scoped>

</style>
