// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lottie from 'vue-lottie'

Vue.component('lottie', lottie)

Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
  console.log('=======errorHandler=============', err, info)
  vm.$router.replace({path: 'Error'})
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
