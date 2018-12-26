<template>
  <div>
    <v-InfoDate :parentData="data"></v-InfoDate>
  </div>

</template>

<script>
  import vInfoDate from "@/components/user_center/info/date";
  export default {
    name: "problem",
    data(){
      return {
        data:{}
      }
    },
    components: {
      vInfoDate,
    },
    mounted(){
      //异步请求
      this.$http.get('/api/user_center/info/date').then((res)=>{
        this.$data.data = res.data._DATA_.result.modelData
      })
    }
  }
</script>

<style scoped>

</style>
