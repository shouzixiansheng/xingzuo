<template>
  <div>
    <div class="start" v-for="item in arrStart" :class="item"></div>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'foot',
    data () {
      return {
        arrStart: []
      }
    },
    props:{
      score:{
        default: '50%'
      }
    },
    created () {
      console.log(this.score);
      let num = 5;
      let score = Number(this.score.replace('%', '') / 20)
      let Ins = Math.floor(score)
      let float = score - Ins
      for (let i = 0; i < Ins; i++) {
        this.arrStart.push('on')
      }
      if (float >= 0.5) {
        this.arrStart.push('of')
      }
      while (this.arrStart.length < 5) {
        this.arrStart.push('off')
      }
    }
  }
</script>
<style lang='less' scoped type="text/less" rel="stylesheet/less">
  .start {
    float: left;
    width: 0.3rem;
    height: 0.3rem;
    background: url('../img/off.png') no-repeat center/cover;
  }

  .on {
    background-image: url('../img/on.png');
  }

  .of {
    background-image: url('../img/of.png');
  }

  .off {
    background-image: url('../img/off.png');
  }
</style>
