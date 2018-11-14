<template>
    <div class="e-comment-body">
      <eRibbonHeader></eRibbonHeader>
      <eLWrapper></eLWrapper>
    </div>
</template>

<script>
  import "../../static/css/iconfont.css"
  import "../../static/css/mommon.css"
  import "../../static/css/logManage.css"
  import eRibbonHeader from "../components/eLogManage/eRibbonHeader"
  import eLWrapper from "../components/eLogManage/eLWrapper"
    export default {
        name: "eLogManage",
      components:{
        eRibbonHeader,
        eLWrapper
      }

    }
</script>

<style scoped>
</style>
