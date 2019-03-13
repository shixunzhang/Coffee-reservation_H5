<template>
    <div class="about-ue-base-box">
      <div class="user-detail-head">
        <span>关于我们</span>
        <img class="img-left-goto" src="/static/images/home_page/left.png" @click="goUserCenter()">
      </div>
    <ul>
      <li v-for="(item,key) in aboutList">
        <div class="about-title"><span>{{item.title}}</span></div>
        <img v-bind:src="item.img">
        <div class="about-describe"><span>{{item.describe}}</span></div>
      </li>
    </ul>
    </div>
</template>

<script>
    export default {
        name: "about_us",
      data(){
          return{
            aboutList:[
              {title:"咖啡预定app",describe:"咖啡预定app，给你带来更佳体验的点餐软件。旨在给用户们提供更优质的预定服务，享受互联网带来的方便快捷，为人们节约时间",img:"/static/images/about/undraw_mobile_life_381t.png"},
              {title:"学习实践",describe:"9个月的校外实习实践，了解了先进的技术，在实践过程中更是积累了很多经验",img:"/static/images/about/undraw_reading_list_4boi.png"},
              {title:"后端SSM框架",describe:"后端采用Spring+SpringMVC+mybatis的框架，简化了开发，便于统一管理和优化，解除sql和程序代码的耦合",img:"/static/images/about/undraw_startup_life_2du2.png"},
              {title:"前端VUE,js",describe:"数据双向绑定，只需关注model层的数据处理，无需处理复杂的view层更新。代码简洁，分层清晰，提供自定义组件功能，进一步规范前端架构",img:"/static/images/about/undraw_JavaScript_Frameworks_x21l.png"},
              {title:"其他环境",describe:"1.oracle10g 2.node.js 3.manven 4.lombok插件 5.jetty服务器 6.flexible解决移动端适配问题",img:"/static/images/about/undraw_mobile_marketing_iqbr.png"},
              {title:"联系作者",describe:"wyzhangshixun@163.com",img:"/static/images/about/undraw_email_capture_x8kv.png"},
              {title:"图片矢量库",describe:"阿里矢量库：iconfont.cn  插图库undraw.co",img:"/static/images/about/undraw_images_aef7.png"},
              // {title:"顺利毕业",describe:"",img:"/static/images/about/undraw_graduation_9x4i.png"},
              {title:"关于作者",describe:"软件151班：张世勋",img:"/static/images/about/undraw_designer_kcp7.png"},
            ],
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
  .about-ue-base-box{
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
      margin: 40px 40px 20px 40px;
    }
    img{
      width: 100%;
      height: auto;
    }
    .about-title{
      font-weight: bold;
      font-size: 40px;
      color: #f47f00;
      text-align: center;
    }
    .about-describe{
      font-size: 30px;
      color: #333333;
      line-height: 50px;
      text-align: center;
    }
  }
</style>
