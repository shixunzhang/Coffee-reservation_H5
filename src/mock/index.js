//引入mockjs
import Mock from 'mockjs'

//course-short/list的模拟数据
Mock.mock('/api/course-short/list', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success": true,
      "result": {
        "modelData":
          [
            {
              "backImg": "/static/images/course-short/test3.png",
              "videoSrc": "xx/xxx/xx"
            },
            {
              "backImg": "/static/images/course-short/test3.png",
              "videoSrc": "xx/xxx/xx"
            },
            {
              "backImg": "/static/images/course-short/test3.png",
              "videoSrc": "xx/xxx/xx"
            },
            {
              "backImg": "/static/images/course-short/test3.png",
              "videoSrc": "xx/xxx/xx"
            },
            {
              "backImg": "/static/images/course-short/test3.png",
              "videoSrc": "xx/xxx/xx"
            },
            {
              "backImg": "/static/images/course-short/test3.png",
              "videoSrc": "xx/xxx/xx"
            },
            {
              "backImg": "/static/images/course-short/test3.png",
              "videoSrc": "xx/xxx/xx"
            },
            {
              "backImg": "/static/images/course-short/test3.png",
              "videoSrc": "xx/xxx/xx"
            },
            {
              "backImg": "/static/images/course-short/test3.png",

              "videoSrc": "xx/xxx/xx"
            }
          ]
      }
    }
  })
})

//大咖文章详情模拟数据 per-mascreated_atr
Mock.mock('/api/per-master/article/view', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success": true,
      "result": {
        "modelData":
          [
            {
              "title": "赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at": "2018.8.30 12:30:00",
              "img_url": "/static/images/demo.png",
              "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title": "赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at": "2018.8.30 12:30:00",
              "img_url": "/static/images/demo.png",
              "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title": "赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at": "2018.8.30 12:30:00",
              "img_url": "",
              "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title": "赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at": "2018.8.30 12:30:00",
              "img_url": "",
              "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title": "赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at": "2018.8.30 12:30:00",
              "img_url": "/static/images/demo.png",
              "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title": "赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at": "2018.8.30 12:30:00",
              "img_url": "/static/images/demo.png",
              "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title": "赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at": "2018.8.30 12:30:00",
              "img_url": "/static/images/demo.png",
              "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title": "赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at": "2018.8.30 12:30:00",
              "img_url": "/static/images/demo.png",
              "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title": "赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at": "2018.8.30 12:30:00",
              "img_url": "/static/images/demo.png",
              "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            }
          ]
      }
    }

  })
}),

//course-short/attention的模拟数据
  Mock.mock('/api/course-short/attention', (req, res) => {
    return Mock.mock({
      "success": true,
      "_DATA_": {
        "result": {
          "modelData": {
            "attentionStatus": "0",
            "recommendationList": [
              {
                "id": "123",
                "lectureName": "李立文",
                "headImg": "/static/images/course-short/test2.png",
                "type": "咨询专业顾问"
              },
              {
                "id": "113",
                "lectureName": "李立文",
                "headImg": "/static/images/course-short/test2.png",
                "type": "咨询专业顾问"
              },
              {
                "id": "143",
                "lectureName": "李立文",
                "headImg": "/static/images/course-short/test2.png",
                "type": "咨询专业顾问"
              },
              {
                "id": "163",
                "lectureName": "李立文",
                "headImg": "/static/images/course-short/test2.png",
                "type": "咨询专业顾问"
              },
              {

                "id": "183",
                "lectureName": "李立文",
                "headImg": "/static/images/course-short/test2.png",
                "type": "咨询专业顾问"
              },
              {
                "id": "129",
                "lectureName": "李立文",
                "headImg": "/static/images/course-short/test2.png",
                "type": "咨询专业顾问"
              },
              {
                "id": "1211",
                "lectureName": "李立文",
                "headImg": "/static/images/course-short/test2.png",
                "type": "咨询专业顾问"
              }
            ]
          }
        }
      }
    })
  }),
