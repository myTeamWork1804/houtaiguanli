<template>
  <header >
    <a href="#" class="logo">
            <span>
                <b>Fast</b>
                Admin
            </span>
    </a>
    <nav>

      <div class="nav_content">
        <a href="#" class="menu_logo">
          <i class="iconfont icon-toggle"></i>
        </a>
        <ul class="nav">
          <li>
            <a href="#">
              <i class="iconfont icon-dashboard"></i>
              <span>控制台</span>
            </a>

          </li>
        </ul>
        <div class="custom_menu">
          <ul class="custom_menu_nav">
            <li>
              <a href="#" title="切换为二级菜单模式">
                <i class="iconfont icon-kaiguanguan-copy"></i>
              </a>
            </li>
            <li >
              <a href="#" title="相关链接" class="head_a" >
                <i class="iconfont icon-lianjie"></i>
              </a>
              <ul class="dropdown-menu"  >
                <li>
                  <a href="#">
                    <i class="iconfont icon-fangzi"></i>
                    FastAdmin官网首页
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="iconfont icon-yuan"></i>
                    前台会员中心
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="iconfont icon-yuan"></i>
                    CMS内容管理系统
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="iconfont icon-yuan"></i>
                    Blog响应式式博客
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="iconfont icon-yuan"></i>
                    Markdown文档生成
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="iconfont icon-yuan"></i>
                    个人免签收款
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="iconfont icon-yuan"></i>
                    API文档
                  </a>
                </li>

              </ul>
            </li>
            <li>
              <a href="#" >
                <i class="iconfont icon-fangzi"></i>
              </a>
            </li>
            <li>
              <a href="#" title="清空缓存" class="head_a" >
                <i class="iconfont icon-shanchu"></i>
              </a>
              <ul class="dropdown-menu " >
                <li>
                  <a href="#">
                    <i class="iconfont icon-shanchu"></i>
                    一键清除缓存
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">
                    <i class="iconfont icon-wendang"></i>
                    清空内容缓存
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="iconfont icon-wendang"></i>
                    清除模板缓存
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="iconfont icon-huojian"></i>
                    清除插件缓存
                  </a>
                </li>
              </ul>
            </li>
            <!--语言-->
            <li>
              <a href="#" class="head_a" >
                <i class="iconfont icon-yuyanqiehuan-"></i>
              </a>
              <ul class="dropdown-menu" >
                <li>
                  <a href="#">简体中文</a>
                </li>
                <li>
                  <a href="#">English</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" >
                <i class="iconfont icon-fangda"></i>
              </a>
            </li>
            <!--admin-->
            <li class="user_menu">
              <a href="#" class="head_a">
                <img src="../../assets/images/admin.png" alt="">
                <span>Admin</span>
              </a>
              <ul class="dropdown-menu" >
                <li class="user_header">
                  <img src="../../assets/images/admin.png" alt="">
                  <p>

                    Admin
                    <small>2018-11-05 10:26:58</small>
                  </p>
                </li>
                <li class="user_body">
                  <div class="row clearfix" >
                    <div class="user_body_content">
                      <a >FastAdmin</a>
                    </div>
                    <div class="user_body_content">
                      <a >交流社区</a>
                    </div>
                    <div class="user_body_content">
                      <a >官方文档</a>
                    </div>
                  </div>
                </li>
                <li class="user_footer clearfix">
                  <div class="pull_left">
                    <a href="#" class="btn btn_black">
                      <i class="iconfont icon-guanliyuan"></i>

                      个人配置
                    </a>
                  </div>
                  <div class="pull_right">
                    <a href="#" class="btn btn_red">
                      <i class="iconfont "></i>
                      注销
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" >
                <i class="iconfont icon-chilun-"  @click="headshow=!headshow"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <aside v-if="headshow" class="control-sidebar control-sidebar-dark control-sidebar-open" style="position: fixed; max-height: 100%; overflow: auto;">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li class="active"><a href="#control-sidebar-setting-tab" data-toggle="tab" aria-expanded="true"><img src="../../assets/images/cbl_1.jpg" class="fa fa-wrench"></a></li>
        <li class="homepage"><a href="#control-sidebar-home-tab" data-toggle="tab" aria-expanded="false"><img src="../../assets/images/cbl_2.jpg" class="fa fa-home"></a></li>
        <li class="setting"><a href="#control-sidebar-settings-tab" data-toggle="tab" aria-expanded="false"><img src="../../assets/images/cbl_3.jpg" class="fa fa-gears"></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane active" id="control-sidebar-setting-tab">
          <h4 class="control-sidebar-heading">布局设定</h4>
          <div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox" data-layout="fixed" class="pull-right" checked="checked"> 固定布局</label><p>盒子模型和固定布局不能同时启作用</p></div>
          <div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox" data-layout="layout-boxed" class="pull-right"> 盒子布局</label><p>盒子布局最大宽度将被限定为1250px</p></div>
          <div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox" data-layout="sidebar-collapse" class="pull-right"> 切换菜单栏</label><p>切换菜单栏的展示或收起</p></div>
          <div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox" data-enable="expandOnHover" class="pull-right"> 菜单栏自动展开</label><p>鼠标移到菜单栏自动展开</p></div>
          <div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox" data-menu="show-submenu" class="pull-right"> 显示菜单栏子菜单</label><p>菜单栏子菜单将始终显示</p></div>
          <div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox" data-menu="disable-top-badge" class="pull-right" checked="checked"> 禁用顶部彩色小角标</label><p>左边菜单栏的彩色小角标不受影响</p></div>
          <div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox" data-controlsidebar="control-sidebar-open" class="pull-right"> 切换右侧操作栏</label><p>切换右侧操作栏覆盖或独占</p></div>
          <div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox" data-sidebarskin="toggle" class="pull-right"> 切换右侧操作栏背景</label><p>将右侧操作栏背景亮色或深色切换</p></div>
          <h4 class="control-sidebar-heading">皮肤</h4>
          <ul class="list-unstyled clearfix skin-list">
            <li><a href="javascript:;" data-skin="skin-blue" style="" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9;"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;background: #367fa9"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div></a><p class="text-center no-margin">Blue</p></li>
            <li><a href="javascript:;" data-skin="skin-white" class="clearfix full-opacity-hover"><div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe;"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222;"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div></a><p class="text-center no-margin">White</p></li>
            <li><a href="javascript:;" data-skin="skin-purple" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;background: #555299" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;background: #555299"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div></a><p class="text-center no-margin">Purple</p></li>
            <li><a href="javascript:;" data-skin="skin-green" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;background-color: #18bc9c" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;background-color: #18bc9c"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div></a><p class="text-center no-margin">Green</p></li>
            <li><a href="javascript:;" data-skin="skin-red" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;background-color: #e74c3c" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;background-color: #e74c3c"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div></a><p class="text-center no-margin">Red</p></li>
            <li><a href="javascript:;" data-skin="skin-yellow" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;background-color: #f39c12" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;background-color: #f39c12"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div></a><p class="text-center no-margin">Yellow</p></li>
            <li><a href="javascript:;" data-skin="skin-blue-light" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9;"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;background-color: #3c8dbc"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Blue Light</p></li>
            <li><a href="javascript:;" data-skin="skin-white-light" class="clearfix full-opacity-hover"><div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe;"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div></a><p class="text-center no-margin" style="font-size: 12px">White Light</p></li>
            <li><a href="javascript:;" data-skin="skin-purple-light" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;background-color: #605ca8" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;    background-color: #605ca8"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Purple Light</p></li>
          </ul>
        </div>
        <!-- /.tab-pane -->
        <!-- Home tab content -->
        <div class="tab-pane" id="control-sidebar-home-tab">
          <h4 class="control-sidebar-heading">主页</h4>
        </div>
        <!-- /.tab-pane -->
        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <h4 class="control-sidebar-heading">配置</h4>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
  </header>
