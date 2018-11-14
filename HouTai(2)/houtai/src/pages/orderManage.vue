<template>
  <div class="rightMenuBox">
      <order-head></order-head>
      <ftable-lists></ftable-lists>
  </div>
</template>

<script>
  import '../../static/css/iconfont.css'
  import '../../static/css/public.css'
  import '../../static/css/tub.css'
  import orderHead from "../components/orderManage/orderHead";
  import FtableLists from "../components/orderManage/ftableLists";
  export default {
    name: "orderManage",
    components: {
      FtableLists,
      orderHead,
    }
  }
</script>

<style scoped>
  /*.rightMenuBox{*/
    /*margin-left: 240px;*/
  /*}*/

</style>
