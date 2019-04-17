
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
      <ul>
        <li v-for="item in OrderList">
          <div class="menu-right">
            <div class="menu-name">
              {{item.orderNo}}{{item.totalPrice}}{{item.goodName}}
            </div>
            <div class="menu-name-en">
              {{item.orderAddress}}
              {{item.goodsSize}}
            </div>
          </div>
          <div class="menu-price">
            ￥{{item.totalPrice}}
          </div>
        </li>
      </ul>
    </div>
    <div class="emptyMsg" v-if="OrderList.length===0">
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
        showList:[
          {title:"全部"},
          {title:"已完成"},
          {title:"未完成"},
        ],
        OrderList:[]
      }
    },
    watch:{
      message(val){
        this.OrderList = val;
        console.log(this.OrderList)
      }
    },
    methods:{
      changeSearchTitle(num){
        this.search_type = num;
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
        console.log(num)
        this.$http.post('/api/order/list.do',
          {
            userId:this.$store.state.user_data.userId,
            finishFlag:finishFlag
          },
        ).then((res)=>{
          if(res.data.success){
            this.OrderList = res.data.data
            console.log(this.OrderList)
          }else{

          }
        }).catch(error =>{
          console.log("请求异常"+error)
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
      margin-top: 50px;
      p{
        margin-top: 20px;
        color: #4d86f1;
        font-size: 26px;
      }
    }

  }
</style>
