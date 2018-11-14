<template>
  <div class="ftableLists">
    <ffunction :erweimadata="erweimadata"></ffunction>
    <ftable-show :erweimadata="erweimadata"></ftable-show>
    <fenye :erweimadata="erweimadata"></fenye>
  </div>
</template>

<script>
  import erweimadata from '../../data/quickMark'
    import Ffunction from "./ffunction";
    import FtableShow from "./ftableShow";
    import Fenye from "./fenye";
    export default {
        name: "ftableLists",
      components: {
        Fenye,
        FtableShow,
          Ffunction,
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
