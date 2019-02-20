
<template>
  <div class="order-box">
    <div class="link-title">
      <ul>
        <li v-for="(item,key) in showList" @click="changeSearchTitle(key)">
          <div class="title-selected" v-if="search_type===key">{{item.title}}</div>
          <div v-if="search_type!==key">{{item.title}}</div>
          <div v-if="search_type===key" class="switch"></div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: "order",
    data(){
      return{
        search_type:0,
        showList:[
          {title:"全部"},
          {title:"已完成"},
          {title:"未完成"},
        ],
      }
    },
    methods:{
      changeSearchTitle(num){
        this.search_type = num;
        console.log(num)
      }
    }
  }
</script>

<style scoped lang="scss">
  .order-box{
    .router-link-active {
      color: #4d86f1 !important;
      border-bottom: 4px solid #4d86f1;
    }
    .link-title{
      ul{
        height: 94px;
        border-bottom: 1px solid #e6e6e6;
      }
      li{
        position: relative;
        line-height: 94px;
        height: 94px;
        text-align: center;
        font-size: 30px;
        width: 250px;
        float: left;
      }
      .title-selected{
        color: #4d86f1;
      }
      .switch{
        height: 4px;
        width: 30px;
        background-color: #4d86f1;
        border-radius: 2px;
        position: relative;
        top: -4px;
        left: 105px;
      }
    }

  }

</style>
