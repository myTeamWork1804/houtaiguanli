<template>
    <div class="panel panel-default panel-intro">
        <div class="panel-body">
            <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade active in" id="one">
                    <div class="widget-body no-padding">
                        <div class="bootstrap-table">
                            <div class="commonsearch-table hidden">
                                <form action="" method="post" novalidate class="form-horizontal form-commonsearch nice-validator n-default n-bootstrap">
                                    <fieldset>
                                        <div class="row">
                                            <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                <label for="id" class="control-label col-xs-4">Id</label>
                                                <div class="col-xs-8">
                                                    <input type="hidden" class="form-control operate" name="id-operate" value="=" readonly>
                                                    <input type="text" class="form-control" name="id" value="" placeholder="Id" id="id">
                                                </div>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                <label for="title" class="control-label col-xs-4">标题</label>
                                                <div class="col-xs-8">
                                                    <input type="hidden" class="form-control operate" name="title-operate" value="=" readonly>
                                                    <input type="text" class="form-control" name="title" placeholder="标题" id="title">
                                                </div>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                <label for="text" class="control-label col-xs-4">文本</label>
                                                <div class="col-xs-8">
                                                    <input type="hidden" class="form-control operate" name="text-operate" value="=" readonly="">
                                                    <input type="text" class="form-control" name="text" value="" placeholder="文本" id="text">
                                                </div>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                <label for="eventkey" class="control-label col-xs-4">响应标识</label>
                                                <div class="col-xs-8">
                                                    <input type="hidden" class="form-control operate" name="eventkey-operate" value="=" readonly="">
                                                    <input type="text" class="form-control" name="eventkey" value="" placeholder="响应标识" id="eventkey">
                                                </div>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                <label for="remark" class="control-label col-xs-4">备注</label>
                                                <div class="col-xs-8"><input type="hidden" class="form-control operate" name="remark-operate" value="=" readonly="">
                                                    <input type="text" class="form-control" name="remark" value="" placeholder="备注" id="remark">
                                                </div>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                <label for="createtime" class="control-label col-xs-4">创建时间</label>
                                                <div class="col-xs-8">
                                                    <input type="hidden" class="form-control operate" name="createtime-operate" value="RANGE" readonly="">
                                                    <input type="text" class="form-control datetimerange" name="createtime" value="" placeholder="创建时间" id="createtime">
                                                </div>
                                                <div class="times">
                                                    <div class="seleTime">
                                                        <ul class="timeul">
                                                            <li>今天</li>
                                                            <li>昨天</li>
                                                            <li>最近7天</li>
                                                            <li>最近30天</li>
                                                            <li>本月</li>
                                                            <li>上月</li>
                                                            <li id="test1">自定义</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                <label for="updatetime" class="control-label col-xs-4">更新时间</label>
                                                <div class="col-xs-8">
                                                    <input type="hidden" class="form-control operate" name="updatetime-operate" value="RANGE" readonly="">
                                                    <input type="text" class="form-control datetimerange" name="updatetime" value="" placeholder="更新时间" id="updatetime">
                                                </div>
                                                <div class="times">
                                                    <div class="seleTime">
                                                        <ul class="timeul">
                                                            <li id="today">今天</li>
                                                            <li>昨天</li>
                                                            <li>最近7天</li>
                                                            <li>最近30天</li>
                                                            <li>本月</li>
                                                            <li>上月</li>
                                                            <li id="test2">自定义</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                <label for="status" class="control-label col-xs-4">状态</label>
                                                <div class="col-xs-8">
                                                    <input type="hidden" class="form-control operate" name="status-operate" value="=" readonly="">
                                                    <input type="text" class="form-control" name="status" value="" placeholder="状态" id="status">
                                                </div>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                <div class="col-sm-8 col-xs-offset-4">
                                                    <button type="submit" class="btn btn-success" formnovalidate="">提交</button>
                                                    <button type="reset" class="btn btn-default">重置</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div class="fixed-table-toolbar">
                                <div class="bs-bars pull-left">
                                    <div id="toolbar" class="toolbar" style="position: relative;">
                                        <a href="javascript:;" class="btn btn-primary btn-refresh" title="刷新">
                                            <i class="icon iconfont icon-f14"></i>
                                        </a>
                                        <a href="javascript:;" @click="sendMsg" class="btn btn-success btn-add" title="添加">
                                            <i class="icon iconfont icon-jia"></i> 添加
                                        </a>
                                        <a href="javascript:;" class="btn btn-success btn-edit btn-disabled disabled" title="编辑">
                                            <i class="icon iconfont icon-edit"></i> 编辑
                                        </a>
                                        <a href="javascript:;" class="btn btn-danger btn-del btn-disabled disabled" title="删除">
                                            <i class="icon iconfont icon-shanchu"></i> 删除
                                        </a>
                                        <a href="javascript:;" class="btn btn-danger btn-import" title="导入" id="btn-import-file" style="position: relative; z-index: 1;">
                                            <i class="icon iconfont icon-daochu"></i> 导入
                                        </a>
                                        <div class="dropdown btn-group ">
                                            <a class="btn btn-primary btn-more dropdown-toggle btn-disabled disabled">
                                                <i class="icon iconfont icon-shezhi"></i> 更多
                                            </a>
                                            <ul class="dropdown-menu text-left">
                                                <li>
                                                    <a class="btn btn-link btn-multi btn-disabled disabled" href="javascript:;">
                                                        <i class="icon iconfont icon-edit"></i> 设为正常
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="btn btn-link btn-multi btn-disabled disabled" href="javascript:;">
                                                        <i class="icon iconfont icon-shanchu"></i> 设为隐藏
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div  class="" style="position: absolute; top: 2px; left: 250px; width: 64px; height: 31px; overflow: hidden; z-index: 1;">
                                            <input  type="file" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" accept="text/csv,.csv,application/vnd.ms-excel,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx">
                                        </div>
                                    </div>
                                </div>
                                <div class="columns-right pull-right sear" style="margin-top:10px;margin-bottom:10px;">
                                    <button class="btn btn-default" type="button" name="commonSearch" title="普通搜索">
                                        <i class="icon iconfont icon-sousuo"></i>
                                    </button>
                                </div>
                                <div class="columns columns-right btn-group pull-right">
                                    <button class="btn btn-default" type="button" name="toggle"  title="切换">
                                        <i class="icon iconfont icon-rizhi"></i>
                                    </button>
                                    <div class="keep-open btn-group" title="列">
                                        <button type="button" class="btn btn-default dropdown-toggle">
                                            <i class="icon iconfont icon-jiugongge"></i>
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">
                                            <li data-stopPropagation="true">
                                                <label>
                                                    <input type="checkbox" value="1" checked="checked" data-stopPropagation="true"> Id
                                                </label>
                                            </li>
                                            <li data-stopPropagation="true">
                                                <label>
                                                    <input type="checkbox" value="2" checked="checked" data-stopPropagation="true"> 标题
                                                </label>
                                            </li>
                                            <li data-stopPropagation="true">
                                                <label>
                                                    <input type="checkbox" value="3" checked="checked" data-stopPropagation="true"> 文本
                                                </label>
                                            </li>
                                            <li data-stopPropagation="true">
                                                <label>
                                                    <input type="checkbox" value="4" checked="checked" data-stopPropagation="true"> 响应标识
                                                </label>
                                            </li>
                                            <li data-stopPropagation="true">
                                                <label>
                                                    <input type="checkbox" value="5" checked="checked" data-stopPropagation="true"> 备注
                                                </label>
                                            </li>
                                            <li data-stopPropagation="true">
                                                <label>
                                                    <input type="checkbox" value="6" checked="checked" data-stopPropagation="true"> 创建时间
                                                </label>
                                            </li>
                                            <li data-stopPropagation="true">
                                                <label>
                                                    <input type="checkbox" value="7" checked="checked" data-stopPropagation="true"> 更新时间
                                                </label>
                                            </li>
                                            <li data-stopPropagation="true">
                                                <label>
                                                    <input type="checkbox" value="8" checked="checked" data-stopPropagation="true"> 状态
                                                </label>
                                            </li>
                                            <li data-stopPropagation="true">
                                                <label>
                                                    <input type="checkbox" value="9" checked="checked" data-stopPropagation="true"> 操作
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="export btn-group">
                                        <button class="btn btn-default dropdown-toggle" title="导出数据" type="button">
                                            <i class="icon iconfont icon-daochu"></i>
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="javascript:void(0)" data-stopPropagation="true">JSON</a>
                                            </li>
                                            <li role="menuitem">
                                                <a href="javascript:void(0)" data-stopPropagation="true">XML</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" data-stopPropagation="true">CSV</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" data-stopPropagation="true">TXT</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" data-stopPropagation="true">MS-Word</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" data-stopPropagation="true">MS-Excel</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pull-right search">
                                    <input class="form-control" type="text" placeholder="搜索">
                                </div>
                                <!-- <div class="clearfix"></div> -->
                            </div>
                            <div class="fixed-table-container" style="padding-bottom: 0px;">
                                <div class="fixed-table-header" style="display: none;">
                                    <table></table>
                                </div>
                                <div class="fixed-table-body">
                                    <div class="fixed-table-loading" style="top: 42px; display: none;">正在努力地加载数据中，请稍候……</div>
                                    <table id="table" class="table table-striped table-bordered table-hover" width="100%" style="margin-top: 0px;">
                                        <thead style="display: table-header-group;">
                                            <tr>
                                                <th class="bs-checkbox" style="text-align: center; vertical-align: middle; width: 36px; ">
                                                    <div class="th-inner" @click="allSelect">
                                                        <input name="btSelectAll" type="checkbox" id="checkedAll" :checked="isAllSelected" >
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="th-inner ">Id</div>
                                                </th>
                                                <th>
                                                    <div class="th-inner ">标题</div>
                                                </th>
                                                <th>
                                                    <div class="th-inner ">文本</div>
                                                </th>
                                                <th>
                                                    <div class="th-inner ">响应标识</div>
                                                </th>
                                                <th>
                                                    <div class="th-inner ">备注</div>
                                                </th>
                                                <th>
                                                    <div class="th-inner sortable both">创建时间</div>
                                                </th>
                                                <th>
                                                    <div class="th-inner sortable both">更新时间</div>
                                                </th>
                                                <th>
                                                    <div class="th-inner ">状态</div>
                                                </th>
                                                <th>
                                                    <div class="th-inner ">操作</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(msg,m) in MsgLists" :key="m">
                                                <td class="bs-checkbox" style="text-align: center" @click="singleSelect(msg, m)">
                                                    <input name="btSelectItem" type="checkbox" :checked="msg.checked">
                                                </td>
                                                <td style="text-align: center; vertical-align: middle; ">{{m+1}}</td>
                                                <td style="text-align: center; vertical-align: middle; ">{{msg.title}}</td>
                                                <td style="text-align: center; vertical-align: middle; ">{{msg.text}}</td>
                                                <td style="text-align: center; vertical-align: middle; ">{{msg.eventkey}}</td>
                                                <td style="text-align: center; vertical-align: middle; ">{{msg.remark}}</td>
                                                <td style="text-align: center; vertical-align: middle; ">{{msg.createtime}}</td>
                                                <td style="text-align: center; vertical-align: middle; ">{{msg.updatetime}}</td>
                                                <td style="text-align: center; vertical-align: middle; ">
                                                    <a href="#" class="searchit">
                                                        <span class="text-success"><i class="icon iconfont icon-yuan"></i>{{msg.status}}</span>
                                                    </a>
                                                </td>
                                                <td style="text-align: center; vertical-align: middle; ">
                                                    <a href="#" class="btn btn-xs btn-success btn-editone" @click="edit(m)">
                                                        <i class="icon iconfont icon-edit"></i>
                                                    </a>
                                                    <a href="#" class="btn btn-xs btn-danger btn-delone" @click="sendid(m)">
                                                        <i class="icon iconfont icon-shanchu"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="fixed-table-pagination" style="display: block;">
                                    <div class="pull-left pagination-detail">
                                        <span class="pagination-info">显示第 1 到第 2 条记录，总共 2 条记录</span>
                                        <span class="page-list" style="display: none;">每页显示
                                            <span class="btn-group dropup">
                                                <button type="button" class="btn btn-default dropdown-toggle">
                                                    <span class="page-size">10</span>
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li role="menuitem" class="active">
                                                        <a href="#">10</a>
                                                    </li>
                                                </ul>
                                            </span> 条记录
                                        </span>
                                    </div>
                                    <div class="pull-right pagination" style="display: none;">
                                        <ul class="pagination">
                                            <li class="page-pre">
                                                <a href="#">上一页</a>
                                            </li>
                                            <li class="page-number active">
                                                <a href="#">1</a>
                                            </li>
                                            <li class="page-next">
                                                <a href="#">下一页</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bus from "../../assets/js/eventBus.js"
