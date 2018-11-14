<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import $ from 'jquery'

  import quickmark from './pages/quickMark'
  import  orderManage from './pages/orderManage'
  import  productsManage from './pages/productsManage'
export default {

  name: 'App',
  components: {
    orderManage,
    quickmark,
    productsManage,
  }
}
</script>

<style>

</style>
