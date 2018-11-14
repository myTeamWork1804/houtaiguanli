<template>
  <div >
    <div class="qh_table" v-if="show">
      <form >
        <div class="row">
          <div class="qh_box_inp">
            <label for="id" class="form_label">Id</label>
            <div class="input_box">
              <input type="text" id="id" class="form_input" placeholder="id"/>
            </div>

          </div>
          <div class="qh_box_inp">
            <label for="name" class="form_label">名称</label>
            <div class="input_box">
              <input type="text" id="name" class="form_input" placeholder="as"/>
            </div>

          </div>
          <div class="qh_box_inp">
            <label for="title" class="form_label">标题</label>
            <div class="input_box">
              <input type="text" id="title" class="form_input" placeholder="asdd"/>
            </div>

          </div>
          <div class="qh_box_inp">
            <label for="listname" class="form_label">表名</label>
            <div class="input_box">
              <input type="text" id="listname" class="form_input" placeholder="assd"/>
            </div>

          </div>
          <div class="qh_box_inp qh_time">
            <label for="createtime" class="form_label">添加时间</label>
            <div class="input_box">
              <input type="text" id="createtime" class="form_input" placeholder="添加时间"/>
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
                      <li id="createcalendar">自定义</li>
                    </ul>
                  </div>
            </div>
          </div>
          <div class="qh_box_inp qh_time">
            <label for="updatetime" class="form_label">更新时间</label>
            <div class="input_box">
              <input type="text" id="updatetime" class="form_input" placeholder="更新时间"/>
            </div>
            <div class="times">
              <div class="seleTime">
                <ul class="timeul" >
                  <li >今天</li>
                  <li>昨天</li>
                  <li>最近7天</li>
                  <li>最近30天</li>
                  <li>本月</li>
                  <li>上月</li>
                  <li id="updatecalendar">自定义</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="qh_box_inp">
            <label for="datalist" class="form_label">操作</label>
            <div class="input_box">
              <input type="text" id="datalist" class="form_input" placeholder="assd"/>
            </div>

          </div>
          <div class="qh_box_inp">
            <label for="status" class="form_label">状态</label>
            <div class="input_box">
              <input type="text" id="status" class="form_input" placeholder="ssd"/>
            </div>

          </div>
          <div class="qh_box_inp">
            <div class="input_box inp_mag">
              <input type="submit" value="提交" class="btn btn_green"/>
              <input type="reset" value="重置" class="btn"/>
            </div>

          </div>
        </div>
      </form>
    </div>
    <div class="qh_toolbar clearfix">
    <div class="toolbars">
      <a href="#" title="刷新" class="btn btn_black">
        <i class="iconfont icon-f14"></i>
      </a>
      <a href="#" title="添加" class="btn btn_green" @click="add">
        <i class="iconfont icon-jia"></i>
        添加
      </a>
      <a href="#" title="编辑" class="btn btn_qiangreen disabled" >
        <i class="iconfont icon-edit"></i>
        编辑
      </a>
      <a href="#" title="删除" class="btn btn_red disabled">
        <i class="iconfont icon-shanchu"></i>
        删除
      </a>
    </div>
    <div class="search_right" >
      <button type="button" title="普通搜索" class="btn btn_sear" @click="show=!show">
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
        <ul class="dropdown_menu dropdown_menu_content" >
          <li>
            <label>
              <input type="checkbox" checked value="1">
              id
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked value="2">
              名称
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked value="3">
              标题
            </label>

          </li>
          <li>
            <label>
              <input type="checkbox" checked value="4">
              表名
            </label>

          </li>
          <li>
            <label>
              <input type="checkbox" checked value="5">
              添加时间
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked value="6">
              更新时间
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked value="7">
              URL
            </label>

          </li>
          <li>
            <label>
              <input type="checkbox" checked value="8">
              操作
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked value="9">
              状态
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked value="10">
              修改
            </label>
          </li>

        </ul>
      </div>
      <div class="keep_open" >
        <button type="button" class="btn btn_sear" title="导出数据" >
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
  </div>
