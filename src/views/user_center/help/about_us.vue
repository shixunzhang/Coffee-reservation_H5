<template>
  <div>
    <v-About_us :messages="data"></v-About_us>
  </div>

</template>

<script>
  import vAbout_us from "@/components/user_center/help/about_us";
  export default {
    name: "about_us",
    data(){
      return {
        data:{}
      }
    },
    components: {
      vAbout_us,
    },
    mounted(){
      //异步请求
      this.$http.get('/api/user_center/help/about_us').then((res)=>{
        this.$data.data = res.data._DATA_.result.modelData
      })
    }
  }
</script>

<style scoped>

</style>
