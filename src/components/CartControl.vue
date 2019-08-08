<template>
  <div class="cartControl">
    <transition name="move">
      <!--减少商品-->
      <div class="decrease " v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner iconfont">&#xe8c1;</span>
      </div>
    </transition>
    <!--增加商品-->
    <div class="count" v-show="food.count>0">{{food.count}}</div>
    <!--点击加号按钮，触发事件addCart，将事件对象作为参数传递-->
    <div class="add iconfont" @click.stop.prevent="addCart($event)">&#xe692;</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      food: {
        count: 0
      }
    }
  },
  methods: {
    // addCart事件
    addCart (event) {
      if (!event._constructed) return // 检测事件派发是否来自于better-scroll
      if (!this.food.count) {
        // 当给一个观测对象添加一个它不存在的属性的时候，直接赋值是不可以的，需要使用Vue.set设置这个属性
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('cart-add', event.target) // 向父组件触发一个自定义的cart-add事件，同时将事件对象传递给父组件
    }
  }

}
</script>

<style>

</style>
