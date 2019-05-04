<template>
  <div class="foot-box">
    <div v-if="!page1" class="foot-img" @click="GoHome"><img src="../../assets/images/home/home(1).png"><span>首页</span></div>
    <div v-if="page1" class="foot-img" @click="GoHome"><img src="../../assets/images/home/home.png"><span>首页</span></div>
    <div v-if="!page2" class="foot-img" @click="GoMenu"><img src="../../assets/images/home/coffee.png"><span>菜单</span></div>
    <div v-if="page2" class="foot-img" @click="GoMenu"><img src="../../assets/images/home/coffee(1).png"><span>菜单</span></div>
    <div v-if="!page3" class="foot-img" @click="GoOrder"><img src="../../assets/images/home/dingdan.png"><span>订单</span></div>
    <div v-if="page3" class="foot-img" @click="GoOrder"><img src="../../assets/images/home/dingdan1.png"><span>订单</span></div>
    <div v-if="!page4" class="foot-img" @click="GoShopping"><img class="foot-car-img" src="../../assets/images/home/car(1).png"><span class="foot-car-text">购物车</span></div>
    <div v-if="page4" class="foot-img" @click="GoShopping"><img class="foot-car-img" src="../../assets/images/home/car.png"><span class="foot-car-text">购物车</span></div>
    <div v-if="!page5" class="foot-img" @click="GoUser"><img src="../../assets/images/home/setting1.png"><span>设置</span></div>
    <div v-if="page5" class="foot-img" @click="GoUser"><img src="../../assets/images/home/setting.png"><span>设置</span></div>
  </div>
</template>

<script>
    export default {
      name: "foot",
      data(){
        return{
          page1:false,
          page2:false,
          page3:false,
          page4:false,
          page5:false,
        }
      },
      created(){
        if(this.$route.path==="/home-page"){
            this.page1=true;
        }if(this.$route.path==="/menu"){
            this.page2=true;
        }if(this.$route.path==="/order"){
            this.page3=true;
        }if(this.$route.path==="/shopping"){
            this.page4=true;
        }if(this.$route.path==="/user"){
            this.page5=true;
        }
      },
      methods:{
        GoHome(){
          this.$router.push('/home-page')
        },
        GoOrder(){
          this.$router.push('/order')
        },
        GoShopping(){
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
      .foot-car-img{
        margin-left: 10px;
      }
      .foot-car-text{
        position: relative;
        left: -0.0133333rem;
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
