<template>
  <div>
    <v-Menu :message="DATA"></v-Menu>
    <div class="foot">
      <v-Foot></v-Foot>
    </div>
  </div>

</template>

<script>
  import  vMenu from "@/components/menu/menu";
  import  vFoot from "@/components/common/foot";
  export default {
    name: "menus",
    components: {
      vMenu,
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

      this.$http.post('/api/goods/list.do',
        {
          goodsCategory:1
        },
      ).then((res)=>{
        if(res.data.success){
          this.$data.DATA = res.data.data
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
