<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import spring, {toString} from  'css-spring'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@keyframes spring-rotate {
    0% {transform:rotateZ(29.1deg);visibility:hidden;}
    1% {transform:rotateZ(27.507deg);visibility:visible;}
    /* ... */
    100% {transform:rotateZ(0deg);visibility:visible;}
}
img {
  visibility: hidden;
  animation: spring-rotate .59s linear forwards;
}
</style>
