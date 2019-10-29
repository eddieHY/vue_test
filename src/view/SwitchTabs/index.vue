<template>
  <div>
    <ul class="nav"
        :class="{'fixed': isToTop}"
        ref="nav">
      <li class="item"
          :class="{'active': index === current}"
          @click="changeTab($event, index)"
          v-for="(item, index) in listNum"
          :key="index">{{index + 1}}</li>
    </ul>
    <div class="container"
         ref="container">
      <section v-for="(item, index) in listNum"
               :key="index">{{index + 1}}</section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listNum: '_.'.repeat(4).split('.'),
      newPos: null,
      myReq: null,
      isToTop: false,
      current: 0
    }
  },
  mounted () {
    this.nav = this.$refs.nav
    this.liList = this.$refs.nav.getElementsByTagName('li')
    this.sectionlist = this.$refs.container.getElementsByTagName('section')
    window.addEventListener('scroll', () => {
      var scrollTop = document.documentElement.scrollTop
      if (scrollTop >= this.nav.offsetTop) {
        if (this.nav.className.indexOf('fixed') === -1) {
          this.isToTop = true
        }
      } else {
        this.isToTop = false
      }
      Array.from(this.sectionlist).forEach((item, index) => {
        console.log('===', scrollTop, item.offsetTop, item.offsetTop + item.clientHeight)
        if (scrollTop >= item.offsetTop && scrollTop < item.offsetTop + item.clientHeight) {
          this.current = index
        }
        if (scrollTop <= this.sectionlist[0].offsetTop) {
          this.current = 0
        }
      })
    })
  },
  methods: {
    changeTab (event, index) {
      this.current = index
      console.log('==index===', index, this.current)
      this.newPos = this.sectionlist[index].offsetTop
      window.cancelAnimationFrame(this.myReq)
      this.move()
    },
    move () {
      if (Math.abs(document.documentElement.scrollTop - this.newPos) < 20) {
        document.documentElement.scrollTop = this.newPos
        return
      }
      if (document.documentElement.scrollTop > this.newPos) {
        document.documentElement.scrollTop -= 20
      } else {
        document.documentElement.scrollTop += 20
      }
      this.myReq = requestAnimationFrame(this.move)
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
header {
  height: 150px;
}
.nav {
  height: 50px;
  width: 100%;
  background-color: #eee;
}
.item {
  width: 150px;
  height: 49px;
  float: left;
  list-style: none;
  text-align: center;
  line-height: 50px;
  transition: background 1s;
}
.active {
  border-top: 1px solid green;
  background-color: #4179f7;
  color: #fff;
}
.fixed {
  position: fixed;
  top: 0;
}
section {
  width: 100%;
}
section:nth-child(1) {
  height: 600px;
  background-color: red;
}
section:nth-child(2) {
  height: 700px;
  background-color: green;
}
section:nth-child(3) {
  height: 700px;
  background-color: blue;
}
section:nth-child(4) {
  height: 700px;
  background-color: rgb(206, 34, 148);
}
section:nth-child(5) {
  height: 700px;
  background-color: rgb(199, 197, 70);
}
</style>
