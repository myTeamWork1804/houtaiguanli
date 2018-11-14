<template>

  <div class="qh_content_box">
    <div class="qh_content_sub">
        <qh-manage-content-three></qh-manage-content-three>
        <qh-manage-content-four></qh-manage-content-four>
        <qh-manage-content-five></qh-manage-content-five>
    </div>
  </div>
</template>

<script>
  import QhManageContentThree from "./QhManageContentThree"
  import QhManageContentFour from "./QhManageContentFour"
  import QhManageContentFive from "./QhManageContentFive"
    export default {
        name: "QhManageContent",
      components:{
        QhManageContentThree,
      QhManageContentFour,
        QhManageContentFive
      }
    }
</script>

<style scoped>
  .qh_content_box{
    padding-left:15px;
    width: 75%;
    float:left;
  }
  .qh_content_box::after{
    content:'';
    height:0;
    display: block;
    clear: both;
    visibility: hidden;
    overflow: hidden;
  }
  .qh_content_sub{
    padding: 15px;
    background-color: #fff;
  }
</style>