//course-article 文章详情的模拟数据
  Mock.mock('/api/course-article', (req, res) => {
    return Mock.mock({
      "_DATA_": {
        "success": true,
        "result": {
          "modelData": {
            "counselor": {
              "backImg": "/static/images/course-short/test1.png",
              "username": "邓静静",
              "description": "留学金牌顾问",
              "comment_num":999,
              "like_num":999,
              "collect_num":999,
            },
            "dxz_article": {
              "id": 1,
              "title": "这是标题？这是标题？",
              "ptime":"2018年11月12日 18:00",
              "read_num":20000,
              "comment_num":222,
              "like_num":333,
              "collect_num":444,
              "description": "",
              "content": "<p><span >在大家准备加拿大留学签证的过程中，遇到问题是难免的，有些同学还对加拿大留学因此望而却步。今天刘老师整理了一些申请加拿大留学签证的技巧，希望可以帮助到大家！</span></p><p><span style=\"font-family:'微软雅黑 Regular', '微软雅黑';font-weight:400;\">　　</span></p><p><span style=\"font-family:'微软雅黑 Bold', '微软雅黑';font-weight:700;\">申请与自身学历背景相匹配的课程</span></p><p><span style=\"font-family:'微软雅黑 Regular', '微软雅黑';font-weight:400;\">　　</span></p><p><span style=\"font-family:'微软雅黑 Regular', '微软雅黑';font-weight:400;\">一般来说，学生最好申请与自身学历相匹配的课程，比如国内本科/大专毕业，而且已经有相关工作经验的学生，可以选择申请加拿大硕士课程，或者研究生文凭课程。高中毕业/中专毕业的学生可以申请本科课程或者加拿大学院文凭课程。比如，有些国内本科毕业生想读加拿大学院文凭课程(相当于大专学历)，就很容易因为与自身学历不匹配，被签证官拒签，而选择层次更高的硕士课程或研究生文凭课程会提高留学的合理性。</span></p><p><span >　　</span></p><p><span >精准定校定专业</span></p><p><span>　　</span></p><p><span>有些学生希望能转专业申请，比如国内学医的，想去加拿大读计算机; 或者是国内读会计的，想去加拿大学市场营销。如果没有合理的解释，很容易被签证官怀疑申请目的。因为精准确定专业，签证官觉得学生学习计划合理，才顺利批签。</span></p><p><span>　　</span></p><p><span>力证留学理由充分、学习计划合理</span></p><p><span>　　</span></p><p><span>学生申请的是留学签证，必须向签证官展示自己的留学目的、计划。比如，在职白领想去加拿大读研究生文凭课程，就可以告知签证官留学会给自己在职场带来如何的改变，证明自己留学加拿大的必要性。有一位学生在国内大专毕业，想再去加拿大读文凭学院(相当于国内大专)。如果单看学习计划，学生重读大专，签证官也很可能拒签，这就需要学生提供非常有力的证明，解释自己这样做的原因。</span></p><p><span>　　</span></p><p><span >力证家庭资金足以支持留学花费</span></p><p><span>　　</span></p><p><span >有时候，学生家庭经济能力强，但没法提供很多的证明，比如父母在朋友公司打工，每个月拿现金，没有缴税单和社保证明、收入证明，或者是家里的钱来自多个渠道，用来做投资而不是储蓄，也没有房产证。建议，申请人的父母应该预留足够的时间去准备签证所需的资料，切忌在签证办理前，突然存一大笔钱进银行账户。因为加拿大签证需要提供担保金12个月的历史，如果突然一大笔资金存入银行，学生需要很努力地解释这笔资金的来源，给资金证明带来不必要的难度。</span></p>",
            },
            "comments":[
              {
                "id":1,
                "name": "李希",
                "headImg":"/static/images/course-short/test4.png",
                "message": "这篇文章给了我很大的启迪，谢谢",
                "good": 80,
                "time":9,
                "like":300,
                "reply":[
                  {
                    "user_id": 2,
                    "like":20,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },
                  {
                    "user_id": 2,
                    "like":90,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },


                ]
              },
              {
                "id":1,
                "name": "李希",
                "headImg":"/static/images/course-short/test4.png",
                "message": "这篇文章给了我很大的启迪，谢谢",
                "good": 80,
                "time":9,
                "like":300,
                "reply":[
                  {
                    "user_id": 2,
                    "like":20,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },
                  {
                    "user_id": 2,
                    "like":90,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },


                ]
              },
              {
                "id":1,
                "name": "李希",
                "headImg":"/static/images/course-short/test4.png",
                "message": "这篇文章给了我很大的启迪，谢谢",
                "good": 80,
                "time":9,
                "like":300,
                "reply":[
                  {
                    "user_id": 2,
                    "like":20,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },
                  {
                    "user_id": 2,
                    "like":90,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },


                ]
              },
              {
                "id":1,
                "name": "李希",
                "headImg":"/static/images/course-short/test4.png",
                "message": "这篇文章给了我很大的启迪，谢谢",
                "good": 80,
                "time":9,
                "like":300,
                "reply":[
                  {
                    "user_id": 2,
                    "like":20,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },
                  {
                    "user_id": 2,
                    "like":90,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },


                ]
              },
              {
                "id":1,
                "name": "李希",
                "headImg":"/static/images/course-short/test4.png",
                "message": "这篇文章给了我很大的启迪，谢谢",
                "good": 80,
                "time":9,
                "like":300,
                "reply":[
                  {
                    "user_id": 2,
                    "like":20,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },
                  {
                    "user_id": 2,
                    "like":90,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },


                ]
              },
              {
                "id":1,
                "name": "李希",
                "headImg":"/static/images/course-short/test4.png",
                "message": "这篇文章给了我很大的启迪，谢谢",
                "good": 80,
                "time":9,
                "like":300,
                "reply":[
                  {
                    "user_id": 2,
                    "like":20,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },
                  {
                    "user_id": 2,
                    "like":90,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },


                ]
              },
              {
                "id":1,
                "name": "李希",
                "headImg":"/static/images/course-short/test4.png",
                "message": "这篇文章给了我很大的启迪，谢谢",
                "good": 80,
                "time":9,
                "like":300,
                "reply":[
                  {
                    "user_id": 2,
                    "like":20,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },
                  {
                    "user_id": 2,
                    "like":90,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },


                ]
              },
              {
                "id":1,
                "name": "李希",
                "headImg":"/static/images/course-short/test4.png",
                "message": "这篇文章给了我很大的启迪，谢谢",
                "good": 80,
                "time":9,
                "like":300,
                "reply":[
                  {
                    "user_id": 2,
                    "like":20,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },
                  {
                    "user_id": 2,
                    "like":90,
                    "reply_name": "周天曦",
                    "reply_headImg": "/static/images/course-short/test4.png",
                    "reply_time": 3,
                    "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                  },


                ]
              },
            ]
          }
        }
      }
    })
  })
//course-short/evaluate的模拟数据
  Mock.mock('/api/course-short/evaluate', (req, res) => {
    return Mock.mock({
      "success": true,
      "_DATA_": {
        "result": {
          "modelData": [
            {
              "user_id": 1,
              "good": 80,
              "medium": 10,
              "negative": 10,
              "name": "张宇",
              "headImg": "/static/images/course-short/test4.png",
              "time": 8,
              "message": "这篇文章给了我很大的启迪，谢谢",
              "reply":
                {
                  "user_id": 2,
                  "reply_name": "周天曦",
                  "reply_headImg": "/static/images/course-short/test4.png",
                  "reply_time": 3,
                  "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                }
            },
            {
              "user_id": 3,
              "good": 80,
              "medium": 10,
              "negative": 10,
              "name": "张宇",
              "headImg": "/static/images/course-short/test4.png",
              "time": 8,
              "message": "这篇文章给了我很大的启迪，谢谢"
            },
            {
              "user_id": 4,
              "good": 80,
              "medium": 10,
              "negative": 10,
              "name": "张宇",
              "headImg": "/static/images/course-short/test4.png",
              "time": 8,
              "message": "这篇文章给了我很大的启迪，谢谢",
              "reply":
                {
                  "user_id": 5,
                  "reply_name": "周天曦",
                  "reply_headImg": "/static/images/course-short/test4.png",
                  "reply_time": 3,
                  "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                }
            },
            {
              "user_id": 6,
              "good": 80,
              "medium": 10,
              "negative": 10,
              "name": "张宇",
              "headImg": "/static/images/course-short/test4.png",
              "time": 8,
              "message": "这篇文章给了我很大的启迪，谢谢"
            },
            {
              "user_id": 7,
              "good": 80,
              "medium": 10,
              "negative": 10,
              "name": "张宇",
              "headImg": "/static/images/course-short/test4.png",
              "time": 8,
              "message": "这篇文章给了我很大的启迪，谢谢"
            }
          ]
        }
      }
    })
  })
//counselor/dynamic的模拟数据(lecturer公用一个api)
Mock.mock('/api/counselor/dynamic', (req, res) => {
  return Mock.mock({
    "success": true,
    "_DATA_": {
      "result": {
        "modelData": {
          "intro": "金吉列元老级顾问，实年留学咨询经验，VIP制定接待顾问。高本研申请都有比较丰富的申请经验，属于全能型顾问。",
          "position": "金吉列大学长大学",
          "calendar": [
            {
              "year": "2018",
              "month": "8",
              "day": "9",
            },
            {
              "year": "2018",
              "month": "11",
              "day": "9",
            },
            {
              "year": "2018",
              "month": "12",
              "day": "9",
            }
          ],
          "article": [
            {
              "id": "12",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "top": true,
              "img": "/static/images/counselor/test1.png",
              "time": "22"
            },
            {
              "id": "11",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "top": false,
              "img": "/static/images/counselor/test1.png",
              "time": "22",
              "headImg": "/static/images/counselor/test2.png",
              "name": "王阳阳",
              "attention": true
            },
            {
              "like": true,
              "id": "123",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "img": "/static/images/counselor/test1.png",
              "time": "6",
              "headImg": "/static/images/counselor/test2.png",
              "name": "王阳阳",
              "attention": false
            },
            {
              "like": true,
              "id": "13",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "time": "6",
              "headImg": "/static/images/counselor/test2.png",
              "name": "王阳阳",
              "attention": true
            }
          ],
          "course": [
            {
              "like": false,
              "id": "17",
              "time": "11",
              "title": "GER如何快速提分，免费提分宝典",
              "img": "/static/images/counselor/test3.png",
              "headImg": "/static/images/counselor/test2.png",
              "name": "刘军",
              "position": "新东方讲师",
              "authentication": true
            },
            {
              "like": true,
              "id": "10",
              "time": "8",
              "title": "GER如何快速提分，免费提分宝典",
              "img": "/static/images/counselor/test3.png",
              "headImg": "/static/images/counselor/test2.png",
              "name": "刘军",
              "position": "新东方讲师",
              "authentication": false
            }
          ]
        }
      }
    }
  })
})
//counselor/ta-shop/all的模拟数据
Mock.mock('/api/counselor/ta-shop/all',(req,res)=>{
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":{
          "fine":[
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"精品课",
              "isline":false,
              "openNew":"course-record",
              "price":"199",
              "isuser":true,

            }
          ],
          "one":[
            {
              "userImg":"/static/images/question/user.png",
              "title":"小王教你快速提高口语",
              "userName":"张小伟",
              "lable":"资深英语实战人士,英文撰稿人",
              "price":"1999.9",
              "peopleNum":"2,000",
              "isuser":true,
              "isBuy":true
            },
          ],
          "dxz_article":{
            "id":1,
            "title":"新西兰国立南方理工学院公开课：英语强化课程",
            "description":"",
            "content":"想不想通过观看诙谐幽默的短剧来轻松学习英语呢？本系列课程正是采用了寓教于乐的方式，通过大量精彩的小品对话，在欢快的实景气氛中，轻松理解并掌握所有知识点。课程内容由浅入深、循序渐进，讲师会在每段小品的开始与结束时进行通俗易懂的讲解与总结。相信本课程定能让您受益匪浅。",
            "img_url":"/static/images/course-public/jianjietupian.png",
            "good":88,
            "good_comment":9999,
            "medium_comment":20,
            "negative_comment":10,
            "collect":5060,
            "buy" : 199,
            "buy_time":"2018.07.06至2019.06.09",
            "money_new" : 199.99,
            "money_old" : 999.99,
            "contexts":[
              {
                "title":"服务内容",
                "context":"1.选校：我们与您共同完成，申请多少所学校，申请哪些学校，补申加申都不受限制/n2.网申填表、材料寄送：根据您自己的时间自主决定参与度，我们承诺文书与网申账号均与您共享/n3.套磁信、和学校往来邮件：您完成后，我们会为您把关和修改/n4.申请时间规划及提醒，告别拖延症/n5.全套文书制作+润色，由我们北美专家团队与您共同完成，包括PS、SOP、PHS、Essay、RL、CV/Resume、Study Plan等/n6.面试模拟，由我们北美专家团队+学长通过Skype为您完成/n7.签证申请指导/n8.您在申请中碰到的相关问题，我们都会为您悉心解答" ,
              },
              {
                "title":"五大特点",
                "context":"四位顾问共同服务：责任顾问负责全程申请+写文书；助理顾问协助整理资料，提醒申请进度；海外文书顾问，撰写文书；同专业学长提供独立咨询；/n2）文书竞争选用：海外文书顾问（同专业）与责任顾问竞争撰写文书，谁好用谁；文书百分百经Native Speaker润色/n3）不限学校数量，网申帐号与文书公开/n4）最专业的选校定位：我们内部收集了大量的案例，做出了内部单独使用的选校评分系统，结合顾问经验选校，定校十分准确、客观；/n不成功，无条件全额退款",
              },
              {
                "title":"服务流程",
                "context":"第一步：分配咨询师。签约后3个工作日内，我们网将为您安排一位资深责任顾问以及我们学长，全程规划，并负责您的申请/n第二步：制定申请时间规划表，完成初步咨询。责任顾问会根据您的实际情况，与您一道制定申请时间规划表，让您对留学申请有一个大致的了解/n第三步：完成选校方案制定。当您GT等各项成绩差不多准备完成后，我们的责任顾问将与您一道制定选校方案。选校十分重要，好的选校可以说是成功的一半。我们的责任顾问将依据自身的经验以及我们网广阔的案例，通过数据分析并结合学校专业就业课程质量等各方面的因素，为您制作一个最优的选校方案，让您百分百满意/n第四步：文书制定。依据选校方案，我们北美专家团队开始与您一道完成文书的制作。文书的制作，原则上以提供英文材料为佳，但也可以只提供中文材料，视您的时间充裕程度和英文水准而定。我们将为您深度挖掘潜能，让您的申请真正做到独一无二/n第五步：当您拿到学校的面试时，我们我们北美专家团队及学长将为您进行面试模拟，最大限度提高录取的可能性/n第六步：网申填表把关，各类材料制作（诸如WES公证、成绩单、在读证明、资金证明等），各种留学疑问答疑，套磁及套磁信把关，均将贯穿整个申请流程，我们的咨询师将一直陪伴在您的身边/n第七步：拿到offer后，我们的咨询师将指导您完成后续的工作以及签证的申请"
              },
              {
                "title":"费用说明",
                "context":"服务费：￥99,999元/n（注：不含院校申请费、材料寄送费、材料认证费、签证申请费、SEVIS费、学费押金、体检费、标准化考试送分费等任何第三方费用）。"

              }
            ],
            "discounts_list" : [
              {
                "show_name":"2018年最新TELS写作基础课好胺四大件事大",
                "money_new":300.00,
                "money_old":1000.00,

              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,

              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,

              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,

              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,

              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,
              }
            ],
            "ticket_list":[
              {
                "face_value":1000,
                "deadline":3,
                "money":100,
                "title":"美国留学专用"
              },
              {
                "face_value":2000,
                "deadline":10,
                "money":200,
                "title":"美国留学专用"
              },
            ],
            "labels":[
              {
                "label": "全真模拟，满足你的需求",
              },
              {
                "label": "配套词库，随时随地背单词",
              },
              {
                "label": "24小时答疑，老师时刻都在场",
              },
              {
                "label": "作业批改，群组集体学习",
              },
              {
                "label": "资料下载，群文件随时访问",
              }
            ]
          },
          "abroadList":[
            {
              money:"29,999",
              title:'美国留学咨询服务1',
              name:"张小伟",
              head_portrait:"http://imgtu.5011.net/uploads/content/20170515/6642891494836057.jpg",
              picture:"http://t2.hddhhn.com/uploads/tu/201612/98/st93.png",
              describe:"服务推荐描述"
            },
          ]
        }
      }
    }
  })
})
//counselor/ta-shop/classfine的模拟数据
Mock.mock('/api/counselor/ta-shop/class/fine', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":
          [

            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"精品课",
              "isline":false,
              "openNew":"course-record",
              "price":"199",
              "isuser":true,
              "userImg":"/static/images/question/user.png"

            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"精品课",
              "isline":false,
              "openNew":"course-record",
              "price":"299",
              "isuser":true,
              "userImg":"/static/images/question/user.png"

            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"精品课",
              "isline":false,
              "openNew":"course-record",
              "price":"99",
              "isuser":false,
              "userImg":"/static/images/question/user.png"

            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"精品课",
              "isline":false,
              "openNew":"course-record",
              "price":"159",
              "isuser":true,
              "userImg":"/static/images/question/user.png"

            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"精品课",
              "isline":false,
              "openNew":"course-record",
              "price":"189",
              "isuser":false,
              "userImg":"/static/images/question/user.png"

            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"精品课",
              "isline":false,
              "openNew":"course-record",
              "price":"119",
              "isuser":true,
              "userImg":"/static/images/question/user.png"

            },
          ]
      }
    }
  })
})
//counselor/ta-shop/classvip的模拟数据
Mock.mock('/api/counselor/ta-shop/class/vip', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":
          [
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"VIP专属课",
              "isline":false,
              "openNew":"/course-vip",
              "isvip":true,
              "isuser":true,
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"VIP专属课",
              "isline":false,
              "openNew":"/course-vip",
              "isvip":true,
              "isuser":false,
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"VIP专属课",
              "isline":false,
              "openNew":"/course-vip",
              "isvip":true,
              "isuser":true,
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"VIP专属课",
              "isline":false,
              "openNew":"/course-vip",
              "isvip":true,
              "isuser":false,
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"VIP专属课",
              "isline":false,
              "openNew":"/course-vip",
              "isvip":true,
              "isuser":true,
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"VIP专属课",
              "isline":false,
              "openNew":"/course-vip",
              "isvip":true,
              "isuser":true,
            },

          ]
      }
    }
  })
})
//counselor/ta-shop/class1v1的模拟数据(lecturer公用一个api)
Mock.mock('/api/counselor/ta-shop/class/1v1', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":
          [
            {
              "userImg":"/static/images/question/user.png",
              "title":"小王教你快速提高口语",
              "userName":"张小伟",
              "lable":"资深英语实战人士,英文撰稿人",
              "price":"1999.9",
              "peopleNum":"2,000",
              "isuser":true,
              "isBuy":true
            },
            {
              "userImg":"/static/images/question/user.png",
              "title":"小王教你快速提高口语",
              "userName":"张小伟",
              "lable":"资深英语实战人士,英文撰稿人",
              "price":"1999.9",
              "peopleNum":"1,000",
              "isuser":true,
              "isBuy":false
            },
            {
              "userImg":"/static/images/question/user.png",
              "title":"小王教你快速提高口语",
              "userName":"张小伟",
              "lable":"资深英语实战人士,英文撰稿人",
              "price":"1599.9",
              "peopleNum":"2,000",
              "isuser":false,
              "isBuy":false
            },

          ]
      }
    }
  })
})
//organ/dynamic的模拟数据
Mock.mock('/api/organ/dynamic', (req, res) => {
  return Mock.mock({
    "success": true,
    "_DATA_": {
      "result": {
        "modelData": {
          "ranking": "位列世界大学学术排名第一",
          "create": "1963年10月1日",
          "attr": "私立",
          "type": "综合性大学，常春藤盟校成员",
          "education": "本科 专科 博士 研究生 MBA",
          "position": "美国·萨马诸塞州",
          "intro": "院校简介院校简介院校简介院校简介院校简介院校简介院校简介院校简介院校简介院校简介院校简介院校简介院校简介院校简介院校简介院校简介",
          "calendar": [
            {
              "year": "2018",
              "month": "8",
              "day": "9",
            },
            {
              "year": "2018",
              "month": "11",
              "day": "9",
            },
            {
              "year": "2018",
              "month": "12",
              "day": "9",
            }
          ],
          "article": [
            {
              "id": "12",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "top": true,
              "img": "/static/images/counselor/test1.png",
              "time": "22"
            },
            {
              "id": "11",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "top": false,
              "img": "/static/images/counselor/test1.png",
              "time": "22",
              "headImg": "/static/images/counselor/test2.png",
              "name": "王阳阳",
              "attention": true
            },
            {
              "like": true,
              "id": "123",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "img": "/static/images/counselor/test1.png",
              "time": "6",
              "headImg": "/static/images/counselor/test2.png",
              "name": "王阳阳",
              "attention": false
            },
            {
              "like": true,
              "id": "13",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "time": "6",
              "headImg": "/static/images/counselor/test2.png",
              "name": "王阳阳",
              "attention": true
            }
          ]
        }
      }
    }
  })
})
//per-master/dynamic的模拟数据
Mock.mock('/api/per-master/dynamic', (req, res) => {
  return Mock.mock({
    "success": true,
    "_DATA_": {
      "result": {
        "modelData": {
          "intro": "大咖简介大咖简介大咖简介大咖简介大咖简介大咖简介大咖简介大咖简介大咖简介大咖简介大咖简介",
          "name": "叶良辰",
          "englishName": "YeLiangChen",
          "nationality": "中国",
          "city": "辽宁",
          "birthday": "1930年12月30日",
          "achievement": "这就是成就这就是成就这就是成就这就是成就这就是成就这就是成就这就是成就这就是成就这就是成就这就是成就这就是成就",
          "invitation": "活动类型活动类型",
          "invitation_message": "我是谁谁的经纪人，欢迎邀请你我是谁谁的经纪人，欢迎邀请你我是谁谁的经纪人，欢迎邀请你我是谁谁的经纪人，欢迎邀请你",
          "signature_img": "/static/images/per-master/test1.png",
          "calendar": [
            {
              "year": "2018",
              "month": "8",
              "day": "9",
            },
            {
              "year": "2018",
              "month": "11",
              "day": "9",
            },
            {
              "year": "2018",
              "month": "12",
              "day": "9",
            }
          ],
          "article": [
            {
              "id": "12",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "top": true,
              "img": "/static/images/counselor/test1.png",
              "time": "22"
            },
            {
              "id": "11",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "top": false,
              "img": "/static/images/counselor/test1.png",
              "time": "22",
              "headImg": "/static/images/counselor/test2.png",
              "name": "王阳阳",
              "attention": true
            },
            {
              "like": true,
              "id": "123",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "img": "/static/images/counselor/test1.png",
              "time": "6",
              "headImg": "/static/images/counselor/test2.png",
              "name": "王阳阳",
              "attention": false
            },
            {
              "like": true,
              "id": "13",
              "title": "已创新点燃改革引擎，清晨早上打开窗，心情美美哒",
              "time": "6",
              "headImg": "/static/images/counselor/test2.png",
              "name": "王阳阳",
              "attention": true
            }
          ],
          "course": [
            {
              "like": false,
              "id": "17",
              "time": "11",
              "title": "GER如何快速提分，免费提分宝典",
              "img": "/static/images/counselor/test3.png",
              "headImg": "/static/images/counselor/test2.png",
              "name": "刘军",
              "position": "新东方讲师",
              "authentication": true
            },
            {
              "like": true,
              "id": "10",
              "time": "8",
              "title": "GER如何快速提分，免费提分宝典",
              "img": "/static/images/counselor/test3.png",
              "headImg": "/static/images/counselor/test2.png",
              "name": "刘军",
              "position": "新东方讲师",
              "authentication": false
            }
          ]
        }
      }
    }
  })
})
//problem问题详情的模拟数据
Mock.mock('/api/problem', (req, res) => {
  return Mock.mock({
    "success": true,
    "_DATA_": {
      "result": {
        "modelData": {
          "question": {
            "id":1,
            "tag": ['标签', '标签', '标签', '标签', '标签', '标签','标签', '标签', '标签', '标签', '标签', '标签'],
            "title": "在英国留学和在美国留学的区别",
            "isReward": true,
            "money": "￥80.00",
            "question_name": "大张伟",
            "attention": false,
            "details": "在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?",
          },
          "answer": [
            {
              "user_id":1,
              "answer_name": "朱晓明",
              "attention": false,
              "accept":true,
              "details":"这是回答的详情这是回答的详情这是回答的详情这是回答的详情这是回答的详情这是回答的详情",
              "post":"1000",
              "collect":"3000",
              "reply":"400",
              "like":"900",
            },
            {
              "user_id":2,
              "answer_name": "朱晓明",
              "attention": true,
              "accept":false,
              "details":"这是回答的详情这是回答的详情这是回答的详情这是回答的详情这是回答的详情这是回答的详情",
              "post":"1000",
              "collect":"3000",
              "reply":"400",
              "like":"900",
            },
            {
              "user_id":3,
              "answer_name": "朱晓明",
              "attention": false,
              "accept":false,
              "details":"这是回答的详情这是回答的详情这是回答的详情这是回答的详情这是回答的详情这是回答的详情",
              "post":"1000",
              "collect":"3000",
              "reply":"400",
              "like":"900",
            },
          ]
        }
      }
    }
  })
})
//problem回答详情的模拟数据
Mock.mock('/api/answer', (req, res) => {
  return Mock.mock({
    "success": true,
    "_DATA_": {
      "result": {
        "modelData": {
          "title": "在英国留学和在美国留学的区别",
          "user_id":1,
          "answer_name": "朱晓明",
          "attention": false,
          "accept":true,
          "post":"1000",
          "collect":"3000",
          "reply":"400",
          "like":"900",
          "intro":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区",
          "details":[
            {
              "title":"标题1",
              "content":"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
            },
            {
              "title":"标题1",
              "content":"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
            },
            {
              "title":"标题1",
              "content":"这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容"
            }
          ],
          "answer_reply": [
            {
              "user_id": 1,
              "good": 80,
              "medium": 10,
              "negative": 10,
              "name": "张宇",
              "headImg": "/static/images/course-short/test4.png",
              "time": 8,
              "message": "这篇文章给了我很大的启迪，谢谢",
              "like":"900",
              "reply":
                {
                  "like":"900",
                  "user_id": 2,
                  "reply_name": "周天曦",
                  "reply_headImg": "/static/images/course-short/test4.png",
                  "reply_time": 3,
                  "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                }
            },
            {
              "like":"900",
              "user_id": 3,
              "good": 80,
              "medium": 10,
              "negative": 10,
              "name": "张宇",
              "headImg": "/static/images/course-short/test4.png",
              "time": 8,
              "message": "这篇文章给了我很大的启迪，谢谢"
            },
            {
              "like":"900",
              "user_id": 4,
              "good": 80,
              "medium": 10,
              "negative": 10,
              "name": "张宇",
              "headImg": "/static/images/course-short/test4.png",
              "time": 8,
              "message": "这篇文章给了我很大的启迪，谢谢",
              "reply":
                {
                  "like":"900",
                  "user_id": 5,
                  "reply_name": "周天曦",
                  "reply_headImg": "/static/images/course-short/test4.png",
                  "reply_time": 3,
                  "reply_message": "其实我觉得也很好，这篇文章给了我很大的启迪，我相信明天更好"
                }
            },
            {
              "like":"900",
              "user_id": 6,
              "good": 80,
              "medium": 10,
              "negative": 10,
              "name": "张宇",
              "headImg": "/static/images/course-short/test4.png",
              "time": 8,
              "message": "这篇文章给了我很大的启迪，谢谢"
            },
            {
              "like":"900",
              "user_id": 7,
              "good": 80,
              "medium": 10,
              "negative": 10,
              "name": "张宇",
              "headImg": "/static/images/course-short/test4.png",
              "time": 8,
              "message": "这篇文章给了我很大的启迪，谢谢"
            }
          ]
        }
      }
    }
  })
})

//user_center/verification的模拟数据
Mock.mock('/api/user_center/verification', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success": true,
      "result": {
        "modelData":
          {
            verification: "123123"
          }
      }
    }
  })
}),

