<template>
    <div class="find-password-base-box">
      <div class="head-text">
        <span>找回密码</span>
      </div>

      <div class="phone">
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

        <div class="open_new">
          <span class="login" @click="goLogin()">已有账号，去登陆</span>
          <span class="find" @click="goRegister()">去注册</span>
        </div>
    </div>
</template>

<script>
    export default {
      name: "find_password",
      data(){
        return{
        }
      },
      methods:{
        goLogin(){
          this.$router.push('/login')
        },
        goRegister(){
          this.$router.push('/register')
        }
      }
    }
</script>

<style scoped lang="scss">
.find-password-base-box{
  .head-text{
    font-size: 35px;
    height: 125px;
    text-align: center;
    line-height: 125px;
    color: #4d86f1;
    border-bottom: 0.2rem solid #eeeeee;
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
