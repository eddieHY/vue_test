<template>
  <div id="lottie"></div>
</template>

<script>
import lottie from 'lottie-web'
import animationData from '@/static/animation/seven.json'
export default {
  mounted () {
    const params = {
      container: document.getElementById('lottie'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData,
      assetsPath: 'static/images/seven/'
    }
    /* eslint-disable-next-line */
    let anim = lottie.loadAnimation(params)
  }
}
</script>

<style scoped>

</style>
