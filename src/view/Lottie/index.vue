<template>
    <div id="My-lottie">
        <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation" />
        <!-- <img src="../../static/images/index/img_8.png" /> -->
    </div>
</template>

<script>
import huojianOptions from './data.json'

export default {
  name: 'My-lottie',
  data () {
    return {
      defaultOptions: {animationData: huojianOptions},
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
      console.log(anim)
    }
    // stop: function () {
    //   this.anim.stop()
    // },

    // play: function () {
    //   this.anim.play()
    // },

    // pause: function () {
    //   this.anim.pause()
    // },

    // onSpeedChange: function () {
    //   this.anim.setSpeed(this.animationSpeed)
    // }
  }
}
</script>
<style>
        body{
            background-color:#fff;
            margin: 0px;
            height: 100%;
            overflow: hidden;
        }
        #lottie{
            background-color:#fff;
            width:100%;
            height:100%;
            display:block;
            overflow: hidden;
            transform: translate3d(0,0,0);
            text-align: center;
            opacity: 1;
        }

    </style>
