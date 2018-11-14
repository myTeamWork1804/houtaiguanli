<template>
  <div class="Switchover">
    <ConsoleStatistics :Statistics="dependencies.dependencies.Statistics"></ConsoleStatistics>
    <Bigdata></Bigdata>
    <today :today="dependencies.dependencies.today"></today>
    <ConsoleRecord :realtime="dependencies.dependencies.realtime"></ConsoleRecord>
    <ConsoleArticle :Journalism="dependencies.dependencies.Journalism"></ConsoleArticle>
  </div>
</template>

<script>
  import ConsoleStatistics from "./ConsoleStatistics"
  import Bigdata from "./Bigdata"
  import today from "./today"
  import ConsoleRecord from "./ConsoleRecord"
  import ConsoleArticle from "./ConsoleArticle"
    export default {
        name: "Consolesection",
        components:{
          ConsoleStatistics,
          Bigdata,
          today,
          ConsoleRecord,
          ConsoleArticle
        },
        props:["dependencies"],
    }
</script>

<style scoped>
  .Switchover{
    padding:15px;
    background:#ffffff;
  }
</style>
