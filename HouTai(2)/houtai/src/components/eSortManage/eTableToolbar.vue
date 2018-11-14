<template>
  <div class="e-table-toolbar">
    <div class="e-toolbar-left">
      <a class="e-btn-refresh" href="javascript:;" title="刷新">
        <i class="iconfont icon-f14"></i>
      </a>
      <a class="e-btn-add" href="javascript:;" title="添加">
        <i class="iconfont icon-f14"></i> 添加
      </a>
      <a class="e-btn-more" href="javascript:;" title="更多">
        <i class="iconfont icon-f14"></i> 更多
      </a>

    </div>


    <div class="e-toolbar-right e-btn-sousuo" >
      <a href="javascript:;" @click.stop.prevent="eIsShow">
        <i class="iconfont icon-sousuo"></i>
      </a>
    </div>
    <div class="e-toolbar-right e-btn-group">
      <a href="javascript:;">
        <i class="iconfont icon-qiehuan"></i>
      </a><a href="javascript:;">
      <i class="iconfont icon-jiugongge"></i>
      <span class="e-caret"></span>
    </a><a href="javascript:;">
      <i class="iconfont icon-daochu"></i>
      <span class="e-caret"></span>
    </a>
    </div>
    <div class="e-toolbar-right e-btn-search">
      <input class="e-toolbar-search" type="text" placeholder="搜索">
    </div>
  </div>
</template>

<script>
  import bus from '../../assets/eventBus'
    export default {
      methods:{
        eIsShow(){
          bus.$emit("eSearchEvent","1")
        }
      }
    }
</script>

<style scoped>

</style>
