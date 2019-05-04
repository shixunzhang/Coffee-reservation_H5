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
            this.$data.USER = res.data.data
            this.$store.commit('USER_DATA',res.data.data);
          }else{
            console.log(res.data)
          }
        }).catch(error =>{
          console.log("请求异常"+error)
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
            console.log(this.$data.DATA)
          }else{
            console.log(res.data)
          }
        }).catch(error =>{
          console.log("请求异常"+error)
        })
      }
    }
  }
</script>

<style scoped>

</style>
