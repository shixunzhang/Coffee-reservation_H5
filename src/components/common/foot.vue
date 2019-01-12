<template>
  <div class="foot-box">
    <div class="foot-img"><img src="../../assets/images/home_page/home(1).png"><span>首页</span></div>
    <div class="foot-img"><img src="../../assets/images/home_page/menu(1).png"><span>菜单</span></div>
    <div class="foot-img"><img src="../../assets/images/home_page/container(1).png"><span>订单</span></div>
    <div class="foot-img"><img src="../../assets/images/home_page/car(1).png"><span>购物车</span></div>
    <div class="foot-img"><img src="../../assets/images/home_page/user(1).png"><span>我的</span></div>

  </div>


</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped lang="scss">
  .foot-box{
    border-top: 1px solid #999999;
    border-bottom: 1px solid #999999;
    height: 90px;
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
