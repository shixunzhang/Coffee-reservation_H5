<template>
    <div class="feedback-base-box">
      <div class="feedback-base-head">
        <span>意见反馈</span>
        <img class="img-left-goto" src="/static/images/home_page/left.png" @click="goUserCenter()">
      </div>
      <ul>
        <li>
          <span>填写反馈:</span>
        </li>
        <li class="textarea">
              <textarea class="feed-back-box" v-model="question_detail" placeholder="请输入问题描述（200字内）"></textarea>
        </li>
        <li >
          <span>联系方式:</span>
        </li>
        <li class="textarea">
          <input class="content-information" v-model="contact" placeholder="请输入联系方式/电话/邮箱">
        </li>
        <div class="commit-btn" @click="commitMsg()">
          提交
        </div>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "feedback",
      data(){
       return{
          question_detail:'',
          contact:'',
          commit_flag:false,
       }
      },
      methods:{
        goUserCenter(){
          this.$router.push({path: '/user'});
        },
        commitMsg(){
          if(this.commit_flag===true){
            this.$toast("您已经反馈过了");
            return
          }
          if(this.question_detail===''||this.question_detail===null){
            this.$toast("请输入反馈信息");
            return
          }
          if(this.question_detail.length>200){
            this.$toast("反馈信息不超过200字");
            return
          }
          if(this.contact===''||this.contact===null){
            this.$toast("请输入反馈信息");
            return
          }
          if(!/^1[34578]\d{9}$/.test(this.contact)&&!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.contact)){
            this.$toast("请输入正确联系信息");
            return
          }
          this.$http.post('/api/feedback/increase.do',
            {
              feedbackText:this.question_detail,
              contactInformation:this.contact,
              userId:this.$store.state.user_data.userId
            },
          ).then((res)=>{
            if(res.data.success){
              this.commit_flag=true;
              this.$toast("意见反馈成功")
            }else{
              this.$toast("意见反馈失败")
            }
          }).catch(error =>{
            this.$toast('服务器开小差');
          })
        }
      }
    }
</script>

<style scoped lang="scss">
.feedback-base-box{
  .feedback-base-head{
    height: 110px;
    border-bottom: 20px solid #eeeeee;
    text-align: center;
    font-size: 30px;
    line-height: 90px;
    .img-left-goto{
      position: absolute;
      top: 30px;
      left: 30px;
      height: 40px;
      width: 40px;
    }
  }
  li{
    min-height: 80px;
    font-size: 30px;
    line-height: 80px;
    border-bottom: 1px solid #999999;
  }
  textarea{
    font-size: 27px;
  }
  .textarea{
    border-bottom: 20px solid #eeeeee;
  }
  .feed-back-box{
    height: 300px;
    width: 100%;
  }
  .content-information{
    height: 80px;
    width: 78%;
    /*border: 1px solid #999999;*/
    font-size: 27px;
  }
  .commit-btn{
    height: 80px;
    width: 600px;
    margin-left: 75px;
    background-color: #4d86f1;
    color: #ffffff;
    font-size: 40px;
    text-align: center;
    line-height: 80px;
    border-radius: 20px;
    position: relative;
    top: 140px;
  }
}
</style>