export default {
    name: "weChatsManageB",
    data(){
        return{
            MsgLists:[],
        }
    },
    methods:{
        edit:function(i){
            bus.$emit("edit",i)
            bus.$emit("editmsg",this.MsgLists);
            console.log(i);
          console.log(i);

        },
        sendid:function(i){
            bus.$emit("i",i)
        },
        sendMsg:function(){
            bus.$emit("add","true")
        },
        // 全选、全不选
        allSelect() {
            let checked = true;
            // 全选
            if(this.isAllSelected){
                checked = false;
            }
            this.MsgLists = this.MsgLists.map(el => {
                el.checked = checked;
                return el;
            })
        },
        // 单选
        singleSelect(msg, index) {
            msg.checked = !msg.checked;
            this.MsgLists.splice(m, 1, msg);
        }
    },
    computed:{
        // 是否全选
        isAllSelected(){
            return this.MsgLists.every((el) => {
                return el.checked;
            })
        },
        // 选中商品的id
        checkedGoodIds(){
            let filterArr = this.MsgLists.filter((el) => {
                return el.checked;
            });
            return filterArr.map((el) => {
                return el.id;
            })
        }
    },
    created(){
        this.$axios.get('http://localhost:3000/weChats').then(response=> {
            this.MsgLists = response.data;
        })
    },
    mounted(){
        $(function(){
        //搜索框显示隐藏
        $(".sear").click(function(){
            $(".commonsearch-table").toggleClass("hidden")
        });
        //下拉菜单
        $(".keep-open").click(function(event){
            $(this).find(".dropdown-menu").toggle();
            $(".export").find(".dropdown-menu").hide();
            return false;
        })
          $(".dropdown-menu").on("click", "[data-stopPropagation]", function(e) {
            e.stopPropagation();
          });
          $(document).click(function(e) {
            $(this).find(".dropdown-menu").hide();
          })
          $(".export").click(function(){
            $(this).find(".dropdown-menu").toggle();
            $(".keep-open").find(".dropdown-menu").hide();
            return false;
          })
          $(document).click(function(e){
            $(this).find(".dropdown-menu").hide();
          })
        })
        //时间下拉菜单
        $("#createtime").focus(function(){
            $(this).parent().parent().find(".times").show()
        })
        $("#createtime").blur(function(){
            $(this).parent().parent().find(".times").hide()
        })
        $("#updatetime").focus(function(){
            $(this).parent().parent().find(".times").show()
        })
        $("#updatetime").blur(function(){
            $(this).parent().parent().find(".times").hide()
        })
        //删除列
        $(".dropdown-menu").find("input").each(function(){
            $(this).click(function(){
            var inputv=$(this).val()
            if($(this).is(':checked')){
                $("thead tr th").each(function(){
                    if(inputv==$(this).index()){
                    $(this).show()
                    }
                })
                $("tbody tr td").each(function(){
                if(inputv==$(this).index()){
                    $(this).show()
                }
                })
            }else{
                $("thead tr th").each(function(){
                if(inputv==$(this).index()){
                    $(this).hide()
                }
                })
                $("tbody tr td").each(function(){
                if(inputv==$(this).index()){
                    $(this).hide()
                }
                })
                }
            })
        })

    },
    updated(){
        $(".btn-editone").each(function(){
          $(this).click(function(){
            $(".lay-edit").show()
          })
        })
      $(".btn-delone").each(function(){
        $(this).click(function(e){
          $(".delete").show();
          $("#mask").show();
          let left1= $(this).offset().left-30;
          let top1 = $(this).offset().top;
          console.log(left1,top1);
          $(".delete").css({
            "left":left1-230+'px',
            "top":top1+'px'
          })
        })
      })
        bus.$on("adds",(MsgLists)=>{
            this.MsgLists=MsgLists;
        })
        bus.$on("dele",(MsgLists)=>{
            this.MsgLists=MsgLists;
        })
        bus.$on("updatemsg",(MsgLists)=>{
          this.MsgLists=MsgLists;
        })
         //日历
        laydate.render({
            elem: '#updatetime' //指定元素
        });
    }
}
</script>
