<template>
  <div class="user-box">
    <div class="user-center-head-msg">
      <img src="/static/images/goods/icon_yinliao/yinliao_1.png">
      <span><!--{{name}}-->喜讯同学</span>
    </div>

    <div class="user-center-body-msg">
      <ul>
        <li v-for="(item,key) in menuList">
          <router-link v-bind:to="item.goPage">
          <img class="menu-img" v-bind:src="item.imgUrl">
          <div class="body-title">
            <span>{{item.title}}</span>
          </div>
           <img class="img-right-goto" src="../../assets/images/home_page/right.png">
          </router-link>
        </li>
      </ul>
    </div>
    <div class="advertisement-box">
      <img src="/static/images/ad/timg.jpg">
    </div>


  </div>
</template>

<script>
  export default {
    name: "user",
    data(){
      return{
        menuList:[
          {title:"个人资料",imgUrl:"/static/images/home_page/user(1).png",goPage:"/menu"},
          {title:"帮助反馈",imgUrl:"/static/images/home_page/mail_fill.png",goPage:"/home-page"},
          {title:"收货地址",imgUrl:"/static/images/home_page/location.png",goPage:"/menu"},
          {title:"关于我们",imgUrl:"/static/images/home_page/switch_user.png",goPage:"/menu"},
        ],
        OrderList:[]
    }
  },
    methods:{
    }
}
</script>

<style scoped lang="scss">
  .user-box{
    .user-center-head-msg{
      background-color: #f9ba08;
      height: 180px;
      img{
        height: 90px;
        width: 90px;
        border-radius: 30px;
        background-color: #31b1f7;
        border: 2px solid #333333;
        margin: 50px 30px 0 50px;
      }
    }
    .user-center-body-msg{
      ul{
        border-top: 2px solid #cccccc;
        /*border-bottom: 30px solid #cccccc;*/
      }
      li{
        height: 100px;
        border-bottom: 1px solid #DDDDDD;
        font-size: 35px;
        .menu-img{
          height: 50px;
          width: 50px;
          margin-left: 30px;
        }
        .body-title{
          display: inline-block;
          margin-top: 30px;
          line-height: 30px;
          width: 560px;
        }
      }
      .img-right-goto{
        height: 40px;
        width: 40px;
        /*position: relative;*/
        /*left: 600px;*/
        /*top: 10px;*/
        /*margin-left: 630px;*/
        /*float: right;*/
      }
    }
    .advertisement-box{
      margin-top: 50px;
      padding: 0 20px;
      img{
        height: 300px;
        width: 100%;
      }
    }

  }
</style>

