<template>
  <div class="menu-box">
    <!--头部tab选择-->
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
    <div class="menu">
      <ul>
        <li v-for="(item,key) in MenuList">
          <div class="menu-img">
            <img v-bind:src="item.goodsImg">
          </div>
          <div class="menu-right">
            <div class="menu-name">
              {{item.goodsName}}
            </div>
            <div class="menu-name-en">
              {{item.goodsNameEn}}
            </div>
          </div>
          <div class="menu-price">
            ￥{{item.goodsPriceSmall}}
          </div>
          <img class="add-img" src="../../assets/images/home_page/plus-circle-fill.png" @click="AddCoffee(key)">
        </li>
      </ul>
    </div>

    <div class="zhezhao" v-if="win_display">
      <div class="goods-select-window" v-if="win_display">
        <img class="head-img-beauuty" src="/static/images/else/undraw_coffee_break_j3of.png">
        <img class="close-img" src="/static/images/home_page/close-circle.png" @click="closeWin()">
        <img class="win-goods-img" v-bind:src="MenuList[this.select_item].goodsImg">
        <div class="select-item" v-if="this.MenuList[0].goodsCategory!=3">
          <span>规格：</span>
          <button v-if="goods_size!=1" @click="ChangeSize(1)">小杯</button>
          <button class="on" v-if="goods_size===1" @click="ChangeSize(1)">小杯</button>
          <button v-if="goods_size!=2" @click="ChangeSize(2)">中杯</button>
          <button class="on" v-if="goods_size===2" @click="ChangeSize(2)">中杯</button>
          <button v-if="goods_size!=3" @click="ChangeSize(3)">大杯</button>
          <button class="on" v-if="goods_size===3" @click="ChangeSize(3)">大杯</button>
        </div>
        <div class="select-item" v-if="this.MenuList[0].goodsCategory===1">
          <span>糖度：</span>
          <button v-if="goods_sugar!=0" @click="ChangeSugar(0)">无糖</button>
          <button class="on" v-if="goods_sugar===0" @click="ChangeSugar(0)">无糖</button>
          <button v-if="goods_sugar!=1" @click="ChangeSugar(1)">加糖</button>
          <button class="on" v-if="goods_sugar===1" @click="ChangeSugar(1)">加糖</button>
        </div>
        <div class="select-item">
          <span>数量：</span>
          <img src="/static/images/home_page/minus-circle.png" @click="downImgBtn()">
          {{this.goods_num}}
          <img src="/static/images/home_page/plus-circle-fill.png" @click="addImgBtn()">
        </div>
        <div class="select-item">
            ￥<span class="js-total-price">{{this.goods_num*this.goods_price}}</span>
        </div>
        <div class="submit-btn" @click="submitBtn()">
          <img src="/static/images/else/car.png">加入购物车
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "menu",
      props:["message"],
      data(){
        return{
          search_type:0,
          select_item:0,
          win_display:false,

          goods_price:0,
          goods_size:1,
          goods_sugar:0,
          goods_num:1,
          goods_id:"",
          goods_name:"",
          good_category:"",

          showList:[
            {title:"咖啡"},
            {title:"饮料"},
            {title:"甜品"},
          ],
          MenuList:[]
        }
      },
      watch:{
        message(val){
          this.MenuList = val;
        }
      },
      methods:{
        changeSearchTitle(num){
          this.search_type = num;
          this.$http.post('/api/goods/list.do',
            {goodsCategory:num+1},
          ).then((res)=>{
            if(res.data.success){
              this.MenuList = res.data.data
            }else{
              this.$toast("查询商品列表失败")
            }
          }).catch(error =>{
            this.$toast("网络开小差")
          })
        },
        AddCoffee(num){
          this.select_item=num;
          this.goods_sugar = 0;
          this.goods_num = 1;
          this.goods_size = 1;
          this.goods_price = this.MenuList[num].goodsPriceSmall;
          this.goods_id = this.MenuList[num].goodsId;
          this.goods_name = this.MenuList[num].goodsName;
          this.good_category = this.MenuList[num].goodsCategory;
          this.win_display = true;
        },
        downImgBtn(){
          if(this.goods_num === 1){
            this.$toast("已经是最少了哦！")
          }else{
            this.goods_num = this.goods_num-1;
          }
        },
        addImgBtn(){
          this.goods_num = this.goods_num+1;
        },
        ChangeSize(num){
          this.goods_size = num;
          if(num === 1){
            this.goods_price = this.MenuList[this.select_item].goodsPriceSmall
          }else if(num===2){
            this.goods_price = this.MenuList[this.select_item].goodsPriceBetween
          }else if(num===3){
            this.goods_price = this.MenuList[this.select_item].goodsPriceBig
          }
        },
        ChangeSugar(num){
          this.goods_sugar = num;
        },
        closeWin(){
          this.win_display = false;
        },
        submitBtn(){
          this.$http.post('/api/shopping/addShopping.do',
            {
              goodSize:this.goods_size,
              goodSugar:this.goods_sugar,
              shoppingNumber:this.goods_num,
              goodPrice:this.goods_price,
              goodId:this.goods_id,
              goodName:this.goods_name,
              goodCategory:this.good_category,
              totalPrice:(this.goods_price*this.goods_num),
              userId:this.$store.state.user_data.userId
            },
          ).then((res)=>{
            if(res.data.success){
              this.win_display = false;
            }else{
              this.$toast("加入购物车失败")
              this.win_display = false;
            }
          }).catch(error =>{
            this.$toast("网络开小差")
            this.win_display = false;
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .menu-box{
    margin-bottom: 90px;
    .menu{
      ul{
        margin-top: 1.4rem;
      }
      li{
        border-bottom: 1px solid #999999;
        height: 150px;
      }
      .add-img{
        position: relative;
        top: -15px;
        left: 20px;
        height: 40px;
        width: 40px;
      }
      .menu-img{
        display: inline-block;
        position: relative;
        top: -20px;
        width: 120px;
        margin-left: 20px;
        img{
          height: 90px;
          width: 90px;
        }
      }
      .menu-right{
        display: inline-block;
        width: 350px;
        .menu-name{
          margin-top: 30px;
          font-size: 35px;
        }
        .menu-name-en{
          margin-top: 15px;
          font-size: 30px;
          color: #cccccc;
        }
      }
      .menu-price{
        display: inline-block;
        position: relative;
        top: -10px;
        font-size: 40px;
        color: #4d86f1;
        width: 130px;
      }
    }
    /*商品属性选择窗口*/
    .zhezhao{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      z-index: 200;
    }
    .goods-select-window{
      position: fixed;
      top: 200px;
      background-color: #ffffff;
      border: 1px solid;
      height: 700px;
      width: 650px;
      margin-left: 55px;
      border-radius: 20px;
      .select-item{
        margin-left: 30px;
        margin-top: 30px;
      }
      span{
        font-size: 30px;
      }
      .js-total-price{
        font-size: 40px;
        color: #ff2d19;
      }
      .head-img-beauuty{
        width: 100%;
        height: 300px;
        border-radius: 20px 20px 0 0;
        border-bottom: 1px solid #999999;
      }
      .close-img{
        position: fixed;
        top: 210px;
        left: 630px;
        height: 50px;
        width: 50px;
      }
      img{
        height: 50px;
        width: 50px;
      }
      .win-goods-img{
        height: 160px;
        width: 160px;
        right: 35px;
        top: 375px;
        position: absolute;
        border: 1px solid #333333;
      }
      button{
        height: 40px;
        width: 80px;
        border: 1px solid #4d86f1;
        color: #ffffff;
        border-radius: 30px;
        background-color: #f47f00;
        font-weight: bold;
        margin-left: 10px;
      }
      button.on{
        background-color: #4d86f1;
      }
      .submit-btn{
        background-color: #4d86f1;
        color: #ffffff;
        font-size: 25px;
        width: 200px;
        height: 60px;
        position: absolute;
        right: 0;
        bottom: 0;
        line-height: 60px;
      }
    }



 /*上部tab样式*/
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
        border-bottom: 1px solid #e6e6e6;
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

  }
</style>
