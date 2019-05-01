<template>
    <div class="register-base-box">
      <div class="head-text">
        <span>注册新账号</span>
      </div>
      <div class="phone">
        <div class="login">
          <div class="num">
            <img src="/static/images/login/Login_icon_iphone@2x.png">
            <input type="number" v-model="phone_num" placeholder="输入手机号码">
          </div>
          <div class="password">
            <img src="/static/images/login/Login_icon_password@2x.png">
            <input v-model="password_num" type="password" placeholder="输入密码,(6-16位数字字母组成)">
          </div>
          <div class="password">
            <img src="/static/images/login/Login_icon_password@2x.png">
            <input v-model="password_num_sure" type="password" placeholder="确认密码">
          </div>
          <div class="password">
            <img src="/static/images/login/Login_icon_password@2x.png">
            <input v-model="validate_num" type="number" maxlength="6" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="输入验证码">
            <div class="get-validate">
              <span v-show="timeShow" @click="getSmsCode">获取验证码</span>
              <span v-show="!timeShow" class="count">{{count}}s后重新获取</span>
            </div>
          </div>
          <button class="phoneto_login" @click="register()">注册</button>
        </div>
      </div>

      <div class="open_new">
        <span class="login" @click="goLogin()">已有账号，去登陆</span>
        <span class="find" @click="goFindPassword()">忘记密码</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "register",
      data(){
          return{
            timeShow:true,
            count:60,
            phone_num:'',
            password_num:'',
            password_num_sure:'',
            validate_num:'',
          }
      },
      methods:{
        goLogin(){
          this.$router.push('/login')
        },
        goFindPassword(){
          this.$router.push('/find-password')
        },
        getSmsCode(){
          if(this.phone_num===null||this.phone_num===''){
            this.$toast("请先输入手机号码");
            return;
          }
          if(!(/^1[34578]\d{9}$/.test(this.phone_num))){
            this.$toast("请正确填写手机号码");
            return;
          }
          this.$http.post('/api/send/sendMsm.do',
            {
              userPhone:this.phone_num,
            },
          ).then((res)=>{
            if(res.data.success){
              console.log(res.data);
              const TIME_COUNT = 60;
              if (!this.timer) {
                this.count = TIME_COUNT;
                this.timeShow = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.timeShow = true;
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000)
              }
            }else{
              this.$toast(res.data.msg)
            }
          }).catch(error =>{
            console.log("请求异常"+error)
          });
        },
        register(){
          if(this.phone_num===null||this.phone_num===''){
            this.$toast("请先输入手机号码");
            return;
          }
          if(!(/^1[34578]\d{9}$/.test(this.phone_num))){
            this.$toast("请正确填写手机号码");
            return;
          }
          if(this.password_num===null||this.password_num===''){
            this.$toast("请先输入密码");
            return;
          }
          if(!(/^[a-zA-Z0-9]{6,16}$/.test(this.password_num))){
            this.$toast("请正确填写密码");
            return;
          }
          if(this.password_num_sure!==this.password_num){
            this.$toast("两次填写的密码不一致");
            return;
          }
          if(this.validate_num===null||this.validate_num===''){
            this.$toast("请先输入验证码");
            return;
          }
          if(!(/^[0-9]{6}$/.test(this.validate_num))){
            this.$toast("请正确填写验证码");
            return;
          }
          this.$http.post('/api/send/register.do',
            {
              phone:this.phone_num,
              password:this.password_num,
              validate:this.validate_num
            },
          ).then((res)=>{
            if(res.data.success){
              this.$router.push('/login')
            }else{
              this.$toast(res.data.msg)
            }
          }).catch(error =>{
            console.log("请求异常"+error)
          });
        }
      }
    }
</script>

<style scoped lang="scss">
.register-base-box{
  .head-text{
    font-size: 35px;
    height: 125px;
    text-align: center;
    line-height: 125px;
    color: #4d86f1;
    border-bottom: 1px solid #333333;
  }

  .open_new{
    width: 80%;
    overflow: hidden;
    margin-left: 1rem;
    .login{
      font-size: 28px;
      color: #4d86f1;
    }
    .find{
      font-size: 28px;
      color: #4d86f1;
      float: right;
    }
  }

  .phone{
    padding: 30px;
    .login{
      margin-top: 80px;
      text-align: center;
      .num{
        margin-bottom: 40px;
        position: relative;
        img{
          margin:0;
          width:22px;
          height:28px;
          position: absolute;
          left:36px;
          top:50%;
          transform: translateY(-50%);
        }
        input{
          width:690px ;
          height: 80px;
          padding-left: 80px;
          border: 1px solid #d5d5d5;/*no*/
          border-radius: 10px;
          font-size: 24px;
        }
      }
      .password{
        position: relative;
        margin-bottom: 60px;
        .get-validate{
          color:#4d86f1;
          height:80px;
          position: absolute;
          right:20px;
          top:50%;
          transform: translateY(-50%);
          line-height: 80px;
          text-align: center;
        }
        img{
          margin:0;
          width:22px;
          height:28px;
          position: absolute;
          left:36px;
          top:50%;
          transform: translateY(-50%);
        }
        input{
          width:690px ;
          height: 80px;
          padding-left: 80px;
          border: 1px solid #d5d5d5;/*no*/
          border-radius: 10px;
          font-size: 24px;
        }
      }
      .phoneto_login{
        width:690px ;
        height: 88px;
        background-color: #4d86f1;
        color: white;
        border-radius: 10px;
        margin-bottom: 40px;
        font-size: 32px;
        outline:none;
        border: none;
      }
    }
  }
}
</style>
