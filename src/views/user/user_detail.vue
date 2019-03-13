<template>
  <div>
    <v-UserDetail :userData="DATA"></v-UserDetail>

  </div>
</template>

<script>
  import  vUserDetail from "@/components/user/user_detail";
  export default {
    name: "user_detail",
    components:{
      vUserDetail,
    },
    data() {
      return {
        DATA: [],
        list_data:{
          userId:''
        }
      }
    },
    created(){
      // this.getArticleData();

      this.$http.post('/api/user/detail.do',
        {
          userId:101
        },
      ).then((res)=>{
        if(res.data.success){
          this.$data.DATA = res.data.data
          console.log(this.$data.DATA)
        }else{
          console.log(res.data)
        }
      }).catch(error =>{
        console.log("请求异常"+error)
      })
    },
    methods: {
      getArticleData() {
        if (this.$route.query.token != undefined)
          this.list_data.token = this.$route.query.token;
        if (this.$route.query.userId != undefined)
          this.list_data.userId = this.$route.query.userId;
        this.$store.commit('LIST_DATA', this.list_data);
      }
    }
  }
</script>

<style scoped lang="scss">
  .foot{
    position: absolute;
    bottom: 0;
  }
</style>


