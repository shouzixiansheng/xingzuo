<template>
  <VuePullRefresh :on-refresh="onRefresh" pull-height="50px">
    <article class="box">
      <figure class='cut'><img src="img/back.png" alt="" @click="back"></figure>
      <h1>星座伴侣</h1>
      <figure class='title'>
        <img src="img/tuceng4.png" alt="">
        <h2>{{today.name}}</h2>
        <span>3.21-4.19</span>
      </figure>
      <ul class='table'>
        <li v-for="(item ,index) in timeArr" :key="index" @click="toSwiper(index)"><span :class="inDex==index?'red':''">{{item}}</span>
        </li>
      </ul>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <!-- 今日 -->
          <main class='today' >
            <!-- 综合指数 -->
            <ul class="composite-index" v-if="today.all">
              <li><span>综合指数：</span>
                <start :score="today.all" ></start>
              </li>
              <li><span>健康指数：</span>
                <start :score="today.health"></start>
              </li>
              <li><span>爱情指数：</span>
                <start :score="today.love"></start>
              </li>
              <li><span>财运指数：</span>
                <start :score="today.money"></start>
              </li>
              <li><span>工作指数：</span>
                <start :score="today.work"></start>
              </li>
              <li><span>速配星座：</span><span>{{today.QFriend}}</span></li>
              <li><span>幸运颜色：</span><span>{{today.color}}</span></li>
              <li><span>幸运数字：</span><span>{{today.number}}</span></li>
            </ul>
            <section class="year-title" v-if="today.summary">
              <h2>今日概述</h2>
              <span>{{today.summary}}</span>
            </section>
            <!--没有？？？-->
            <div class="year-main">
              <ul>
                <li>
                  <h2>综合运势</h2>
                  <span>开始新年新的工作，不要继续沉浸在节日的欢乐当中，感觉回归吧！一天都不算太忙，现在只是工作的准备阶段。爱情是需要争取的，空想而不行动也是徒劳的。有获得赚钱的好机会，若能抓住必有收获。</span>
                </li>
              </ul>
            </div>
          </main>
          <foot></foot>
        </swiper-slide>
        <!-- 明日 -->
        <swiper-slide>
          <main class='tomorrow'>
            <ul class="composite-index">
              <li><span>综合指数：</span>
                <start :score="tomorrow.all"></start>
              </li>
              <li><span>健康指数：</span>
                <start :score="tomorrow.health"></start>
              </li>
              <li><span>爱情指数：</span>
                <start :score="tomorrow.love"></start>
              </li>
              <li><span>财运指数：</span>
                <start :score="tomorrow.money"></start>
              </li>
              <li><span>工作指数：</span>
                <start :score="tomorrow.work"></start> </li>
              <li><span>速配星座：</span><span>{{tomorrow.QFriend}}</span></li>
              <li><span>幸运颜色：</span><span>{{tomorrow.color}}</span></li>
              <li><span>幸运数字：</span><span>{{tomorrow.number}}</span></li>
            </ul>
            <section class="year-title" v-if="tomorrow.summary">
              <h2>今日概述</h2>
              <span>{{tomorrow.summary}}</span>
            </section>
            <!--存在？？-->
            <div class="year-main">
              <ul>
                <li>
                  <h2>综合运势</h2>
                  <span>开始新年新的工作，不要继续沉浸在节日的欢乐当中，感觉回归吧！一天都不算太忙，现在只是工作的准备阶段。爱情是需要争取的，空想而不行动也是徒劳的。有获得赚钱的好机会，若能抓住必有收获。</span>
                </li>
              </ul>
            </div>
          </main>
          <foot></foot>
        </swiper-slide>
        <!-- 本周 -->
        <swiper-slide>
          <main class='week'>
            <div class="year-main" v-if="week">
              <ul>
                <li>
                  <h2>健康</h2>
                  <span>{{week.health}}</span>
                </li>
                <li>
                  <h2>求职</h2>
                  <span>{{week.work}}</span>
                </li>
                <li>
                  <h2>恋情</h2>
                  <span>{{week.love}}</span>
                </li>
                <li>
                  <h2>财运</h2>
                  <span>{{week.money}}</span>
                </li>
                <li>
                  <h2>工作</h2>
                  <span>{{week.work}}</span>
                </li>
              </ul>
            </div>
          </main>
          <foot></foot>
        </swiper-slide>
        <!-- 下周 -->
        <swiper-slide>
          <main class='nextweek'>
            <div class="year-main">
              <ul>
                <li>
                  <h2>健康</h2>
                  <span>{{week.health}}</span>
                </li>
                <li>
                  <h2>求职</h2>
                  <span>{{week.work}}</span>
                </li>
                <li>
                  <h2>恋情</h2>
                  <span>{{week.love}}</span>
                </li>
                <li>
                  <h2>财运</h2>
                  <span>{{week.money}}</span>
                </li>
                <li>
                  <h2>工作</h2>
                  <span>{{week.work}}</span>
                </li>
              </ul>
            </div>
          </main>
          <foot></foot>
        </swiper-slide>
        <!-- 本月 -->
        <swiper-slide>
          <main class='monthmain'>
            <section class="year-title">
              <h2>综合运势</h2>
              <span>{{month.all}}</span>
            </section>
            <div class="year-main">
              <ul>
                <li>
                  <h2>健康运势</h2>
                  <span>{{month.health}}</span>
                </li>
                <li>
                  <h2>爱情运势</h2>
                  <span>{{month.love}}</span>
                </li>
                <li>
                  <h2>财运运势</h2>
                  <span>{{month.money}}</span>
                </li>
                <li>
                  <h2>工作运势</h2>
                  <span>{{month.work}}</span>
                </li>
              </ul>
            </div>
          </main>
          <foot></foot>
        </swiper-slide>
        <!-- 本年 -->
        <swiper-slide>
          <main class='month'>
            <section class="year-title" v-if="year.mima">
              <h2>年度密码</h2>
              <span>{{year.mima.info}}</span>
              <h2>年度说明</h2>
              <span>{{year.mima.text}}</span>
            </section>
            <div class="year-main">
              <ul>
                <li>
                  <h2>事业运</h2>
                  <span>{{year.career}}</span>
                </li>
                <li>
                  <h2>爱情运</h2>
                  <span>{{year.love}}</span>
                </li>
                <li>
                  <h2>财运</h2>
                  <span>{{year.finance}}</span>
                </li>
                <li>
                  <h2>工作运势</h2>
                  <span>{{year.health}}</span>
                </li>
              </ul>
            </div>
          </main>
          <foot></foot>
        </swiper-slide>
      </swiper>
      </div>
    </article>
  </VuePullRefresh>
