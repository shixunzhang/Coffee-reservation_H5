<template>
    <div class="base-box">
      <div class="bg-img">
        <div>
          <span class="head-title">核心数据</span>
          <span class="head-title-second">(统计今日00:00到当前数据)</span>
        </div>
        <ul>
          <li>
            <div class="item-bg">
              <div class="item-num"><span>{{total.total_visited}}</span></div>
                 <span class="item-describe">访问量</span>
            </div>
          </li>
          <li>
            <div class="item-bg">
              <div class="item-num"><span>{{total.total_fan}}</span></div>
              <span class="item-describe">粉丝量</span>
            </div>
          </li>
          <li>
            <div class="item-bg">
              <div class="item-num"><span>{{total.total_order}}</span></div>
              <span class="item-describe">订单数</span>
            </div>
          </li>
          <li>
            <div class="item-bg">
              <div class="item-num"><span>{{total.total_comment}}</span></div>
              <span class="item-describe">评论数</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "data_center_head",
      props:["messages"],
      data(){
          return{
            total:{},
          }
      },
      methods:{
      },
      watch:{
        messages(val){
          this.total = val;
          console.log(this.total);
        }
      }
    }
</script>

<style scoped lang="scss">
  .bg-img{
    color: #ffffff;
    height: 284px;
    width: 750px;
    background: url(../../../assets/images/user_center_data/shuju_bg@2x.png);
    background-size: 100% 100%;
    li{
      margin-top: 60px;
      float: left;
      padding-left: 30px;
    }
    .head-title{
      font-size: 30px;
      position: relative;
      left: 30px;
      top: 40px;
    }
    .head-title-second{
      font-size: 22px;
      position: relative;
      left: 33px;
      top: 37px;

    }
  }
  .item-bg{
    /*position: relative;*/
    /*top: 65px;*/
    height: 150px;
    width: 150px;
    background: url(../../../assets/images/user_center_data/shuju_bg_hexin@2x.png);
    background-size: 100% 100%;
    .item-num{
      position: relative;
      top: 36px;
      width: 150px;
      text-align: center;
      font-size: 40px;
    }
    .item-describe{
      position: relative;
      top: 36px;
      left: 40px;
      width: 150px;
      font-size: 24px;
      text-align: center;
    }
  }
</style>
