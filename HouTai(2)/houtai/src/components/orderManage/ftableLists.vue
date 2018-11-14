<template>
  <div class="ftableLists">
    <ffunction :erweimadata="erweimadata"></ffunction>
    <ftable-show :erweimadata="erweimadata"></ftable-show>
    <fenye :erweimadata="erweimadata"></fenye>
  </div>
</template>

<script>
  import erweimadata from '../../data/data'
  import fenye from './fenye'
    import Ffunction from "./ffunction";
    import FtableShow from "./ftableShow";
    export default {
        name: "ftableLists",
      components: {
        FtableShow,
          Ffunction,
        fenye
        },
      data(){
          return{
            erweimadata
          }
      }
    }
</script>

<style scoped>

</style>
