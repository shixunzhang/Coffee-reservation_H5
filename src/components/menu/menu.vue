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
            <!--<img src="../../assets/images/goods/icon_coffee/kafei_1.png">-->
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
            ￥{{item.goodsPrice}}
          </div>
          <img class="add-img" src="../../assets/images/home_page/plus-circle-fill.png" @click="AddCoffee(item.goodsId)">
        </li>
      </ul>
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
          showList:[
            {title:"咖啡"},
            {title:"饮料"},
            {title:"甜品"},
          ],
          MenuList:[
            {id:1,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_1.png',goods_price:20},
            {id:2,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_2.png',goods_price:20},
            {id:3,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_3.png',goods_price:20},
            {id:4,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_4.png',goods_price:20},
            {id:5,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_5.png',goods_price:20},
            {id:6,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_6.png',goods_price:20},
            {id:7,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_7.png',goods_price:20},
            {id:8,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_8.png',goods_price:20},
            {id:9,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_9.png',goods_price:20},
            {id:10,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_10.png',goods_price:20},
            {id:11,goods_name:'拿铁咖啡',goods_name_en:'natei',goods_category:1,goods_img:'/static/images/goods/icon_coffee/kafei_11.png',goods_price:20},
          ]
        }
      },
      watch:{
        message(val){
          this.MenuList = val;
          console.log("yemian");
          console.log(this.MenuList)
        }
      },
      methods:{
        changeSearchTitle(num){
          this.search_type = num;

          this.$http.post('/api/goods/list.do',
            {
              goodsCategory:num+1
            },
          ).then((res)=>{
            if(res.data.success){
              this.MenuList = res.data.data
              console.log(this.MenuList)
            }else{

            }
          }).catch(error =>{
            console.log("请求异常"+error)
          })
        },

        AddCoffee(num){
          // console.log(this.MenuList[num].id,this.MenuList[num].goods_name)
          console.log(num)
        }
      }
    }
</script>

<style scoped lang="scss">
  .menu-box{
    margin-bottom: 90px;
    .menu{
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




    .router-link-active {
      color: #4d86f1 !important;
      border-bottom: 4px solid #4d86f1;
    }
    .link-title{
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