</template>
<script>
  import foot from './foot.vue'
  import start from './start.vue'
  import VuePullRefresh from 'vue-pull-refresh';
  // @ is an alias to /src
  export default {
    name: 'detail',
    components: {
      foot,
      VuePullRefresh,
      start
    },
    data () {
      return {
        timeArr: ['今日', '明日', '本周', '下周', '本月', '本年'],
        today: {},
        tomorrow: {},
        week: {},
        nextweek: {},
        month: {},
        year: {},
        name: '',
        time: 'today',
        inDex: 0,
        swiperOption: {
          on: {
            slideChange: ()=> {
              let swiper = this.$refs.mySwiper.swiper;
              let i = swiper.activeIndex;
              this.inDex = i
            }
          }
        }
      }
    },
    created () {
      this.name = this.$route.params.name
      this.setData('today',(val)=>{
         this.today=val
      })
      this.setData('tomorrow',(val)=>{
        this.tomorrow=val
      })
      this.setData('week',(val)=>{
        this.week=val
      })
      this.setData('nextweek',(val)=>{
        this.nextweek=val
      })
      this.setData('month',(val)=>{
        this.month=val
      })
      this.setData('year',(val)=>{
        this.year=val
      })
    },
    methods: {
//      轮播
      toSwiper (index) {
        this.$refs.mySwiper.swiper.slideTo(index, 500, false)
      },
//      返回按钮
      back () {
        this.$router.back()
      },
//      下拉刷新
      onRefresh () {

      },
      setData (time,res){
        fetch(`http://web.juhe.cn:8080/constellation/getAll?consName=${this.$route.query.name}&type=${time}&key=${process.env.VUE_APP_KEY}`)
          .then((response) => response.json())
          .then((json) => {
              res(json)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    computed: {
      getIndex () {
        return this.$refs.mySwiper.swiper.activeIndex
      }
    }
  }
</script>
<style lang='less' type="text/less" rel="stylesheet/less">
  .red {
    color: red !important;
  }

  .box {
    touch-action: none;
  }

  body {
    overflow-X: hidden;
  }

  article {
    background-image: url(../img/bg.png);
    background-size: contain;
    background-repeat: no-repeat;
    h1 {
      text-align: center;
      color: white;
      font-size: 18px;
    }
    h2 {
      font-size: 14px;
      color: #5c5c5c;
    }
    span {
      line-height: 0.3rem;
      font-size: 12px;
      color: #747674;
    }
    .cut {
      transform: translate(0.1rem, 0.6rem);
    }
    .title {
      margin-top: .6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 1.1rem;
      }
      span {
        margin-top: 0.1rem;
      }
    }
    .table {
      display: flex;
      justify-content: space-around;
      span {
        border: 1px solid transparent;
        line-height: 50px;
      }
      .chagespan {
        color: #b73ed6;
        border-bottom-color: #b73ed6;
      }
    }
    main {
      font-size: 12px;
      padding-top: 0.2rem;
      padding-bottom: 0.3rem;
      .year-title, .year-main, .composite-index {
        width: 6.8rem;
        margin:0.3rem auto 0;
        padding-left: 0.2rem;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
      }
      .year-title {
        margin-top: 0.425rem;
        padding-top: 0.425rem;
        padding-bottom: 0.3rem;
        margin-bottom: 0.3rem;
        h2 {
          padding-left: 0.6rem;
        }
        span {
          display: inline-block;
          margin-left: 0.6rem;
          margin-right: 0.4rem;
        }
        & > h2:first-child {
          background-image: url(../img/mima.png);
          background-repeat: no-repeat;
          line-height: 24px;
        }
        h2:nth-of-type(2) {
          margin-top: 0.34rem;
          font-size: 13px;
          margin-bottom: 0.17rem;
        }
        span:nth-of-type(2) {
          font-size: 11px;
        }
      }
      .year-main {
        padding-top: 0.445rem;
        h2 {
          background-repeat: no-repeat;
          padding-left: 0.6rem;
          line-height: 24px;
          margin-bottom: 0.28rem;

        }
        span {
          margin-bottom: 0.69rem;
          display: inline-block;
          margin-left: 0.6rem;
          margin-right: 0.5rem;
        }
        li:first-child h2 {
          background-image: url(../img/gongzuo.png);
        }
        li:nth-of-type(2) h2 {
          background-image: url(../img/aiqingyun.png);
        }
        li:nth-of-type(3) h2 {
          background-image: url(../img/yunshi.png)
        }
        li:nth-of-type(4) h2 {
          background-image: url(../img/gongzuo.png)
        }
      }
    }
    footer {
      height: 1.3rem;
      position: fixed;
      bottom: 0;
      background-color: white;
      width: 100%;
      z-index: 10000;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          display: flex;
          flex-direction: column;
          position: relative;
          &:hover {
            &:before {
              background-color: white;
              box-shadow: 0px 8px 18px #fff1ff;
            }
          }
          &:before {
            content: "";
            display: inline-block;
            position: absolute;
            width: 1rem;
            height: 1rem;
            z-index: -1;
            border-radius: 50%;
            left: -46%;
            bottom: -13%;
          }
        }
      }
    }
  }

  // 本月
  .monthmain {
    .year-title {
      h2 {
        background-image: url(../img/yunshi.png);
      }
    }
    .year-main {
      li:first-child h2 {
        background-image: url(../img/jiankang.png);
      }
      li:nth-of-type(2) h2 {
        background-image: url(../img/caiyun.png);
      }
      li:nth-of-type(3) h2 {
        background-image: url(../img/aiqingyun.png)
      }
    }
  }

  // 下周
  .nextweek, .week {
    .year-main {
      li:first-child h2 {
        background-image: url(../img/jiankang.png);
      }
      li:nth-of-type(2) h2 {
        background-image: url(../img/qiuzhi.png);
      }
      li:nth-of-type(3) h2 {
        background-image: url(../img/aiqingyun.png)
      }
      li:nth-of-type(4) h2 {
        background-image: url(../img/caiyun.png);
      }
      li:nth-of-type(5) h2 {
        background-image: url(../img/gongzuo.png);
      }
    }
  }

  // 本周
  .tomorrow, .today {
    .composite-index {
      display: flex;
      flex-wrap: wrap;
      background-color: white;
      padding-top: 0.2rem;
      li {
        width: 48%;
        margin-bottom: 0.2rem;
        display: flex;
      }
    }
    span {
      font-size: 9px;
    }
    .year-main, .year-title {
      span {
        margin-left: 0.1rem;
      }
    }
    .year-title h2 {
      margin-bottom: 0.28rem;
    }
    .year-main {
      padding-bottom: 0.4rem;
    }
  }
</style>
