<template>
 <div class="scene">
  <div class="box-container">
    <div class="front">
      <img src="../assets/zhang1.jpg">
    </div>
    <div class="back">
      <!-- <div class="text">back</div> -->
      <img src="../assets/zhang2.jpg">
    </div>
    <div class="top">
      <!-- <div class="text">top</div> -->
      <img src="../assets/zhang3.jpg">
    </div>
    <div class="bottom">
      <!-- <div class="text">bottom</div> -->
      <img src="../assets/zhang4.jpg">
    </div>
    <div class="right">
    </div>
    <div class="left">
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      timer: null
    }
  },
  mounted () {
    let curIndex = 0
    this.timer = setInterval(() => {
      const box = document.getElementsByClassName('box-container')[0]
      box.style.transform = `rotateX(${curIndex * -90}deg)`
      curIndex = curIndex + 1
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
.scene {
  margin: 0 auto;
  margin-top: 30px;
  position: relative;
  width: 1024px;
  height: 768px;
  perspective: 700px;
}

.box-container {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform-origin: 50% 50% -384px;
}

.front {
  background-color: rgba(3,122,241,0.5);
  position: absolute;
  width: 1024px;
  height: 768px;
}

.back {
  background-color: rgba(241,3,3,0.5);
  position: absolute;
  width: 1024px;
  height: 768px;
  transform: translateZ(-768px) rotateZ(180deg) rotateY(180deg);
}

.top {
  background-color: rgba(3,241,122,0.5);
  position: absolute;
  width: 1024px;
  height: 768px;
  transform: translate3d(0,-384px,-384px) rotateX(90deg);
}

.bottom {
  background-color: rgba(241,241,3,0.5);
  position: absolute;
  width: 1024px;
  height: 768px;
  transform: translate3d(0,384px,-384px) rotateX(-90deg);
}

.left {
  background-color: rgba(270,97,48,0.5);
  position: absolute;
  width: 768px;
  height: 768px;
  transform: translate3d(-384px,0,-384px) rotateY(-90deg);
}

.right {
  background-color: rgba(30,97,48,0.5);
  position: absolute;
  width: 768px;
  height: 768px;
  transform: translate3d(225px,0,-384px) rotateY(90deg);
}

.text {
  color: white;
  font-size: 25px;
  width: 100%;
  height: 100%;
}
</style>
