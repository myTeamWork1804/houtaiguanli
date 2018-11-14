<template>
  <div>
    <head-top></head-top>
    <left-menu></left-menu>

  </div>


</template>

<script>
  import HeadTop from "../components/pulic/HeadTop"
  import LeftMenu from '../components/pulic/LeftMenu'
    export default {
        name: "pulic",
      components: {HeadTop,LeftMenu}
    }
</script>

<style scoped>

  .rightMenu{
    margin-left: 234px;
    width: 100%;
    height: 100%;
    background-color: red;
  }
</style>
