<template>
    <div class="update-address-base-box">
      <div class="js-user-detail-head">
        <span>修改收货地址</span>
        <img class="img-left-goto" src="/static/images/home_page/left.png" @click="goAddress()">
        <img class="img-delete-img" src="/static/images/home_page/delete.png" @click="deleteAddress()">
      </div>
      <ul class="address-msg-ul">
        <li>
          <input class="contacts" v-model="contacts" placeholder="收货人"></input>
        </li>
        <li>
          <input class="phone" v-model="phone" placeholder="联系电话"></input>
        </li>
        <li>
          <input class="address" v-model="address" placeholder="收货地址"></input>
        </li>
        <li class="home-switch-li" v-if="value4">
          <mt-switch class="home-switch" v-model="value3" @change="change()">设置为默认地址</mt-switch>
        </li>
      </ul>
      <div class="commit-btn" @click="updateAddress()">
        <span>修改</span>
      </div>
      <div class="zhezhao" v-if="msg_win">
        <div class="js-tips-modal" v-if="msg_win">
          <div class="tips-title">
            <span>是否确定删除收货地址？</span>
          </div>
          <ul>
            <li class="msg-btn msg-box-close" @click="deleteClose()">
              暂时保留
            </li>
            <li class="msg-btn msg-box-del" @click="deleteCommit()">
              删除地址
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "updateAddress",
      data(){
        return{
          msg_win:false,
          address:this.$route.params.address,
          contacts:this.$route.params.contacts,
          phone:this.$route.params.phone,
          addressId:this.$route.params.addressId,
          defaultAddress:1,
          value3: true,
          value4:true,
        }
      },
      created(){
          if(this.$store.state.user_data.userAddress === this.addressId){
            this.value3 = true;
            this.defaultAddress = 1
            this.value4 = false;
          }else{
            this.value3 = false;
            this.defaultAddress = 0
          }
      },
      methods:{
        change(){
          if(this.value3===true){
            this.defaultAddress = 1;
          }
          if(this.value3===false)
            this.defaultAddress = 0;
        },
        goAddress(){
          this.$router.push({path: '/address'});
        },
        deleteAddress(){
          this.msg_win = true
        },
        deleteClose(){
          this.msg_win = false
        },
        deleteCommit(){
          this.$http.post('/api/address/delete.do',
            {
              addressId:this.addressId,
              userId:this.$store.state.user_data.userId,
            },
          ).then((res)=>{
            if(res.data.success){
              this.$toast("删除成功");
              this.$router.push({path: '/address'});
            }else{
              this.$toast(res.data.msg);
            }
          }).catch(error =>{
            this.$toast("网络开小差");
          });
        },
        updateAddress(){
          if(this.contacts===null||this.contacts===''){
            this.$toast("请先输入联系人");
            return;
          }
          if(this.phone===null||this.phone===''){
            this.$toast("请先输入联系方式");
            return;
          }
          if(!(/^1[34578]\d{9}$/.test(this.phone))){
            this.$toast("请正确填写联系方式");
            return;
          }
          if(this.address===null||this.address===''){
            this.$toast("请先输入收货地址");
            return;
          }
          this.$http.post('/api/address/update.do',
            {
              addressId:this.addressId,
              address:this.address,
              contacts:this.contacts,
              phone:this.phone,
              userId:this.$store.state.user_data.userId,
              major:this.defaultAddress,
            },
          ).then((res)=>{
            if(res.data.success){
              this.$toast("修改成功")
            }else{
              this.$toast(res.data.msg);
            }
          }).catch(error =>{
            this.$toast("网络开小差");
          })
        },
      }
    }
</script>

<style scoped lang="scss">
.update-address-base-box{
  .home-switch-li{
    height: 1.3rem !important;
  }
  .home-switch{
    position: relative;
    top: 0.4rem;
    margin-left: 0.5rem;
  }
  .zhezhao{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    z-index: 200;
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
  .js-user-detail-head{
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
  .img-delete-img{
    position: absolute;
    top: 30px;
    left: 90%;
    height: 40px;
    width: 40px;
  }
}
  .address-msg-ul{
    margin-top: 120px;
    font-size: 0.36rem;
  li{
    border-bottom: 1px solid #999999;
    height: 85px;
  input{
    height: 95%;
    padding: 0 0.5rem;
    width: 80%;
  }
}
}
  .commit-btn{
    margin-top: 80px;
    color: #ffffff;
    font-size: 35px;
    text-align: center;
    line-height: 70px;
    background-color: #4d86f1;
    border: 1px solid #4d86f1;
    height: 70px;
    width: 60%;
    margin-left: 20%;
    border-radius: 15px;
  }
}
</style>
