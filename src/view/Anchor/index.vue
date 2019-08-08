<template>
  <div>
    <div class="header">
      <span @click="anchorTo('#anchor-0')">课程</span>
      <span @click="anchorTo('#anchor-1')">试听</span>
      <span @click="anchorTo('#anchor-2')">老师</span>
      <span @click="anchorTo('#anchor-3')">简介</span>
      <span @click="anchorTo('#anchor-4')">大纲</span>
    </div>
    <div class="course" id="anchor-0">1111</div>
    <div class="shiting" id="anchor-1">222</div>
    <div class="teacher" id="anchor-2">333</div>
    <div class="introduction" id="anchor-3">444</div>
    <div class="outline" id="anchor-4">555</div>
  </div>
</template>

<script>
export default {
  name: 'Anchor',
  methods: {
    anchorTo (selector) {
      this.$el.querySelector(selector).scrollIntoView()
      //  this.$els.addproject.value就相当于：document.querySelector('.name-input').value
      console.log('==document.querySelector(selector).offsetTop==', document.querySelector(selector).offsetTop)
      // document.querySelector('#app').scrollTop = document.querySelector(selector).offsetTop
      console.log('==documentcrollTop==', document.querySelector('#app').scrollTop)
    }
  }
}
</script>

<style lang="stylus">
.course
  height 400px;
  border 1px solid red;
.shiting
  height 500px;
  border 1px solid blue;
.teacher
  height 600px;
  border 1px solid yellow;
.introduction
  height 300px;
  border 1px solid #888999;
.outline
  height 200px;
  border 1px solid #567466;
</style>
