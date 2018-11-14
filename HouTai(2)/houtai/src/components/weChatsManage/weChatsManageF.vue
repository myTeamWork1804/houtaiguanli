<template>
    <div>
        <div class="layui-layer layui-layer-iframe layui-layer-border layui-layer-fast lay-edit" style="display:none"  id="layui-layer1"  area="800,547,35.5,109.5">
            <div class="layui-layer-title edit-title" style="cursor: move;">编辑</div>
            <div id="" class="layui-layer-content">
                <div class="content" style="">
                    <form id="add-form" class="form-horizontal form-ajax nice-validator n-default n-bootstrap" role="form" data-toggle="validator" method="POST" action="" novalidate="novalidate">
                        <div class="form-group forms-group">
                            <label for="c-title" class="control-label col-xs-12 col-sm-2">标题:</label>
                            <div class="col-xs-12 col-sm-8">
                                <input type="text" name="row[title]" :value="items[i].title" id="c-title" class="form-control">
                            </div>
                        </div>
                        <div class="form-group forms-group">
                            <label for="c-text" class="control-label col-xs-12 col-sm-2">文本:</label>
                            <div class="col-xs-12 col-sm-8">
                                <input type="text" name="row[text]" :value="items[i].text" id="c-text" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group forms-group">
                            <label for="c-eventkey" class="control-label col-xs-12 col-sm-2">响应标识:</label>
                            <div class="col-xs-12 col-sm-8">
                                <input type="hidden" name="row[eventkey]" id="c-eventkey" class="form-control" value="" readonly="">
                                <div class="clickbox">
                                    <span class="create-click"><a href="#" id="select-resources"><i class="weixin-icon big-add-gray"></i><strong>选择现有资源</strong></a></span>
                                    <span class="create-click"><a href="#" id="add-resources"><i class="weixin-icon big-add-gray"></i><strong>添加新资源</strong></a></span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group forms-group">
                            <label for="c-remark" class="control-label col-xs-12 col-sm-2">备注:</label>
                            <div class="col-xs-12 col-sm-8">
                                <input type="text" name="row[remark]" :value="items[i].remark" id="c-remark" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group forms-group">
                            <label class="control-label col-xs-12 col-sm-2">状态:</label>
                            <div class="col-xs-12 col-sm-8">
                                <div class="radio"><label for="row[status]-normal"><input id="row[status]-normal" name="status" type="radio" value="正常"> 正常</label> <label for="row[status]-hidden"><input id="row[status]-hidden" name="status" type="radio" value="隐藏"> 隐藏</label></div>        </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="layui-layer-btn layui-layer-footer">
                <div class="row">
                    <label class="control-label col-xs-12 col-sm-2"></label>
                    <div class="col-xs-12 col-sm-8" style="text-align: left;">
                        <button type="submit" class="btn btn-success btn-embossed" @click="edit(i)">确定</button>
                        <button type="reset" class="btn btn-default btn-embossed">重置</button>
                    </div>
                </div>
            </div>
            <span class="layui-layer-setwin">
                <a class="layui-layer-min edit-min" href="javascript:;" style="display: inline-block;">
                    <i class="icon iconfont icon--hao" style="font-size:12px;color:white;"></i>
                    <cite></cite>
                </a>
                <a class="layui-layer-ico layui-layer-max edit-max" href="javascript:;">
                    <i class="icon iconfont icon-fangda1" style="font-size:18px;vertical-align:middle;color:white;"></i>
                </a>
                <a class="layui-layer-ico layui-layer-close layui-layer-close1 edit-close" href="javascript:;">
                    <i class="icon iconfont icon-cuo"  style="font-size:10px;color:white;"></i>
                </a>
                </span><span class="layui-layer-resize">
            </span>
        </div>
        <div class="layui-layer-move" style="cursor: move; display: none;"></div>
    </div>
</template>

<script>
import bus from "../../assets/js/eventBus.js"
export default {
    name: 'weChatsManageC',
    components: {

    },
    data(){
        return{
            items:[],
            i:0
        }
    },
    methods:{
        edit(){
          let status_normal = $("input[name='status']:checked").val();
          let xing = document.getElementById("c-text").value;
            let nian = document.getElementById("c-title").value;
            let shou = document.getElementById("c-remark").value;
            let id = "text="+xing+"&title="+nian+"&remark="+shou+"&status="+status_normal;
            fetch('http://localhost:3000/api/weChats/update?id='+this.i, {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: id
            }).then(res=>{
                console.log(res)
              res.json().then(data=>{
                this.items=data;
                bus.$emit("updatemsg",this.items);
                console.log(data)
              })
            })
        }
    },
    mounted(){
        bus.$on("edit",(i)=>{
            this.i=i;
        });
        bus.$on("editmsg",(msg)=>{
          this.items=msg;
          console.log(this.items)
        });

    },
    updated(){
      $(".edit-close").click(function () {
        $("#layui-layer1.lay-edit").hide()
      })
        $(function(){
            //编辑框拖拽
            var $dialog = $("#layui-layer1.lay-edit");
            var mx = 0,my = 0;      //鼠标x、y轴坐标（相对于left，top）
            var dx = 0,dy = 0;      //对话框坐标（同上）
            var isDraging = false;      //不可拖动
            //鼠标按下
            $(".layui-layer-title.edit-title").mousedown(function(e){
                e = e || window.event;
                mx = e.pageX+230;     //点击时鼠标X坐标
                my = e.pageY+30;     //点击时鼠标Y坐标
                dx = $dialog.offset().left;
                dy = $dialog.offset().top;
                isDraging = true;      //标记对话框可拖动
            });
            //鼠标移动更新窗口位置
            $(document).mousemove(function(e){
                var e = e || window.event;
                var x = e.pageX;      //移动时鼠标X坐标
                var y = e.pageY;      //移动时鼠标Y坐标
                if(isDraging){        //判断对话框能否拖动
                    var moveX = dx + x - mx;      //移动后对话框新的left值
                    var moveY = dy + y - my;      //移动后对话框新的top值
                    //设置拖动范围
                    var pageW = $(window).width();
                    var pageH = $(window).height();
                    var dialogW = $dialog.width();
                    var dialogH = $dialog.height();
                    var maxX = pageW - dialogW;       //X轴可拖动最大值
                    var maxY = pageH - dialogH;       //Y轴可拖动最大值
                    moveX = Math.min(Math.max(0,moveX),maxX);     //X轴可拖动范围
                    moveY = Math.min(Math.max(0,moveY),maxY);     //Y轴可拖动范围
                    //重新设置对话框的left、top
                    $dialog.css({"left":moveX + 'px',"top":moveY + 'px'});
                };
            });
            //鼠标离开
            $(".layui-layer-title.edit-title").mouseup(function(){
                isDraging = false;
            });
            //弹出框缩小放大
            $(".layui-layer-max").click(function(){
              $("#layui-layer1.lay-edit").removeClass("min");
              $("#layui-layer1.lay-edit").toggleClass("active");
              $(".content").toggleClass("max");
              $(".layui-layer-min").show()
            })
            $(".layui-layer-min").click(function (){
                $("#layui-layer1.lay-edit").toggleClass("min");
                if ($("#layui-layer1.lay-edit").hasClass("min")){
                  $(this).hide()
                } else {
                  $(this).show()
                }
            })

        })
    }
}
</script>
<style>

</style>