//user_center/register的模拟数据
  Mock.mock('/api/user_center/register', (req, res) => {
    return Mock.mock({
      "_DATA_": {
        "success": true,
        "result": {
          "modelData":
            {
              register: true,
              id: 123456
            }

        }
      }
    })
  }),


//讲师文章详情模拟数据 lecturer
  Mock.mock('/api/lecturer/article/view', (req, res) => {
    return Mock.mock({
      "_DATA_": {
        "success": true,
        "result": {
          "modelData":
            [
              {
                "title": "讲师文章,赴美留学面签时无厘头问题，你被雷到了吗？",
                "created_at": "2018.8.30 12:30:00",
                "img_url": "/static/images/lecturerdemo.jpg",
                "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
              },
              {
                "title": "讲师文章,赴美留学面签时无厘头问题，你被雷到了吗？",
                "created_at": "2018.8.30 12:30:00",
                "img_url": "/static/images/lecturerdemo.jpg"
              },
              {
                "title": "赴美留学面签时无厘头问题，你被雷到了吗？",
                "created_at": "2018.8.30 12:30:00",
                "img_url": "",
                "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
              },
              {
                "title": "讲师文章,赴美留学面签时无厘头问题，你被雷到了吗？",
                "created_at": "2018.8.30 12:30:00",
                "img_url": "",
                "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
              },
              {
                "title": "讲师文章,赴美留学面签时无厘头问题，你被雷到了吗？",
                "created_at": "2018.8.30 12:30:00",
                "img_url": "/static/images/lecturerdemo.jpg",
                "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
              },
              {
                "title": "讲师文章,赴美留学面签时无厘头问题，你被雷到了吗？",
                "created_at": "2018.8.30 12:30:00",
                "img_url": "/static/images/lecturerdemo.jpg",
                "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
              },
              {
                "title": "讲师文章,赴美留学面签时无厘头问题，你被雷到了吗？",
                "created_at": "2018.8.30 12:30:00",
                "img_url": "/static/images/lecturerdemo.jpg",
                "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
              },
              {
                "title": "讲师文章,赴美留学面签时无厘头问题，你被雷到了吗？",
                "created_at": "2018.8.30 12:30:00",
                "img_url": "/static/images/lecturerdemo.jpg",
                "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
              },
              {
                "title": "讲师文章,赴美留学面签时无厘头问题，你被雷到了吗？",
                "created_at": "2018.8.30 12:30:00",
                "img_url": "/static/images/lecturerdemo.jpg",
                "content": "http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
              }
            ]
        }
      }
    })
  })

