<template>
  <div class="home-box">

    <div class="advertising-wrapper">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="item of adList">
            <img :src="item.imgSrc" @click="handleHref(item.id)">
          </li>
        </ul>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->
        <!-- 如果需要滚动条 -->
        <!--<div class="swiper-scrollbar"></div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
      name: "home_page",
      data() {
        return {
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
        }
      },
      mounted() {
        new Swiper('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el:'.swiper-pagination'
          },
          // 如果需要前进后
          // nextButton: '.swiper-button-next',
          // prevButton: '.swiper-button-prev',
          // 如果需要滚动条
          // scrollbar: '.swiper-scrollbar',
          autoplay: {
            delay: 3000
          }
        })
      },
    }
</script>

<style scoped lang="scss">
  .home-box{
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
