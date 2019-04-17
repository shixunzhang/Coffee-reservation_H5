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
      methods:{
        getArticleData() {
          if (this.$route.query.token != undefined)
            this.$route.query.token ? this.list_data.token = this.$route.query.token : this.list_data.token = ''
          if (this.$route.query.userId != undefined)
          //当前被访问用户的id
            this.list_data.user_id = this.$route.query.userId;
          if (this.$route.query.personId != undefined)
          //登录用户的id
            this.list_data.personId = this.$route.query.personId;
          this.$store.commit('LIST_DATA', this.list_data);
        },
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
