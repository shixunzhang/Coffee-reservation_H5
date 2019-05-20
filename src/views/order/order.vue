<template>
  <div>
    <v-Order :message="DATA"></v-Order>
    <div class="foot">
      <v-Foot></v-Foot>
    </div>
  </div>
    
</template>

<script>
  import vOrder from '@/components/order/order'
  import  vFoot from "@/components/common/foot";
    export default {
        name: "order",
      components:{
        vOrder,
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

        this.$http.post('/api/order/listOrder.do',
          {
            userId:this.$store.state.user_data.userId,
            finishFlag:3
          },
        ).then((res)=>{
          if(res.data.success){
            this.$data.DATA = res.data.data;
          }else{
            this.$toast(res.data.msg)
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
    position: fixed;
    bottom: 0;
  }

</style>
