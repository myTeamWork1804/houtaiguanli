<template>
  <div>
    <div class="qh_title">
      <div class="qh_title_left">
        <a href="#">
          <i class="iconfont icon-dashboard"></i>
          控制台
        </a>
      </div>
      <div class="qh_title_right">
        <a href="#">
          CMS管理
        </a>
        <a href="#" class="qh_title_right_xie">
          自定义表单管理
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "QhCustomOne"
    }
</script>

<style scoped>
  .qh_title a{
    color: #777 ;
  }
  .qh_title{
    overflow: hidden;
    padding: 15px 15px 0 15px;
    position: relative;
  }
  .qh_title_left{
    float:left;
  }
  .qh_title_right{
    float:right;
  }
  .qh_title_right_xie::before{
    content: "/";
    padding: 0 5px;
    color: #ccc;
  }
  .iconfont{
    font-size:12px;
  }
</style>
