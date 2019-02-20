
<template>
  <div>
    <v-User></v-User>
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
    }
  }
</script>

<style scoped lang="scss">
  .foot{
    position: absolute;
    bottom: 0;
  }

</style>

