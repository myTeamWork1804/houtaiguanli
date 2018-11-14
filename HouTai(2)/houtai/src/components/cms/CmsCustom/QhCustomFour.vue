<template>
  <!--页面-->
  <div>
    <div class="table_container">
    <div class="table_content">
      <table class="table">
        <thead>
        <tr>
          <th class="th_checkbox" style="width: 36px">
            <div class="th_inner th_one" >
              <input type="checkbox" v-model="checked" @click="checkedAll"/>
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
        <tr class="trid" v-for="(i,index) in message" >
          <td >
            <div class="th_inner th_one" >
              <input type="checkbox" v-model="checked"/>
            </div>
          </td>
          <td class="td_id">{{index+1}}</td>
          <td>{{i.c_name}}</td>
          <td>{{i.c_title}}</td>
          <td>{{i.c_table}}</td>
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
                     {{i.status_normal}}
                </span>
            </a>
          </td>
          <td>
            <a href="#" class="a_btn btn_green" @click="show(index)">
              <i class="iconfont  icon-edit"></i>

            </a>
            <a href="#" class="a_btn btn_red a_shanchu" @click="dle(index)" >
              <i class="iconfont  icon-shanchu"></i>

            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="table_pagination">
      <span class="pagination_info">显示第 1 到第 1 条记录，总共 1条记录</span>
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
        name: "QhCustomFour",
        data(){
          return{
              flag:false,
              message:[],
              checked:false
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

            // let left1= $(this).offset().left-30;
            // let top1 = $(this).offset().top;
            // console.log(left1,top1)
            // $(".delete").css({
            //   "left":left1-230+'px',
            //   "top":top1+'px'
            // })


          },

          checkedAll(){
              if(this.checked){
                this.checked=true
              }else{
                this.checked=false
              }

          },


      },
      created(){

      },
      mounted(){
          // 获取数据
        this.$axios.get("http://localhost:3000/CmsCustom").then(res=>{

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
        //接受修改后的数据
        bus.$on("editItemData",(msg)=>{
          this.message=msg
          console.log(msg)
        })


      }
    }
</script>

<style scoped>
  .iconfont{
    font-size:12px;
  }

</style>
