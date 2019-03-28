
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
      // this.getArticleData();

      this.$http.post('/api/user/detail.do',
        {
          userId:100
        },
      ).then((res)=>{
        if(res.data.success){
          this.$data.DATA = res.data.data
          console.log(this.$data.DATA)
        }else{
          console.log(res.data)
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
    position: absolute;
    bottom: 0;
  }

</style>