</template>

<script>
  import bus from "../../../assets/js/eventBus"
    export default {
      name: "QhCustomThree",
      data(){
        return {
          show:false,

        }
      },
      methods:{
        add(){
          bus.$emit("showEvent","true");

        },
      },
      mounted(){
        $(function(){
              $(".keep_open").each(function(){
                  $(this).click(function(e){
                    $(this).children(".dropdown_menu").toggle()
                    $(this).siblings().children(".dropdown_menu").hide();
                        event.stopPropagation()
                  })


              });

              $(document).click(function(e){
                var target = $(e.target);
                if(!target.is(".btn_sear")){
                  $(".keep_open").find(".dropdown_menu").hide();
                }
              });
              $(".dropdown_menu li").click(function(event){
                event.stopPropagation();
              })

          $(".dropdown_menu_content").find("input").each(function(){

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
                    console.log("y"+inputv)
                }else{
                  console.log("n"+inputv)
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


        })


      },
      updated(){

        laydate.render({
          elem: '#updatecalendar' //指定元素

        })
        laydate.render({
          elem: '#createcalendar' //指定元素

        })
        $(".timeul li").each(function(){
          console.log($(this))

          $(this).click(function(){
            $(this).parent().parent().parent().hide()
            $(this).addClass("timeActive").siblings().removeClass("timeActive");

          })
        })

        $(".times").prev().each(function(){
            $(this).click(function(){
                $(this).next().show()
            })
        })
        $(document).click(function(){
            $(".times").hide()
        })
        $(".input_box").click(function(event){
           event.stopPropagation();
        })

      }

    }

</script>

<style scoped>
  .row{
    margin-left: -15px;
    margin-right: -15px;
  }
  .row::after{
    content:'';
    height:0;
    display: block;
    clear: both;
    visibility: hidden;
    overflow: hidden;
  }
  .qh_box_inp{
    margin-bottom: 15px;
    width: 25%;
    float: left;
    position: relative;;
    padding-left: 15px;
    padding-right: 15px;
  }
  .input_box{
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    width: 66.66666667%;
    float:left;
    box-sizing: border-box;
  }
  .form_label{
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
    width: 33.33333333%;
    float:left;
    padding-left: 15px;
    padding-right: 15px;
  }
  .form_input{
    display: inline-block;
    width: 100%;
    height: 31px;
    padding: 6px 12px;
    font-size: 12px;
    line-height: 1.42857143;
    color: #555555;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .inp_mag{
    margin-left: 33.33333333%;
  }
  .btn{
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 3px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
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
    display: none;
    z-index: 1000;
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
  /*上下箭头*/
  .iconfont{
    font-size:12px;
  }
  .disabled{
    cursor: not-allowed;
    pointer-events: none;
    opacity: .6;
  }
  .times{
    display: none;
    position: absolute;
    top: 43px;
    left: 144px;
    color: inherit;
    background-color: #fff;
    border-radius: 4px;
    width: 160px;
    padding: 4px;
    margin-top: 1px;
    border-color: #eee;
    border: 1px solid rgba(0,0,0,0.15);
    float: left;
    min-width: 160px;
    font-size: 12px;
    z-index:8888;
  }
  .times::before{
    position: absolute;
    display: inline-block;
    content: '';
    left: 9px;
    top: -7px;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    border-bottom: 7px solid #ccc;
  }
  .times::after{
    position: absolute;
    display: inline-block;
    content: '';
    left: 10px;
    top: -6px;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 6px solid #fff;
  }
  .seleTime {
    font-size: 11px;
    margin: 4px;
    text-align: left;
  }
  .seleTime li{
    font-size: 13px;
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 4px;
    color: #08c;
    padding: 3px 12px;
    margin-bottom: 8px;
    cursor: pointer;
  }
  .seleTime li:hover{
    background-color: #08c;
    border: 1px solid #08c;
    color:#fff;
  }
   .times .timeActive{
    background-color: #08c;
    border: 1px solid #08c;
    color:#fff;
  }
</style>
