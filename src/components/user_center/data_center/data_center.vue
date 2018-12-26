<template>
  <div class="layout-box">
    <div class="link-title">
      <ul>
        <li v-for="(item,key) in showList" @click="changeSearchTitle(key)">
          <div class="title-selected" v-if="search_type===key">{{item.title}}</div>
          <div v-if="search_type!==key">{{item.title}}</div>
          <div v-if="search_type===key" class="switch"></div>
        </li>
      </ul>
    </div>

    <div class="time-choice">
      时间
      <div class="time-input" @click ="setDate(0)" >
        <span>{{beginDate}}</span>
      </div>
      <!--<input type="text" @click ="setDate(0)"  v-bind:value="beginDate" placeholder="请选择开始时间"/>-->
      至
      <div class="time-input" @click ="setDate(1)" >
          <span>{{endDate}}</span>
      </div>
      <!--<input type="text" @click ="setDate(1)" v-bind:value="endDate" placeholder="请选择截止时间"/>-->
      <div class="btn-search" @click="searchTimeDefinition">确定</div>
    </div>

    <div class="time-choice-btn">
      <ul>
        <li v-for="(item,key) in searchTimeList">
          <div class="btn" v-if="btn_selected!==key" @click="searchByTime(key)">{{item.title}}</div>
          <div class="btn-selected" v-if="btn_selected===key" @click="searchByTime(key)">{{item.title}}</div>
        </li>
      </ul>
    </div>

    <div class="chart">
      <ve-line :toolbox="toolbox" :data="chartData" :settings="chartSettings" :extend="extend" :colors="colors"></ve-line>
    </div>

  </div>
</template>

