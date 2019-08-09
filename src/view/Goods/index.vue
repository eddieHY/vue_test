<template>
  <!--加减商品-->
  <div class="cartControl-wrapper">
    <!--在父组件监听到子组件触发的cart-add事件-->
    <cart-control :food="food"
                  @cart-add="handlecartAdd"
                  class="cart-control"></cart-control>
    <shop-cart class="shop-cart__position"
               ref="shopCart" />
  </div>
</template>

<script>
import CartControl from '@/components/CartControl'
import ShopCart from '@/components/ShopCart'
export default {
  data () {
    return {
      food: 'food'
    }
  },
  components: {
    CartControl,
    ShopCart
  },
  methods: {
    _drop (target) { // 在goods.vue定义 _drop方法将cartcontrol的传递过来target对象再传递给shopCart
      this.$nextTick(() => { // 使用$nextTick优化体验
        this.$refs.shopCart.drop(target) // 父组件goods通过.$refs属性访问shopCart子组件的drop方法
      })
    },
    handlecartAdd (target) { // 点击加号按钮触发事件
      this._drop(target) // 调用_drop方法
    }
  }

}
</script>

<style>
.shop-cart__position {
  /* height: 60px;
  width: 60px; */
  position: absolute;
  bottom: 500px;
  left: 500px;
  border: 1px solid red;
}
.cart-control {
  position: absolute;
  left: 600px;
  /* height: 40px;
  width: 40px; */
  top: 600px;
  border: 1px solid blue;
}
</style>
