<template>
  <div class="qh_toolbar clearfix">
    <div class="toolbars">
      <a href="#" title="刷新" class="btn btn_black">
        <i class="iconfont icon-f14"></i>
      </a>
      <a href="#" title="添加" class="btn btn_green">
        <i class="iconfont icon-jia"></i>
        添加
      </a>
      <a href="#" title="删除" class="btn btn_red">
        <i class="iconfont icon-shanchu"></i>
        编辑
      </a>
      <a href="#" title="移动" class="btn btn_qianblue">
        <i class="iconfont icon-youjiantou"></i>
        移动
      </a>

      <a href="#" title="更多" class="btn btn_black">
        <i class="iconfont icon-shezhi"></i>
        更多
      </a>
      <a href="#" title="回收站" class="btn btn_green">
        <i class="iconfont icon-xunhuanliyong"></i>
        回收站
      </a>
      <a href="#" title="附表列表" class="btn btn_blue">
        <i class="iconfont icon-wendang"></i>
        附表列表
      </a>
      <a href="#"  class="btn btn_gray">
        <i class="iconfont icon-toggle"></i>

      </a>
    </div>
    <div class="search_right">
      <button type="button" title="普通搜索" class="btn btn_sear">
        <i class="iconfont icon-sousuo"></i>
      </button>
    </div>
    <div class="columns_right">
      <button type="button" class="btn btn_sear">
        <i class="iconfont icon-qiehuan"></i>
      </button>
      <div class="keep_open" title="列">
        <button type="button" class="btn btn_sear" >
          <i class="iconfont icon-jiugongge"></i>
          <span class="sanjiao"></span>
        </button>
        <ul class="dropdown_menu">
          <li>
            <label>
              <input type="checkbox" checked >
              id
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked >
              名称
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked >
              标题
            </label>

          </li>
          <li>
            <label>
              <input type="checkbox" checked >
              表名
            </label>

          </li>
          <li>
            <label>
              <input type="checkbox" checked >
              添加时间
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked >
              更新时间
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked >
              URL
            </label>

          </li>
          <li>
            <label>
              <input type="checkbox" checked >
              操作
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked >
              状态
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked >
              修改
            </label>
          </li>

        </ul>
      </div>
      <div class="keep_open" >
        <button type="button" class="btn btn_sear" title="导出数据">
          <i class="iconfont icon-daochu"></i>
          <span class="sanjiao"></span>
        </button>
        <ul class="dropdown_menu">
          <li>
            <a href="#">JSON</a>
          </li>
          <li>
            <a href="#">XML</a>
          </li>
          <li>
            <a href="#">CSV</a>
          </li>
          <li>
            <a href="#">TXT</a>
          </li>
          <li>
            <a href="#">MS-Word</a>
          </li>
          <li>
            <a href="#">MS-Excel</a>
          </li>



        </ul>
      </div>
    </div>
    <div class="search">
      <input type="text" placeholder="搜索" class="form_input">
    </div>
  </div>
</template>

<script>
    export default {
        name: "QhManageContentFour"
    }
</script>

<style scoped>

  /*left*/
  .toolbars {
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    float:left;
  }

  /*right*/
  .search_right{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    float: right
  }
  .btn_sear{
    background-color: #f4f4f4;
    color: #444;
    border-color: #ddd;
    float:left;
  }

  .columns_right{
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    float:right;
  }
  .sanjiao{
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-top: 4px dashed;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }
  .btn_qiehuan{
    float:left;
  }
  .keep_open{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    float:left;
  }

  .dropdown_menu{
    position: absolute;
    top: 100%;
    right:0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 12px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    overflow-y: auto;
  }

  .columns_right label{
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .columns_right label input{
    margin: 4px 0 0;
  }
  .dropdown_menu > li > a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.42857143;
    color: #333333;
    white-space: nowrap;
  }
  .search{
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    float:right;
  }



  .text_green{
    color: #18bc9c;
  }
  .btn_gray{
    background-color: #f4f4f4;
    color: #444;
    border-color: #ddd
  }
  .btn_qianblue{
    color: #fff;
    background-color: #3498db;
  }

  .btn_blue{
    color: #fff;
    background-color: #3498db;
  }
  .btn_green{
    color: #fff;
    background-color: #18bc9c;
  }
  .btn_black{
    color: #fff;
    background-color: #2c3e50;
  }
  .btn_qiangreen{
    color: #fff;
    background-color: #18bc9c;
  }
  .btn_red{
    color: #fff;
    background-color: #e74c3c;
  }
  i.iconfont{
    font-size:12px;
  }

</style>
