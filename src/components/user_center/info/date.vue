
<template>
  <div class="calendar-container">
    <div class="calendar-center">
      <div class="calendar">
        <!-- 年份 月份 -->
        <div class="month">
          <ul>
            <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
            <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
            <li class="year-month">
              <span class="choose-year" ref="year">{{ currentYear }} 年</span>
              <span class="choose-month" ref="month">{{ currentMonth }} 月</span>
            </li>
            <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
          </ul>
        </div>
        <!-- 星期 -->
        <ul class="weekdays">
          <li>日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
        </ul>
        <!-- 日期 -->
        <ul class="days">
          <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
          <li v-for="dayobject in days" ref="allDate">
            <!--本月-->
            <!--如果不是本月  改变类名加灰色-->

            <span v-if="dayobject.day.getMonth()+1 != currentMonth"
                  class="month-other"></span>

            <!--如果是本月  还需要判断是不是这一天-->
            <span v-else>
          <!--今天  同年同月同日-->
                <span
                  v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()"
                  class="active"><span ref="days">{{ dayobject.day.getDate() }}</span><span
                  class="backlog">无</span></span>
            <span v-else><span ref="days">{{ dayobject.day.getDate() }}</span><span class="backlog">无</span></span>
            </span>

          </li>
        </ul>
      </div>
    </div>
    <!--<div class="intro-border"></div>-->
  </div>
</template>

<script>
  export default {
    name: "infoDate",
    data() {
      return {
        renderData: '',
        currentDay: 1,
        currentMonth: 1,
        currentYear: 1970,
        currentWeek: 1,
        days: [],
        todo: []
      }
    },
    props: ['parentData'],
    watch: {
      parentData(newVal) {
        this.renderData = newVal
        this.course(this.renderData);
        console.log(this.renderData);
      }
    },
    created: function () {  //在vue初始化时调用
      this.initData(null);
    },
    methods: {
      initData: function (cur) {
        var leftcount = 0; //存放剩余数量
        var date;

        if (cur) {
          date = new Date(cur);
        } else {
          var now = new Date();
          var d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1));
          d.setDate(42);
          date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
        }
        this.currentDay = date.getDate();
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth() + 1;

        this.currentWeek = date.getDay(); // 1...6,0
        if (this.currentWeek == 0) {
          this.currentWeek = 7;
        }
        var str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay);
        this.days.length = 0;
        // 今天是周日，放在第一行第7个位置，前面6个
        //初始化本周
        for (var i = this.currentWeek ; i >= 0; i--) {
          var d = new Date(str);
          d.setDate(d.getDate() - i);
          var dayobject = {}; //用一个对象包装Date对象  以便为以后预定功能添加属性
          dayobject.day = d;
          this.days.push(dayobject);//将日期放入data 中的days数组 供页面渲染使用


        }
        //其他周
        for (var i = 1; i <= 42 - this.currentWeek; i++) {
          var d = new Date(str);
          d.setDate(d.getDate() + i);
          var dayobject = {};
          dayobject.day = d;
          this.days.push(dayobject);
        }

      },
      pickPre: function (year, month) {

        // setDate(0); 上月最后一天
        // setDate(-1); 上月倒数第二天
        // setDate(dx) 参数dx为 上月最后一天的前后dx天
        var d = new Date(this.formatDate(year, month, 1));
        d.setDate(0);
        this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
      },
      pickNext: function (year, month) {
        var d = new Date(this.formatDate(year, month, 1));
        d.setDate(42);
        this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
      },
      // 返回 类似 2016-01-02 格式的字符串
      formatDate: function (year, month, day) {
        var y = year;
        var m = month;
        if (m < 10) m = "0" + m;
        var d = day;
        if (d < 10) d = "0" + d;
        return y + "-" + m + "-" + d
      },
      //通过数据渲染页面表示有课
      course: function (data) {
        if (data) {
          let temp = data.calendar
          for (let i = 0; i < temp.length; i++) {
            if (temp[i].year == this.currentYear) {
              if (temp[i].month == this.currentMonth) {
                //所有判断条件通过，便利所有日期，找到相等的添加样式
                this.$refs.days.forEach((v) => {
                  if (temp[i].day == v.innerText) {
                     var div = document.createElement('span');
                     div.className = 'masked';
                    v.parentNode.parentNode.parentNode.classList.add('masked')
                    v.nextSibling.innerText = '有课'
                    v.nextSibling.style.color = '#4d86f1'
                  }
                })
              }
            }
          }
        } else {
          this.$refs.days.forEach((v) => {
            v.parentNode.parentNode.parentNode.classList.remove('masked')
            v.nextSibling.innerText = '无'
            v.nextSibling.style.color = '#bcbcbc'
          })
        }
      }
    },
    mounted() {

    },
    updated() {
      //清楚标记画面
      this.course(null)
      //重新渲染
      this.course(this.renderData)
    }
  }
</script>

<style scoped lang="scss">
  .calendar-container {
    .calendar-center{
      padding: 60px 30px 40px 30px;
      text-align: center;
    }
    .calendar {
      .month {
        height: 40px;
        display: flex;
        justify-content: center;
        ul {
          height: 30px;
          min-width: 320px;
          margin: 0 auto;
          display: flex;
          li {
            float: left;
            line-height: 30px;
          }
          .arrow {
            width: 30px;
            height: 30px;
          }
          .year-month {
            flex: 1;
            font-size: 30px;
            color: #666666;
          }
        }
      }
      .weekdays {
        height: 94px;
        line-height: 94px;
        li {
          float: left;
          width: 88px;
          margin-right: 10px;
          font-size: 26px;
          color: #666666;
        }
      }
      .days {
        padding: 0;
        background: #FFFFFF;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .masked {
          /*background: url(../../../assets/images/info_date/richeng_else_click@2x.png);*/
          background-size: 100% 100%;
          height: 88px;
          width: 88px;
        }
      }

      .days li {
        display: inline-block;
        width: 88px;
        height: 88px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-size: 28px;
        color: #999999;
        background: #f7f7f7;
        position: relative;
        line-height: 48px;
        .backlog {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          font-size: 24px;
          color: #bcbcbc;
          line-height: 40px;
        }
        .month-other {
          display: block;
          width: 100%;
          height: 100%;
          background: white;
        }
      }
      .days li:hover {
        background: #e1e1e1;
      }
    }

  }


</style>

