<template>
  <div >
    <div class="mm_table" v-if="show">
      <form >
        <div class="row">
          <div class="mm_box_inp">
                            <label for="id" class="form_label">ID</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="id"  placeholder="ID" id="id" >
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="group_name" class="form_label">角色名</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="group_name"  placeholder="角色名" id="group_name" >
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="username" class="form_label">用户名</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="username"  placeholder="用户名" id="id" >
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="nickname" class="form_label">昵称</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="nickname"  placeholder="昵称" id="nickname" >
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="email" class="form_label">电子邮箱</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="email"  placeholder="电子邮箱" id="email" >
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="phone" class="form_label">手机号</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="phone"  placeholder="手机号" id="phone" >
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="level" class="form_label">等级</label>
                            <div class="input_box form_double">
                                <div class="row-between">
                                    <div class="col-xs-6">
                                        <input type="text" class="form_input" name="level"  placeholder="等级" id="level" data-index="8">
                                    </div>
                                    <span>-</span>
                                    <div class="col-xs-6">
                                        <input type="text" class="form_input" name="level"  placeholder="等级" id="level" data-index="8">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="sex" class="form_label">性别</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="sex"  placeholder="性别" id="sex" >
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="grade" class="form_label">积分</label>
                            <div class="input_box form_double">
                                <div class="row-between">
                                    <div class="col-xs-6">
                                        <input type="text" class="form_input" name="grade"  placeholder="积分" id="grade" data-index="8">
                                    </div>
                                    <span>-</span>
                                    <div class="col-xs-6">
                                        <input type="text" class="form_input" name="grade"  placeholder="积分" id="grade" data-index="8">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="successions" class="form_label">连续登录天数</label>
                            <div class="input_box form_double">
                                <div class="row-between">
                                    <div class="col-xs-6">
                                        <input type="text" class="form_input" name="successions-operate"  placeholder="连续登录" id="successions" data-index="8">
                                    </div>
                                    <span>-</span>
                                    <div class="col-xs-6">
                                        <input type="text" class="form_input" name="level"  placeholder="连续登录" id="successions" data-index="8">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="maxsuccessions" class="form_label">最大连续登录天数</label>
                            <div class="input_box form_double">
                                <div class="row-between">
                                    <div class="col-xs-6">
                                        <input type="text" class="form_input" name="maxsuccessions-operate"  placeholder="最大连续" id="maxsuccessions" data-index="8">
                                    </div>
                                    <span>-</span>
                                    <div class="col-xs-6">
                                        <input type="text" class="form_input" name="maxsuccessions-operate"  placeholder="最大连续" id="maxsuccessions" data-index="8">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="time" class="form_label">登陆时间</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="time-operate"  placeholder="登陆时间" id="time" >
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="loginip" class="form_label">登陆IP</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="loginip"  placeholder="登陆IP" id="loginip" >
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="logintime" class="form_label">加入时间</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="logintime"  placeholder="加入时间" id="logintime" >
                            </div>
                        </div>
                        <div class="mm_box_inp">
                            <label for="sex" class="form_label">加入IP</label>
                            <div class="input_box">
                                <input type="text" class="form_input" name="sex"  placeholder="加入IP" id="sex" >
                            </div>
                        </div>
          <div class="mm_box_inp">
            <label for="status" class="form_label">状态</label>
            <div class="input_box">
              <input type="text" id="status" class="form_input" placeholder="ssd"/>
            </div> -->

          </div>
          <div class="mm_box_inp">
            <div class="input_box inp_mag">
              <input type="submit" value="提交" class="btn btn_green"/>
              <input type="reset" value="重置" class="btn"/>
            </div>

          </div>
        </div>
      </form>
    </div>
    <div class="mm_toolbar clearfix">
    <div class="toolbars">
      <a href="#" title="刷新" class="btn btn_black">
        <i class="iconfont icon-f14"></i>
      </a>
      <!-- <a href="#" title="添加" class="btn btn_green" @click="add">
        <i class="iconfont icon-jia"></i>
        添加
      </a> -->
      <a href="#" title="编辑" class="btn btn_qiangreen">
        <i class="iconfont icon-edit"></i>
        编辑
      </a>
      <a href="#" title="删除" class="btn btn_red">
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
        <ul class="dropdown_menu" >
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
      name: "MemMaThree",
      data(){
        return {
          show:false
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
                  $(this).click(function(){
                    $(this).children(".dropdown_menu").toggle()
                    $(this).siblings().children(".dropdown_menu").hide();

                  })


              });

              $(document).click(function(e){
                var target = $(e.target);
                if(!target.is(".btn_sear")){
                  $(".keep_open").find(".dropdown_menu").hide();
                }
              });

        })
      },
      updated(){
        $(".timeul").children("li").each(function(){


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

      }

    }

</script>

<style scoped>
  .iconfont{
    font-size:12px;
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
  .row-between{
    display: flex;
    vertical-align: center;
  }
  .row-between span{
    vertical-align: center;
  }
  .col-xs-6{
    width:50%;
  }
</style>
