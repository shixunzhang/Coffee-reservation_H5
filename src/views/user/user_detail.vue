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

      this.$http.post('/api/user/detail.do',
        {
          userId:this.$store.state.user_data.userId
        },
      ).then((res)=>{
        if(res.data.success){
          this.$data.DATA = res.data.data
          this.$store.commit('USER_DATA',res.data.data);
          console.log(this.$data.DATA)
        }else{
          console.log(res.data)
        }
      }).catch(error =>{
        console.log("请求异常"+error)
      })
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .foot{
    position: absolute;
    bottom: 0;
  }
</style>


