<template>
  <div class="foot-box">
    <div class="foot-img" @click="GoHome"><img src="../../assets/images/home_page/home(1).png"><span>首页</span></div>
    <div class="foot-img" @click="GoMenu"><img src="../../assets/images/home_page/menu(1).png"><span>菜单</span></div>
    <div class="foot-img" @click="GoOrder"><img src="../../assets/images/home_page/container(1).png"><span>订单</span></div>
    <div class="foot-img" @click="GoShooping"><img src="../../assets/images/home_page/car(1).png"><span>购物车</span></div>
    <div class="foot-img" @click="GoUser"><img src="../../assets/images/home_page/setting.png"><span>设置</span></div>

  </div>


</template>

<script>
    export default {
      name: "foot",
      data(){
        return{
        }
      },
      methods:{
        GoHome(){
          this.$router.push('/home-page')
        },
        GoOrder(){
          this.$router.push('/order')
        },
        GoShooping(){
          this.$router.push('/shopping')
        },
        GoMenu(){
          this.$router.push('/menu')
        },
        GoUser(){
          this.$router.push('/user')
        }
      },

    }
</script>

<style scoped lang="scss">
  .foot-box{
    border-top: 1px solid #999999;
    border-bottom: 1px solid #999999;
    height: 90px;
    background-color: #ffffff;
    .foot-img{
      display: inline-block;
      width: 144px;
      height: 90px;
      img{
        height: 40px;
        width: 40px;
        position: relative;
        left: 45px;
        top: 5px;
      }
      span{
        position: relative;
        font-size: 20px;
        top: 50px;
        left: 8px;
      }
    }


  }

</style>
