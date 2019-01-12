<template>
  <div>
    <v-Order></v-Order>
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
      }
    }
</script>

<style scoped lang="scss">
  .foot{
    position: absolute;
    bottom: 0;
  }

</style>
