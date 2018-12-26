<template>
  <div class="base-box">
    <div class="head-msg">
      <span>{{title}}常见问题</span>
    </div>

    <div class="box" v-for="(list,key) in answer.answerList">
      <div class="answer-title" @click="answer.answerList[key].show=!answer.answerList[key].show">
         <div class="title-text">{{list.title}}</div>
        <div class="setup-img" v-if="!answer.answerList[key].show">
          <img src="../../../assets/images/help_problem_images/setup_icon_down@2x.png">
        </div>
        <div class="setup-img" v-if="answer.answerList[key].show">
          <img src="../../../assets/images/help_problem_images/setup_icon_up@2x.png">
        </div>

      </div>
      <div class="answer-body" v-if="answer.answerList[key].show">
          {{list.answer}}
      </div>

    </div>

  </div>
</template>


<script>
  export default {
    name: "problem_answer",
    data(){
      return{
        title:this.$route.params.title,
        searchFirstKey:this.$route.params.searchFirstKey,
        searchSecondKey:this.$route.params.searchSecondKey,
        answer:[]
      }
    },
    mounted(){
       let self =this;
      this.$http.get('/api/user_center/help/answer').then((res)=>{
        this.$data.answer = res.data._DATA_.result.modelData;
        this.answer.answerList.forEach(function (item,index) {
          self.$set(item,"show",false)
        });
        console.log(this.answer)

    })
    },
    methods:{
    },
  }
</script>

<style scoped lang="scss">

    .box{
      border-bottom: 20px solid #F6F6F6;
    }
  .head-msg{
    font-size: 30px;
    height: 98px;
    background: #f6f6f6;
    span{
      position: relative;
      top: 30px;
      left: 50px;
    }
  }
  .answer-title{
    font-size: 28px;
    .title-text{
      padding: 20px 20px 20px 20px;
      width: 600px;
      position: relative;
      top: 20px;
      left: 60px;
      line-height: 35px;
    }
  }
  .answer-body{
    font-size: 26px;
    padding: 10px 60px 40px 60px;
    line-height: 48px;
  }
  .setup-img{
    position: relative;
    top: -40px;
    left: 680px;
    width: 40px;
    img{
      height: 32px;
      width: 32px;
    }
  }

</style>
