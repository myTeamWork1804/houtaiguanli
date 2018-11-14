<template>
  <div>
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
              角色组
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              用户名
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              昵称
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner th_bg">
              电子邮箱
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner th_bg">
              手机号
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              头像
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              等级
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              积分
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              登陆时间
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              登录ip
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              加入时间
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              加入ip
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
        <tr class="trid" v-for="(i,index) in message" >
          <td >
            <div class="th_inner th_one" >
              <input type="checkbox" />
            </div>
          </td>

          <td >{{i.id}}</td>
          <td >{{i.c_charcter}}</td>
          <td >{{i.c_name}}</td>
          <td >{{i.c_nickname}}</td>
          <td >{{i.c_email}}</td>
          <td >{{i.c_phone}}</td>
          <td >
            <a href="#" target="_blank">
              <img class="img-sm img-center" :src=i.table_pic />
            </a>
          </td>
          <td >{{i.c_level}}</td>
          <td >{{i.c_grade}}</td>
          <td >{{i.c_logintime}}</td>
          <td >
              <a href="javascript:;" class="searchit" data-toggle="tooltip" title="" data-field="loginip" data-value="113.78.13.118" data-original-title="点击搜索 113.78.13.118">{{i.c_loginip}}</a>
          </td>
          <td >{{i.c_jointime}}</td>
          <td ><a href="javascript:;" class="searchit" data-toggle="tooltip" title="" data-field="joinip" data-value="113.78.13.118" data-original-title="点击搜索 113.78.13.118">{{i.c_joinip}}</a></td>

          <td>
            <a href="#" >
                <span class="text_green">
                    <i class="iconfont  icon-yuan"></i>
                     {{i.c_status_normal}}
                </span>
            </a>
          </td>
          <td>
            <a href="#" class="a_btn btn_green" @click="show(index)">
              <i class="iconfont  icon-edit"></i>

            </a>
            <a href="#" class="a_btn btn_red a_shanchu" @click="dle(index)">
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
  </div>
</template>

<script>
  import bus from "../../../assets/js/eventBus"
    export default {
        name: "MemMaFour",
        data(){
          return{
              flag:false,
              message:[],

          }
        },
      methods:{
          show(i){
            // 发送编辑的id
              bus.$emit("reviseIndex",i)
              console.log(i)
              bus.$emit("userDefinedEvent","true");
              bus.$emit("megEvent",this.message);

          },
          // 页面six
          dle(i){
            bus.$emit("deleteEvent","true")
            // 发送要删除的id
            bus.$emit("deleteIndex",i)
          }


      },
      mounted(){
          // 获取数据
        this.$axios.get("http://localhost:3000/MemMa").then(res=>{

          var data=res.data
          console.log(data)
            this.message=data;

        })

      },
      updated(){
        bus.$on("dataEvent",(msg)=>{
          this.message=msg
          console.log(msg)
        })
        // 接收删除后的数据
        bus.$on("deletedata",(msg)=>{
          this.message=msg
          console.log(msg)
        })

      }
    }
</script>

<style scoped>
.trid img{
  width: 30px;
  height: 30px;;
}
.iconfont{
  font-size:12px;
}
</style>
