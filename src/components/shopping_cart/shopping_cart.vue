<template>
  <div class="shopping-box">
    <div class="zhezhao" v-if="msg_win">
      <div class="js-tips-modal" v-if="msg_win">
        <div class="tips-title">
          <span>这是最后一杯，确定不要了吗？</span>
        </div>
        <ul>
          <li class="msg-btn msg-box-close" @click="deleteClose()">
            我再想想
          </li>
          <li class="msg-btn msg-box-del" @click="deleteCommit()">
            残忍移除
          </li>
        </ul>
      </div>
    </div>
    <div class="head-msg">购物车</div>
    <!--购物车列表-->
    <div class="shopping">
      <ul>
          <li v-for="(item,key) in ShoppingList">
            <div class="not-select-div" v-if="!checkList[key].flag" @click="changeChecked(key)">
            </div>
            <div class="select-div" v-if="checkList[key].flag"  @click="changeChecked(key)">
            </div>
            <div class="shopping-name"><span>{{item.goodName}}</span></div>
            <div class="shopping-num">
              <img class="shopping-down-img" src="../../assets/images/home_page/minus-circle.png" @click="shoppingDown(key)">
              <span>{{item.shoppingNumber}}</span>
              <img class="shopping-add-img" src="../../assets/images/home_page/plus-circle.png" @click="shoppingUp(key)">
            </div>
            <div class="shopping-price-total">
              ￥<span>{{item.totalPrice}}</span>
            </div>
            <div class="shopping-good-size" v-if="item.goodCategory!=3">
              <div class="shopping-good-size" v-if="item.goodSize===1">
                小杯
              </div>
              <div class="shopping-good-size" v-else-if="item.goodSize===2">
                中杯
              </div>
              <div class="shopping-good-size" v-else-if="item.goodSize===3">
                大杯
              </div>
            </div>
            <div class="shopping-good-sugar" v-if="item.goodCategory===1">
              <div class="shopping-good-sugar" v-if="item.goodSugar===0">
                无糖
              </div>
              <div class="shopping-good-sugar" v-if="item.goodSugar===1">
                加糖
              </div>
            </div>
          </li>
      </ul>
    </div>
    <div class="emptyMag" v-if="ShoppingList.length===0">购物车中空空如也...
      <p @click="goToMenu()">去菜单中挑选</p>
    </div>
    <div class="pain-box" v-if="msg2_win">
      <div class="black-box">
      </div>
      <div class="pain-base-box">
        <img class="close-img" src="/static/images/home_page/close-circle.png" @click="closeWin()">
        <ul class="show-address">
          <li>
            <span>收货地址：</span>{{mainAddress}}
          </li>
        </ul>
        <ul class="show-pain-method">
          <li @click="commitOrder(1)">
            支付宝支付
          </li>
          <li @click="commitOrder(2)">
            微信支付
          </li>
          <li @click="commitOrder(3)">
            银联支付
          </li>
        </ul>
      </div>
    </div>
    <div class="settlement-total-box">
      应付合计：<span>￥{{total_price}}</span>
      <div class="goto-settlement" @click="addOrder()">去结算</div>
    </div>

  </div>
</template>

