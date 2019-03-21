<template>
  <div class="home-box">

    <div class="advertising-wrapper">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="item of adList">
            <img :src="item.imgSrc" @click="handleHref(item.id)">
          </li>
        </ul>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="user-center-body-msg">
      <ul>
        <li>
          <mt-switch class="home-switch" v-model="value3" @change="change()">{{value4}}</mt-switch>
        </li>
        <li v-for="(item,key) in homeList">
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


  </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
      name: "home_page",
      data() {
        return {
          value3: true,
          value4: "自提",
          homeList:[
            {title:"立即下单",imgUrl:"/static/images/home_page/shopping.png",goPage:"/menu"},
            {title:"更改地址",imgUrl:"/static/images/home_page/location.png",goPage:"/feedback"},
            {title:"收货地址",imgUrl:"/static/images/home_page/location.png",goPage:"/menu"},
            {title:"关于我们",imgUrl:"/static/images/home_page/switch_user.png",goPage:"/about"},
          ],
          adList: [
            {
              imgSrc: '/static/images/ad/ad1.jpg',
              adTitle: '广告标题',
              url: 'xxx'
            },
            {
              imgSrc: '/static/images/ad/ad2.jpg',
              adTitle: '广告标题',
              url: 'xxx'
            },
            {
              imgSrc: '/static/images/ad/ad3.jpg',
              adTitle: '广告标题',
              url: 'xxx'
            },
            {
              imgSrc: '/static/images/ad/ad4.jpg',
              adTitle: '广告标题',
              url: 'xxx'
            }
          ]
        }
      },
      methods: {
        handleHref(url) {
        },
        change(){
          if(this.value3===true){
            this.value4 = "自提"
          }
          if(this.value3===false)
          this.value4 = "外卖"
        }
      },
      mounted() {
        new Swiper('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el:'.swiper-pagination'
          },
          autoplay: {
            delay: 3000
          }
        })
      },
    }
</script>

<style scoped lang="scss">
  .home-box{
    .user-center-body-msg{
      ul{
        border-top: 2px solid #cccccc;
        /*border-bottom: 30px solid #cccccc;*/
      }
      li{
        height: 100px;
        border-bottom: 1px solid #DDDDDD;
        font-size: 35px;
        .home-switch{
          position: relative;
          top: 30px;
          width: 150px;
          left: 550px;
          /*margin-top: 20px;*/
        }
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
    .advertising-wrapper {
      padding: 30px;
      border-radius: 10px;
      border-bottom: 20px solid #f6f6f6;
      border-top: 20px solid #f6f6f6;
      .swiper-container {
        border-radius: 10px;
        .swiper-pagination{
          bottom:30px;
        }
        img {
          width: 100%;
          height: 350px;
          margin-bottom: 30px;
        }
      }
    }
  }

</style>
