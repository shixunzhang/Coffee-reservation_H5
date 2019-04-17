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
    name: "mune",
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
          console.log(this.$data.DATA)
        }else{

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
    position: fixed;
    bottom: 0;
  }
</style>
