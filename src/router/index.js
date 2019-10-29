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
import Transition from '@/view/Transition'
import Animation from '@/view/Animation/index'
import Second from '@/view/Animation/Second'
import Third from '@/view/Animation/Third'
import Four from '@/view/Animation/Four'
import Five from '@/view/Animation/Five'
import Six from '@/view/Animation/Six'
import Seven from '@/view/Animation/Seven'
import SwitchTabs from '@/view/SwitchTabs'

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
      path: '/Transition',
      name: 'Transition',
      component: Transition
    },
    {
      path: '/Animation',
      name: 'Animation',
      component: Animation
      // ,
      // children: [
      //   { path: 'First', component: First },
      //   { path: 'Second', component: Second },
      //   { path: 'Third', component: Third },
      //   { path: 'Four', component: Four },
      //   { path: 'Five', component: Five },
      //   { path: 'Six', component: Six },
      //   { path: 'Seven', component: Seven }
      // ]
    },
    {
      path: '/Seven',
      name: 'Seven',
      component: Seven
    },
    {
      path: '/Six',
      name: 'Six',
      component: Six
    },
    {
      path: '/Five',
      name: 'Five',
      component: Five
    },
    {
      path: '/Four',
      name: 'Four',
      component: Four
    },
    {
      path: '/Third',
      name: 'Third',
      component: Third
    },
    {
      path: '/Second',
      name: 'Second',
      component: Second
    },
    {
      path: '/SwitchTabs',
      name: 'SwitchTabs',
      component: SwitchTabs
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
