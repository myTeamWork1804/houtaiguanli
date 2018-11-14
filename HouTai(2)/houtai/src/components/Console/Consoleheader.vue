<template>
    <div class="title-content">
    <span class="D-title">
      <i class="iconfont icon-dashboard"></i>
      控制台
    </span>
      <span class="D-text">控制台</span>
    </div>
</template>

<script>
    export default {
        name: "Console-header"
    }
</script>

<style scoped>

  i.icon-toggle{
    display: block;
    width: 45px;
    height: 50px;
    font-size: 10px;
    color: #fff;
    text-align: center;
    line-height: 50px;
  }

  .title-content{
    height:16px;
    font-size: 14px;
    color: #777777;
    padding:0 15px;
  }
  .D-title{
    float: left;
  }
  .D-text{
    float: right;
  }
</style>
