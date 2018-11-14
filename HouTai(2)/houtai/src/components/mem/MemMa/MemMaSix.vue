<template>
  <!--删除窗口-->
    <div class="delete" id="deleteId" v-if="flag">
        <h3 class="revise_title">温馨提示</h3>
        <div class="delete_panduan">
            <i class="iconfont icon-wenhao" style="font-size: 30px"></i>
            <span>确定删除此项?</span>
        </div>
        <span class="delete_close">
           <i class="iconfont icon-cuo"></i>
        </span>
        <div class="delete_btn">
            <span class="delete_btn1" @click="removedata">确定</span>
            <span class="delete_btn2" > 取消</span>
        </div>
    </div>
</template>

<script>

  import bus from "../../../assets/js/eventBus"
    export default {
      name: "MemMaSix",
      data(){
          return{
              flag:false,
              index:0

          }
      },
      mounted() {
        bus.$on("deleteEvent", (msg) => {
          this.flag = msg
          console.log(msg)
        })
        bus.$on("deleteIndex", (msg) => {
          this.index = msg
          console.log(msg)
        })

      },
      methods:{
        // //删除数据(根据订单编号删除整条数据)
        removedata:function () {
          let number = document.getElementsByClassName("trid")[this.index].children[1];
          console.log(number.innerHTML)
          fetch("http://localhost:3000/api/MemMa/delete?id="+number.innerHTML).then(res=>{
            console.log(res)
            res.json().then(data=>{
              // data = JSON.parse(data);
              bus.$emit("deletedata",data);
              console.log(data)

            })
            this.flag=false
            $(".heiban").hide()
          })
        },

      },


        updated(){
              if(this.flag){
                $(".delete").prev().show()

                  //编辑页面拖拽效果
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
                      $('.delete').css({
                        'margin': "initial",
                        'left': x + 'px',
                        'top': y + 'px'
                      });

                    });
                    $(document).mouseup(function () {
                      $(document).off('mousemove');
                    });
                  })
                }

              $(".delete_close").click(()=>{
                    this.flag=false
                $(".delete").prev().hide()
              })
              $(".delete_btn2").click(()=>{
                  this.flag=false;
                $(".delete").prev().hide()
              })

        }
    }
</script>

<style scoped>
  .iconfont{
    font-size:12px;
  }
</style>
