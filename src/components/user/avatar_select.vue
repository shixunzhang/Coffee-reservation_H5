<template>
  <div class="avatar-base-box">
    <div class="feedback-base-head">
      <span>头像选择</span>
      <img class="img-left-goto" src="/static/images/home_page/left.png" @click="goUserCenter()">
    </div>
    <ul>
      <li class="avatar-li" v-for="(item,key) in avatarList">
        <img v-bind:src="item.imgUrl" @click="selectDetail(key)">
      </li>
    </ul>
    <div class="zhezhao" v-if="select_show" @click="closeSelectWin()">
      <div class="avatar-detail" @click="StopClose()">
        <img class="img-change" src="/static/images/home_page/left.png" @click="changeImgDown()">
        <img class="selected-img" v-bind:src="avatarList[select_num].imgUrl">
        <img class="img-change" src="/static/images/home_page/right.png" @click="changeImgUp()">
        <div class="avatar-commit-btn" @click="selectCommit()">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "avatar_select",
      data(){
          return{
            select_num:0,
            select_show:false,
            avatarList:[
              {imgUrl:"/static/images/touxiang/touxiang1.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang2.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang3.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang4.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang5.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang6.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang7.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang8.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang9.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang10.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang11.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang12.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang13.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang14.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang15.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang16.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang17.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang18.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang19.jpg"},
              {imgUrl:"/static/images/touxiang/touxiang20.jpg"},
            ]
          }
      },
      methods:{
        goUserCenter(){
          // this.$router.push({path: '/user-detail'});
          window.history.back()
        },
        selectDetail(num){
          this.select_show=true;
          this.select_num=num;
        },
        selectCommit(){
          this.$http.post('/api/user/change-avatar.do',
            {
              userId:this.$store.state.user_data.userId,
              userPortrait:this.avatarList[this.select_num].imgUrl,
            },
          ).then((res)=>{
            if(res.data.success){
              this.select_show=false;
              this.$toast("成功");
            }else{
              this.$toast(res.data.msg);
            }
          }).catch(error =>{
            this.$toast("网络开小差")
          });
        },
        changeImgDown(){
          event.stopPropagation()
          if(this.select_num<=0){
            this.$toast("已经是第一张了");
          }else{
            this.select_num=this.select_num-1
          }
        },
        changeImgUp(){
          event.stopPropagation()
          if((this.select_num+1)===this.avatarList.length){
            this.$toast("已经是最后一张了");
          }else{
            this.select_num=this.select_num+1
          }
        },
        closeSelectWin(){
          this.select_show=false;
        },
        StopClose(){
          event.stopPropagation()
        },
      }
    }
</script>

<style scoped lang="scss">
.avatar-base-box{
  .feedback-base-head{
    height: 110px;
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
  ul{
    margin-left: 40px;
  }
  .avatar-li{
    width: 230px;
    height: 230px;
    display: inline-block;
    img{
      height: 200px;
      width: 200px;
      border-radius: 50px;
    }
  }
  .zhezhao{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.6);
      z-index: 10;
  }
  .avatar-detail{
    margin-left: 125px;
    position: fixed;
    top: 200px;
    border: 2px solid #f9ba08;
    height: 560px;
    width: 500px;
    background-color: #CCCC99;
    border-radius: 20px;
    .selected-img{
      margin-top: 50px;
      height: 360px;
      width: 360px;
      border-radius: 100px;
      background-size: 100% 100%;
    }
    .img-change{
        height: 60px;
        width: 60px;
    }
    .avatar-commit-btn{
      height: 60px;
      width: 150px;
      text-align: center;
      line-height: 60px;
      font-size: 30px;
      color: #e5e5e5;
      background-color: #4d86f1;
      border-radius: 15px;
      margin: 50px 0 0 170px;
    }
  }
}
</style>
