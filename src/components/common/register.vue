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
            phone_num:'',
            password_num:'',
            password_num_sure:'',
          }
      },
      methods:{
        goLogin(){
          this.$router.push('/login')
        },
        goFindPassword(){
          this.$router.push('/find-password')
        },
        register(){
          if(this.phone_num===null||this.phone_num===''){
            alert("请先输入手机号码");
            return;
          }
          if(!(/^1[34578]\d{9}$/.test(this.phone_num))){
            alert("请正确填写手机号码");
            return;
          }
          if(this.password_num===null||this.password_num===''){
            alert("请先输入密码");
            return;
          }
          if(!(/^[a-zA-Z0-9]{6,16}$/.test(this.password_num))){
            alert("请正确填写密码");
            return;
          }
          if(this.password_num_sure!==this.password_num){
            alert("两次填写的密码不一致");
            return;
          }
          this.$http.post('/api/user/register.do',
            {
              userPhone:this.phone_num,
              userPassword:this.password_num,
            },
          ).then((res)=>{
            if(res.data.success){
              this.$router.push('/login')
            }else{
              alert(res.data.msg)
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