//course-public/intro的模拟数据
Mock.mock('/api/course-public/intro', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success": true,
      "result": {
        "modelData": {
          "counselor": {
            "backImg": "/static/images/course-short/test1.png",
            "username": "邓静静",
            "description": "留学金牌顾问",
          },
          "dxz_article":{
            "id":1,
            "title":"新西兰国立南方理工学院公开课：英语强化课程",
            "description":"",
            "content":"想不想通过观看诙谐幽默的短剧来轻松学习英语呢？本系列课程正是采用了寓教于乐的方式，通过大量精彩的小品对话，在欢快的实景气氛中，轻松理解并掌握所有知识点。课程内容由浅入深、循序渐进，讲师会在每段小品的开始与结束时进行通俗易懂的讲解与总结。相信本课程定能让您受益匪浅。",
            "img_url":"/static/images/course-public/jianjietupian.png",
            "good":98,
            "good_comment":9999,
            "medium_comment":20,
            "negative_comment":10,
            "collect":5000,
            "learn" : 1999,
            "labels":[
              {
                "label": "全真模拟，满足你的需求",
              },
              {
                "label": "配套词库，随时随地背单词",
              },
              {
                "label": "24小时答疑，老师时刻都在场",
              },
              {
                "label": "作业批改，群组集体学习",
              },
              {
                "label": "资料下载，群文件随时访问",
              }
            ]
          }
        },

      }
    }
  })
})
//course-public/intro的第二次请求模拟数据
Mock.mock('/api/course-public/recommend', (req, res) => {
  return Mock.mock({
    "_DATA_":{
      "success": true,
      "result":{
        "modelData_question":[
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？哈哈哈哈哈哈",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"/static/images/course-public/tuijianke.png",
          },
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"",
          },
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"/static/images/course-public/tuijianke.png",
          },
        ],
        "modelData_article":[
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"/static/images/course-public/tuijianke.png",
            "vip":false,
            "money": 199.99
          },
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"/static/images/course-public/tuijianke.png",
            "vip":true,
            "money": 199.99
          },
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"/static/images/course-public/tuijianke.png",
            "vip":true,
            "money": 199.99
          },
        ]
      }
    }
  })
})
//course-record/intro的模拟数据
Mock.mock('/api/course-record/intro', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success": true,
      "result": {
        "modelData": {
          "counselor": {
            "backImg": "/static/images/course-short/test1.png",
            "username": "邓静静",
            "description": "留学金牌顾问",
          },
          "dxz_article":{
            "id":1,
            "title":"新西兰国立南方理工学院公开课：英语强化课程",
            "description":"",
            "content":"想不想通过观看诙谐幽默的短剧来轻松学习英语呢？本系列课程正是采用了寓教于乐的方式，通过大量精彩的小品对话，在欢快的实景气氛中，轻松理解并掌握所有知识点。课程内容由浅入深、循序渐进，讲师会在每段小品的开始与结束时进行通俗易懂的讲解与总结。相信本课程定能让您受益匪浅。",
            "img_url":"/static/images/course-public/jianjietupian.png",
            "good":68,
            "good_comment":9999,
            "medium_comment":20,
            "negative_comment":10,
            "collect":5060,
            "learn" : 199,
            "money_new" : 199.99,
            "money_old" : 999.99,
            "context":'口语表达，作为语言基本能力听说读写里最难的一项，不但反映一个人的语言积累，也体现了一个人对语言的熟练程度。/n从能应付日常需求，到英语环境下自如交流，再到一口能以假乱真让人以为是母语是英语的水平，每一个层级对于说的能力要求各不相同。/n无论是零基础到入门，还是入门往中级跨越，或者中高级朝着接近母语的高峰攀登，口语的锻炼需要顾及以下几方面：语音：从单独音素的掌握，到单词中音节的轻读重读，再到超音段的词和词之间的音变，最后到语调，这些都或多或少影响着交流的准确性；/n词汇：词汇量决定了语言交流本质;信息互换的基础，而词汇的准确性以及在合适语体下的英语对于高级别表达更是起了至关重要的作用，此外学术词汇体现了一个人的受教育程度，而文化词汇则会帮助一个人融入语言的环境；/n语法：语法是将词汇组合成句子的关键；/n结构：无论是信息讲解还是思想碰撞，好的结构会对信息的传递速率提升有着极强的帮助；/n逻辑和修辞：对于语言要求极高的领域如教学、演讲、辩论，逻辑让一个人的思想有条理地展现出来，锦上添花的修辞能让语言真正升华成为艺术。/n在1对1前我会根据你想提升的方面通过咨询留一些口语测试，测试之后我会将所有的问题一一归档，1对1时我会进行具体分析。',
            "discounts_list" : [
              {
                "show_name":"2018年最新TELS写作基础课好胺四大件事大",
                "money_new":100.00,
                "money_old":1000.00,
                "group":[
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":50
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":30
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":20
                  }
                ]
              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":200.00,
                "money_old":1000.00,
                "group":[
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":100
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":50
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":50
                  }
                ]
              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,
                "group":[
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":100
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":100
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":100
                  }
                ]
              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":400.00,
                "money_old":1000.00,
                "group":[
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":150
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":150
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":100
                  }
                ]
              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":500.00,
                "money_old":1000.00,
                "group":[
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":100
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":300
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":100
                  }
                ]
              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":600.00,
                "money_old":1000.00,
                "group":[
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":200
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":200
                  },
                  {
                    "name":"新西兰客户理工XXXXX：英语强化课程",
                    "money":200
                  }
                ]
              }
            ],
            "ticket_list":[
              {
                "face_value":100,
                "money_max":1000,
                "deadline":"2018年10月20日",
              },
              {
                "face_value":80,
                "money_max":800,
                "deadline":"2018年08月1日",
              },
            ],
              "labels":[
              {
                "label": "全真模拟，满足你的需求",
              },
              {
                "label": "配套词库，随时随地背单词",
              },
              {
                "label": "24小时答疑，老师时刻都在场",
              },
              {
                "label": "作业批改，群组集体学习",
              },
              {
                "label": "资料下载，群文件随时访问",
              }
            ]
          }
        },

      }
    }
  })
})
//course-record/intro的第二次请求模拟数据
Mock.mock('/api/course-record/recommend', (req, res) => {
  return Mock.mock({
    "_DATA_":{
      "success": true,
      "result":{
        "modelData_question":[
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？哈哈哈哈哈哈",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"/static/images/course-public/tuijianke.png",
          },
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"",
          },
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"/static/images/course-public/tuijianke.png",
          },

        ],
        "modelData_article":[
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"/static/images/course-public/tuijianke.png",
            "vip":false,
            "money": 199.99
          },
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"/static/images/course-public/tuijianke.png",
            "vip":true,
            "money": 199.99
          },
          {
            "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
            "author_name":"赵海燕",
            "author_imgurl":"/static/images/course-public/touxiang.png",
            "img_url":"/static/images/course-public/tuijianke.png",
            "vip":true,
            "money": 199.99
          },
        ]
      }
    }
  })
})
//course-public/catalog的模拟数据
Mock.mock('/api/course-public/catalog',(req,res) => {
  return Mock.mock({
    "_DATA_":{
      "success":true,
      "result":{
        "modelData":[
          {
            "voice_id": "01",
            "voice_name" :"be动词、冠词、指示代词、一般现在时、一般过去式、一般现在时",
            "free_state":true,
          },
          {
            "voice_id": "02",
            "voice_name" :"be动词、冠词、指示代词、一般现在时、一般过去式、一般现在时",
            "free_state":true,
          },
          {
            "voice_id": "03",
            "voice_name" :"一般过去式、一般现在时",
            "free_state":false,
          },
          {
            "voice_id": "04",
            "voice_name" :"2018.10.02更新",
            "update_state": true
          }
        ],
      }
    }
  })
})
//course-record/catalog的模拟数据
Mock.mock('/api/course-record/catalog',(req,res) => {
  return Mock.mock({
    "_DATA_":{
      "success":true,
      "result":{
        "modelData":[
          {
            "voice_id": "01",
            "voice_name" :"be动词、冠词、指示代词、一般现在时、一般过去式、一般现在时",
            "free_state":true,
          },
          {
            "voice_id": "02",
            "voice_name" :"be动词、冠词、指示代词、一般现在时、一般过去式、一般现在时",
            "free_state":true,
          },
          {
            "voice_id": "03",
            "voice_name" :"一般过去式、一般现在时",
            "free_state":false,
          },
          {
            "voice_id": "04",
            "voice_name" :"一般过去式、一般现在时",
            "free_state":false,
          },
          {
            "voice_id": "05",
            "voice_name" :"2018.10.02更新",
            "update_state": true
          }
        ],
      }
    }
  })
})
//abroad-serve/intro的模拟数据
Mock.mock('/api/abroad-serve/intro', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success": true,
      "result": {
        "modelData": {
          "counselor": {
            "backImg": "/static/images/course-short/test1.png",
            "username": "邓静静",
            "description": "留学金牌顾问",
          },
          "dxz_article":{
            "id":1,
            "title":"新西兰国立南方理工学院公开课：英语强化课程",
            "description":"",
            "content":"想不想通过观看诙谐幽默的短剧来轻松学习英语呢？本系列课程正是采用了寓教于乐的方式，通过大量精彩的小品对话，在欢快的实景气氛中，轻松理解并掌握所有知识点。课程内容由浅入深、循序渐进，讲师会在每段小品的开始与结束时进行通俗易懂的讲解与总结。相信本课程定能让您受益匪浅。",
            "img_url":"/static/images/course-public/jianjietupian.png",
            "good":88,
            "good_comment":9999,
            "medium_comment":20,
            "negative_comment":10,
            "collect":5060,
            "buy" : 199,
            "buy_time":"2018.07.06至2019.06.09",
            "money_new" : 199.99,
            "money_old" : 999.99,
            "contexts":[
              {
                "title":"服务内容",
                "context":"1.选校：我们与您共同完成，申请多少所学校，申请哪些学校，补申加申都不受限制/n2.网申填表、材料寄送：根据您自己的时间自主决定参与度，我们承诺文书与网申账号均与您共享/n3.套磁信、和学校往来邮件：您完成后，我们会为您把关和修改/n4.申请时间规划及提醒，告别拖延症/n5.全套文书制作+润色，由我们北美专家团队与您共同完成，包括PS、SOP、PHS、Essay、RL、CV/Resume、Study Plan等/n6.面试模拟，由我们北美专家团队+学长通过Skype为您完成/n7.签证申请指导/n8.您在申请中碰到的相关问题，我们都会为您悉心解答" ,
              },
              {
                "title":"五大特点",
                "context":"四位顾问共同服务：责任顾问负责全程申请+写文书；助理顾问协助整理资料，提醒申请进度；海外文书顾问，撰写文书；同专业学长提供独立咨询；/n2）文书竞争选用：海外文书顾问（同专业）与责任顾问竞争撰写文书，谁好用谁；文书百分百经Native Speaker润色/n3）不限学校数量，网申帐号与文书公开/n4）最专业的选校定位：我们内部收集了大量的案例，做出了内部单独使用的选校评分系统，结合顾问经验选校，定校十分准确、客观；/n不成功，无条件全额退款",
              },
              {
                "title":"服务流程",
                "context":"第一步：分配咨询师。签约后3个工作日内，我们网将为您安排一位资深责任顾问以及我们学长，全程规划，并负责您的申请/n第二步：制定申请时间规划表，完成初步咨询。责任顾问会根据您的实际情况，与您一道制定申请时间规划表，让您对留学申请有一个大致的了解/n第三步：完成选校方案制定。当您GT等各项成绩差不多准备完成后，我们的责任顾问将与您一道制定选校方案。选校十分重要，好的选校可以说是成功的一半。我们的责任顾问将依据自身的经验以及我们网广阔的案例，通过数据分析并结合学校专业就业课程质量等各方面的因素，为您制作一个最优的选校方案，让您百分百满意/n第四步：文书制定。依据选校方案，我们北美专家团队开始与您一道完成文书的制作。文书的制作，原则上以提供英文材料为佳，但也可以只提供中文材料，视您的时间充裕程度和英文水准而定。我们将为您深度挖掘潜能，让您的申请真正做到独一无二/n第五步：当您拿到学校的面试时，我们我们北美专家团队及学长将为您进行面试模拟，最大限度提高录取的可能性/n第六步：网申填表把关，各类材料制作（诸如WES公证、成绩单、在读证明、资金证明等），各种留学疑问答疑，套磁及套磁信把关，均将贯穿整个申请流程，我们的咨询师将一直陪伴在您的身边/n第七步：拿到offer后，我们的咨询师将指导您完成后续的工作以及签证的申请"
              },
              {
                "title":"费用说明",
                "context":"服务费：￥99,999元/n（注：不含院校申请费、材料寄送费、材料认证费、签证申请费、SEVIS费、学费押金、体检费、标准化考试送分费等任何第三方费用）。"

              }
            ],
            "discounts_list" : [
              {
                "show_name":"2018年最新TELS写作基础课好胺四大件事大",
                "money_new":300.00,
                "money_old":1000.00,

              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,

              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,

              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,

              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,

              },
              {
                "show_name":"2018年最新TELS写作基础课",
                "money_new":300.00,
                "money_old":1000.00,
              }
            ],
            "ticket_list":[
              {
                "face_value":1000,
                "deadline":3,
                "money":100,
                "title":"美国留学专用"
              },
              {
                "face_value":2000,
                "deadline":10,
                "money":200,
                "title":"美国留学专用"
              },
            ],
            "labels":[
              {
                "label": "全真模拟，满足你的需求",
              },
              {
                "label": "配套词库，随时随地背单词",
              },
              {
                "label": "24小时答疑，老师时刻都在场",
              },
              {
                "label": "作业批改，群组集体学习",
              },
              {
                "label": "资料下载，群文件随时访问",
              }
            ]
          }
        },

      }
    }
  })
})
//course-vip/uservip 用户vip 模拟数据
Mock.mock('/api/course-vip/usrvip', (req, res) =>{
  return Mock.mock({
    "_DATA_":{
      "success":true,
      "result":{
        "modelData":{
          "user":{
            "name":"张艺兴",
            "img_url": "/static/images/course-vip/viptoux.png",
            "period":"2019年12月30日",
          },
          "vip_group_three":{
            "number":3,
            "money":300.00
            },
          "vip_group_six":{
              "number":6,
              "money":300.00
            },
          "vip_group_twelve":{
              "number":12,
              "money":300.00
            },
          "privilege":[
            {
              "img":"/static/images/course-vip/kaitong_icon_mf@2x.png",
              "title":"VIP课程免费随心看",
            },
            {
              "img":"/static/images/course-vip/kaitong_icon_yuyue@2x.png",
              "title":"线上公开课优先预约",
            },
            {
              "img":"/static/images/course-vip/kaitong_icon_zungui@2x.png",
              "title":"尊贵身份与众不同",
            },
            {
              "img":"/static/images/course-vip/kaitong_icon_kd@2x.png",
              "title":"专属宽带，看课程更流畅",
            },
            {
              "img":"/static/images/course-vip/kaitong_icon_gg@2x.png",
              "title":"广告特权，无需等待",
            }
          ]
        },
      }
    }
  })
})
//courseLive 直播详情的模拟数据
Mock.mock('/api/courseLive', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success": true,
      "result": {
        "modelData": {
          "counselor": {
            "backImg": "/static/images/course-short/test1.png",
            "username": "邓静静",
            "description": "留学金牌顾问",
          },
          "dxz_article": {
            "id": 1,
            "title": "零基础学英语—常用英语",
            "description": "",
            "begin_time":"2018-11-11  18:00",
            "content": "讲师会在每段小品的开始与结束时进行通俗易懂的讲解与总结。相信本课程定能让您受益匪浅。",
            "img_url": "/static/images/course-public/jianjietupian.png",
            "money_new": 199.99,
            "money_old": 999.99,
            "context": '口语表达，作为语言基本能力听说读写里最难的一项，不但反映一个人的语言积累，也体现了一个人对语言的熟练程度。/n从能应付日常需求，到英语环境下自如交流，再到一口能以假乱真让人以为是母语是英语的水平，每一个层级对于说的能力要求各不相同。/n无论是零基础到入门，还是入门往中级跨越，或者中高级朝着接近母语的高峰攀登，口语的锻炼需要顾及以下几方面：语音：从单独音素的掌握，到单词中音节的轻读重读，再到超音段的词和词之间的音变，最后到语调，这些都或多或少影响着交流的准确性；/n词汇：词汇量决定了语言交流本质;信息互换的基础，而词汇的准确性以及在合适语体下的英语对于高级别表达更是起了至关重要的作用，此外学术词汇体现了一个人的受教育程度，而文化词汇则会帮助一个人融入语言的环境；/n语法：语法是将词汇组合成句子的关键；/n结构：无论是信息讲解还是思想碰撞，好的结构会对信息的传递速率提升有着极强的帮助；/n逻辑和修辞：对于语言要求极高的领域如教学、演讲、辩论，逻辑让一个人的思想有条理地展现出来，锦上添花的修辞能让语言真正升华成为艺术。/n在1对1前我会根据你想提升的方面通过咨询留一些口语测试，测试之后我会将所有的问题一一归档，1对1时我会进行具体分析。',
            "ticket_list": [
              {
                "face_value": 100,
                "money_max": 1000,
                "deadline": "2018年10月20日",
              },
              {
                "face_value": 80,
                "money_max": 800,
                "deadline": "2018年08月1日",
              },
            ],
            "labels": [
              {
                "label": "在美国买东西，如何付款？",
              },
              {
                "label": "美国打折季怎么过！",
              },
              {
                "label": "假如你在美国逛超市",
              },
              {
                "label": "假如你在美国买鞋",
              }
            ],
            "comments":[
              {
                "user_id":1,
                "user_img":"/static/images/course-short/test1.png",
                "user_name":"张串",
                "user_comments":"这篇文章给我很大启迪，谢谢！！！"
              },
              {
                "user_id":4,
                "user_img":"/static/images/course-short/test1.png",
                "user_name":"张串",
                "user_comments":"这篇文章给我很大启迪，谢谢！！！"
              },
              {
                "user_id":5,
                "user_img":"/static/images/course-short/test1.png",
                "user_name":"张串",
                "user_comments":"这篇文章给我很大启迪，谢谢！！！讲课讲的很细致 我很喜欢谢谢！！"
              },
              {
                "user_id":6,
                "user_img":"/static/images/course-short/test1.png",
                "user_name":"张串",
                "user_comments":"这篇文章给我很大启迪，谢谢！！！"
              },
            ],
          }
        },

      }
    }
  })
}),
//顾问文章详情模拟数据 counselor
Mock.mock('/api/counselor/article/view', (req, res) =>{
  return Mock.mock({
    "_DATA_":{
      "success":true,
      "result":{
        "modelData":
          [
            {
              "title":"顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/counselordemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title":"顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/counselordemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title":"顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title":"顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/counselordemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title":"顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/counselordemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title":"顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/counselordemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title":"顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/counselordemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            },
            {
              "title":"顾问文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/counselordemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html"
            }
          ]
      }
    }
  })
})


//院校文章详情模拟数据 counselor
Mock.mock('/api/organ/article/view', (req, res) =>{
  return Mock.mock({
    "_DATA_":{
      "success":true,
      "result":{
        "modelData":
          [
            {
              "title":"院校文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/organdemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html",
              //是否关注
              "follow":true,
              //作者头像
              "mark":"/static/images/organdemo.jpg",
              //作者姓名
              "name":"杨薇"
            },
            {
              "title":"院校文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/organdemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html",
              "follow":false,
              "mark":"/static/images/organdemo.jpg",
              "name":"杨薇"
            },
            {
              "title":"院校文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html",
              "follow":true,
              "mark":"/static/images/organdemo.jpg",
              "name":"杨薇"
            },
            {
              "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html",
              "follow":false,
              "mark":"/static/images/organdemo.jpg",
              "name":"杨薇"
            },
            {
              "title":"院校文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/organdemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html",
              "follow":false,
              "mark":"/static/images/organdemo.jpg",
              "name":"王晓宇"

            },
            {
              "title":"院校文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/organdemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html",
              "follow":true,
              "mark":"/static/images/organdemo.jpg",
              "name":"王晓宇"
            },
            {
              "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/organdemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html",
              "follow":false,
              "mark":"/static/images/organdemo.jpg",
              "name":"张小伟"
            },
            {
              "title":"院校文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/organdemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html",
              "follow":true,
              "mark":"/static/images/organdemo.jpg",
              "name":"张小伟"
            },
            {
              "title":"院校文章,赴美留学面签时无厘头问题，你被雷到了吗？",
              "created_at":"2018.8.30 12:30:00",
              "img_url":"/static/images/organdemo.jpg",
              "content":"http://static.jjldxz.com/%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85.html",
              "follow":true,
              "mark":"/static/images/organdemo.jpg",
              "name":"张小伟"
            }
          ]
      }
    }
  })
})

//user_center/invite  取得用户信息，用于生成二维码
Mock.mock('/api/user_center/user', (req, res) =>{
  return Mock.mock({
    "success": true,
    "_DATA_": {
      "result":{
        "modelData":
          {
            "id":123456,
            "name":'韦小宝'
          }
      }
    }
  })
});




//user_center/verification的模拟数据  用于请求验证码
Mock.mock('/api/user_center/verification', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result":{
        "modelData":
          {
            verification: "123123"
          }
      }
    }
  })
});



