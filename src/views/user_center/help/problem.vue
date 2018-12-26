<template>
  <div>
    <v-Problem :messages="data"></v-Problem>
  </div>

</template>

<script>
  import vProblem from "@/components/user_center/help/problem";
  export default {
    name: "problem",
    data(){
      return {
        data:{}
      }
    },
    components: {
      vProblem,
    },
    mounted(){
      //异步请求
      this.$http.get('/api/user_center/help/problem').then((res)=>{
        this.$data.data = res.data._DATA_.result.modelData
      })
    }
  }
</script>

<style scoped>

</style>
