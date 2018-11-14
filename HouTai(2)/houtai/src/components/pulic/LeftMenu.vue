
  <template>
    <!--左侧菜单栏-->
    <div class="bottomMenu">
      <div class="f-leftContent">
        <!-- user -->
        <div class="f-userLogin">
          <img src="../../assets/images/avatar.png" alt="">
          <div class="f-user">
            <h5>Admin</h5>
            <h6 class="f-statu">
              <i class="iconfont icon-yuan"></i>
              在线
            </h6>
          </div>
        </div>
        <!-- 搜索框-->
        <div class="f-seach">
          <input type="text" placeholder="搜索菜单" class="f-seachMenu">
          <button class="f-searchBtn"><i class="iconfont icon-sousuo"></i></button>
        </div>
        <!-- 菜单 -->
        <ul class="f-MenuLists">
          <li class="fDashBoard">
            <div>
             <router-link to="/Consoleindex">
               <i class="iconfont icon-dashboard"></i>
              控制台
              <span class="f-hot">hot</span>
             </router-link>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-chilun-"></i>
              常规管理
              <span class="f-new">new</span>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-caidan"></i>
              分类管理
            </div>
          </li>
          <li >
            <div @click="QXshowf">
              <i class="iconfont icon-sangeren"></i>
              权限管理
              <i class="iconfont icon-xiaoyu"></i>
            </div>
            <ul class="fmanageLists" v-show="QXshow">
              <li>
                <a href="#">
                  <i class="iconfont icon-guanliyuan"></i>
                  管理员管理
                </a>
              </li>
              <li><a href="#">
                <i class="iconfont icon-rizhi"></i>
                管理员日志</a>
              </li>
              <li><a href="#">
                <i class="iconfont icon-sangeren"></i>
                角色组</a>
              </li>
              <li><a href="#">
                <i class="iconfont icon-caidan" style="font-size:12px"></i>
                菜单规则
                <span class="f-new">菜单</span></a>
              </li>
            </ul>
          </li>
          <li>
            <div>
              <i class="iconfont icon-huojian"></i>
              插件管理
              <span class="f-Mnew">hot</span>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-wendangdocument80"></i>
              文档管理
            </div>
          </li>
          <li >
            <div @click="BKshowf">
              <i class="iconfont icon-caidan"></i>
              博客管理
              <i class="iconfont icon-xiaoyu"></i>
            </div>
            <ul class="fmanageLists" v-show="BKshow" >
              <li><router-link to="/elm"><a href="">
                <i class="iconfont icon-liujiaoxing-菜单"></i>
                日志管理</a></router-link>
              </li>
              <li> <router-link to="/esm">
                <a href=""><i class="iconfont icon-菜单"></i> 分类管理</a>
              </router-link>
              </li>
              <li><router-link to="/ecm"><a href="">
                <i class="iconfont icon-pinglun"></i>
                评论管理</a></router-link>
              </li>
            </ul>
          </li>
          <!--<li class="fMoneyManage" >-->
            <!--<div  @click="GRshowf">-->
              <!--<i class="iconfont icon-jiage-copy"></i>-->
              <!--个人收款管理-->
              <!--<i class="iconfont icon-xiaoyu"></i>-->
            <!--</div>-->
            <!--<ul class="fmanageLists" v-show="GRshow" >-->
              <!--<li><a href="">-->
                <!--<i class="iconfont icon-liujiaoxing-quanman"></i>-->
                <!--订单管理</a>-->
              <!--</li>-->
              <!--<li><a href="">-->
                <!--<i class="iconfont icon-erweima"></i>-->
                <!--二维码管理</a>-->
              <!--</li>-->
              <!--<li><a href="">-->
                <!--<i class="iconfont icon-P"></i>-->
                <!--产品管理</a>-->
              <!--</li>-->
              <!--<li><a href="">-->
                <!--<i class="iconfont icon-tongji"></i>-->
                <!--统计管理</a>-->
              <!--</li>-->
              <!--<li><a href="">-->
                <!--<i class="iconfont icon-loudou"></i>-->
                <!--漏单管理</a>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</li>-->
          <li class="fMoneyManage" >
            <div  @click="GRshowf">
              <i class="iconfont icon-jiage-copy"></i>
              个人收款管理
              <i class="iconfont icon-xiaoyu"></i>
            </div>
            <ul class="fmanageLists" v-show="GRshow" >
              <li>
                <router-link to="/om">
                  <i class="iconfont icon-liujiaoxing-quanman"></i>
                  订单管理
                </router-link>
              </li>
              <li><router-link to="/qm">
                <i class="iconfont icon-erweima"></i>
                二维码管理</router-link>
              </li>
              <li><router-link to="/pm">
                <i class="iconfont icon-P"></i>
                产品管理</router-link>
              </li>
              <li><a href="">
                <i class="iconfont icon-tongji"></i>
                统计管理</a>
              </li>
              <li><a href="">
                <i class="iconfont icon-loudou"></i>
                漏单管理</a>
              </li>
            </ul>
          </li>
          <li >
            <div @click="HYshowf">
              <i class="iconfont icon-caidan"></i>
              会员管理
              <i class="iconfont icon-xiaoyu"></i>
            </div>
            <ul class="fmanageLists" v-show="HYshow" >
              <li>
                <router-link to="/MemMa">
                <i class="iconfont icon-guanliyuan"></i>
                会员管理
                </router-link>
              </li>
              <li><a >
                <i class="iconfont icon-sangeren"></i>
                会员分组</a>
              </li>
              <li><a >
                <i class="iconfont icon-circle"></i>
                会员规则</a>
              </li>
            </ul>
          </li>
          <li >
            <div  @click="PLshowf">
              <i class="iconfont icon-pinglun1"></i>
              评论管理
              <i class="iconfont icon-xiaoyu"></i>
            </div>
            <ul class="fmanageLists" v-show="PLshow">
              <li><a >
                <i class="iconfont icon-liujiaoxing-pinglun"></i>
                评论管理</a>
              </li>
              <li><a >
                <i class="iconfont icon-caidan"></i>
                站点管理</a>
              </li>
              <li> <a >
                <i class="iconfont icon-yuan"></i>
                文章管理</a>
              </li>
              <li><a >
                <i class="iconfont icon-tongji"></i>
                统计管理</a>
              </li>
              <li><a >
                <i class="iconfont icon-yuan"></i>
                举报管理</a>
              </li>
            </ul>
          </li>
          <li >
            <div @click="SLshowf">
              <i class="iconfont icon-magic"></i>
              示例管理
              <i class="iconfont icon-xiaoyu"></i>
            </div>
            <ul class="fmanageLists" v-show="SLshow" >
              <li><a href="#">
                <i class="iconfont icon-biaoge"></i>
                自定义搜索</a>
              </li>
              <li><a href="#">
                <i class="iconfont icon-biaoge"></i>
                表格完整实例</a>
              </li>
              <li><a href="#">
                <i class="iconfont icon-biaoge"></i>
                彩色角标</a>
              </li>
              <li>
                <i class="iconfont icon-biaoge"></i>
                控制器间跳转
              </li>
              <li>
                <i class="iconfont icon-biaoge"></i>
                多级联动
              </li>
              <li>
                <i class="iconfont icon-biaoge"></i>
                多表格示例
              </li>
              <li>
                <i class="iconfont icon-biaoge"></i>
                多关联势力
              </li>
              <li>
                <i class="iconfont icon-biaoge"></i>
                表格模版示例
              </li>
              <li>
                <i class="iconfont icon-ditu"></i>
                百度地图示例
              </li>
            </ul>
          </li>
          <li class="fCMS" >
            <div @click="CMSshowf">
              <i class="iconfont icon-caidan"></i>
              CMS管理
              <i class="iconfont icon-xiaoyu"></i>
            </div>
            <ul class="fmanageLists" v-show="CMSshow" >

              <li>
                <router-link to="/CmsCustom">
                  <i class="iconfont icon-liujiaoxing-quanman"></i>
                    自定义表单管理
                </router-link>
              </li>

              <li>
                <router-link to="/CmsContent">
                  <i class="iconfont icon-erweima"></i>
                  订单管理
                </router-link>
              </li>
              <li><a >
                <i class="iconfont icon-P"></i>
                产品管理</a>
              </li>
              <li><a >
                <i class="iconfont icon-tongji"></i>
                统计管理</a>
              </li>
              <li><a >
                <i class="iconfont icon-loudou"></i>
                漏单管理</a>
              </li>
            </ul>
          </li>
          <li>
            <div>
              <i class="iconfont icon-wenjian"></i>
              文件管理
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-rili"></i>
              日历管理
            </div>
          </li>
          <li  >
            <div @click="WXshowf" >
              <i class="iconfont icon-weixin"></i>
              微信管理
              <i class="iconfont icon-xiaoyu"></i>
            </div>
            <ul class="fmanageLists" v-show="WXshow">

              <li><router-link to="/weChats">
                <i class="iconfont icon-liujiaoxing-quanman"></i>
                自动回复管理</router-link>
              </li>
              <li>
                <i class="iconfont icon-erweima"></i>
                配置管理
              </li>
              <li><a href="#">
                <i class="iconfont icon-caidan"></i>
                菜单</a>
              </li>
              <li><a href="#">
                <i class="iconfont icon-tongji"></i>
                资源管理</a>
              </li>
            </ul>
          </li>
        </ul>
        <!--相关链接-->
        <div class="relatedLinks">
          <h6 class="relatedetitle">相关链接</h6>
          <ul  class="f-MenuLists">
            <li>
              <div>
                <i class="iconfont icon-caidan fmenu"></i>
                官方文档
              </div>
            </li>
            <li>
              <div>
                <i class="iconfont icon-pinglun1 fchatting"></i>
                交流社区
              </div>
            </li>
            <li>
              <div>
                <i class="iconfont icon-qq  fqq"></i>
                QQ交流群
              </div>
            </li>
          </ul>

        </div>
      </div>
      <div class="rightMenu">
        <router-view></router-view>
      </div>
    </div>

  </template>

  <script>
    export default {
      name: "commenMenu",
      data() {
        return {
          QXshow: false,
          BKshow: false,
          GRshow: false,
          HYshow: false,
          PLshow: false,
          SLshow: false,
          CMSshow: false,
          WXshow: false
        };
      },
      methods: {
        QXshowf() {
          this.QXshow = !this.QXshow;
        },
        BKshowf() {
          this.BKshow = !this.BKshow;
        },
        GRshowf() {
          this.GRshow = !this.GRshow;
        },
        SLshowf() {
          this.SLshow = !this.SLshow;
        },
        HYshowf() {
          this.HYshow = !this.HYshow;
        },
        PLshowf() {
          this.PLshow = !this.PLshow;
        },
        CMSshowf() {
          this.CMSshow = !this.CMSshow;
        },
        WXshowf() {
          this.WXshow = !this.WXshow;
          console.log(1);
          console.log(this.WXshow);
        }
      }
    };
  </script>

  <style scoped>

    .bottomMenu{
      height: 100%;

    }
    .rightMenu{

      height: 100%;
      margin-left: 240px;
    }
    a{
      color: #b8c7ce;
    }
    .fmanageLists a{
      width: 100%;
      height: 100%;
      display: block;
    }
    /* 左侧菜单 */
    .f-leftContent{
      width: 240px;
      position:fixed;
      top:50px;
      height: 100%;
      background: #222d32;
      overflow-y: scroll;
    }
    .f-leftContent::-webkit-scrollbar{

      height:0;
    }
    .f-userLogin{
      height: 45px;
      width: 200px;
      display: flex;
      padding: 10px 15px;
      margin-bottom: 20px;
    }
    .f-userLogin img{
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-right: 15px;
    }
    .f-user h5{
      color: #fff;
    }
    .f-statu .icon-yuan{
      color: #18bc9c;
      padding-right: 3px;
      font-size: 13px;
    }
    .f-statu{
      margin-top: 5px;
    }

    /* 搜索框 */
    .f-seach{
      /*width: 220px;*/
      width: 100%;
      overflow: hidden;
      margin: 10px auto;
    }
    .f-seachMenu{
      width: 170px;
      height: 35px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      background: #374850;
      float: left;
      outline: none;
      border: 0;
      text-indent:15px;
      margin-left: 10px;
    }
    .f-searchBtn{
      float: left;
      width: 40px;
      height: 35px;
      background: #374850;
      font-size: 12px;
      color: #555555;
      outline: none;
      border: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    /* 菜单 */
    .f-MenuLists{
      background-color: #222d32;
    }
    ul.f-MenuLists li:hover{
        color:#fff;
       background-color: #1e282c;

    }
    .f-MenuLists a:hover{
      color:#fff;
    }
    .f-MenuLists li div{
      line-height: 35px;
      margin-left: 20px;
      color: #b8c7ce;
      font-size: 12px;
      cursor: pointer;
      box-sizing: border-box;

    }
    ul.f-MenuLists li div>i{
      font-size: 12px;
      margin-right: 10px;
    }

    .f-MenuLists  .icon-xiaoyu{
      padding-left: 105px;
    }
    .f-MenuLists .fMoneyManage div >i.icon-xiaoyu{
      padding-left: 85px;
    }
    .fCMS i.icon-xiaoyu{
      padding-left: 98px;
    }
    .f-hot{
      display: inline-block;
      background-color: #0073b7;
      width: 33px;
      height: 18px;
      border-radius: 4px;
      text-align: center;
      vertical-align: middle;
      line-height: 18px;
      margin-left: 100px;
      color: #fff;
      font-weight: 600;
    }
    .f-new{
      display: inline-block;
      background-color: #605ca8;
      width: 38px;
      height: 18px;
      border-radius: 4px;
      text-align: center;
      vertical-align: middle;
      line-height: 18px;
      margin-left: 85px;
      color: #fff;
      font-weight: 600;
    }
    .f-Mnew{
      display: inline-block;
      background-color: #e74c3c;
      width: 33px;
      height: 18px;
      border-radius: 8px;
      text-align: center;
      vertical-align: middle;
      line-height: 18px;
      margin-left: 90px;
      color: #fff;
      font-weight: 600;
    }
    .fmanageLists{
      /*width: 230px;*/
      width: 100%;
      line-height: 35px;
      color: #8aa4af;
      font-size: 12px;
      cursor: pointer;
      background-color: #2c3b41;
    }

    .fmanageLists >li:hover{
      background-color: #1e282c;

    }

    .fmanageLists li i{
      font-size: 12px;
    }


    /* 相关链接 */

    .relatedLinks{
      margin-bottom: 50px;
    }

    .relatedetitle{
      width: 230px;
      line-height: 35px;
      font-size: 12px;
      color: #4b646f;
      background-color: #1a2226;
      padding-left:  15px;
    }


    .fmenu{
      color: #e74c3c ;
    }

    .fchatting{
      color: #f39c12 ;
    }
    .fqq{
      color: #3498db ;
    }

  </style>

