<template>
  <div class="login-base-box">
    <div class="header_guide">
      <ul>
        <li class="header-active" @click="select_flag=true">手机密码登录</li>
        <li @click="select_flag=false">验证码登录</li>
      </ul>
    </div>

    <div class="phone" v-if="select_flag">
        <div class="login">
          <div class="num">
            <img src="/static/images/login/Login_icon_iphone@2x.png">
            <input type="number" v-model="phone_num" placeholder="输入手机号码">
          </div>
          <div class="password">
            <img src="/static/images/login/Login_icon_password@2x.png">
            <input v-model="password_num" type="password" placeholder="输入密码">
          </div>
          <button class="phoneto_login" @click="loginPhone()">登录</button>
        </div>
    </div>

  <div class="phone_num" v-if="!select_flag">
      <div class="login">
        <div class="num">
          <img src="/static/images/login/Login_icon_iphone@2x.png">
          <input v-model="phone_num" type="number" placeholder="输入手机号码">
        </div>
        <div class="password">
          <img src="/static/images/login/Login_icon_password@2x.png">
          <input v-model="validate_num" type="number" maxlength="6" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="输入验证码">
          <div class="get-validate">
            <span v-show="timeShow" @click="getSmsCode">获取验证码</span>
            <span v-show="!timeShow" class="count">{{count}}s后重新获取</span>
          </div>
        </div>
        <button class="numto_login" @click="loginValidate()">登录</button>
      </div>
  </div>

    <div class="open_new">
      <span class="register" @click="goRegister()">注册新账号</span>
      <span class="find" @click="goFindPassword()">忘记密码</span>
    </div>

  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            timeShow:true,
            count:60,
            select_flag:true,
            phone_num:'',
            password_num:'',
            validate_num:'',
          }
      },
      methods:{
        loginPhone(){
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
          this.$http.post('/api/user/login.do',
            {
              userPhone:this.phone_num,
              userPassword:this.password_num,
            },
          ).then((res)=>{
            if(res.data.success){
              this.$store.commit('USER_DATA',res.data.data);
              this.$toast("登录成功");
              this.$router.push('/home-page')
            }else{
              this.$toast(res.data.msg)
            }
          }).catch(error =>{
            this.$toast('服务器开小差');
            console.log("请求异常"+error)
          });
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
            this.$toast('服务器开小差');
            console.log("请求异常"+error)
          });
        },
        loginValidate(){
          if(this.phone_num===null||this.phone_num===''){
            this.$toast("请先输入手机号码");
            return;
          }
          if(!(/^1[34578]\d{9}$/.test(this.phone_num))){
            this.$toast("请正确填写手机号码");
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
          this.$http.post('/api/send/loginValidate.do',
            {
              phone:this.phone_num,
              validate:this.validate_num
            },
          ).then((res)=>{
            if(res.data.success){
              this.$store.commit('USER_DATA',res.data.data);
              this.$router.push('/home-page')
            }else{
              this.$toast(res.data.msg)
            }
          }).catch(error =>{
            this.$toast('服务器开小差');
            console.log("请求异常"+error)
          });
        },
        goRegister(){
          this.$router.push('/register')
        },
        goFindPassword(){
          this.$router.push('/find-password')
        }
      }
    }
</script>

<style scoped lang="scss">
.login-base-box{
  /*头部*/
  .header_guide{
    ul{
      display: flex;
      li{
        flex:1;
        height:126px;
        text-align:center;
        color: #333333;
        line-height:86px;
        font-size: 32px;
        padding: 20px 0;
      }
    }
    .header-active{
      color:#333333 !important;
      position: relative;
    }
    .header-active::after{
      content:'';
      width:100px !important;
      height:4px;
      background: #4d86f1;
      border-radius:2px;
      position: absolute;
      bottom: 0px;
      left:50%;
      transform: translateX(-50%);
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

  .phone_num{
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
      }
      .numto_login{
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
  .open_new{
    width: 80%;
    overflow: hidden;
    margin-left: 1rem;
    .register{
      font-size: 28px;
      color: #4d86f1;
    }
    .find{
      font-size: 28px;
      color: #4d86f1;
      float: right;
    }
  }

}
</style>
