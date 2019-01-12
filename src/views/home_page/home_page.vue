<template>
  <div>
    <v-HoomPage></v-HoomPage>
    <div class="foot">
      <v-Foot></v-Foot>
    </div>
  </div>

</template>

<script>
  import  vHoomPage from "@/components/home_page/home_page";
  import  vFoot from "@/components/common/foot";
    export default {
      name: "home_page",
      components: {
        vHoomPage,
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
