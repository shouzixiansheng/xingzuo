<template>
  <section class="year-title">
    <h2>每日推荐</h2>
   <div class="guanggao"></div>
  </section>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'foot',

  }
</script>
<style lang='less' scoped type="text/less" rel="stylesheet/less">
.year-title{
  width: 6.8rem;
  margin: auto;
  padding:0.3rem 0.2rem;
  border-radius: 10px;
  background-color: white;
  -webkit-box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
  h2{
    background-repeat: no-repeat;
    padding-left: 0.6rem;
    line-height: 24px;
    margin-bottom: 0.28rem;
    font-size: 14px;
    color: #5c5c5c;
    background-image:url('../img/今日运势.png') ;
  }
  .guanggao{
    width: 100%;
    height: 1.5rem;
    background: url('../img/guanggao.jpg') center center/cover no-repeat ;
    border-radius: 10px;
  }
}
</style>
