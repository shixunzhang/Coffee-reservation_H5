<template>
  <div>
    <v-Address :List="DATA" :userDetails="USER"></v-Address>
  </div>
</template>

<script>
  import  vAddress from "@/components/home_page/address";
  export default {
    name: "userAddress",
    components:{
      vAddress
    },
    data(){
      return{
        DATA:[],
        USER:{},
      }
    },
    created(){
      this.getAddressList()
      this.getUserDetails()
    },
    methods:{
      getUserDetails(){
        this.$http.post('/api/user/detail.do',
          {
            userId:this.$store.state.user_data.userId
          },
        ).then((res)=>{
          if(res.data.success){
            this.$data.USER = res.data.data;
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
      getAddressList(){
        this.$http.post('/api/address/addressList.do',
          {
            userId:this.$store.state.user_data.userId
          },
        ).then((res)=>{
          if(res.data.success){
            this.$data.DATA = res.data.data;
          }else{
            this.$toast(res.data.msg);
          }
        }).catch(error =>{
          this.$toast("网络开小差")
        })
      }
    }
  }
</script>

<style scoped>

</style>
