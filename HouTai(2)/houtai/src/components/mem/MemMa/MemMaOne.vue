<template>
  <div>
    <div class="mm_title">
      <div class="mm_title_left">
        <a href="#">
          <i class="iconfont icon-dashboard"></i>
          控制台
        </a>
      </div>
      <div class="mm_title_right">
        <a href="#">
          会员管理
        </a>
        <a href="#" class="mm_title_right_xie">
          会员管理
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MemMaOne"
    }
</script>

<style scoped>
  .iconfont{
    font-size:12px;
  }
  .mm_title a{
    color: #777 ;
  }
  .mm_title{
    overflow: hidden;
    padding: 15px 15px 0 15px;
    position: relative;
  }
  .mm_title_left{
    float:left;
  }
  .mm_title_right{
    float:right;
  }
  .mm_title_right_xie::before{
    content: "/";
    padding: 0 5px;
    color: #ccc;
  }
</style>