</template>

<script>
    export default {
        name: "HeadTop",
      data(){
          return{
              headshow:false
          }
      },

      created(){
          $(function () {
            $(".custom_menu_nav li").each(function () {
              $(this).click(function(){
                $(this).children(".dropdown-menu").toggle();
                $(this).siblings().children(".dropdown-menu").hide()
              })
            })

          })
      },

      updated(){
        $(function(){






          $("#control-sidebar-settings-tab").hide()
          $("#control-sidebar-home-tab").hide()
          $(".homepage").click(function(){
            $("#control-sidebar-setting-tab").hide()
            $("#control-sidebar-settings-tab").hide()
            $("#control-sidebar-home-tab").show()
          })
          $(".setting").click(function(){
            $("#control-sidebar-setting-tab").hide()
            $("#control-sidebar-home-tab").hide()
            $("#control-sidebar-settings-tab").show()
          })
          $(".active").click(function(){
            $("#control-sidebar-setting-tab").show()
            $("#control-sidebar-settings-tab").hide()
            $("#control-sidebar-home-tab").hide()
          })
        })
      }
    }
</script>

<style scoped>

  /*.rightMenu{*/
    /*margin-top: 50px;*/
    /*margin-left: 234px;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*background-color: red;*/
  /*}*/
  header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: #fff;
    max-height: 100px;
    z-index: 1030;

  }
  /*header i{*/
    /*font-size:20px;*/
  /*}*/
  header .logo{
    background-color: #15a589;
    color: #fff;
    border-bottom: 0 solid transparent;
    display: block;
    float: left;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: 230px;
    padding: 0 15px;
    font-weight: 300;
    overflow: hidden;
  }
  nav{
    position: relative;
    margin-bottom: 0;
    margin-left: 230px;
    border: none;
    min-height: 50px;
    border-radius: 0;
    background-color: #18bc9c;
  }
  .nav_content{
    height: 50px;
    border-bottom: 1px solid transparent;
    box-shadow: 0 1px 4px rgba(0,21,41,0.08);
    position: relative;
  }
  .menu_logo{
    position: absolute;
    width: 45px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    padding: 0;
    color: #fff;
    float:left;
  }
  nav .nav{
    position: absolute;
    left: 45px;
    z-index: 98;
    height: 100%;

  }
  .nav li{
    float: left;
    position: relative;
  }
  .nav li a{
    display: inline-block;
    background: rgba(0,0,0,0.1);
    color: #f6f6f6;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    border-radius: 0;
    border: none;
    border-right: 1px solid rgba(0,0,0,0.05);
    overflow: hidden;
  }
  .custom_menu{
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    background: transparent;
    float: right;
  }
  .custom_menu_nav{
    height: 100%;
    float: left;
  }
  .custom_menu_nav>li{
    height: 100%;
    float: left;
    position: relative;
  }
  .custom_menu_nav>li>a{
    position: relative;
    display: block;
    padding: 16px 15px;
    color: #fff;
  }
  .custom_menu_nav>li:hover{
    background: rgba(0,0,0,0.1);
  }
  .custom_menu_nav img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: -2px;
    vertical-align: middle;
  }



  .dropdown-menu{
    position: absolute;
    right: 0;
    left: auto;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 12px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .dropdown-menu>li>a{
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.42857143;
    color: #333333;
    white-space: nowrap;
  }
  .dropdown-menu .divider{
    height: 1px;
    margin: 7.5px 0;
    overflow: hidden;
    background-color: #eee;
  }
  .user_header{
    height: 175px;
    padding: 10px;
    text-align: center;
    background-color: #18bc9c;
  }
  .user_header img{
    z-index: 5;
    height: 90px;
    width: 90px;
    border: 3px solid;
    border-radius: 50%;
    border-color: rgba(255,255,255,0.2);
  }
  .user_header p{
    z-index: 5;
    color: rgba(255,255,255,0.8);
    font-size: 17px;
    margin-top: 10px;
    /*margin: 0 0 8.5px;*/
  }
  .user_header p small{
    display: block;
    font-size: 12px;
  }
  .user_body{
    padding: 15px;
    border-bottom: 1px solid #f4f4f4;
    border-top: 1px solid #dddddd;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .user_body_content{
    width: 33.33333333%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
  }
  .user_body_content a{
    color: #444 !important;
    background-color: transparent;
  }
  .user_footer{
    background-color: #f9f9f9;
    padding: 10px;
  }
  .user_footer .pull_left{
    float: left;
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
  .btn_black{
    color: #fff;
    background-color: #2c3e50;
  }
  .btn_red{
    color: #fff;
    background-color: #e74c3c;
  }
  .pull_right{
    float: right;
  }
  .user_menu .dropdown-menu{
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 1px 0 0 0;
    border-top-width: 0;
    width: 280px;
  }
  .row{
    margin-left: -15px;
    margin-right: -15px;
  }

  /*侧边栏*/
  .control-sidebar-subheading {
    display: block;
    font-weight: 400;
    font-size: 14px;
  }


  .control-sidebar{
    /*display: none;*/
    width: 230px;
    box-sizing: border-box;
    position: fixed;
    max-height: 100%;
    overflow: auto;
    background: #222d32;
    right:0;
    /* padding-top: 50px; */
    z-index: 1010;
    color: #b8c7ce;
  }
  .control-sidebar-dark .nav-tabs.control-sidebar-tabs {
    border-bottom: #1c2529;
  }
  .nav-tabs.nav-justified {
    width: 100%;
    border-bottom: 0;
    height: 40px;

  }
  .nav-tabs {
    border-bottom: 1px solid #ddd;
    display: flex;
  }
  .nav-tabs li{
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #181f23;
  }
  .nav-tabs .active{
    background: #222d32;
    border: none!important;
  }
  .nav-tabs.control-sidebar-tabs > li , .nav-tabs.control-sidebar-tabs > li > :hover {
    border-top: none;
    border-right: none;
    border-left: 1px solid #141a1d;
    border-bottom: 1px solid #141a1d;
  }
  .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li , .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li  :hover, .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li :focus {
    border-left-color: #141a1d;
    border-bottom-color: #141a1d;
  }
  .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li > a {
    background: #181f23;
    color: #b8c7ce;
  }
  sidebar-dark {
    color: #b8c7ce;
  }
  .control-sidebar-heading {
    font-weight: 400;
    font-size: 16px;
    padding: 10px 0;
    margin-bottom: 10px;
  }
  .control-sidebar-dark .control-sidebar-heading, .control-sidebar-dark .control-sidebar-subheading {
    color: #fff;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .pull-right {
    float: right !important;
  }
  .control-sidebar > .tab-content {
    padding: 10px 15px;
  }
  .skin-list li {
    float: left;
    width: 33.33333%;
    padding: 5px;
  }
  .skin-list li a {
    display: block;
    box-shadow: 0 0 3px rgba(0,0,0,0.4);
  }
</style>
