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

    <el-switch
      style="display: block;"
      v-model="value4"
      active-color="#13ce66"
      inactive-color="#4d86f1"
      active-text="自提"
      inactive-text="外卖">
    </el-switch>
    <mt-switch v-model="value3">开关</mt-switch>
  </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
      name: "home_page",
      data() {
        return {
          value3: true,
          value4: true,
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
