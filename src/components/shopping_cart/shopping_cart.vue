<template>
  <div class="shopping-box">
    <div class="zhezhao" v-if="msg_win">
      <div class="js-tips-modal" v-if="msg_win">
        <div class="tips-title">
          <span>这是最后一杯，确定不要了吗？</span>
        </div>
        <div class="msg-btn" @click="deleteCommit()">
          <span>残忍移除</span>
        </div>
        <div class="msg-btn" @click="deleteClose()">
          <span>我再想想</span>
        </div>

      </div>
    </div>
    <div class="head-msg"><p>购物车</p></div>
    <!--购物车列表-->
    <div class="shopping">
      <ul>
          <li v-for="(item,key) in ShoppingList">
            <div class="not-select-div" v-if="!checkList[key].flag" @click="changeChecked(key)">
            </div>
            <div class="select-div" v-if="checkList[key].flag"  @click="changeChecked(key)">
            </div>
            <div class="shopping-name">{{item.goodName}}</div>
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
    <div class="settlement-total-box">
      应付合计：<span>￥{{total_price}}</span>
      <div class="goto-settlement" @click="addOrder()">去结算</div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "shopping_cart",
      props:["message"],
      data(){
        return{
          search_type:0,
          select_num:0,
          msg_win:false,
          total_price:0,
          ShoppingList:[],
          checkList:[],
          settlement:[],
        }
      },
      watch:{
        message(val){
          this.ShoppingList = val;
          console.log(this.ShoppingList);
          for (let i=0; i<this.ShoppingList.length; i++){
            this.checkList.push({"flag":false});
          }
        }
      },
      methods:{
        // 商品数量减
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
                alert("成功");
                this.ShoppingList[num].shoppingNumber=this.ShoppingList[num].shoppingNumber-1;
                this.ShoppingList[num].totalPrice=(this.ShoppingList[num].goodPrice*(this.ShoppingList[num].shoppingNumber));

              }else{
                alert("失败")
              }
            }).catch(error =>{
              console.log("请求异常"+error)
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
                alert("成功");
                this.ShoppingList.splice(this.select_num,1);
                this.checkList.splice(this.select_num,1);
                this.msg_win = false;
              }else{
                alert("失败")
              }
            }).catch(error =>{
              console.log("请求异常"+error)
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
              alert("成功");
              this.ShoppingList[num].shoppingNumber=this.ShoppingList[num].shoppingNumber+1;
              this.ShoppingList[num].totalPrice=(this.ShoppingList[num].goodPrice*(this.ShoppingList[num].shoppingNumber));
            }else{
              alert("失败")
            }
          }).catch(error =>{
            console.log("请求异常"+error)
          })
        },
        // 更改选中状态
        changeChecked(num){
          this.checkList[num].flag=!this.checkList[num].flag;
          if(this.checkList[num].flag===true){
            this.total_price= this.total_price+this.ShoppingList[num].totalPrice
          }else{
            this.total_price= this.total_price-this.ShoppingList[num].totalPrice
          }
        },
        // 下单
        addOrder(){
          let me = this;
          this.settlement=[];
          this.checkList.forEach(function (item,index) {
            if(item.flag===true){
              me.settlement.push(me.ShoppingList[index])
            }
          });

          this.$http.post('/api/order/insertList.do',
            {
              shoppingList:this.settlement,
              idInt:this.settlement[0].userId
            },
          ).then((res)=>{
            if(res.data.success){
              alert("成功");
            }else{
              alert("失败")
            }
          }).catch(error =>{
            console.log("请求异常"+error)
          });
          console.log(this.settlement)
        },
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
      z-index: 10;
    }
    /*选择提示窗口*/
    .js-tips-modal{
      position: absolute;
      top: 400px;
      background-color: #e5e5e5;
      z-index: 20;
      border: 1px solid #4d86f1;
      height: 260px;
      width: 90%;
      margin-left: 5%;
      .tips-title{
        text-align: center;
        font-size: 30px;
        margin-top: 50px;
      }
      .msg-btn{
        height: 40px;
        width: 150px;
        border-radius: 20px;
        border: 1px solid #4d86f1;
        text-align: center;
        font-size: 25px;
        line-height: 40px;
        margin-left: 120px;
        display: inline-block;
        background-color: #4d86f1;
        color: #ffffff;
        margin-top: 80px;
      }
    }
    /*头部显示信息*/
    .head-msg{
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
      background-color: #ffffff;
      height: 60px;
      font-size: 30px;
      text-align: center;
      line-height: 40px;
      border-bottom: 10px solid #cccccc;
      p{
        margin-top: 10px;
      }
    }
    /*购物车列表*/
    .shopping{
      margin-top: 70px;
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
        width: 40%;
        color: #333;
        text-align: left;
        position: relative;
        top: 30px;
        left: 100px;
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
        left: 20px;
      }
      .shopping-good-size{
        font-size: 25px;
        display: inline-block;
        position: relative;
        top: 25px;
        left: 20px;
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
