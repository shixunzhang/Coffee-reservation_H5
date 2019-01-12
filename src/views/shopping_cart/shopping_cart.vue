<template>
  <div>
    <v-ShoppingCart></v-ShoppingCart>
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
      }
    }
</script>

<style scoped lang="scss">
  .foot{
    position: absolute;
    bottom: 0;
  }

</style>
