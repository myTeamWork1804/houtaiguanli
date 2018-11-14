<template>
  <div class="Switchover">
    <div class="D-data-box">
      <div class="D-text-box1">
        这里是你的自定义数据
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ConsoleBlank"
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

  .Switchover{
    padding:15px;
    background:#ffffff;
  }
  .D-data-box{
    width:100%;
    overflow: hidden;
  }
  .D-text-box1{
    font-size: 14px;
    color: #cccccc;
    padding:0 15px;
  }
</style>
