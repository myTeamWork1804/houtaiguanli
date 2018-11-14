<template>
    <div class="revise" v-if="flag">
        <h3 class="revise_title" >编辑</h3>
        <div class="mm_content mm_content_scroll">
          <form action="">

              <div class="form-group clearfix">
                <label for="c_chra" class="label_form width_16">角色组:</label>
                <div class="input_box">
                  <input type="text"  id="c_chra" class="form_input"  :value="datas[index].c_chra">
                </div>
              </div>
            <div class="form-group clearfix">
              <label for="c_name" class="label_form width_16">用户名:</label>
              <div class="input_box">
                <input type="text" id="c_name" class="form_input"  :value="datas[index].c_name">
              </div>
            </div>
            <div class="form-group clearfix">
              <label for="c_nick" class="label_form width_16">昵称:</label>
              <div class="input_box">
                <input type="text" id="c_nick" class="form_input"  :value="datas[index].c_nick">
              </div>
            </div>
            <!-- <div class="form-group clearfix">
              <label for="c_pass" class="label_form width_16">密码:</label>
              <div class="input_box">
                <input type="text" id="c_pass" class="form_input"  :value="datas[index].c_pass">
              </div>
            </div> -->
            <div class="form-group clearfix">
              <label for="c_email" class="label_form width_16">电子邮箱:</label>
              <div class="input_box">
                <input type="text"  id="c_email" class="form_input"  :value="datas[index].c_email">
              </div>
            </div>
            <div class="form-group clearfix">
              <label for="c_phone" class="label_form width_16">手机号:</label>
              <div class="input_box">
                <input type="text"  id="c_phone" class="form_input"  :value="datas[index].c_phone">
              </div>
            </div>
            <div class="form-group clearfix">
                <label for="c_level" class="label_form width_16">等级:</label>
                <div class="input_box">
                  <input type="text"  id="c_level" class="form_input"  :value="datas[index].c_level">
                </div>
              </div>
            <div class="form-group clearfix">
              <label  class="label_form width_16">性别:</label>
              <div class="input_box">
                <div class="radio">
                  <label for="status_normal">
                    <input type="radio" id="man" name="status">
                    男
                  </label>
                  <label for="status_hidden">
                    <input type="radio" id="woman" name="status">
                    女
                  </label>
                </div>
              </div>
            </div>
              <!-- <div class="form-group clearfix">
                <label for="c_birth" class="label_form width_16">生日:</label>
                <div class="input_box">
                  <input type="text"  id="c_birth" class="form_input"  :value="datas[index].c_birth">
                </div>
              </div>
              <div class="form-group clearfix">
                <label for="c_sentence" class="label_form width_16">格言:</label>
                <div class="input_box">
                  <input type="text"  id="c_sentence" class="form_input"  :value="datas[index].c_sentence">
                </div>
              </div> -->
              <div class="form-group clearfix">
                <label for="c_grade" class="label_form width_16">积分:</label>
                <div class="input_box">
                  <input type="text"  id="c_grade" class="form_input"  :value="datas[index].c_grade">
                </div>
              </div>
              <!-- <div class="form-group clearfix">
                <label for="c_success" class="label_form width_16">连续登录天数:</label>
                <div class="input_box">
                  <input type="text"  id="c_success" class="form_input"  :value="datas[index].c_success">
                </div>
              </div>
              <div class="form-group clearfix">
                <label for="c_maxccess" class="label_form width_16">最大连续登录天数:</label>
                <div class="input_box">
                  <input type="text"  id="c_maxccess" class="form_input"  :value="datas[index].c_maxccess">
                </div>
              </div> -->
              <!-- <div class="form-group clearfix">
                <label for="c_lasttime" class="label_form width_16">上次登陆时间:</label>
                <div class="input_box">
                  <input type="text"  id="c_lasttime" class="form_input"  :value="datas[index].c_lasttime">
                </div>
              </div> -->
              <div class="form-group clearfix">
                <label for="c_logintime" class="label_form width_16">登陆时间:</label>
                <div class="input_box">
                  <input type="text"  id="c_logintime" class="form_input"  :value="datas[index].c_logintime">
                </div>
              </div>
              <div class="form-group clearfix">
                <label for="c_loginip" class="label_form width_16">登录IP:</label>
                <div class="input_box">
                  <input type="text"  id="c_loginip" class="form_input"  :value="datas[index].c_loginip">
                </div>
              </div>
              <!-- <div class="form-group clearfix">
                <label for="c_failtime" class="label_form width_16">失败次数:</label>
                <div class="input_box">
                  <input type="text"  id="c_failtime" class="form_input"  :value="datas[index].c_failtime">
                </div>
              </div> -->
              <div class="form-group clearfix">
                <label for="c_joinip" class="label_form width_16">加入IP:</label>
                <div class="input_box">
                  <input type="text"  id="c_joinip" class="form_input"  :value="datas[index].c_joinip">
                </div>
              </div>
              <div class="form-group clearfix">
                <label for="c_jointime" class="label_form width_16">加入时间:</label>
                <div class="input_box">
                  <input type="text"  id="c_jointime" class="form_input"  :value="datas[index].c_jointime">
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
      name: "MemMaSeven",
      data() {
        return {
          flag: false,
          datas: [],
          index: 0
        }
      },
      methods: {

        editItem: function () {
          let c_chra = document.getElementById("c_chra").value;
          let c_name = document.getElementById("c_name").value;
          let c_nick = document.getElementById("c_nick").value;
          let c_email = document.getElementById("c_email").value;
          let c_phone = document.getElementById("c_phone").value;
          let c_birth = document.getElementById("c_birth").value;
          let c_level = document.getElementById("c_level").value;
          let c_grade = document.getElementById("c_grade").value;
          let c_joinip = document.getElementById("c_joinip").value;
          let c_failtime = document.getElementById("c_failtime").value;
          let c_jointime = document.getElementById("c_jointime").value;
          let c_logintime = document.getElementById("c_logintime").value;
          let c_loginip = document.getElementById("c_loginip").value;
          // let paymothods = document.getElementById("paymothods").value;

          let content = "c_chra=" + c_chra + "&c_name=" + c_name + "&c_nick=" + c_nick + "&c_email=" + c_email + "&c_phone=" + c_phone + "&c_level=" + c_level+"c_grade=" + c_grade + "&c_joinip=" + c_joinip + "&c_failtime=" + c_failtime + "&c_jointime=" + c_jointime  + "&c_logintime=" + c_logintime+ "&c_loginip=" + c_loginip;

          fetch('http://localhost:3000/api/MemMa/update?id=' + this.index, {
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
  .mm_content_scroll{
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
    height:95%;
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
  .input_box{
    width: 33.3333%;
  }
</style>
