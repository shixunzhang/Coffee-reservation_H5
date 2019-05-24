<template>
    <div class="address-base-box">
      <div class="user-detail-head">
        <span>我的收货地址</span>
        <img class="img-left-goto" src="/static/images/home_page/left.png" @click="goUserCenter()">
        <div class="js-add-btn" @click="addNewAddress()">
          添加新地址
        </div>
      </div>
      <div class="address-list">
        <ul>
          <li v-for="(item,key) in addressList">
            <p><span class="contacts">{{item.contacts}} </span><span class="phone">{{item.phone}}</span></p>
            <p class="address">{{item.address}}</p>
            <div class="change-btn" @click="updateAddress(key)">
              <span>编辑</span>
            </div>
            <div class="mainAddress" v-if="mainAddress===item.addressId">默认地址</div>
          </li>
        </ul>
      </div>
      <div class="emptyMag" v-if="addressList.length===0">尚未添加收货地址...
        <p @click="addNewAddress()">去添加</p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "userAddress",
      props:["List","userDetails"],
      data(){
        return{
          mainAddress:'',
          addressList:[],
        }
      },
      created(){
        // this.mainAddress = this.$store.state.user_data.userAddress
        // this.getUserDetails()
      },
      watch:{
        List(val){
          this.addressList = val
        },
        userDetails(user){
          this.mainAddress = user.userAddress
        }
      },
      methods:{
        updateAddress(num){
          this.$router.push({
            name: 'updateAddress',
            params: {
              address:this.addressList[num].address,
              phone: this.addressList[num].phone,
              contacts:this.addressList[num].contacts,
              addressId:this.addressList[num].addressId,
            }
          })
          // this.$router.push({path: '/update-address'});
        },
        addNewAddress(){
          this.$router.push({path: '/new-address'});
        },
        goUserCenter(){
          this.$router.push({path: '/user'});
        },
        getUserDetails() {
          this.$http.post('/api/user/detail.do',
            {
              userId:this.$store.state.user_data.userId
            },
          ).then((res)=>{
            if(res.data.success){
              this.mainAddress = res.data.data.userAddress;
              this.$store.commit('USER_DATA',res.data.data);
            }else{
              this.$toast(res.data.msg);
            }
          }).catch(error =>{
            this.$toast("网络开小差")
          })
        }
      }
    }
</script>

<style scoped lang="scss">
.address-base-box{
  .user-detail-head{
    position: fixed;
    top: 0;
    width: 100%;
    height: 110px;
    background-color: #ffffff;
    z-index: 100;
    border-bottom: 20px solid #eeeeee;
    text-align: center;
    font-size: 30px;
    line-height: 90px;
    .img-left-goto{
      position: absolute;
      top: 30px;
      left: 30px;
      height: 40px;
      width: 40px;
    }
    .js-add-btn{
      position: absolute;
      left: 80%;
      top: 0rem;
      z-index: 200;
      font-size: 0.3rem;
      color: #4d86f1;
    }
  }
  .address-list{
    margin-top: 115px;
    font-size: 25px;
    .mainAddress{
      position: relative;
      left: 55%;
      top: -1.85rem;
      border: 1px solid #ff2d19;
      color: red;
      width: 120px;
      text-align: center;
      font-size: 20px;
      padding: 5px 10px;
    }
    li{
      border-bottom: 1px solid #999999;
      height: 1.9rem;
    }
    p{
      margin-top: 0.1rem;
    }
    .contacts{
      margin: 0.1rem 0.3rem 0 0.2rem;
      color: #333333;
      font-size: 30px;
    }
    .phone{
      color: #999999;
    }
    .address{
      font-size: 0.35rem;
      height: 1.1rem;
      width: 80%;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      padding: 0.1rem 0.2rem;
      line-height: 0.5rem;
    }
    .change-btn{
      position: relative;
      left: 90%;
      top: -0.8rem;
      width: 1rem;
    }
  }
  .emptyMag{
    font-size: 30px;
    width: 100%;
    text-align: center;
    margin-top: 3rem;
    p{
      margin-top: 20px;
      font-size: 26px;
      color: #4d86f1;
    }
  }
}
</style>
