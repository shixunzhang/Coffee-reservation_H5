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
        // this.getArticleData();

        this.$http.post('/api/order/list.do',
          {
            userId:100,
            finishFlag:3
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
        getArticleData() {

          if (this.$route.query.token != undefined)
            this.list_data.token = this.$route.query.token;
          if (this.$route.query.userId != undefined)
            this.list_data.userId = this.$route.query.userId;
          this.$store.commit('LIST_DATA', this.list_data);
        }
      }
  }
</script>

<style scoped lang="scss">
  .foot{
    position: fixed;
    bottom: 0;
  }

</style>
