<template>
    <div class="order-box">
      这是订单也o
      <div class="link-title">
        <router-link to="/user-center/my-integral/lottery" class="option">全部</router-link>
        <router-link to="/user-center/my-integral/day-task" class="option">未完成</router-link>
        <router-link to="/user-center/my-integral/spot-task" class="option">已完成</router-link>
      </div>

    </div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style scoped lang="scss">
  .order-box{

    .router-link-active {
      color: #4d86f1 !important;
      border-bottom: 4px solid #4d86f1;
    }
    .link-title {
      top: 0;
      height: 95px;
      width: 100%;
      left: 0;
      border-bottom: 1px solid #e5e5e5;
      .option {
        display: inline-block;
        width: 33.33333334%;
        height: 100%;
        font-size: 28px;
        line-height: 95px;
        float: left;
        color: #666666;
        text-align: center;
      }
    }


  }
</style>