//user_center/register的模拟数据  用于验证是否注册成功
Mock.mock('/api/user_center/register', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result":{
        "modelData":
          {
            register: true,
            id:123456
          }
      }
    }
  })
});


// user_center/ranking 模拟数据   获取我的排名
Mock.mock('/api/user_center/ranking', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result":{
        "modelData":
          {
            total_reward: 100.00,
            invitation_number: 10,
            introduce: "返利以XXX形式返还",
            ranking: 120,
            portrait: "http://img2.touxiang.cn/file/20181120/b4f307ae4ddea8de37747cc7468c4fcc.jpg",
            name: "范金超",
            total_income: "赚了一瓶红牛",
            top_ten: [
              {
                ranking: 1,
                portrait: "http://img2.touxiang.cn/file/20181120/b4f307ae4ddea8de37747cc7468c4fcc.jpg",
                name: "哈佛大学理工女1",
                total_income: "一辆兰博基尼"
              },
              {
                ranking: 2,
                portrait: "http://img2.touxiang.cn/file/20181117/2862ea0c665e3610a902c46f2a44535e.jpg",
                name: "哈佛大学理工女2",
                total_income: "一辆兰博基尼"
              },
              {
                ranking: 3,
                portrait: "http://img2.touxiang.cn/file/20181117/b8539df169a49d20ddfce26c9309b95e.jpg",
                name: "哈佛大学理工女3",
                total_income: "一辆兰博基尼"
              },
              {
                ranking: 4,
                portrait: "http://img2.touxiang.cn/file/20181117/b8539df169a49d20ddfce26c9309b95e.jpg",
                name: "哈佛大学理工女4",
                total_income: "一辆兰博基尼"
              },
              {
                ranking: 5,
                portrait: "http://img2.touxiang.cn/file/20181117/b8539df169a49d20ddfce26c9309b95e.jpg",
                name: "哈佛大学理工女5",
                total_income: "一辆兰博基尼"
              },
              {
                ranking: 6,
                portrait: "http://img2.touxiang.cn/file/20181117/2862ea0c665e3610a902c46f2a44535e.jpg",
                name: "哈佛大学理工女6",
                total_income: "一辆兰博基尼"
              },
              {
                ranking: 7,
                portrait: "http://img2.touxiang.cn/file/20181117/2862ea0c665e3610a902c46f2a44535e.jpg",
                name: "哈佛大学理工女7",
                total_income: "一辆兰博基尼"
              },
              {
                ranking: 8,
                portrait: "http://img2.touxiang.cn/file/20181117/2862ea0c665e3610a902c46f2a44535e.jpg",
                name: "哈佛大学理工女8",
                total_income: "一辆兰博基尼"
              },
              {
                ranking: 9,
                portrait: "http://img2.touxiang.cn/file/20181117/2862ea0c665e3610a902c46f2a44535e.jpg",
                name: "哈佛大学理工女9",
                total_income: "一辆兰博基尼"
              },
              {
                ranking: 10,
                portrait: "http://img2.touxiang.cn/file/20181117/2862ea0c665e3610a902c46f2a44535e.jpg",
                name: "哈佛大学理工女10",
                total_income: "一辆兰博基尼"
              }
            ]
          }
      }
    }
  })
});

//user_center/my_integral/detail的模拟数据  积分详情
Mock.mock('/api/user_center/my_integral/detail', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result":{
        "modelData":
          {
            "integral":300.00,
            detail:[
              {
                title:"签到获得积分",
                time:"2018/07/18",
                budget:"+100"
              },
              {
                title:"签到获得积分2",
                time:"2018/07/18",
                budget:"+1000"
              },
              {
                title:"签到获得积分3",
                time:"2018/07/18",
                budget:"+1000"
              },
              {
                title:"签到获得积分4",
                time:"2018/07/18",
                budget:"+1000"
              },
              {
                title:"签到获得积分5",
                time:"2018/07/18",
                budget:"+1000"
              },
            ]
          }
      }
    }
  })
});

