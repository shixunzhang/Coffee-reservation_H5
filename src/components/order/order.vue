
<template>
  <div class="order-box">
    <div class="link-title">
      <ul>
        <li v-for="(item,key) in showList" @click="changeSearchTitle(key)">
          <div class="title-selected" v-if="search_type===key">{{item.title}}</div>
          <div v-if="search_type!==key">{{item.title}}</div>
          <div v-if="search_type===key" class="switch"></div>
        </li>
      </ul>
    </div>

    <!--菜单列表-->
    <div class="order">
      <ul class="order-list-uls">
        <li class="order-list-lis" v-for="item in OrderList">
          <ul>
            <p class="order-no">{{item.orderList[0].orderNo}}</p>
            <p class="order-address" v-if="item.orderList[0].orderAddress === '-1'">自提订单</p>
            <p class="order-address" v-if="item.orderList[0].orderAddress != '-1'">{{item.orderList[0].orderAddress}}</p>
            <li class="order-list-li" v-for="item1 in item.orderList">
              <div class="menu-right">
                <div class="menu-name">
                 {{item1.goodName}} * {{item1.orderNumber}}
                </div>
                <div class="menu-price">
                  ￥<span class="span-price">{{item1.totalPrice}}</span>
                </div>
                <div class="shopping-good-size-box" v-if="item1.goodsCategory!==3">
                  <div class="shopping-good-size" v-if="item1.goodsSize===1">
                    小杯
                  </div>
                  <div class="shopping-good-size" v-else-if="item1.goodsSize===2">
                    中杯
                  </div>
                  <div class="shopping-good-size" v-else-if="item1.goodsSize===3">
                    大杯
                  </div>
                </div>
                <div class="shopping-good-sugar-box" v-if="item1.goodsCategory===1">
                  <div class="shopping-good-sugar" v-if="item1.goodsSugar===0">
                    无糖
                  </div>
                  <div class="shopping-good-sugar" v-if="item1.goodsSugar===1">
                    加糖
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="emptyMsg" v-if="!OrderList">
      <span>还没有相关订单</span>
      <p @click="goToShopping()">去购物车中下单</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "order",
    props:["message"],
    data(){
      return{
        search_type:0,
        pageNo: 1,
        pageSize: 10,
        tips: '努力加载中...',
        REQUIRE: true,
        loading: false,
        showList:[
          {title:"全部"},
          {title:"已完成"},
          {title:"未完成"},
        ],
        OrderList:[]
      }
    },
    mounted() {
      // // 添加滚动事件，检测滚动到页面底部
      window.addEventListener('scroll', this.scrollBottom)
    },
    watch:{
      message(val){
        this.OrderList = val;
      }
    },
    methods:{
      scrollBottom() {
        let clientHeight = document.body.clientHeight;
        let scrollHeight = window.innerHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop + scrollHeight >= clientHeight && this.REQUIRE) {
          // 请求的数据未加载完成时，滚动到底部不再请求前一页的数据
          this.REQUIRE = false;
          this.loading = true;
          this.tips = '努力加载中...';
          this.pageNo = this.pageNo + 1;

          let finishFlag;
          if (this.search_type === 0) {
            finishFlag = 3
          }
          else if(this.search_type===1){
            finishFlag = 1
          }
          else if(this.search_type===2){
            finishFlag = 0
          }
          let that = this;
          this.$http.post('/api/order/listOrder.do',
            {
              userId:this.$store.state.user_data.userId,
              finishFlag:finishFlag,
              pageNum: this.pageNo,
              pageSize: this.pageSize
            },
          ).then((res)=>{
            if(res.data.success){
              if(res.data.data!=null){
                res.data.data.forEach(function (item) {
                  that.OrderList.push(item)
                })
              }
              if (res.data.data==null || res.data.data.length < 10) {
                this.REQUIRE = false;
                this.loading = true;
                this.tips = '已经到底了...';
              } else {
                this.REQUIRE = true;
                this.loading = false;
                this.tips = '努力加载中...';
              }
            }else{
              this.$toast(res.data.msg)
            }
          }).catch(error =>{
            this.$toast("网络开小差");
            console.log(error)
        })
        }
      },
      changeSearchTitle(num){
        this.search_type = num;
        this.pageNo=1;
        this.REQUIRE = true;
        document.documentElement.scrollTop=0;
        document.body.scrollTop=0;
        let finishFlag;
        if (num == 0) {
          finishFlag = 3
        }
        else if(num==1){
          finishFlag = 1
        }
        else if(num==2){
          finishFlag = 0
        }
        this.$http.post('/api/order/listOrder.do',
          {
            userId:this.$store.state.user_data.userId,
            finishFlag:finishFlag,
            pageNum: this.pageNo,
            pageSize: this.pageSize
          },
        ).then((res)=>{
          if(res.data.success){
            this.OrderList = res.data.data
          }else{
            this.$toast(res.data.msg)
          }
        }).catch(error =>{
          this.$toast("网络开小差")
        })
      },
      goToShopping(){
        this.$router.push("/shopping")
      }
    }
  }
</script>

<style scoped lang="scss">
  .order-box{
    .router-link-active {
      color: #4d86f1 !important;
      border-bottom: 4px solid #4d86f1;
    }
    .link-title{
      position: fixed;
      top: 0;
      background-color: #ffffff;
      z-index: 100;
      border-bottom: 15px solid #eeeeee;
      ul{
        height: 94px;
      }
      li{
        position: relative;
        line-height: 94px;
        height: 94px;
        text-align: center;
        font-size: 30px;
        width: 250px;
        float: left;
      }
      .title-selected{
        color: #4d86f1;
      }
      .switch{
        height: 4px;
        width: 30px;
        background-color: #4d86f1;
        border-radius: 2px;
        position: relative;
        top: -4px;
        left: 105px;
      }
    }
    .emptyMsg{
     text-align: center;
      font-size: 30px;
      margin-top: 3rem;
      p{
        margin-top: 20px;
        color: #4d86f1;
        font-size: 26px;
      }
    }
    .order{
      /*background-color: #;*/
      .order-list-uls{
        margin-top: 1.5rem;
        font-size: 0.373333rem;
        margin-bottom: 1.2rem;
      }
      .order-list-lis{
        border-bottom: 1px solid #999999;
        padding: 0.1rem 0.266667rem 0.233333rem 0.4rem;
        .order-no{
          color: #333;
          margin: 5px 0 5px 0;
        }
        .order-address{
          color: #4d86f1;
          margin-bottom: 15px;
        }
      }
      .order-list-li{
        .shopping-good-size-box{
          font-size: 0.31rem;
          display: inline-block;
          width: 20%;
        }
        .shopping-good-sugar-box{
          font-size: 0.31rem;
          display: inline-block;
          width: 20%;
        }
        .menu-name{
          display: inline-block;
          width: 80%;
        }
        .menu-price{
          display: inline-block;
          text-align: right;
          width: 15%;
          .span-price{
            font-size: 35px;
            color: #f47f00;
          }
        }
        .menu-right{
          margin: 20px 0 20px 0;
        }
      }
    }

  }
</style>
