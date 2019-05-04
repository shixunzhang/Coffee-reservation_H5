<template>
    <div class="newAddress-base-box">
      <div class="user-detail-head">
        <span>添加收货地址</span>
        <img class="img-left-goto" src="/static/images/home_page/left.png" @click="goAddress()">
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
      </ul>
      <div class="commit-btn" @click="addNewAddress()">
        <span>添加</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "newAddress",
      data(){
          return{
            address:'',
            contacts:'',
            phone:'',
          }
      },
      methods:{
        goAddress(){
          this.$router.push({path: '/address'});
        },
        addNewAddress(){
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
          this.$http.post('/api/address/increase.do',
            {
              userId:this.$store.state.user_data.userId,
              address:this.address,
              contacts:this.contacts,
              phone:this.phone
            },
          ).then((res)=>{
            if(res.data.success){
              this.$toast("添加成功")
              this.$router.push({path: '/address'});
            }else{
              this.$toast(res.data.msg)
            }
          }).catch(error =>{
            this.$toast("网络开小差")
          })
        },
      }
    }
</script>

<style scoped lang="scss">
.newAddress-base-box{
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
  }
  .address-msg-ul{
    margin-top: 120px;
    li{
      border-bottom: 1px solid #999999;
      height: 60px;
      input{
        height: 100%;
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
