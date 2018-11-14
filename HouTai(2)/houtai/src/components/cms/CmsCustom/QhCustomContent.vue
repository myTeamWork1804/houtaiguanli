<template>
  <div class="qh_content">
    <div class="qh_content_box">

        <qh-custom-three></qh-custom-three>
        <qh-custom-four></qh-custom-four>
        <qh-custom-five></qh-custom-five>
        <qh-custom-six></qh-custom-six>
        <qh-custom-seven></qh-custom-seven>
          <qh-custom-add></qh-custom-add>
    </div>
  </div>
</template>

<script>
  import QhCustomThree from "./QhCustomThree"
  import QhCustomFour from "./QhCustomFour"
  import QhCustomFive from "./QhCustomFive"
  import QhCustomSix from "./QhCustomSix"
  import QhCustomSeven from "./QhCustomSeven"
  import QhCustomAdd from "./QhCustomAdd"
    export default {
        name: "QhCustomContent",
      components: {QhCustomSeven, QhCustomSix, QhCustomFive, QhCustomFour, QhCustomThree,QhCustomAdd}
    }
</script>

<style scoped>
  /*content*/
  .qh_content{
    min-height: 250px;
    padding: 15px;


  }
  .iconfont{
    font-size:12px;
  }
  .qh_content_box{
    padding:15px;
    background-color: #fff;
    width: 100%;
  }
  .qh_content_box::after{
    content:'';
    height:0;
    display: block;
    clear: both;
    visibility: hidden;
    overflow: hidden;
  }


</style>
