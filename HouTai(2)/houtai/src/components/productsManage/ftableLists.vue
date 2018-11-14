<template>
  <div class="ftableLists">
    <ffunction :productData="productData"></ffunction>
    <ftable-show :productData="productData"></ftable-show>
    <fenye :productData="productData"></fenye>
  </div>
</template>

<script>
    import fenye from './fenye';
    import Ffunction from "./ffunction";
    import FtableShow from "./ftableShow";
    export default {
      components: {
        FtableShow,
        Ffunction,
        fenye
        },
      props:['productData']
    }
</script>

<style scoped>

</style>
