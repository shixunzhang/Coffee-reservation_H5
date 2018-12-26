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
        // viewport: {},
        // fontSize: '',
      }
    },
    // mounted(){
    //   this.fontSize = document.querySelector('html').style.fontSize
    //   this.viewport.width = window.screen.width
    //   this.viewport.height = window.screen.height
    //   this.viewport.dpr = window.devicePixelRatio
    // },
    // updated(){
    //   this.fontSize = document.querySelector('html').style.fontSize
    //   this.viewport.width = window.screen.width
    //   this.viewport.height = window.screen.height
    //   this.viewport.dpr = window.devicePixelRatio
    // }
  }
</script>

<style>
  #app {

  }
</style>
