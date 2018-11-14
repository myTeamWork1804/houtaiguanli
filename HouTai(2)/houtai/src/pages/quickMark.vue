<template>
    <!--<div class="f-rightContent">-->
    <div  class="rightMenuBox">
      <order-head></order-head>
      <ftable-lists :productData="productData"></ftable-lists>
    </div>
  <!--</div>-->
</template>

<script>
  import '../../static/css/iconfont.css'
  import '../../static/css/public.css'
  import '../../static/css/tub.css'
  import orderHead from "../components/quickMark/orderHead";
  import FtableLists from "../components/quickMark/ftableLists";
  export default {
    components: {
      FtableLists,
      orderHead,
    },
    data(){
      return{
        productData:[]
      }
    },
    created(){
      fetch('http://localhost:8080/static/monijson/products.json').then(res=>{
        res.json().then(data=>{
          this.productData=data;
          //console.log(this.productData)
        })
      })
    }
  }
</script>

<style scoped>
/*.rightMenuBox{*/
  /*margin-left: 240px;*/
/*}*/
</style>
