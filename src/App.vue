<template>
  <div id="app">
    <!--<div>viewport:宽{{viewport.width}}；高{{viewport.height}}；dpr设备像素密度{{viewport.dpr}}</div>-->
    <!--<div>font-size:{{fontSize}}</div>-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
      }
    },
  }
</script>

<style lang="scss">
  #app {
    }
</style>
