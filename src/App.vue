<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './components/Tab.vue'
  export default {
    name: 'App',
    components: {Tab}
  }
</script>
<style lang="scss">
  @import "./assets/css/common.scss";
  body {
    background: #f5f5f5;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 auto;
  }
  input, button{
    -webkit-appearance: none
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active, .fadeIn-leave-active{
    transition: all .3s linear;
    opacity: 0;
  }
</style>
