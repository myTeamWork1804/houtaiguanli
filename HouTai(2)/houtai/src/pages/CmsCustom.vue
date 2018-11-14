<template>
  <div class="box">
    <qh-custom-one></qh-custom-one>
    <qh-custom-content></qh-custom-content>
  </div>
</template>

<script>
  import QhCustomOne from "../components/cms/CmsCustom/QhCustomOne"
  import QhCustomContent from "../components/cms/CmsCustom/QhCustomContent"
    export default {
        name: "CmsCustom",
      components: {QhCustomContent, QhCustomOne}
    }
</script>

<style >
  @import "../assets/css/cms.css";
    .box{
      position: relative;

    }
</style>
