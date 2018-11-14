<template>
  <div class="qh_content_leftbox">
    <div class="ztree_content">
      <div class="ztree_header">
        <h3>栏目列表</h3>
      </div>
      <div class="ztree_zz">
        <input id="checkbox2"  type="checkbox" @click="che()" value="0">选中全部
        <input id="checkbox"  type="checkbox" @click="showOrHidden()" value="0">展开全部<br>
        <ul id="treeDemo" class="ztree"></ul>
      </div>

    </div>

  </div>
</template>

<script>
  // @import()
    export default {
      name: "QhManageContentTwo",
      methods:{
        showOrHidden(){
          var value=$("#checkbox").attr("value");
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          if(value=='0'){
            zTree.expandAll(true);
            $("#checkbox").attr("value","1");
          }else{
            zTree.expandAll(false);
            $("#checkbox").attr("value","0");
          }
        },
        che(){
          var value=$("#checkbox2").attr("value");
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          if(value=='0'){
            zTree.checkAllNodes(true);
            $("#checkbox2").attr("value","1");
          }else{
            zTree.checkAllNodes(false);
            $("#checkbox2").attr("value","0");
          }
        }
      },
      created(){
        $(function () {


        // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
        var setting = {
          check: {
            enable: true,
            chkStyle: "checkbox",
            chkboxType: { "Y": "ps", "N": "ps" },
            nocheckInherit: true,


          },

          view: {
            showLine: true,
            expandSpeed: "slow"
          },
          data: {
            key: {
              name:"name",
              title: "name"
            }
          }


        };

        // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
        var zNodes = [
          {name:"产品中心", open:false, children:[
              {name:"智能家居"},
              {name:"VR/AR"},
              {name:"可穿戴设备"}
            ]},
          {name:"新闻中心", open:false, children:[
              {name:"互联网"},
              {name:"硬件"},
              {name:"投资"},
              {name:"安全"}
           ]},
          {name:"普通单页", halfCheck:true},
          {name:"自定义表单", halfCheck:true},
          {name:"官网首页", halfCheck:true},
          {name:"交流社区", halfCheck:true},
          {name:"文档", halfCheck:true}
        ];

        $(document).ready(function(){
          zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
          // var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
          // treeObj.expandAll(false);

        });

      }
          )
       }
    }
</script>

<style scoped>
  /*ztree*/
  ul.ztree{
    width: 100%;
    height:100%;
    overflow-y: initial;
    padding: 15px;
    background-color: #fff;
    border: none;
  }


  /*content*/
  .qh_content_leftbox{
    float:left;
    position: relative;
    min-height: 1px;
    /*padding-left: 15px;*/
    width: 25%;

  }
  .ztree_content{
    /*padding: 15px;*/
    background-color: #fff;

  }
  .ztree_header {
    padding: 15px;
    padding-bottom: 0;
    background: #e8edf0;
    border-color: #e8edf0;
    position: relative;
    color: #333333;
    border-bottom: 1px solid transparent;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
  }

  .ztree_zz{
    padding: 15px;
  }

</style>
