<template>
  <VuePullRefresh :on-refresh="onRefresh" pull-height="50px">
    <div class="bg">
      <h2>选择星座</h2>
      <div class="box">
        <ul class="sox">
          <li v-for="(item , index) in dataList" :key="index" @click="toDetail(item.name)">
            <img :src="'img/'+item.id+'.png'" alt="">
            <p>{{item.name}}</p>
            <p>{{item.ename}}</p>
            <p>({{item.month}})</p>
          </li>
        </ul>
        <div class="bottom">
          <span class="iconfont l_font">&#xe6f0;</span>
        </div>
      </div>
      <!--没有网络是提示-->
      <transition name="fade">
        <div class="line" v-if="onLine">
          无网络
        </div>
      </transition>
    </div>
  </VuePullRefresh>
</template>
<script>
  import VuePullRefresh from 'vue-pull-refresh';
  // @ is an alias to /src
  export default {
    name: 'home',
    data () {
      return {
        dataList: [],
        onLine: false
      }
    },
    components: {
      VuePullRefresh
    },
    methods: {
      toDetail (val) {
        if (navigator.onLine) {
          this.$router.push({name: 'detail', query: {name: val}})
        } else {
          this.onLine = true
          setTimeout(() => {
            this.onLine = false
        },500)
        }
      },
      //      下拉刷新
      onRefresh () {
      }
    },
    created () {
      fetch('data/star.json')
        .then(response => response.json())
        .then(data => {
          // data就是我们请求的repos
          this.dataList = data
        });
    }
  }
</script>
<style lang='less' scoped type="text/less" rel="stylesheet/less">
  .l_font {
    font-size: 30px;
    color: white;
  }

  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .bg {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: block;
    background: linear-gradient(#9a54e5 10%, #7a23ed 25%, #7a23ed 75%, #9a54e5 90%);
  }

  h2 {
    color: #fefefe;
    font-size: 0.34rem;
    text-align: center;
    display: block;
    padding-top: 0.54rem;
  }

  .box {
    position: absolute;
    top: 1.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .sox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .sox li {
    width: 1.6rem;
    text-align: center;
  }

  .sox li:nth-of-type(3n-1) {
    margin-right: 0.94rem;
    margin-left: 0.94rem;
  }

  .sox img {
    width: 1.2rem;
    height: 1.2rem;
  }

  p {
    text-decoration: none;
    color: #fefefe;
    font-size: 0.12rem;
    text-align: center;
  }

  li > :first-child + p {
    margin-top: 0.09rem;
    margin-bottom: 0.01rem;
  }

  li > p:last-child {
    margin: 0.03rem 0 0.17rem 0;
  }

  .bottom {
    flex: 0;
    height: 2rem;
    text-align: center;
    line-height: 1rem;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: 0.5s;
  }

  .line {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -50px;
    width: 100px;
    height: 50px;
    color: white;
    background: rgba(0, 0, 0, .5);
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-family: Algerian;
  }
</style>
