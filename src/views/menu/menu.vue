<template>
  <div>
    <v-Menu></v-Menu>
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
  }
</script>

<style scoped lang="scss">
  .foot{
    position: absolute;
    bottom: 0;
  }
</style>
