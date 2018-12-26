
<template>
  <div class="base-box">

    <div class="company-img">
      <img src="">
    </div>
    <div>
      上面可以放公司标志<br>
      没有原型图，需要大神来指导一下！！！！！！<br>
      文案也需要在确定！！！！！！！
    </div>

  <div class="title">
    {{synopsis.titleone}}
  </div>

    <div class="body-text">
      <ul>
        <li v-for="jj in synopsis.aboutCompany">
          {{jj.id}}  {{jj.name}}
        </li>
      </ul>
    </div>

    <div class="title">
    {{synopsis.titletwo}}
    </div>

    <div class="body-text">
      <ul>
        <li v-for="jj in synopsis.advantage">
          {{jj.id}}  {{jj.name}}
        </li>
      </ul>
    </div>

    <div class="title">
      {{synopsis.titlethree}}
    </div>
  <div class="body-text">
    <ul>
      <li v-for="jj in synopsis.content">
        {{jj.name}}
      </li>
    </ul>
  </div>

  </div>
</template>



<script>
  export default {
    name: "invite",
    props:["messages"],
    data(){
      return{
        synopsis:{},
      }
    },
    methods:{

    },
    watch:{
      messages(val){
        this.synopsis = val;
        console.log(this.synopsis);
      }
    }
  }
</script>

<style scoped lang="scss">
  .base-box{
    padding: 20px 30px 30px 30px;
    .company-img{
      height: 100px;
      width: 100px;
      border: 1px solid black;
    }
    .title{
      font-size: 35px;
      color: #4d86f1;
      font-weight: bold;
      padding: 20px 0px 20px 10px;
    }
    .body-text{
      font-size: 26px;
      line-height: 32px;
    }
  }

</style>
