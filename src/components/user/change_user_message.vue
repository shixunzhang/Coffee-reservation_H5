<template>
    <div class="change-user-message">
      <div class="feedback-base-head">
        <span v-if="showFlag==='0'">更改昵称</span>
        <span v-if="showFlag==='1'">更改性别</span>
        <span v-if="showFlag==='2'">更改手机号</span>
        <span v-if="showFlag==='3'">更改密码</span>
        <span v-if="showFlag==='4'">更改地址</span>
        <img class="img-left-goto" src="/static/images/home_page/left.png" @click="goUserCenter()">
      </div>
      <div class="msg-box" v-if="showFlag==='0'">
        <input class="text-input" type="text" v-model="change_nick" placeholder="输入新昵称">
        <div class="submit-btn" v-if="change_nick" @click="updateCommit(0)">确定</div>
        <div class="empty-btn" v-if="!change_nick">确定</div>
      </div>
      <div class="msg-box" v-if="showFlag==='1'">
        <select class="sex-select" v-model="select_sex">
        <option value="1">男</option>
        <option value="0">女</option>
        </select>
        <div class="submit-btn" @click="updateCommit(1)">确定</div>
      </div>
      <div class="msg-box" v-if="showFlag==='2'">
        <input class="text-input" type="number" v-model="change_phone" placeholder="输入新手机号码">
        <div class="submit-btn" v-if="change_phone" @click="updateCommit(2)">确定</div>
        <div class="empty-btn" v-if="!change_phone">确定</div>
      </div>
      <div class="msg-box" v-if="showFlag==='3'">
        <input class="text-input" type="text" v-model="change_password_used" placeholder="输入旧密码">
        <input class="text-input" type="text" v-model="change_password" placeholder="输入新密码">
        <div class="submit-btn" v-if="change_password&&change_password_used" @click="updateCommit(0)">确定</div>
        <div class="empty-btn" v-if="!change_password||!change_password_used">确定</div>
      </div>
      <div class="msg-box" v-if="showFlag==='4'">
        <input class="text-input" type="text" v-model="change_address" placeholder="输入新地址">
        <div class="submit-btn" v-if="change_address" @click="updateCommit(0)">确定</div>
        <div class="empty-btn" v-if="!change_address">确定</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "change_user_message",
      data(){
        return{
          showFlag:0,
          showMsg:"",
          select_sex:1,
          change_nick:null,
          change_phone:null,
          change_address:null,
          change_password_used:null,
          change_password:null,
        }
      },
      created(){
        // flag:0-昵称  1-性别  2-手机号   3-密码  4-地址
        this.getUrlData()
      },
      methods:{
        getUrlData() {
          if (this.$route.query.flag != undefined)
            this.showFlag = this.$route.query.flag;
        },
        goUserCenter(){
          this.$router.push('/user-detail')
        },
        updateCommit(num){
          if(num===1){
            this.$http.post('/api/user/change-sex.do',
              {
                userId:this.$store.state.user_data.userId,
                userSex:this.select_sex,
              },
            ).then((res)=>{
              if(res.data.success){
                this.$toast("成功");
              }else{
                this.$toast(res.data.msg)
              }
            }).catch(error =>{
              this.$toast('服务器开小差');
            });
            return
          }
          this.$http.post('/api/user/updateUserMsg.do',
            {
              userId:this.$store.state.user_data.userId,
              userNick:this.change_nick,
              userPhone:this.change_phone,
              userAddress:this.change_address,
            },
          ).then((res)=>{
            if(res.data.success){
              this.$toast("成功");
            }else{
              this.$toast(res.data.msg)
            }
          }).catch(error =>{
            this.$toast('服务器开小差');
          });
        }
      }
    }
</script>

<style scoped lang="scss">
  .change-user-message{
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
    .msg-box{
      margin-top: 50px;
      .sex-select{
        height: 60px;
        width: 80%;
        font-size: 30px;
        background-color: #e5e5e5;
      }
      .text-input{
        width: 100%;
        font-size: 26px;
        padding: 0 30px 0 30px;
        height: 60px;
        border-bottom: 2px solid #dddddd;
        margin-top: 30px;
      }
      .submit-btn{
        height: 80px;
        width: 80%;
        margin-left: 10%;
        background-color: #4d86f1;
        color: #e5e5e5;
        font-size: 30px;
        border-radius: 15px;
        text-align: center;
        line-height: 80px;
        margin-top: 50px;
      }
      .empty-btn{
        height: 80px;
        width: 80%;
        margin-left: 10%;
        background-color: #999999;
        color: #e5e5e5;
        font-size: 30px;
        border-radius: 15px;
        text-align: center;
        line-height: 80px;
        margin-top: 50px;
      }
    }
  }
</style>
