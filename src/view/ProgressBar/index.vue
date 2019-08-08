<template>
  <div id="app">
    <send v-model="nums" :step="step"></send>
  </div>
</template>

<script>
import send from '@/components/Send'
export default {
  data () {
    return {
      nums: 3,
      step: 1
    }
  },
  components: {
    send
  }
}
</script>

<style>

</style>
