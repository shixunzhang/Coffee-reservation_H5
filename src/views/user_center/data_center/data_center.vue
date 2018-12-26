<template>
  <div>
    <v-Data_center_head :messages="data"></v-Data_center_head>
    <v-Data_center :messages="data"></v-Data_center>
  </div>
</template>

<script>
  import vData_center_head from "@/components/user_center/data_center/data_center_head";
  import vData_center from "@/components/user_center/data_center/data_center";
    export default {
      name: "data_center",
      data() {
        return {
          data: {}
        }
      },
      components: {
        vData_center,
        vData_center_head
      },
      mounted() {
        //异步请求
        this.$http.get('/api/user_center/data_center/total').then((res) => {
          this.$data.data = res.data._DATA_.result.modelData
        })
      }
    }
</script>

<style scoped>

</style>
