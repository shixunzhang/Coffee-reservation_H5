<template>
  <div>
    <v-ShoppingCart :message="DATA"></v-ShoppingCart>
    <div class="foot">
      <v-Foot></v-Foot>
    </div>
  </div>
    
</template>

<script>
  import  vShoppingCart from "@/components/shopping_cart/shopping_cart";
  import  vFoot from "@/components/common/foot";
    export default {
        name: "shopping_cart",
      components:{
        vShoppingCart,
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

        this.$http.post('/api/shopping/list.do',
          {
            userId:this.$store.state.user_data.userId
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
