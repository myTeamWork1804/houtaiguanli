<template>
  <div class="table_container">
    <div class="table_content">
      <table class="table">
        <thead>
        <tr>
          <th class="th_checkbox" style="width: 36px">
            <div class="th_inner th_one" >
              <input type="checkbox" />
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              Id
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              名称
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              标题
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              表名
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner th_bg">
              添加时间
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner th_bg">
              更新时间
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              URl
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              操作
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              状态
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              修改
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td >
            <div class="th_inner th_one" >
              <input type="checkbox" />
            </div>
          </td>
          <td>1</td>
          <td>站内留言</td>
          <td>发表留言</td>
          <td>cms_message</td>
          <td>2018-10-21 11:19:17</td>
          <td>2018-10-21 11:19:17</td>
          <td>
            <a href="#" class="a_btn">
              <i class="iconfont  icon-lianjie"></i>
            </a>
          </td>
          <td>
            <a href="#" class="a_btn btn_green ">
              <i class="iconfont  icon-wendang"></i>
              数据列表
            </a>
            <a href="#" class="a_btn btn_blue">
              <i class="iconfont  icon-caidan"></i>
              字段列表
            </a>
          </td>
          <td>
            <a href="#" >
                  <span class="text_green">
                      <i class="iconfont  icon-yuan"></i>
                       正常
                  </span>
            </a>
          </td>
          <td>
            <a href="#" class="a_btn btn_green">
              <i class="iconfont  icon-edit"></i>

            </a>
            <a href="#" class="a_btn btn_red">
              <i class="iconfont  icon-shanchu"></i>

            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="table_pagination">
      <span class="pagination_info">显示第 1 到第 1 条记录，总共 1 条记录</span>
      <span class="pagination_list">
                            每页显示
                            <span></span>
                             条记录
                        </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "QhManageContentFive"
    }
</script>

<style scoped>

  /*table*/
  .table_container{
    position: relative;
    clear: both;
    border-radius: 4px;
    -webkit-border-radius: 4px;
  }
  .table_content{
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;
  }
  .table{
    width: 100%;
    padding: 8px;
    margin-bottom: 0!important;
    border: 1px solid #f4f4f4;
    /*border-bottom: 1px solid #ddd;*/
    border-collapse: collapse!important;
    border-spacing: 0;
    border-radius: 1px;
    font-size: 13px;
  }
  .th_checkbox{
    text-align: center;
    vertical-align: middle;
    border: 1px solid #f4f4f4;
    border-bottom: 1px solid #ddd;
  }

  .th_one{
    padding:8px 0;
  }
  .th_inner{
    padding:8px ;
    line-height: 24px;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  tbody{
    background-color: #f9f9f9;
  }
  tbody td{
    text-align: center;
    vertical-align: middle;
    border: 1px solid #f4f4f4;
    border-bottom: none;
    font-size:13px;
  }

  .a_btn{
    background-color: #f4f4f4;
    color: #444;
    border-color: #ddd;
    padding: 1px 5px;
    font-size: 11px;
    line-height: 1.5;
    border-radius: 2px;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    user-select: none;
  }

  .table_pagination{
    padding: 10px 0;
  }
  .pagination_info{
    line-height: 34px;
    margin-right: 5px;
  }
  .pagination_list{
    display: none;
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
