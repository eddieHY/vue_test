<template>
  <div class="dragbox">
    <img src="../assets/logo.png" @click="clickImg($event)">
    <enlarge-photo v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></enlarge-photo>
    <div class="drag" ref="dragDiv">
      <div class="drag_bg"></div>
      <div class="drag_text">{{confirmWords}}</div>
      <div ref="moveDiv" @mousedown="mouseDownFn($event)" :class="{'handler_ok_bg': confirmSuccess}" class="handler handler_bg" style="position: absolute;top: 0px;left: 0px"></div>
    </div>
    <router-link :to="{path:'/ThreeRotation'}" class="zhang_link" title="全是张艺兴">is sheep</router-link>
    <router-link :to="{path:'/Swiper'}" title="轮播图">轮播图</router-link>
    <router-link :to="{path:'/Swiper2'}" title="轮播图2">轮播图2</router-link>
    <router-link :to="{name: 'Anchor',path:'/Anchor'}" title="锚点">锚点</router-link>
    <pagination :pageInfo = 'mokedata'></pagination>
  </div>
</template>

<script>
import EnlargePhoto from './EnlargePhoto'
import Pagination from './Pagination'
export default {
  data () {
    return {
      confirmWords: '拖动滑块验证',
      beginClientX: 0, // 距离屏幕左端距离
      mouseMoveState: false, // 触发拖动状态 判断
      maxwidth: '',
      confirmSuccess: false,
      // 图片放大
      showImg: false,
      imgSrc: '',
      mokedata: {'count': 100, 'data': [{'stu_id': '11055', 'course_id': '39167', 'content': '22333333333333333333333333333', 'type': '4', 'is_del': '0', 'create_time': '2018-10-23 10:37:26', 'id': '4606841', 'head_img_url': 'https://xesfile.xesimg.com/user/h/11055.jpg?5', 'username': '昵称十7', 'province': '山西省'}]}
    }
  },
  components: { EnlargePhoto, Pagination },
  methods: {
    mouseDownFn (e) {
      if (!this.confirmSuccess) {
        e.preventDefault && e.preventDefault() // 阻止文字选中等 浏览器默认事件
        this.mouseMoveState = true
        this.beginClientX = e.clientX
      }
    },
    successFunction () {
      this.confirmSuccess = true
      this.confirmWords = '验证通过'
      if (window.addEventListener) {
        document.getElementsByTagName('html')[0].removeEventListener('mousemove', this.mouseMoveFn)
        document.getElementsByTagName('html')[0].removeEventListener('mouseup', this.mouseUpFn)
      } else {
        document.getElementsByTagName('html')[0].removeEventListener('mouseup', () => {})
      }
      document.getElementsByClassName('drag_text')[0].style.color = '#fff'
      document.getElementsByClassName('handler')[0].style.left = this.maxwidth + 'px'
      document.getElementsByClassName('drag_bg')[0].style.width = this.maxwidth + 'px'
    },
    mouseMoveFn (e) {
      if (this.mouseMoveState) {
        let width = e.clientX - this.beginClientX
        if (width > 0 && width <= this.maxwidth) {
          document.getElementsByClassName('handler')[0].style.left = width + 'px'
          document.getElementsByClassName('drag_bg')[0].style.width = width + 'px'
        } else if (width > this.maxwidth) {
          this.successFunction()
        }
      }
    },
    mouseUpFn (e) {
      this.mouseMoveState = false
      var width = e.clientX - this.beginClientX
      if (width < this.maxwidth) {
        document.getElementsByClassName('handler')[0].style.left = 0 + 'px'
        document.getElementsByClassName('drag_bg')[0].style.width = 0 + 'px'
      }
    },
    // 放大图片
    clickImg (e) {
      this.showImg = true
      this.imgSrc = e.currentTarget.src
    },
    viewImg () {
      this.showImg = false
    }
  },
  mounted () {
    this.maxwidth = this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth
    document.getElementsByTagName('html')[0].addEventListener('mousemove', this.mouseMoveFn)
    document.getElementsByTagName('html')[0].addEventListener('mouseup', this.mouseUpFn)
  }
}
</script>

<style scoped>
  .dragbox {
   margin: 0 auto;
   width: 1000px;
  }
  .drag{
   position: relative;
   background-color: #e8e8e8;
   width:100%;
   height: 34;
   line-height: 34px;
   text-align: center;
  }
  .handler{
   width:40px;;
   height: 32px;
   border: 1px solid #ccc;
   cursor: move;
  }
  .handler_bg{
   background: #fff url("../assets/moveright.png") no-repeat center;
  }
  .handler_ok_bg{
   background: #fff url("../assets/complete.png") no-repeat center;
  }
  .drag_bg{
   background-color: #7ac23c;
   height: 34px;
   width: 0px;
  }
  .drag_text{
   position: absolute;
   top: 0px;
   width: 100%;
   text-align: center;
   user-select: none;
  }
  .zhang_link {
    width: 120px;
    height: 40px;
    margin-top: 100px;
    display: inline-block;
    -webkit-text-decoration-style: none;
    text-decoration-style: none;
    text-decoration: none;
    color: rgba(204, 97, 51, 0.5);
    font-size: 18px;
    text-align: center;
    line-height: 40px;
  }
</style>
