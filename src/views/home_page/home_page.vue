<template>
  <div>
    <v-HomePage :userData="DATA"></v-HomePage>
    <div class="foot">
      <v-Foot></v-Foot>
    </div>
  </div>
</template>

<script>
  import  vHomePage from "@/components/home_page/home_page";
  import  vFoot from "@/components/common/foot";
    export default {
      name: "home_page",
      components: {
        vHomePage,
        vFoot
      },
      data(){
        return{
          DATA:{},
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
            console.log(this.$data.DATA)
          }else{
            console.log(res.data)
          }
        }).catch(error =>{
          console.log("请求异常"+error)
        })
      }
    }
</script>

<style scoped lang="scss">
  .foot{
    position: absolute;
    bottom: 0;
  }

</style>