// /user-center/my-integral/sprog-task  新手任务模拟数据
Mock.mock('/api/user_center/my_integral/sprog_task', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result":{
        "modelData":
          {
            "integral":300.00,
            task:[
              {
                title:"新用户注册",
                finish:true,
                describe:"单次10积分，累计10积分",
                amount:"+10积分",
                residual_times:0,
                action:"去注册"
              },{
                title:"完善个人资料",
                finish:false,
                describe:"只限首次完成",
                amount:"+0积分/+1积分",
                residual_times:1,
                action:"立即补充"
              }
              ,{
                title:"首次购买VIP会员",
                finish:true,
                describe:"单次10积分，累计10积分",
                amount:"+1积分",
                residual_times:1,
                action:"去购买"
              }
              ,{
                title:"首次观看公开课",
                finish:false,
                describe:"单次5积分，每日累计15积分",
                amount:"+0积分/+15积分",
                residual_times:3,
                action:"去上课"
              }
              ,{
                title:"首次收藏",
                finish:false,
                describe:"只限首次完成",
                amount:"+0积分/+1积分",
                residual_times:1,
                action:"去收藏"
              }
              ,{
                title:"首次转发",
                finish:false,
                describe:"单次5积分，每日累计15积分",
                amount:"+0积分/+1积分",
                residual_times:1,
                action:"去转发"
              }
              ,{
                title:"首次分享",
                finish:false,
                describe:"单次5积分，每日累计15积分",
                amount:"+0积分/+1积分",
                residual_times:3,
                action:"去分享"
              }
              ,{
                title:"首次点赞",
                finish:false,
                describe:"单次5积分，每日累计15积分",
                amount:"+0积分/+1积分",
                residual_times:1,
                action:"去点赞"
              }
            ]
          }
      }
    }
  })
});
// /user-center/my-integral/day-task  今日必做模拟数据
Mock.mock('/api/user_center/my_integral/day_task', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result":{
        "modelData":
          {
            "integral":300.00,
            task:[
              {
                title:"每日签到",
                finish:false,
                describe:"连续登录更多奖励",
                amount:"+1积分",
                residual_times:1,
                action:"签到日历"
              },{
                title:"分享到第三方",
                finish:true,
                describe:"单次2积分，累计10积分",
                amount:"+2积分/10积分",
                residual_times:1,
                action:"去分享"
              }
              ,{
                title:"购买课程/出版物",
                finish:false,
                describe:"单次10积分，不设上限",
                amount:"无限制",
                residual_times:1,
                action:"去充值"
              }
              ,{
                title:"观看课程",
                finish:false,
                describe:"单次5积分，每日累计5积分",
                amount:"+0积分/+5积分",
                residual_times:3,
                action:"去上课"
              }
              ,{
                title:"关注",
                finish:false,
                describe:"每次2积分，每日累计10积分",
                amount:"+0积分/+10积分",
                residual_times:1,
                action:"去关注"
              }
              ,{
                title:"评价",
                finish:false,
                describe:"每次2积分，每日累计6积分",
                amount:"+0积分/+6积分",
                residual_times:1,
                action:"去评价"
              }
              ,{
                title:"收藏",
                finish:false,
                describe:"单次1积分，每日累计3积分",
                amount:"+0积分/+3积分",
                residual_times:3,
                action:"去收藏"
              }
              ,{
                title:"点赞",
                finish:false,
                describe:"单次1积分，每日累计3积分",
                amount:"+0积分/+3积分",
                residual_times:1,
                action:"去点赞"
              },
              {
                title:"邀请好友注册",
                finish:true,
                describe:"单次2积分，每日累计10积分",
                amount:"+0积分/+10积分",
                residual_times:1,
                action:"邀请好友"
              },
              {
                title:"举报",
                finish:false,
                describe:"单次1积分，每日累计1积分",
                amount:"+0积分/+1积分",
                residual_times:1,
                action:"去举报"
              },
              {
                title:"意见反馈",
                finish:false,
                describe:"单次1积分，每日累计15积分",
                amount:"+0积分/+15积分",
                residual_times:1,
                action:"意见反馈"
              }
            ]
          }
      }
    }
  })
});
// /user-center/my-integral/lottery  每日转盘模拟数据
Mock.mock('/api/user_center/my_integral/lottery', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result":{
        "modelData":
          {
            "user_name":"韦小宝",
            "rules":[
              "每天一次免费抽奖机会","每次抽奖消耗100积分","积分奖励直接打到积分账户，可以通过积分账户查询vip会员奖励一天自动生效","分享可获得免费机会"
            ]
          }
      }
    }
  })
});
//user_center/help/problem的模拟数据  用于常见问题列表
Mock.mock('/api/user_center/help/problem', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result":{
        "modelData": {
            "helpList":[
              {
                "title":"我的消息",
                "helpContent":[
                  {
                    "content":"修改资料"
                  },
                  {
                    "content":"账号相关问题"
                  }
                ]
              },
              {
                "title":"入住签约",
                "helpContent":[
                  {
                    "content":"个人入住认证"
                  },
                  {
                    "content":"国内老师签证"
                  },
                  {
                    "content":"海外老师签证"
                  }
                ]
              },
              {
                "title":"直播课及精品课",
                "helpContent":[
                  {
                    "content":"直播客创建攻略"
                  },
                  {
                    "content":"什么内容适合直播"
                  },
                  {
                    "content":"声音、摄像头设置"
                  },
                  {
                    "content":"直播课最快速吸粉转换"
                  },
                  {
                    "content":"精品课制作攻略"
                  }
                ]
              },
              {
                "title":"课程推广",
                "helpContent":[
                  {
                    "content":"公开课影响转化"
                  },
                  {
                    "content":"课程推广指南"
                  },
                  {
                    "content":"收费课程阶梯折扣"
                  },
                  {
                    "content":"推广功能推广者"
                  },
                  {
                    "content":"试听课设置"
                  }
                ]
              },
              {
                "title":"讲师后台",
                "helpContent":[
                  {
                    "content":"个人收益结算"
                  },
                  {
                    "content":"数据查询指南"
                  },
                  {
                    "content":"上传课件素材"
                  },
                  {
                    "content":"店铺经营管理"
                  }
                ]
              }
            ]
          }
      }
    }
  })
});


//user_center/info/date的模拟数据  用于我的日程
Mock.mock('/api/user_center/info/date', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result": {
        "modelData": {
          "calendar": [
            {
              "year": "2018",
              "month": "10",
              "day": "9",
            },
            {
              "year": "2018",
              "month": "11",
              "day": "9",
            },
            {
              "year": "2018",
              "month": "11",
              "day": "10",
            },
            {
              "year": "2018",
              "month": "11",
              "day": "11",
            },
            {
              "year": "2018",
              "month": "12",
              "day": "1",
            }
          ],
        }
      }
      }
    })
});

// per-master 参与课程的模拟数据

Mock.mock('/api/per-master/per-master', (req, res) =>{
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":[
          {
            "backImg":"/static/images/photo-album/recommend_img@2x.png",
            "className":"公开课",
            "isline":false,
            "openNew":"course-public"
          },
          {
            "backImg":"/static/images/photo-album/recommend_img@2x.png",
            "className":"直播课",
            "isline":true,
            "data":"2018.09.09",
            "time":"18:00",
            "openNew":"courseLive",
            "timeImg":"/static/images/photo-album/time.png"
          },
          {
            "backImg":"/static/images/photo-album/recommend_img@2x.png",
            "className":"精品课",
            "isline":false,
            "openNew":"course-record"
          },

          {
            "backImg":"/static/images/photo-album/recommend_img@2x.png",
            "className":"VIP课程",
            "isline":false,
            "openNew":"course-vip"
          },
          {
            "backImg":"/static/images/photo-album/recommend_img@2x.png",
            "className":"小课程",
            "isline":false,
            "openNew":"course-short"
          },
        ]
      }
    }
  })
})

// photo-album 的模拟数据
Mock.mock('/api/photo-album/photos', (req, res) =>{
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":{
          "year":[
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },{
              "backImg":"/static/images/photo-album/als.png",
            },
            
          ],
          "all":[
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
            {
              "backImg":"/static/images/photo-album/als.png",
            },
          ]
        },
      }
    }
  })
})


//user_center/help/about_us的模拟数据  用于介绍我们
Mock.mock('/api/user_center/help/about_us', (req, res) => {
  return Mock.mock({
    "success": true,
    "_DATA_": {
      "result": {
        "modelData": {

            "titleone": "公司简介",
            "aboutCompany": [
              {
                "id": 1,
                "name": "金吉列出国留学咨询服务有限公司（简称金吉列留学），成立于1999年，2000年1月由教育部、公安部、国家工商行政管理总局资质认证的出国留学专业服务机构。公司现员工总数2600余人，业务涉及出国留学、海外移民、签证申请服务等领域，在海内外设有51家直营分、子公司。金吉列企业集团是国家工商总局公示认定的“重信用守合同”企业。金吉列留学商标是北京市工商局连续多年认定的“北京市著名商标”。"
              },
              {
                "id": 2,
                "name": "金吉列留学以“发展民族教育、促进国际交流”为己任，从成立之初即提出“打造留学服务良心产业”。多年来，公司一直秉承“以客为尊，以客户为中心”服务理念，用“良心，诚信”经营企业，坚持“把合适的学生送到适合的院校”服务观，致力于为学生提供“全产业链、一站式”留学服务，努力建造全球“国际人才交流的港湾和平台”，使公司成为全球先进的国际教育和海外移民服务知名的国际交流产业集团。截至目前，金吉列留学已在国内主要大中城市建立49家直营分公司和北京金吉列出入境直营子公司。同时，公司积极响应国家“一带一路”发展战略，着眼于形成留学服务全球化、全产业链布局，在加拿大温哥华、多伦多、澳大利亚墨尔本、新西兰奥克兰设立4家海外公司，为海外学子提供接机住宿、升学转学申请、课程辅导、语言提升、实习就业、海外移民、境外生活服务等，使留学服务由国内延伸到海外，形成全球化、全产业链服务网络格局。"
              },
              {
                "id": 3,
                "name": "“十年磨一剑”。公司经过19年的磨炼和发展，现已成为出国留学咨询服务行业中经营规模大、服务项目全面、品牌美誉度高、市场竞争力强的留学企业之一。每年帮助数万名学子实现了留学梦想，指导和帮助学生进行未来人生规划。公司拥有由两千多名经验丰富、业务精湛的咨询顾问及文案组成的专业团队，他们中很多老师是留学归国人员或具有海外工作、生活经历，不仅了解各国院校信息和申请流程，对海外学习和生活也有过亲身体会，能够为学生的留学生活进行全面细致和切合实际的规划。"
              }
            ],
            "titletwo": "19年的砥砺前行，公司具备以下四大优势",
            "advantage": [
              {
                "id": "优势一：",
                "name": "金吉列留学作为留学行业首部国家标准的推动和主要起草单位，与中国教育国际交流协会、北京留学服务行业协会共同完成《留学服务术语》与《留学中介服务规范》两部国家标准的起草。2016年11月，两项国家标准由中华人民共和国国家质量监督检验检疫总局中国国家标准化管理委员会审核并正式发布。"
              },
              {
                "id": "优势二：",
                "name": "金吉列留学拥有美、英、加、澳、新、日、韩、德、法等24个国家和地区2300余所海外优质合作院校资源，供学生选择，其中包括众多世界知名院校，如美国杜克大学、南加州大学、布兰迪斯大学商学院、波士顿大学语言中心、东北大学、华盛顿大学，英国曼彻斯特大学、格拉斯哥大学，澳大利亚澳国立大学、墨尔本大学、悉尼大学，加拿大多伦多大学、西安大略大学，新西兰奥克兰大学、奥塔哥大学、惠灵顿维多利亚大学等。同时，金吉列留学成为美国U.S. News Global Education 咨询委员会董事单位，帮助学生和其家长在选择美国大学时，做出更恰当、更明智的决定，选择最符合学生兴趣和专长的大学。"
              },
              {
                "id": "优势三：",
                "name": "由各省市消费者协会或消费者权益保护委员会授权设立的，遍布全国的47家行业全公益的金吉列出国留学消费教育学校或教育基地，为学生留学保驾护航。消费教育学校/基地从保护出国留学消费者切身利益出发，以 “开办消费教育义务课堂系列授课”的形式，帮助广大留学消费者了解留学的基本知识和合法正规的途径，规避留学消费的误区和陷阱，培养留学消费者的自觉维权能力并引导学生和家长理性留学。为真正做到一切从维护消费者的利益出发，把留学消费教育落实到实处，公司还在中国消费者协会的指导和支持下，与中消协于2013-2016年期间共同编辑出版《出国留学消费指导手册》，免费向留学消费者发放，受益学生和家长近百万人次。"
              },
              {
                "id": "优势四：",
                "name": "由25名金吉列出国留学消费教育学校留学消费教育指导专家和38名美国常青藤大学和知名大学教授组成的留学专家团队，为学生提供专业的留学规划指导。金吉列出国留学消费教育学校留学消费教育指导专家由长期从事海外教育工作，具有与国外教育界多年沟通交流经验的教授、专家和学者组成，他们对国外高等教育体制、院校特色、专业设置、授课特点、文化风俗等有深入研究。此外，他们还深谙所在国家的留学移民政策，凭借多年积累的海外教育工作经验，指导和帮助广大中国留学生了解世界，实现留学成才梦想。金吉列留学特别推出的美国常青藤院校教授大讲堂，特邀众多美国知名院校教授亲临现场，为希望留学美国的学子答疑解惑，指引方向。"
              }
            ],
            "titlethree":"这是第三个标题",
            "content": [
              {
                "name": "为了给学生提供高效规范和方便快捷的服务，公司坚持从管理上下功夫，多年来持续进行管理优化和服务流程再造：公司以国际标准的管理模式为基础，创建了科学的、符合留学行业特点的留学服务管理模式；通过ISO9001质量管理体系认证和UKAS国际质量管理体系认证；自主研发客户关系管理系统（CRM）,企业管理模式荣获北京市企业管理现代化创新成果二等奖；荣获中国消费者协会3.15标志信誉认证企业；北京市消费者协会授予 “消费者满意单位”；设立“千万元海外优秀留学生奖学金计划”，出资奖励海外优秀学子；公司高度关注慈善公益事业，多年来金吉列留学回报社会，捐款捐物累计总价值超过上千万元。公司先后获得“消费者信赖的知名品牌”、“保护消费者权益诚信服务优秀示范单位”、“质量管理先进单位”、中国消费者协会、北京市消费者协会“3.15标志服务品牌许可使用单位”、“全国商业诚信企业”、“全国青年文明号”、“奥运承诺践诺先进单位”、“全国用户满意服务明星单位”等荣誉称号，推出“十大承诺”、“金诺计划”，并在消费者协会设立了假一赔十“先行赔付基金”的出国留学服务机构。公司连续数年被新浪、网易、腾讯、百度等知名媒体评为 “年度最具综合实力教育集团”，“年度最具品牌影响力留学机构”等。"
              },
              {
                "name": "北京金吉列出入境咨询服务有限公司（简称金吉列出入境公司）隶属于金吉列出国留学咨询服务有限公司，是金吉列留学全资直营子公司。公司成立于2002 年7 月，是经公安部和国家工商行政管理总局认证备案， 由北京市公安局正式批准的中国公民因私出入境专业咨询服务机构。资质证号：京公境准字【2002】0023 号。公司是北京因私出入境中介机构协会副会长单位，是 “重信用守合同”企业。"
              },
              {
                "name": "金吉列出入境公司专业办理加拿大、美国、澳洲、新西兰、英国及欧洲各国投资移民、技术移民、杰出人才类移民、亲属团聚移民和各类签证项目。公司与美国、加拿大、澳大利亚、英国等数十个国家的政府部门、行业协会、专业机构、知名律师等建立了广泛的合作关系。凭借良好的信誉、口碑和科学严谨的管理，公司赢得了政府部门、业界同行、新闻媒体和广大客户的赞誉和好评。公司连续数年被搜狐、新浪、腾讯网站评为“十大优秀移民机构”、 “金牌移民服务机构”、“卓越移民服务机构”称号。2017年，被中央人民广播电台央广网评为“公信力海外投资服务机构”，被新浪网教育频道评为“2017年度中国品牌影响力移民机构”"
              },
              {
                "name": "大学长（北京）网络教育科技有限公司（简称大学长公司）是金吉列留学控股子公司，依托先进的互联网技术建立大学长网络智慧分享平台。通过金吉列留学在的行业的资源优势，应用先进的人工智能技术进行大数据汇集和用户画像分析，为用户提供“可信赖，全方位，高水准”的知识和智慧，以及“公平，透明，诚信，专业”的服务，使所有用户在大学长网络平台上享受到全方位、多品类的智能化智慧分享服务。"
              }
            ]
          },
        }
    }
  })
});


