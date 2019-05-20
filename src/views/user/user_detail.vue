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
          this.$data.DATA = res.data.data;
          this.$store.commit('USER_DATA',res.data.data);
        }else{
          if(res.data.msg==='用户不存在'){
            this.$toast("登录信息失效，请重新登录");
            this.$router.push('/login')
          }else{
            this.$toast(res.data.msg)
          }
        }
      }).catch(error =>{
        this.$toast("网络开小差")
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


