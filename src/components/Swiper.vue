<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="../assets/zhang1.jpg"></swiper-slide>
    <swiper-slide><img src="../assets/zhang2.jpg"></swiper-slide>
    <swiper-slide><img src="../assets/zhang3.jpg"></swiper-slide>
    <swiper-slide><img src="../assets/zhang4.jpg"></swiper-slide>
    <swiper-slide><img src="../assets/zhang1.jpg"></swiper-slide>
    <swiper-slide><img src="../assets/zhang2.jpg"></swiper-slide>
    <swiper-slide><img src="../assets/zhang3.jpg"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css') // 控制swiper-slide排布
export default {
  name: 'Swiper',
  data () {
    return {
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        observeParents: true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        slidesPerView: 2,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        navigation: {
          nextEl: '.swiper-button-next', // 前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', // 后退按钮的css选择器或HTML元素。
          hideOnClick: true, // 点击slide时显示/隐藏按钮
          disabledClass: 'my-button-disabled', // 前进后退按钮不可用时的类名。
          hiddenClass: 'my-button-hidden' // 按钮隐藏时的Class
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(1, 1000, false)
  }
}
</script>

<style scope>
  .swiper-pagination {
    color: red;
  }
  .swiper-slide{
    height:200px;
  }
</style>
