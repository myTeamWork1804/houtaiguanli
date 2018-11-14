<template>
    <div class="revise" v-if="flag">
        <h3 class="revise_title" >编辑</h3>
        <div class="qh_content qh_content_scroll">
          <form action="">
              <div class="form-group clearfix">
                <label for="c_name" class="label_form width_16">名称:</label>
                <div class="input_box">
                  <input type="text" id="c_name" class="form_input"   :value="datas[index].c_name" />
                </div>
              </div>
            <div class="form-group clearfix">
              <label for="c_title" class="label_form width_16">标题:</label>
              <div class="input_box">
                <input type="text"  id="c_title" class="form_input"  :value="datas[index].c_title">
              </div>
            </div>
            <div class="form-group clearfix">
              <label for="c_table" class="label_form width_16">表名:</label>
              <div class="input_box">
                <input type="text"  id="c_table" class="form_input" :value="datas[index].c_table">
              </div>
            </div>
            <div class="form-group clearfix">
              <label for="c_diyname" class="label_form width_16">自定义名称:</label>
              <div class="input_box">
                <input type="text"  id="c_diyname" class="form_input" :value="datas[index].c_diyname">
              </div>
            </div>
            <div class="form-group clearfix">
              <label for="c_keywords" class="label_form width_16">关键字:</label>
              <div class="input_box">
                <input type="text"  id="c_keywords" class="form_input" :value="datas[index].c_keywords">
              </div>
            </div>
            <div class="form-group clearfix">
              <label for="c_description" class="label_form width_16">描述:</label>
              <div class="input_box">
                <textarea  id="c_description" class=" textarea_input" cols="60" rows="5">{{datas[index].c_description}}</textarea>
              </div>
            </div>
            <div class="form-group clearfix">
              <label for="c_successtips" class="label_form width_16">成功提交提示文字:</label>
              <div class="input_box">
                <textarea  id="c_successtips" class=" textarea_input" cols="60" rows="5">{{datas[index].c_successtips}}</textarea>
              </div>
            </div>
            <div class="form-group clearfix">
              <label for="c_module" class="label_form width_16">表单模板:</label>
              <div class="input_box">
                <input type="text"  id="c_module" class="form_input" :value="datas[index].c_module">
              </div>
            </div>
            <div class="form-group clearfix">
              <label  class="label_form width_16">是否需要登录:</label>
              <div class="input_box">
                <a href="#">
                    <i class="iconfont icon-kaiguanguan-copy icon_kaiguan"></i>
                </a>
              </div>
            </div>
            <div class="form-group clearfix">
              <label  class="label_form width_16">状态:</label>
              <div class="input_box">
                <div class="radio">
                  <label for="status_normal">
                    <input type="radio" id="status_normal" name="status">
                    正常
                  </label>
                  <label for="status_hidden">
                    <input type="radio" id="status_hidden" name="status">
                    隐藏
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="revise_footer">
          <div class="form-group clearfix">
            <label  class="label_form width_16"></label>
            <div class="input_box">
              <button type="submit" class="btn btn_green" @click="editItem">确定</button>
              <button type="submit" class="btn ">重置</button>
            </div>
          </div>
        </div>
        <span class="revise_setwin">
            <i class="iconfont icon--hao suoxiao"></i>
            <i class="iconfont icon-fangda1 fangda1"></i>
            <i class="iconfont icon-cuo cuo" @click="flag=!flag"></i>
        </span>
    </div>
</template>

