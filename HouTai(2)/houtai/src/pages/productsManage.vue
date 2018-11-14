<template>

  <div class="rightMenuBox">
    <order-head></order-head>
    <ftable-lists :productData="productData"></ftable-lists>
  </div>

</template>

<script>
  import '../../static/css/iconfont.css'
  import '../../static/css/public.css'
  import '../../static/css/tub.css'
  import orderHead from "../components/productsManage/orderHead";
  import FtableLists from "../components/productsManage/ftableLists";
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
      // fetch('http://localhost:3000/products')
      //   .then(res=>{res.json())
      //   .then(data=>{
      //     this.productData=data;
      //     //console.log(this.productData)
      //   })

      fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
          // data就是我们请求的repos
          this.productData=data;
        });
    }


  }
</script>

<style scoped>
  /*.rightMenuBox{*/
    /*margin-left: 240px;*/
  /*}*/
</style>
