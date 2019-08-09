<template>
  <!--购物车小球-->
  <div id="app">
    <ul class="shop">
      <li v-for="(item, index) in items" :key="index">
        <span>{{item.text}}</span>
        <span>{{item.price}}</span>
        <button @click="additem">添加</button>
      </li>
    </ul>
    <div class="cart"
         style="">{{count}}</div>
    <div class="ball-container">
      <!--小球-->
      <div v-for="(ball, index) in balls" :key="index">
        <transition name="drop"
                    @before-enter="beforeDrop"
                    @enter="dropping"
                    @after-enter="afterDrop">
          <div class="ball"
               v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      count: 0,
      items: [{
        text: '苹果',
        price: 15
      },
      {
        text: '香蕉',
        price: 15
      }
      ],
      balls: [ // 小球 设为3个
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      dropBalls: []
    }
  },
  methods: {
    additem (event) {
      this.drop(event.target)
      this.count++
    },
    drop (el) {
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeDrop (el) {
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect()
          console.log('===rect===', rect)
          let x = rect.left - 32
          console.log('===x===', x)
          let y = -(window.innerHeight - rect.top - 22)
          console.log('===y===', y)
          el.style.webkitTransform = `translate3d(0,${y}px,0)`
          el.style.transform = `translate3d(0,${y}px,0)`
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = `translate3d(${x}px,0,0)`
          inner.style.transform = `translate3d(${x}px,0,0)`
        }
      }
    },
    dropping (el) {
      /* eslint-disable no-unused-vars */
      let rf = el.offsetHeight
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0,0,0)'
        el.style.transform = 'translate3d(0,0,0)'
        let inner = el.getElementsByClassName('inner-hook')[0]
        inner.style.webkitTransform = 'translate3d(0,0,0)'
        inner.style.transform = 'translate3d(0,0,0)'
      })
    },
    afterDrop (el) {
      let ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    }
  }
}
</script>

<style lang="stylus">
.shop {
  position: fixed;
  top: 300px;
  left: 400px;
}

.ball {
  position: fixed;
  left: 32px;
  bottom: 22px;
  z-index: 200;
  transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  /* 贝塞尔曲线 */
}

.inner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgb(0, 160, 220);
  transition: all 0.4s linear;
}

.cart {
  position: fixed;
  bottom: 22px;
  left: 32px;
  width: 30px;
  height: 30px;
  background-color: rgb(0, 160, 220);
  color: rgb(255, 255, 255);
}
</style>