//user_center/help/answer的模拟数据  用于问题详情的回答
Mock.mock('/api/user_center/help/answer', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result": {
        "modelData": {
          "answerList": [
            {
              "title": "问题题目1",
              "answer": "问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1",
            },
            {
              "title": "问题题目2",
              "answer": "问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1",
            },   {
              "title": "问题题目3",
              "answer": "问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1",
            },   {
              "title": "问题题目4",
              "answer": "问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1",
            },   {
              "title": "问题题目5",
              "answer": "问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1",
            },   {
              "title": "问题题目6问题题目6问题题目6问题题目6问题题目6",
              "answer": "问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1问题的答案1",
            },
          ],
        }
      }
    }
  })
});


//user_center/data_center/total的模拟数据  用于获取访问量、粉丝数等信息
Mock.mock('/api/user_center/data_center/total', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result": {
        "modelData": {
          total_visited:18888,
          total_fan:1888,
          total_order:188,
          total_comment:18,
        }
      }
    }
  })
});


// counselor/question的模拟数据
Mock.mock('/api/counselor/question', (req, res) =>{
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":[
          {
            "isover":false,
            "statu":"悬赏中",
            "lastTime":"14:00:00",
            "backImg":"/static/images/question/pro_reward@2x.png",
            "title":"在英国留学和在美国留学的区别?",
            "userName":"张小伟",
            "isuser":true,
            "islook":true,
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "people":"345"
          },
          {
            "isover":true,
            "title":"在英国留学和在美国留学的区别?",
            "statu":"已采纳",
            "backImg":"/static/images/question/pro_dopted@2x.png",
            "userName":"张小伟",
            "isuser":false,
            "islook":false,
            "answer_islook":false,
            "user":"/static/images/question/user.png",
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别??",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
              "answer_backImg":"/static/images/question/user.png",
              "answer_userName":"王莎莎",
              "answer_data":"2018.09.09",
              "answer_text":"在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?"

          },
          {
            "isover":false,
            "statu":"悬赏中",
            "lastTime":"14:00:00",
            "backImg":"/static/images/question/pro_reward@2x.png",
            "title":"在英国留学和在美国留学的区别?",
            "userName":"张小伟",
            "isuser":true,
            "islook":false,
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "people":"345"
          },
          {
            "isover":true,
            "title":"在英国留学和在美国留学的区别?",
            "statu":"已采纳",
            "backImg":"/static/images/question/pro_dopted@2x.png",
            "userName":"张小伟",
            "isuser":true,
            "islook":true,
            "answer_islook":false,
            "user":"/static/images/question/user.png",
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别??",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "answer_backImg":"/static/images/question/user.png",
            "answer_userName":"王莎莎",
            "answer_data":"2018.09.09",
            "answer_text":"在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?"

          },
        ]
      }
    }
  })
})
// attend模拟数据
Mock.mock('/api/per-master/attend', (req, res) =>{
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":[
          {
            "backImg":"/static/images/photo-album/als.png",
            "title":"主题活动",
           "detailed":"金吉列留学背景分公司金吉列留学背景分公司金吉列留学背景分公司",
           "data":"2018年7月7日",
           "time":"14:00"
          },
          {
            "backImg":"/static/images/photo-album/als.png",
            "title":"主题活动",
           "detailed":"金吉列留学背景分公司金吉列留学背景分公司金吉列留学背景分公司",
           "data":"2018年7月7日",
           "time":"14:00"
          },
          {
            "backImg":"/static/images/photo-album/als.png",
            "title":"主题活动",
           "detailed":"金吉列留学背景分公司金吉列留学背景分公司金吉列留学背景分公司",
           "data":"2018年7月7日",
           "time":"14:00"
          },
          {
            "backImg":"/static/images/photo-album/als.png",
            "title":"主题活动",
           "detailed":"金吉列留学背景分公司金吉列留学背景分公司金吉列留学背景分公司",
           "data":"2018年7月7日",
           "time":"14:00"
          },
          {
            "backImg":"/static/images/photo-album/als.png",
            "title":"主题活动",
           "detailed":"金吉列留学背景分公司金吉列留学背景分公司金吉列留学背景分公司",
           "data":"2018年7月7日",
           "time":"14:00"
          },
          {
            "backImg":"/static/images/photo-album/als.png",
            "title":"主题活动",
           "detailed":"金吉列留学背景分公司金吉列留学背景分公司金吉列留学背景分公司",
           "data":"2018年7月7日",
           "time":"14:00"
          },
          {
            "backImg":"/static/images/photo-album/als.png",
            "title":"主题活动",
           "detailed":"金吉列留学背景分公司金吉列留学背景分公司金吉列留学背景分公司",
           "data":"2018年7月7日",
           "time":"14:00"
          },
          {
            "backImg":"/static/images/photo-album/als.png",
            "title":"主题活动",
           "detailed":"金吉列留学背景分公司金吉列留学背景分公司金吉列留学背景分公司",
           "data":"2018年7月7日",
           "time":"14:00"
          },


        ]
    }
  }
})
})



// ordinary/praise的请求数据
Mock.mock('/api/ordinary/praise', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":{
          "text":[
            {
              "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
              "img_url":"/static/images/course-public/tuijianke.png",
            },
            {
              "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
              "author_name":"赵海燕",
              "author_imgurl":"/static/images/course-public/touxiang.png",
              "img_url":"/static/images/course-public/tuijianke.png",
            },
            {
              "title":"赴美留学面签时无厘头问题，你被雷到了吗？",
              "author_name":"赵海燕",
              "author_imgurl":"/static/images/course-public/touxiang.png",
            },
          ],
          "look":[
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"公开课",
              "isline":false,
              "openNew":"course-public",
              "userImg":"/static/images/question/user.png"
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"直播课",
              "isline":true,
              "data":"2018.09.09",
              "time":"18:00",
              "openNew":"courseLive",
              "timeImg":"/static/images/photo-album/time.png",
              "userImg":"/static/images/question/user.png"
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"精品课",
              "isline":false,
              "openNew":"course-record",
              "userImg":"/static/images/question/user.png"
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"VIP课程",
              "isline":false,
              "openNew":"course-vip",
              "userImg":"/static/images/question/user.png"
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"小课程",
              "isline":false,
              "openNew":"course-short",
              "userImg":"/static/images/question/user.png"
            },
          ]
        },
      }
    }
  })
})

// ordinary/pay的请求数据

Mock.mock('/api/ordinary/pay', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":
          [

            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"直播课",
              "isline":true,
              "data":"2018.09.09",
              "time":"18:00",
              "openNew":"courseLive",
              "timeImg":"/static/images/photo-album/time.png",
              "price":"99",
              "userImg":"/static/images/question/user.png"
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"精品课",
              "isline":false,
              "openNew":"course-record",
              "price":"199",
              "userImg":"/static/images/question/user.png"
            },

            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"VIP课程",
              "isline":false,
              "openNew":"course-vip",
              "price":"299",
              "userImg":"/static/images/question/user.png"
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"小课程",
              "isline":false,
              "openNew":"course-short",
              "price":"59",
              "userImg":"/static/images/question/user.png"
            },

          ]
      }
    }
  })
})
//ordinary/question的请求数据
Mock.mock('/api/ordinary/question', (req, res) =>{
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":[
          {
            "isover":false,
            "statu":"悬赏中",
            "lastTime":"14:00:00",
            "backImg":"/static/images/question/pro_reward@2x.png",
            "title":"在英国留学和在美国留学的区别?",
            "userName":"张小伟",
            "isuser":true,
            "islook":true,
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "people":"345"
          },
          {
            "isover":true,
            "title":"在英国留学和在美国留学的区别?",
            "statu":"已采纳",
            "backImg":"/static/images/question/pro_dopted@2x.png",
            "userName":"张小伟",
            "isuser":false,
            "islook":false,
            "answer_islook":false,
            "user":"/static/images/question/user.png",
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别??",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "answer_backImg":"/static/images/question/user.png",
            "answer_userName":"王莎莎",
            "answer_data":"2018.09.09",
            "answer_text":"在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?"

          },
          {
            "isover":false,
            "statu":"悬赏中",
            "lastTime":"14:00:00",
            "backImg":"/static/images/question/pro_reward@2x.png",
            "title":"在英国留学和在美国留学的区别?",
            "userName":"张小伟",
            "isuser":true,
            "islook":false,
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "people":"345"
          },
          {
            "isover":true,
            "title":"在英国留学和在美国留学的区别?",
            "statu":"已采纳",
            "backImg":"/static/images/question/pro_dopted@2x.png",
            "userName":"张小伟",
            "isuser":true,
            "islook":true,
            "answer_islook":false,
            "user":"/static/images/question/user.png",
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别??",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "answer_backImg":"/static/images/question/user.png",
            "answer_userName":"王莎莎",
            "answer_data":"2018.09.09",
            "answer_text":"在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?"

          },
        ]
      }
    }
  })
})
// /organ/master的请求数据
Mock.mock('/api/organ/master', (req, res) => {
  return Mock.mock({
    "_DATA_":{
      "success": true,
      "result":{
        "modelData":[
          {
            "img_url":"/static/images/counselordemo.jpg",
            "author_name":"刘言",
            "label":"托福英语大咖",
            "number":"123456",

          "isuser":true

          },
          {
            "img_url":"/static/images/counselordemo.jpg",
            "author_name":"刘言",
            "label":"雅思大咖",
            "number":"123456",
            "isuser":true

          },{
            "img_url":"/static/images/counselordemo.jpg",
            "author_name":"刘言",
            "label":"托福英语大咖",
            "number":"123456",
            "isuser":false

          },
          {
            "img_url":"/static/images/counselordemo.jpg",
            "author_name":"刘言",
            "label":"雅思大咖",
            "number":"123456",
            "isuser":true

          },
          {
            "img_url":"/static/images/counselordemo.jpg",
            "author_name":"刘言",
            "label":"托福英语大咖",
            "number":"123456",
            "isuser":true

          },
          {
            "img_url":"/static/images/counselordemo.jpg",
            "author_name":"刘言",
            "label":"雅思大咖",
            "number":"123456",
            "isuser":true

          },


        ],

      }
    }
  })
})

// organ/more/curriculum的请求数据

Mock.mock('/api/organ/more/curriculum', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":
          [

            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"直播课",
              "isline":true,
              "data":"2018.09.09",
              "time":"18:00",
              "openNew":"courseLive",
              "timeImg":"/static/images/photo-album/time.png",
              "islook":false
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"精品课",
              "isline":false,
              "openNew":"course-record",
              "islook":true
            },

            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"VIP课程",
              "isline":false,
              "openNew":"course-vip",
              "islook":false
            },
            {
              "backImg":"/static/images/photo-album/recommend_img@2x.png",
              "className":"小课程",
              "isline":false,
              "openNew":"course-short",
              "islook":true
            },

          ]
      }
    }
  })
})
// organ/language的请求数据

