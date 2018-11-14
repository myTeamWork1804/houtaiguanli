<template>
  <div class="box">
    <mem-ma-one></mem-ma-one>
    <mem-ma-content></mem-ma-content>
  </div>
</template>

<script>
  import MemMaOne from "../components/mem/MemMa/MemMaOne"
  import MemMaContent from "../components/mem/MemMa/MemMaContent"
    export default {
        name: "MemMa",
      components: {MemMaContent, MemMaOne}
    }
</script>

<style >
  @import "../assets/css/mem.css";
    .box{
      position: relative;

    }
</style>