<script>
  import { Toast } from "mint-ui";
    export default {
      name: "shopping_cart",
      props:["message"],
      data(){
        return{
          address:'自提订单',
          addressList:[],
          mainAddress:'',
          search_type:0,
          select_num:0,
          msg_win:false,
          msg2_win:false,
          total_price:0,
          ShoppingList:[],
          checkList:[],
          settlement:[],
          selectIdList:[],
          idList:[],
        }
      },
      watch:{
        message(val){
          this.ShoppingList = val;
          this.checkList = [];
          for (let i=0; i<this.ShoppingList.length; i++){
            this.checkList.push({"flag":false,"id":this.ShoppingList[i].shoppingId});
          }
          let that = this;
          this.checkList.forEach(function (item) {
            that.idList.forEach(function (sel) {
              if(item.id===sel){
                item.flag = true;
              }
            })
          });
        }
      },
      created(){
        let that = this;
        this.$http.post('/api/address/addressList.do',
          {
            userId:this.$store.state.user_data.userId
          },
        ).then((res)=>{
          if(res.data.success){
            this.addressList = res.data.data;
            if(this.$store.state.user_data.takeOut===1){
              this.addressList.forEach(function (item) {
                if(item.addressId===that.$store.state.user_data.userAddress){
                  that.mainAddress=item.address;
                }
              })
            }else{
              this.mainAddress='自提订单';
            }
          }else{
            this.$toast(res.data.msg);
          }
        }).catch(error =>{
          this.$toast("网络开小差")
        })
      },
      methods:{
        // 跳转到菜单页面
        goToMenu(){
          this.$router.push('/menu')
        },
        closeWin(){
          this.msg2_win=false;
        },
        // 商品数量减1
        shoppingDown(num){
          if(this.ShoppingList[num].shoppingNumber===1){
            this.select_num = num;
            this.msg_win = true;
            return;
          }else{
            this.$http.post('/api/shopping/updateShopping.do',
              {
                shoppingId:(this.ShoppingList[num].shoppingId),
                shoppingNumber:(this.ShoppingList[num].shoppingNumber-1),
                totalPrice:(this.ShoppingList[num].goodPrice*(this.ShoppingList[num].shoppingNumber-1))
              },
            ).then((res)=>{
              if(res.data.success){
                this.ShoppingList[num].shoppingNumber=this.ShoppingList[num].shoppingNumber-1;
                this.ShoppingList[num].totalPrice=(this.ShoppingList[num].goodPrice*(this.ShoppingList[num].shoppingNumber));
                if(this.checkList[num].flag===true){
                  this.total_price=(this.total_price-this.ShoppingList[num].goodPrice)
                }
              }else{
                this.$toast(res.data.msg)
              }
            }).catch(error =>{
              this.$toast("网络开小差")
            })
          }
        },
        // 数量为1 时 确定删除
        deleteCommit(){
            this.$http.post('/api/shopping/updateShopping.do',
              {
                shoppingId:(this.ShoppingList[this.select_num].shoppingId),
                shoppingNumber:(this.ShoppingList[this.select_num].shoppingNumber-1),
                totalPrice:(this.ShoppingList[this.select_num].goodPrice*(this.ShoppingList[this.select_num].shoppingNumber-1))
              },
            ).then((res)=>{
              if(res.data.success){
                if(this.checkList[this.select_num].flag===true){
                  this.total_price=(this.total_price-this.ShoppingList[this.select_num].goodPrice)
                }
                this.ShoppingList.splice(this.select_num,1);
                this.checkList.splice(this.select_num,1);
                this.msg_win = false;
              }else{
                this.$toast(res.data.msg)
              }
            }).catch(error =>{
              this.$toast("网络开小差")
            })
        },
        // 数量为1 关闭提示窗口
        deleteClose(){
          this.msg_win = false;
        },
        // 商品数量增加1
        shoppingUp(num){
          this.$http.post('/api/shopping/updateShopping.do',
            {
              shoppingId:(this.ShoppingList[num].shoppingId),
              shoppingNumber:(this.ShoppingList[num].shoppingNumber+1),
              totalPrice:(this.ShoppingList[num].goodPrice*(this.ShoppingList[num].shoppingNumber+1))
            },
          ).then((res)=>{
            if(res.data.success){
              this.$toast("成功");
              this.ShoppingList[num].shoppingNumber=this.ShoppingList[num].shoppingNumber+1;
              this.ShoppingList[num].totalPrice=(this.ShoppingList[num].goodPrice*(this.ShoppingList[num].shoppingNumber));
              if(this.checkList[num].flag===true){
                this.total_price=(this.total_price+this.ShoppingList[num].goodPrice)
              }
            }else{
              this.$toast(res.data.msg)
            }
          }).catch(error =>{
            this.$toast("网络开小差");
          })
        },
        // 更改选中状态
        changeChecked(num){
          this.checkList[num].flag=!this.checkList[num].flag;
          if(this.checkList[num].flag===true){
            this.idList.push(this.ShoppingList[num].shoppingId);
            this.total_price= this.total_price+this.ShoppingList[num].totalPrice
          }else{
            let ind = this.idList.indexOf(this.ShoppingList[num].shoppingId);
            this.idList.splice(ind,1);
            this.total_price= this.total_price-this.ShoppingList[num].totalPrice
          }
        },
        // 下单
        addOrder(){
          if(this.total_price===0){
            this.$toast("请先选择结算商品");
            return
          }
          this.msg2_win=true;
        },
        commitOrder(num){
          console.log(num);
          if(num===1){
            this.toastInstanse = Toast({
              message: "2秒我就消失", //弹窗内容
              position: "middle", //弹窗位置
              duration: -1, //弹窗时间毫秒,如果值为-1，则不会消失
              iconClass: "glyphicon glyphicon-heart", //设置 图标类
              className: "mytoast" //自定义Toast 样式，需要自己提供一个类名
            });
            this.$toast("选择支付宝下单,功能正在对接，暂时默认成功");
          }else if(num===2){
            this.$toast("选择微信下单,功能正在对接，暂时默认成功");
          }else if(num===3){
            this.$toast("选择银联下单,功能正在对接，暂时默认成功");
          }
          let me = this;
          this.settlement=[];
          this.selectIdList=[];
          let ShoppingListLeft=[];
          this.checkList.forEach(function (item,index) {
            if(item.flag===true){
              me.settlement.push(me.ShoppingList[index]);
              me.selectIdList.push(index)
            }
            else{
              ShoppingListLeft.push(me.ShoppingList[index])
            }
          });

          this.$http.post('/api/order/insertList.do',
            {
              shoppingList:this.settlement,
              idInt:this.settlement[0].userId
            },
          ).then((res)=>{
            if(res.data.success){
              this.$toast("下单成功,请留意是否完成");
              this.msg2_win=false;
              this.ShoppingList = ShoppingListLeft;
              this.checkList=[];
              for (let i=0; i<this.ShoppingList.length; i++){
                this.checkList.push({"flag":false});
              }
              this.total_price=0;
            }else{
              this.$toast(res.data.msg)
            }
          }).catch(error =>{
            this.$toast("网络开小差");
          });
        }
      }
    }
