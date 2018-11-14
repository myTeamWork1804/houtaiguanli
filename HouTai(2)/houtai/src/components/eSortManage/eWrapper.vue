<template>
  <div class="e-wrapper">
    <div class="e-panel-body" >
      <e-common-search ></e-common-search>
      <eTableToolbar></eTableToolbar>
      <eTableContainer></eTableContainer>
    </div>
  </div>
</template>

<script>
  import eCommonSearch from "./eCommonSearch"
  import eTableToolbar from "./eTableToolbar"
  import eTableContainer from "./eTableContainer"
    export default {

        name: "eWrapper",
      components:{
        eCommonSearch,
        eTableToolbar,
        eTableContainer
      },



    }
</script>

<style scoped>

</style>