Mock.mock('/api/organ/language', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":
          {
            "language":[
                    {
                      "backImg":"/static/images/photo-album/recommend_img@2x.png",
                      "className":"公开课",
                      "isline":false,

                      "isuser":true

                    },

                    {
                      "backImg":"/static/images/photo-album/recommend_img@2x.png",
                      "className":"直播课",
                      "isline":true,
                      "data":"2018.09.09",
                      "time":"18:00",

                      "timeImg":"/static/images/photo-album/time.png",
                      "price":"199",
                      "isuser":true

                    },
                    {
                      "backImg":"/static/images/photo-album/recommend_img@2x.png",
                      "className":"精品课",
                      "isline":false,
                      "isuser":true
                    },

                    {
                      "backImg":"/static/images/photo-album/recommend_img@2x.png",
                      "className":"VIP课程",
                      "isline":false,
                      "isvip":true,
                      "isuser":false

                    },
                    {
                      "backImg":"/static/images/photo-album/recommend_img@2x.png",
                      "className":"小课程",
                      "isline":false,
                      "openNew":"course-short",
                      "isuser":true

                    },
                  ],
              "class1v1":[
            {
              "userImg":"/static/images/question/user.png",
              "title":"小王教你快速提高口语",
              "userName":"张小伟",
              "lable":"资深英语实战人士,英文撰稿人",
              "price":"1999.9",
              "peopleNum":"2,000",
              "isuser":true,
              "isBuy":false
            },

          ],
        }


      }
    }
  })
})


// organ/wikipedia的请求数据

Mock.mock('/api/organ/wikipedia', (req, res) => {
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":
          [
            {
              "title":"百科大标题",
             "s_title":"小标题小标题",
             "text":"我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容",
             "backImg":"/static/images/photo-album/recommend_img@2x.png",

            },
            {
              "title":"百科大标题",
             "s_title":"小标题小标题",
             "text":"我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容",
             "backImg":"/static/images/photo-album/recommend_img@2x.png",

            },
            {
              "title":"百科大标题",
             "s_title":"小标题小标题",
             "text":"我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容",
             "backImg":"/static/images/photo-album/recommend_img@2x.png",

            },
            {
              "title":"百科大标题",
             "s_title":"小标题小标题",
             "text":"我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容",
             "backImg":"/static/images/photo-album/recommend_img@2x.png",

            },

            {
              "title":"百科大标题",
             "s_title":"小标题小标题",
             "text":"我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容",
             "backImg":"/static/images/photo-album/recommend_img@2x.png",

            },
          ]


      }
    }
  })
})
//user_center/data_center/data的模拟数据  用于获取访问量、粉丝等增加信息(用于7天的测试)
Mock.mock('/api/user_center/data_center/data_seven', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result": {
        "modelData": {
          rows: [
            { 'date': '2018-05-22', 'increase': 1},
            { 'date': '2018-05-23', 'increase': 2},
            { 'date': '2018-05-24', 'increase': 0},
            { 'date': '2018-05-25', 'increase': 0},
            { 'date': '2018-05-26', 'increase': 1},
            { 'date': '2018-05-27', 'increase': 1},
            { 'date': '2018-05-28', 'increase': 2},
          ]
        }
      }
    }
  })
});

//user_center/data_center/data的模拟数据  用于获取访问量、粉丝等增加信息(用于30天的测试)
Mock.mock('/api/user_center/data_center/data_month', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result": {
        "modelData": {
          rows: [
            { 'date': '2018-05-22', 'increase': 1},
            { 'date': '2018-05-23', 'increase': 2},
            { 'date': '2018-05-24', 'increase': 5},
            { 'date': '2018-05-25', 'increase': 0},
            { 'date': '2018-05-26', 'increase': 1},
            { 'date': '2018-05-27', 'increase': 1},
            { 'date': '2018-05-28', 'increase': 2},
            { 'date': '2018-05-29', 'increase': 1},
            { 'date': '2018-05-30', 'increase': 2},
            { 'date': '2018-05-31', 'increase': 0},
            { 'date': '2018-06-01', 'increase': 0},
            { 'date': '2018-06-02', 'increase': 1},
            { 'date': '2018-06-03', 'increase': 1},
            { 'date': '2018-06-04', 'increase': 2},
            { 'date': '2018-06-05', 'increase': 1},
            { 'date': '2018-06-06', 'increase': 2},
            { 'date': '2018-06-07', 'increase': 0},
            { 'date': '2018-06-08', 'increase': 0},
            { 'date': '2018-06-09', 'increase': 1},
            { 'date': '2018-06-10', 'increase': 1},
            { 'date': '2018-06-11', 'increase': 2},
            { 'date': '2018-06-12', 'increase': 1},
            { 'date': '2018-06-13', 'increase': 2},
            { 'date': '2018-06-14', 'increase': 0},
            { 'date': '2018-06-15', 'increase': 0},
            { 'date': '2018-06-16', 'increase': 1},
            { 'date': '2018-06-17', 'increase': 1},
            { 'date': '2018-06-18', 'increase': 2},
            { 'date': '2018-06-19', 'increase': 1},
            { 'date': '2018-06-20', 'increase': 2},
          ]
        }
      }
    }
  })
});



//user_center/data_center/hot-word的模拟数据  热词
Mock.mock('/api/user_center/hot-word', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result": {
        "modelData": {
        words:[
          {name: 'Sam',value: 1000,},
          {name: '留学', value: 6181, },
          { name: '培训', value: 4386, },
          {name: '托福',value: 4055,  },
          { name: '雅思',value: 2244, },
          {  name: '雅思课程', value: 1898, },
          { name: '考试',  value: 1484, },
          {  name: '雅思课程',  value: 1112, },
          { name: '雅思课程',value: 847,},
          { name: '雅思课程', value: 582, },
          { name: '托福课程', value: 555, },
          {  name: '托福课程',  value: 550, },
          { name: '托福课程', value: 462, },
          {  name: 'Farrah',  value: 366, },
          { name: 'Rita',  value: 360, },
          {  name: 'Serena',   value: 282,  },
          { name: 'NCAA',value: 273, },
          { name: '雅思课程', value: 965,},
          { name: 'Point',  value: 265, },
          { name: '留学',  value: 6181, },
          { name: '培训',  value: 4386, },
          { name: '托福',  value: 4055, },
          {  name: '雅思', value: 2244, },
          { name: '雅思课程', value: 1898, },
          { name: '考试', value: 1484, },
          { name: '雅思课程',  value: 1112, },
          { name: '雅思课程',  value: 965, },
          { name: '雅思课程', value: 847, },
          { name: '雅思课程', value: 582, },
          { name: '托福课程',  value: 555, },
          {  name: '留学',   value: 6181, },
          { name: '培训', value: 4386, },
          {  name: '托福',  value: 4055, },
          {  name: '雅思',  value: 2244, },
          {  name: '雅思课程',  value: 1898, },
          {  name: '考试', value: 1484,},
          {  name: '雅思课程',   value: 1112,  },
          {  name: '雅思课程',  value: 965, },
          {  name: '雅思课程', value: 847, },
          { name: '雅思课程',  value: 582, },
          { name: '托福课程',  value: 555, },
          ]
        }
      }
      }
    })
});




///api/user_center/lecturer/preferential的模拟数据  优惠活动的活动列表
Mock.mock('/api/user_center/lecturer/preferential', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result": {
        "modelData": {
          courses:[
            {money:199.99,title:'2小时学会填写常青藤网申1'},
            {money:199.99,title:'2小时学会填写常青藤网申2'},
            {money:199.99,title:'2小时学会填写常青藤网申3'},
            {money:199.99,title:'2小时学会填写常青藤网申4'},
            {money:199.99,title:'2小时学会填写常青藤网申5'},
            {money:199.99,title:'2小时学会填写常青藤网申6'},
          ]
        }
      }
    }
  })
});



// lecturer/question的模拟数据
Mock.mock('/api/lecturer/question', (req, res) =>{
  return Mock.mock({
    "_DATA_": {
      "success":true,
      "result":{
        "modelData":[
          {
            "isover":false,
            "statu":"悬赏中",
            "lastTime":"14:00:00",
            "backImg":"/static/images/question/pro_reward@2x.png",
            "title":"在英国留学和在美国留学的区别?",
            "userName":"张小伟",
            "isuser":true,
            "islook":true,
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "people":"345"
          },
          {
            "isover":true,
            "title":"在英国留学和在美国留学的区别?",
            "statu":"已采纳",
            "backImg":"/static/images/question/pro_dopted@2x.png",
            "userName":"张小伟",
            "isuser":false,
            "islook":false,
            "answer_islook":false,
            "user":"/static/images/question/user.png",
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别??",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "answer_backImg":"/static/images/question/user.png",
            "answer_userName":"王莎莎",
            "answer_data":"2018.09.09",
            "answer_text":"在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?"

          },
          {
            "isover":false,
            "statu":"悬赏中",
            "lastTime":"14:00:00",
            "backImg":"/static/images/question/pro_reward@2x.png",
            "title":"在英国留学和在美国留学的区别?",
            "userName":"张小伟",
            "isuser":true,
            "islook":false,
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "people":"345"
          },
          {
            "isover":true,
            "title":"在英国留学和在美国留学的区别?",
            "statu":"已采纳",
            "backImg":"/static/images/question/pro_dopted@2x.png",
            "userName":"张小伟",
            "isuser":true,
            "islook":true,
            "answer_islook":false,
            "user":"/static/images/question/user.png",
            "question":"在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别?在英国留学和在美国留学的区别??",
            "lable":[
              {
                "lablename":"英国",
              },
              {
                "lablename":"留学",
              },
              {
                "lablename":"美国",
              }
            ],
            "answer_backImg":"/static/images/question/user.png",
            "answer_userName":"王莎莎",
            "answer_data":"2018.09.09",
            "answer_text":"在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?在英国留学和美国留学的区别?"

          },
        ]
      }
    }
  })
})
///api/counselor/ta-shop/abroad_service的模拟数据   留学服务的咨询列表
Mock.mock('/api/counselor/ta-shop/abroad_service', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result": {
        "modelData": {
          abroadList:[
            {
              money:"29,999",
              title:'美国留学咨询服务1',
              name:"张小伟",
              head_portrait:"http://imgtu.5011.net/uploads/content/20170515/6642891494836057.jpg",
              picture:"http://t2.hddhhn.com/uploads/tu/201612/98/st93.png",
              describe:"服务推荐描述"
            },
            {
              money:"29,999",
              title:'美国留学咨询服务2美国留学咨询服务2',
              name:"张小伟",
              head_portrait:"http://imgtu.5011.net/uploads/content/20170515/6642891494836057.jpg",
              picture:"http://t2.hddhhn.com/uploads/tu/201612/98/st93.png",
              describe:"服务推荐描述"
            },
            {
              money:"29,999",
              title:'美国留学咨询服务3',
              name:"张小伟",
              head_portrait:"http://imgtu.5011.net/uploads/content/20170515/6642891494836057.jpg",
              picture:"http://t2.hddhhn.com/uploads/tu/201612/98/st93.png",
              describe:"服务推荐描述"
            },
            {
              money:"29,999",
              title:'美国留学咨询服务4',
              name:"张小伟",
              head_portrait:"http://imgtu.5011.net/uploads/content/20170515/6642891494836057.jpg",
              picture:"http://t2.hddhhn.com/uploads/tu/201612/98/st93.png",
              describe:"服务推荐描述"
            },
            {
              money:"29,999",
              title:'美国留学咨询服务5',
              name:"张小伟",
              head_portrait:"http://imgtu.5011.net/uploads/content/20170515/6642891494836057.jpg",
              picture:"http://t2.hddhhn.com/uploads/tu/201612/98/st93.png",
              describe:"服务推荐描述"
            },
          ]
        }
      }
    }
  })
});





//api/abroad_serve/question的模拟数据   留学常见问题列表
Mock.mock('/api/abroad_serve/question', (req, res) =>{
  return Mock.mock({
    "success":true,
    "_DATA_": {
      "result": {
        "modelData": {
          questionList:[
            {
              question:"金吉列提供留学服务有什么优势？",
              answer:'问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案',
            },
            {
              question:"问题问题问题问题问题问题问题问题问题问题问题问题？",
              answer:'问题的答案问题的答案问题的答问题的答案问题的答案问题的答案问题的答案问题的答案问题的案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案',
            },
            {
              question:"问题问题问题问题？",
              answer:'问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案',
            },
            {
              question:"问题问题？",
              answer:'问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案问题的答案',
            },
            {
              question:"问题问题问题问题问题问题问题问题？",
              answer:'问题答案',
            },
            {
              question:"问题问题问题问题问题问题问题问题？",
              answer:'问题的答案问题的答案问题的答案问题的答的答案问题的答案问题的答案问题的答案问题的答案',
            },
            {
              question:"问题问题问题问题？",
              answer:'问题的答案问题答案问题的答案',
            },
          ]
        }
      }
    }
  })
});