<script>
  // 编辑
  import bus from "../../../assets/js/eventBus"
    export default {
      name: "QhCustomSeven",
      data() {
        return {
          flag: false,
          datas: [],
          index: 0
        }
      },
      methods: {

        editItem: function () {
          let c_name = document.getElementById("c_name").value;
          let c_title = document.getElementById("c_title").value;
          let c_table = document.getElementById("c_table").value;
          let c_diyname = document.getElementById("c_diyname").value;
          let c_keywords = document.getElementById("c_keywords").value;
          let c_description = document.getElementById("c_description").value;
          let c_successtips = document.getElementById("c_successtips").value;
          let c_module = document.getElementById("c_module").value;
          // let paymothods = document.getElementById("paymothods").value;

          let content = "c_name=" + c_name + "&c_title=" + c_title + "&c_table=" + c_table + "&c_diyname=" + c_diyname + "&c_keywords=" + c_keywords + "&c_description=" + c_description + "&c_successtips=" + c_successtips + "&c_module=" + c_module;

          fetch('http://localhost:3000/api/CmsCustom/update?id=' + this.index, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: content
          }).then(res => {
            res.json().then(data => {
              console.log(data)
              this.datas=data
              bus.$emit("editItemData",this.datas);
              this.flag=false;
            })
          });
        }
      },
        mounted() {
          bus.$on("userDefinedEvent", (msg) => {
            this.flag = msg
             console.log(msg)
          }),
            //接受数据
            bus.$on("megEvent", (msg) => {
              this.datas = msg
              console.log(this.datas)
            })


          // 子子接受id
          bus.$on("reviseIndex", (msg) => {
            this.index = msg;
            console.log("index:" + msg)
          })

        },
        updated() {
          $(function () {
            if (this.flag = true) {
              $('.revise_title').mousedown(function (e) {
                // e.pageX
                let positionDiv = $(this).offset();
                let distenceX = e.pageX - positionDiv.left;
                let distenceY = e.pageY - positionDiv.top;
                //alert(distenceX)
                // alert(positionDiv.left);
                $(document).mousemove(function (e) {
                  let x = e.pageX - distenceX;
                  let y = e.pageY - distenceY;
                  if (x < 0) {
                    x = 0;
                  } else if (x > $(document).width() - $('.revise_title').outerWidth(true)) {
                    x = $(document).width() - $('.revise_title').outerWidth(true);
                  }
                  if (y < 0) {
                    y = 0;
                  } else if (y > $(document).height() - $('.revise_title').outerHeight(true)) {
                    y = $(document).height() - $('.revise_title').outerHeight(true);
                  }
                  $('.revise').css({
                    'margin': "initial",
                    'left': x + 'px',
                    'top': y + 'px'
                  });
                  $('.suoxiao2').css({
                    'margin': "initial",
                    'left': x + 'px',
                    'top': y + 'px'
                  });
                });
                $(document).mouseup(function () {
                  $(document).off('mousemove');
                });
              });


            }
            // fangda
            $(".fangda1").click(function () {

              if ($(this).parent().parent().hasClass("revise")) {
                $(this).parent().parent().toggleClass("fangda2")
                $(this).parent().parent().removeClass("fangda3")
                $(this).prev().toggle()
              }
              if ($(this).parent().parent().hasClass("suoxiao2")) {
                $(this).parent().parent().toggleClass("fangda3")
                $(this).prev().toggle()
              }

              $(this).parent().parent().addClass("revise")
              $(this).parent().parent().removeClass("suoxiao2")
              $(".revise_title").next().show().next().show()
            })
            $(".suoxiao").click(function () {
              $(this).hide()
              $(this).parent().parent().removeClass("revise")
              $(this).parent().parent().addClass("suoxiao2")
              $(".revise_title").next().hide().next().hide()
            })
          })

        }


    }
</script>

<style scoped>
  .iconfont{
    font-size:12px;
  }
  .qh_content_scroll{
    flex:1;
    overflow-y: scroll;
    width: 100%;
  }
  .revise{
    /*display:none;*/
    /*visibility: hidden;*/
    position: fixed;
    z-index: 100000;
    width: 800px;
    height:80%;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin: auto;
    border: none ;
    box-shadow: 1px 1px 50px rgba(0,0,0,0.3) ;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
.revise h3{
  height: 42px;
}

  .form-group{
    margin-left: -15px;
    margin-right: -15px;
    margin-bottom: 15px;
  }
  .label_form{
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    float:left;
  }
  .width_16{
    width: 16.66666667%;
  }
  .textarea_input{
    display: inline-block;
    width: 100%;
    padding: 6px 12px;
    font-size: 12px;
    line-height: 1.42857143;
    color: #555555;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .icon_kaiguan{
    color: #d2d6de ;
    font-size:26px;
  }
  .radio{
    position: relative;
    display: block;
    min-height: 24px;
    padding-top: 7px;
  }
  .radio>label{
    margin-right: 10px;
    padding-left: 20px;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;
  }
  .revise_setwin{
    position: absolute;
    right: 15px;
    top: 0;
    height: 42px;
  }
  .revise_setwin i{
    position: relative;
    width: 16px;
    height: 42px;
    line-height: 42px;
    display: inline-block;
    margin-left: 10px;
    font-size: 12px;
    color:#fff;
  }
  .revise_setwin .fangda1{
    font-size:18px;
    vertical-align: middle;
  }
  .revise_setwin .cuo{
    font-size:10px;
  }
  .revise_setwin i{
    cursor: pointer;
  }
  .revise_footer{
    padding: 10px ;
    background: #ecf0f1;
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
    height:51px;
  }
  /*屏幕缩放*/
  .fangda2{
    width: 100%;
    height:100%;
    right:0 !important;
    top:0 !important;
  }
  .fangda3{
    width: 800px;
    height:95%;
  }
  /*屏幕缩小*/
  .suoxiao2{
    position: fixed;
    z-index: 100000;
    left:0;
    bottom:0;
    width: 180px;
    height:42px;
    border: none ;
    box-shadow: 1px 1px 50px rgba(0,0,0,0.3) ;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
</style>
