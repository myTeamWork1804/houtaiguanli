<template>
  <div class="mm_content">
    <div class="mm_content_box">
          <mem-ma-three></mem-ma-three>
          <mem-ma-four></mem-ma-four>
          <mem-ma-five></mem-ma-five>
          <mem-ma-six></mem-ma-six>
          <mem-ma-seven></mem-ma-seven>
          <mem-ma-add></mem-ma-add>
    </div>
  </div>
</template>

<script>
  import MemMaThree from "./MemMaThree"
  import MemMaFour from "./MemMaFour"
  import MemMaFive from "./MemMaFive"
  import MemMaSix from "./MemMaSix"
  import MemMaSeven from "./MemMaSeven"
  import MemMaAdd from "./MemMaAdd"
    export default {
        name: "MemMaContent",
      components: {MemMaSeven, MemMaSix, MemMaFive, MemMaFour, MemMaThree,MemMaAdd}
    }
</script>

<style scoped>
  /*content*/
  .mm_content{
    min-height: 250px;
    padding: 15px;
    margin-right: auto;
    margin-left: auto;

  }
  .mm_content_box{
    padding:15px;
    background-color: #fff;

  }
  .mm_content_box::after{
    content:'';
    height:0;
    display: block;
    clear: both;
    visibility: hidden;
    overflow: hidden;
  }
  .iconfont{
    font-size:12px;
  }

</style>
