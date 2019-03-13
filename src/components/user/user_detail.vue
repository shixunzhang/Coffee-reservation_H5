<template>
  <div class="user-details-box">
    <div class="user-detail-head">
      <span>个人资料</span>
      <img class="img-left-goto" src="/static/images/home_page/left.png" @click="goUserCenter()">
    </div>
    <ul>
      <li>
        <span>
          选择头像
        </span>
        <img class="img-avatar" src="/static/images/touxiang/touxiang1.jpg">
        <img class="img-right-goto" src="../../assets/images/home_page/right.png">
      </li>
      <li>
        <span>
          昵称:
        </span>
        {{userMsg.userNick}}
        <input type="text" placeholder="请输入你的昵称">
      </li>
      <li>
        <span>
          性别:
        </span>
        {{userMsg.userSex}}
        <input type="text" placeholder="请输入你的昵称">
      </li>
      <li>
        <span>
          修改密码
        </span>
        <img class="img-right-goto" src="../../assets/images/home_page/right.png">
      </li>
      <li>
        <span>
          收货地址
        </span>
        <img class="img-right-goto" src="../../assets/images/home_page/right.png">
      </li>
    </ul>
    <div class="logout">退出登录</div>

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
        console.log(this.userMsg)
      }
    },
    methods:{
      goUserCenter(){
        this.$router.push({path: '/user'});
      },
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
      span{
        font-size: 30px;
      }
      .img-avatar{
        height: 80px;
        width: 80px;
        border-radius: 35px;
        margin: 20px 0 20px 20px;
      }
      .img-right-goto{
        float: right;
        height: 30px;
        width: 30px;
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


