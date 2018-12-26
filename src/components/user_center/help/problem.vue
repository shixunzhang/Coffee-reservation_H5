
<template>

<div class="base-box">

  <div class="box" v-for="(help,key) in problemList.helpList">
    <div  class="first-title" @click="problemList.helpList[key].show=!problemList.helpList[key].show">
      <div class="icon-img">
        <img v-if="key===0" src="../../../assets/images/help_problem_images/Questions_icon_my_info@2x.png">
        <img v-if="key===1" src="../../../assets/images/help_problem_images/Questions_icon_Enter_a_contract@2x.png">
        <img v-if="key===2" src="../../../assets/images/help_problem_images/Questions_icon_Liveclass@2x.png">
        <img v-if="key===3" src="../../../assets/images/help_problem_images/Questions_icon_Curriculum_promotion@2x.png">
        <img v-if="key===4" src="../../../assets/images/help_problem_images/Questions_icon_background@2x.png">
      </div>
      <span>{{help.title}}</span>


      <div class="setup-img" v-if="!problemList.helpList[key].show">
      <img src="../../../assets/images/help_problem_images/setup_icon_down@2x.png">
      </div>
      <div class="setup-img" v-if="problemList.helpList[key].show">
      <img src="../../../assets/images/help_problem_images/setup_icon_up@2x.png">
      </div>
    </div>

    <div class="children-title" v-if="problemList.helpList[key].show">
    <ul>
      <li v-for="(value,num) in help.helpContent" @click="showchange(key,num)">
        {{value.content}}
        <div v-if="num<help.helpContent.length-1">
          <!--<hr v-if="problemList.helpList[key].show"/>-->
        </div>

      </li>
    </ul>

    </div>
  </div>

</div>
</template>


<script>
  export default {
    name:"problem",
    props:["messages"],
    data(){
      return{
        problemList:[],
      }
    },
    methods:{
      showchange(key,num){
        this.$router.push(
          {name:'problem_answer',
            params:{
            title:this.problemList.helpList[key].helpContent[num].content,
            searchFirstKey: key,
            searchSecondKey:num,
          }
          }
       )


      }
    },
    watch:{
      messages(val) {
        let self = this;
        this.problemList = val;
        this.problemList.helpList.forEach(function (item,index) {
          self.$set(item,"show",false)
        });
        console.log(this.problemList);
      }
    }
  }

</script>

<style scoped lang="scss">

  html{
    background-color: #F6F6F6;
  }

  .base-box{
    text-align: left;
    .box{
      border-top: 20px solid #F6F6F6;
    }
  }
  .first-title{
    background-color: #ffffff;
    position: relative;
    font-size: 30px;
    font-weight: bold;
    height: 98px;
    width: 750px;
    border-bottom: 0.5px solid #C0C0C0;
    img{
      position: relative;
      top: 30px;
      left: 30px;
      height: 32px;
      width: 32px;
    }
    span{
      position: relative;
      left: 90px;
      height: 80px;
    }
    .setup-img{
      position: relative;
      top: -60px;
      left: 650px;
      width: 50px;
    }
  }


  .children-title{
    font-size: 28px;
    position: relative;
    li{
      position: relative;
      left: 50px;
      height: 80px;
      width: 660px;
      line-height: 80px;
      border-bottom: 0.5px solid #C0C0C0;
    }
    li:last-of-type{
      border-bottom: 0;
    }
  }


</style>
