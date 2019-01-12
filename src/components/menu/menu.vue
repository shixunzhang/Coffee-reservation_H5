<template>
  <div class="menu-box">
    <div>这是菜单页哦</div>
    <div class="link-title">
      <router-link to="/user-center/my-integral/lottery" class="option">咖啡</router-link>
      <router-link to="/user-center/my-integral/day-task" class="option">饮品</router-link>
      <router-link to="/user-center/my-integral/spot-task" class="option">其他</router-link>
    </div>
  </div>

</template>

<script>
    export default {
        name: "menu"
    }
</script>

<style scoped lang="scss">
  .menu-box{
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
