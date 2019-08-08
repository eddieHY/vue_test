import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DragComponent from '@/components/DragComponent'
import ThreeRotation from '@/components/ThreeRotation'
import Swiper from '@/components/Swiper' // 竖
import Swiper2 from '@/components/Swiper2' // 横
import Anchor from '@/view/Anchor'
import ProgressBar from '@/view/ProgressBar'
import Error from '@/components/Error'
import Lottie from '@/view/Lottie'
import Goods from '@/view/Goods'
import BuyCart from '@/view/BuyCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'DragComponent',
      component: DragComponent
    },
    {
      path: '/ThreeRotation',
      name: 'ThreeRotation',
      component: ThreeRotation
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/Swiper2',
      name: 'Swiper2',
      component: Swiper2
    },
    {
      path: '/Anchor',
      name: 'Anchor',
      component: Anchor
    },
    {
      path: '/ProgressBar',
      name: 'ProgressBar',
      component: ProgressBar
    },
    {
      path: '/Lottie',
      name: 'Lottie',
      component: Lottie
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/BuyCart',
      name: 'BuyCart',
      component: BuyCart
    },
    {
      path: 'Error',
      name: 'Error',
      component: Error
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
