<template>
  <div class="user-details-box">
    <div class="user-detail-head">
      <span>个人资料</span>
      <img class="img-left-goto" src="/static/images/home_page/left.png" @click="goUserCenter()">
    </div>
    <ul>
      <li @click="changeAvatar()">
        <span>
          选择头像
        </span>
        <img class="img-avatar" v-bind:src="userMsg.userPortrait">
        <img class="img-right-change-avatar" src="../../assets/images/home_page/right.png">
      </li>
      <li @click="changeUserMessage(0)">
        <span>
          昵称:
        </span>
        <img class="img-right-goto" src="../../assets/images/home_page/right.png">
        <span class="mag-right">
           {{userMsg.userNick}}
        </span>
      </li>
      <li @click="changeUserMessage(1)">
        <span>
          性别:
        </span>
        <img class="img-right-goto" src="../../assets/images/home_page/right.png">
        <span class="mag-right" v-if="userMsg.userSex===1">
        男
        </span>
        <span class="mag-right"  v-if="userMsg.userSex===0">
          女
        </span>
        <!--<select>-->
          <!--<option>男</option>-->
          <!--<option>女</option>-->
        <!--</select>-->
      </li>
      <li @click="changeUserMessage(2)">
        <span>
          绑定手机:
        </span>
        <img class="img-right-goto" src="../../assets/images/home_page/right.png">
        <span class="mag-right">
          +86 {{userMsg.userPhone}}
        </span>
      </li>
      <li @click="changeUserMessage(3)">
        <span>
          修改密码
        </span>
        <img class="img-right-goto" src="../../assets/images/home_page/right.png">
      </li>
      <!--<li @click="changeUserMessage(4)">-->
        <!--<span>-->
          <!--收货地址-->
        <!--</span>-->
        <!--<img class="img-right-goto" src="../../assets/images/home_page/right.png">-->
      <!--</li>-->
    </ul>
    <div class="logout" @click="logout()">退出登录</div>

  </div>
</template>

<script>
  export default {
    name: "user_detail",
    props:["userData"],
    data(){
      return{
        userMsg:{},
      }
    },
    watch:{
      userData(val){
        this.userMsg = val;
      }
    },
    methods:{
      changeUserMessage(num){
        // num:0-昵称  1-性别  2-手机号   3-密码  4-地址
        if(num === 0){
          this.$router.push({path: '/change-user?flag=0'});
        }
        if(num === 1){
          this.$router.push({path: '/change-user?flag=1'});
        }
        if(num === 2){
          this.$router.push({path: '/change-user?flag=2'});
        }
        if(num === 3){
          this.$router.push({path: '/change-user?flag=3'});
        }
        if(num === 4){
          this.$router.push({path: '/change-user?flag=4'});
        }
      },
      goUserCenter(){
        this.$router.push({path: '/user'});
      },
      changeAvatar(){
        this.$router.push({path:'/avatar-select'})
      },
      logout(){
        this.$store.commit('USER_DATA',null);
        this.$router.push({path:'/login'})
      }
    }
  }
</script>

<style scoped lang="scss">
  .user-details-box{
    .user-detail-head{
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
      border-bottom: 1px solid #999999;
      min-height: 80px;
      line-height: 80px;
      span{
        font-size: 30px;
        margin-left: 30px;
      }
      .mag-right{
        font-size: 28px;
        float: right;
        margin-right: 30px;
      }
      .img-avatar{
        height: 80px;
        width: 80px;
        border-radius: 40px;
        margin: 20px 0 20px 400px;
      }
      .img-right-goto{
        float: right;
        height: 30px;
        width: 30px;
        margin-top: 27px;
        margin-right: 30px;
      }
      .img-right-change-avatar{
        float: right;
        height: 30px;
        width: 30px;
        margin-top: 45px;
        margin-right: 30px;
      }
    }
    .logout{
      margin-top: 80px;
      height: 80px;
      width: 600px;
      color: #e5e5e5;
      background-color: #4d86f1;
      border-radius: 20px;
      text-align: center;
      line-height: 80px;
      font-size: 35px;
      letter-spacing:15px;
      margin-left: 75px;
    }
  }
</style>


