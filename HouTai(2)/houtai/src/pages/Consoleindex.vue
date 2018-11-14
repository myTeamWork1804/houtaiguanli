<template>
  <div class="box">
    <Consoleheader></Consoleheader>
    <Consolemiddleheader :dependencies="dependencies"></Consolemiddleheader>
  </div>
</template>

<script>
  import Consoleheader from "../components/Console/Consoleheader"
  import Consolemiddleheader from "../components/Console/Consolemiddleheader"
  import "../../static/css/iconfont.css"

    export default {
        name: "Console-index",
        components:{
          Consoleheader,
          Consolemiddleheader
        },
      data(){
          return {
            dependencies:{}
          }
      },
      created(){
        fetch('http://localhost:3000/pack')
          .then(response => response.json())
          .then(data => {
            // data就是我们请求的repos
            this.dependencies=data;
            console.log(this.dependencies);
          });
      }
    }
</script>

<style scoped>
  .box{
    padding:15px;
    background: #f1f4f6;
  }
</style>