<script>
    export default {
      name: "data_center",
      data(){
        this.toolbox = {
          feature: {
            magicType: {type: ['line', 'bar']}
          }
        }
        this.colors = ['#FF0006'],
        this.chartSettings = {
          labelMap: {
            'date': '日期',
            'increase': '增加数'},
          yAxisName: ['增加数']
        }
        this.extend = {
          'xAxis.0.axisLabel.rotate': 45
        }
          return{
            chartData: {
              columns: ['date','increase'],
              rows:[]
            },
            search_type:0,
            btn_selected:0,
            showList:[
              {title:"访问量"},
              {title:"粉丝量"},
              {title:"订单数"},
              {title:"评论数"},
              {title:"点赞数"},
            ],
            searchTimeList:[
              {title:"近7天"},
              {title:"近14天"},
              {title:"近30天"},
            ],
            beginDate:'请选择开始时间',
            endDate:'请选择结束时间',
          }
      },

      mounted(){
        // console.log(window.innerHeight )
        // document.querySelector('.layout-box').style.height = (window.innerHeight)/75+7 +'rem'
        console.log(this.GetDateStr(-7) + '--' + this.getNowFormatDate() + "de" + this.showList[0].title)
        this.$http.get('/api/user_center/data_center/data_seven',{
          startTime:this.GetDateStr(-7),
          endTime:this.getNowFormatDate(),
          searchType:this.showList[0].title,
        }).then((res)=>{
          this.chartData.rows = res.data._DATA_.result.modelData.rows
        })
      },
      methods:{

        //时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
        dateFormat(time) {
          var date=new Date(time);
          var year=date.getFullYear();
          /* 在日期格式中，月份是从0开始的，因此要加0
           * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
           * */
          var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
          var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
          // 拼接
          return year+"-"+month+"-"+day;
        },


        setDate(num){
          // 阻止默认程序
          event.preventDefault();
          this.$picker.show({
            type:'datePicker',
            endTime:this.getNowFormatDate(),  //截至时间
            startTime:this.GetDateStr(-365*3),
            onOk: (date) =>{
              if(num===0){
                this.beginDate = date
              }else if(num===1){
                this.endDate = date
              }
            }
          });
          },

        //获取当前时间的前X天
        GetDateStr(AddDayCount){
          var dd = new Date();
          dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
          var y = dd.getFullYear();
          var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
          var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
          return y+"-"+m+"-"+d;
        },
        //获取当前日期
        getNowFormatDate() {
          var date = new Date();
          var seperator1 = "-";
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var strDate = date.getDate();
          if (month >= 1 && month <= 9) {
            month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
          }
          var currentdate = year + seperator1 + month + seperator1 + strDate;
          return currentdate;
        },
        changeSearchTitle(num){
          //切换查询条件
          this.search_type = num;
          this.btn_selected = 0,
          console.log("ajax搜索近7天的(可以设定)" + this.showList[num].title)
          this.$http.get('/api/user_center/data_center/data_seven',{
            startTime:this.GetDateStr(-7),
            endTime:this.getNowFormatDate(),
            searchType:this.showList[num].title,
          }).then((res)=>{
            this.chartData.rows = res.data._DATA_.result.modelData.rows
          })
        },
        searchTimeDefinition(){
          //按钮点击时触发
            if(this.dateFormat(this.beginDate) > this.dateFormat(this.endDate)){
              console.log("时间不对")
            }else {
              if(this.beginDate==='' || this.endDate===''){
                console.log("时间不能为空")
              }else{
              if(this.dateFormat(this.endDate) > this.getNowFormatDate()){
                console.log("日期超过当前")
              }else{
              this.$http.get('/api/user_center/data_center/data_month',{
                startTime:this.beginDate,
                endTime:this.endDate,
                searchType:this.showList[this.search_type].title,
              }).then((res)=>{
                this.chartData.rows = res.data._DATA_.result.modelData.rows
              });
              console.log("根据输入的时间进行搜索:" + this.beginDate + '--'+  this.endDate + this.showList[this.search_type].title);
            }
          }}
        },
        searchByTime(num){
          this.btn_selected = num
          var start_time = '';
          if(num===0){
            start_time = this.GetDateStr(-7)

            //测试用  以后注释掉
            this.$http.get('/api/user_center/data_center/data_seven',{
              startTime:start_time,
              endTime:this.getNowFormatDate(),
              searchType:this.showList[this.search_type].title,
            }).then((res)=>{
              this.chartData.rows = res.data._DATA_.result.modelData.rows
            })
            //到这里

          }else if( num === 1){
            start_time = this.GetDateStr(-14)
          }
          else if(num === 2){
            start_time = this.GetDateStr(-30);

            //测试用  以后注释掉
            this.$http.get('/api/user_center/data_center/data_month',{
              startTime:start_time,
              endTime:this.getNowFormatDate(),
              searchType:this.showList[this.search_type].title,
            }).then((res)=>{
              this.chartData.rows = res.data._DATA_.result.modelData.rows
            })
            //到这里
          }
          console.log("查找" + start_time + '--'+ this.getNowFormatDate() + "的" + this.showList[this.search_type].title )
          // //以后只有一个请求地址即可（即下面这个）
          // this.$http.get('/api/user_center/data_center/data_month',{
          //   startTime:start_time,
          //   endTime:this.getNowFormatDate(),
          //   searchType:this.showList[this.search_type].title,
          // }).then((res)=>{
          //   this.chartData.rows = res.data._DATA_.result.modelData.rows
          //   console.log(this.chartData.rows)
          // })

        }
      }
    }
</script>

<style scoped lang="scss">
  .layout-box{
    overflow: hidden;
    width: 100%;
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
      width: 150px;
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
      left: 60px;
    }
  }
  .time-choice{
    margin-top: 40px;
    margin-left: 20px;
    font-size: 28px;
    width: 690px;
    .time-input{
      display: inline-block;
      position: relative;
      top: -12px;
      width: 200px;
      font-size: 24px;
      height: 50px;
      border: 1px solid #e5e5e5; /*no*/
      margin: 0 5px 0 5px;
      text-align: center;
      span{
        position: relative;
        top: 12px;
      }
    }
    .btn-search{
      display: inline-block;
      width: 120px;
      height: 50px;
      background: #4d86f1;
      border-radius: 10px;
      color: #ffffff;
      text-align: center;
      line-height: 50px;
      margin-left: 10px;
    }
  }
  .time-choice-btn{
    margin-top: 40px;
    margin-left: 130px;
    font-size: 26px;
    height: 60px;
    li{
      float: left;
      width: 150px;
    }
    .btn{
      width: 120px;
      height: 50px;
      border: 1px solid #E6E6E6;
      border-radius: 10px;
      text-align: center;
      line-height: 50px;
    }
    .btn-selected{
      color: #ffffff;
      background-color: #4d86f1;
      width: 120px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border-radius: 10px;
    }
  }
  .chart{
    /*overflow: hidden;*/
    /*height: 400px;*/
    /*height: 30%;*/
    width: 690px;
    margin-top: 90px;
    margin-left: 30px;
  }

</style>