</script>

<style scoped lang="scss">
  .shopping-box{
    margin-bottom: 90px;
    .zhezhao{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      z-index: 100;
    }
    /*选择提示窗口*/
    .js-tips-modal{
      position: absolute;
      top: 400px;
      border-radius: 15px;
      background-color: #ffffff;
      z-index: 20;
      border: 1px solid #4d86f1;
      height: 260px;
      width: 70%;
      margin-left: 15%;
      .tips-title{
        text-align: center;
        font-size: 30px;
        margin-top: 50px;
      }
      .msg-btn{
        height: 1.05rem;
        position: relative;
        font-size: 30px;
        text-align: center;
        line-height: 1.1rem;
        top: 1.3rem;
        width: 49%;
        display: inline-block;
        border-top: 1px solid #eeeeee;
      }
      .msg-box-close{
        border-right: 1px solid #eeeeee;
        color: #4d86f1;
      }
    }
    /*头部显示信息*/
    .head-msg{
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
      background-color: #ffffff;
      height: 100px;
      font-size: 30px;
      text-align: center;
      line-height: 100px;
      border-bottom: 15px solid #eeeeee;
    }
    /*购物车列表*/
    .shopping{
      margin-top: 1.3rem;
      padding-bottom: 100px;
      li{
        border-bottom: 1px solid #999999;
        height: 120px;
      }
      .not-select-div{
        /*position: relative;*/
        float: left;
        margin-top: 33px ;
        margin-left: 30px;
        top: 20px;
        left: 20px;
        height: 40px;
        width: 40px;
        border-radius: 20px;
        border: 1px solid #333333;
      }
      .select-div{
        float: left;
        margin-top: 33px ;
        margin-left: 30px;
        top: 20px;
        left: 20px;
        height: 40px;
        width: 40px;
        border-radius: 20px;
        background-image: url("/static/images/home_page/check-circle-fill.png");
        background-size: 100% 100%;
      }
      .shopping-name{
        font-size: 35px;
        width: 4.5rem;
        color: #333;
        text-align: left;
        position: relative;
        top: 30px;
        left: 1rem;
        span{
        position: relative;
        left: -0.5rem;
        }
      }
      .shopping-price-total{
        float: right;
        font-size: 30px;
        color: #ff2d19;
        margin-right: 30px;
        margin-top: 5px;
      }
      .shopping-num{
        float: right;
        font-size: 30px;
        margin-right: 25px;
        img{
          height: 40px;
          width: 40px;
        }
      }
      .shopping-good-sugar{
        font-size: 25px;
        display: inline-block;
        position: relative;
        top: 25px;
        left: 30px;
      }
      .shopping-good-size{
        font-size: 25px;
        display: inline-block;
        position: relative;
        top: 25px;
        left: 20px;
      }
    }
    /*购物车为空时显示信息*/
    .emptyMag{
      font-size: 30px;
      width: 100%;
      text-align: center;
      p{
        margin-top: 20px;
        font-size: 26px;
        color: #4d86f1;
      }
    }
    .pain-box{
      z-index: 200;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      .black-box{
        background-color: #999999;
        height: 50%;
      }
      .pain-base-box{
        background-color: #ffffff;
        height: 50%;
        .close-img{
          height: 0.8rem;
          width: 0.8rem;
          position: relative;
          left: 85%;
          top: 0.2rem;
        }
        .show-address{
          height: 16%;
          li{
            text-align: left;
            font-size: 0.35rem;
            line-height: 2rem;
            padding: 0 60px;
          }
        }
        .show-pain-method{
          li{
            text-align: center;
            font-size: 0.36rem;
            color: #ffffff;
            height: 0.8rem;
            line-height: 0.8rem;
            background-color: #4d86f1;
            margin: 0.8rem 0.8rem 0.8rem 0.8rem;
          }
        }
      }
    }
    /*去结算div*/
    .settlement-total-box{
      height: 100px;
      width: 100%;
      position: fixed;
      bottom: 0;
      margin-bottom: 90px;
      background-color: #ffffff;
      line-height: 100px;
      span{
        color: #f47f00;
        font-size: 50px;
      }
      .goto-settlement{
        background-color: #4d86f1;
        height: 100%;
        width: 240px;
        float: right;
        color: #e5e5e5;
        font-size: 35px;
        text-align: center;
      }
    }


  }
</style>
