
<template>
  <div>
    <v-User :userData="DATA"></v-User>
    <div class="foot">
      <v-Foot></v-Foot>
    </div>
  </div>

</template>

<script>
  import  vUser from "@/components/user/user";
  import  vFoot from "@/components/common/foot";
  export default {
    name: "user",
    components:{
      vUser,
      vFoot
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

