<template>
    <div class="delete" style="display:none">
        <h3 class="revise_title">温馨提示</h3>
        <div class="delete_panduan">
            <i class="icon iconfont icon-wenhao" style="font-size:30px;color:#f8dd67;vertical-align: middle"></i>
            <span class="text">确定删除此项?</span>
        </div>
        <span class="delete_close">
           <i class="icon iconfont icon-cuo" style="font-size:10px;color:white;line-height:42px;"></i>
        </span>
        <div class="delete_btn">
            <span class="delete_btn1" @click="removedata" >确定</span>
            <span class="delete_btn2" > 取消</span>
        </div>
    </div>
</template>

<script>
import bus from "../../assets/js/eventBus.js"
export default {
    name: 'weChatsManageE',
    date(){
        return{
            i:1
        }
    },
    created(){

    },
    methods:{
        // //删除数据(根据订单编号删除整条数据)
        removedata:function () {
        fetch("http://localhost:3000/api/weChats/delete?id="+this.i).then(res=>{
            console.log(res)
            res.json().then(data=>{
            console.log(data)
            bus.$emit("dele",data)
            })
        })
        }
    },
    mounted(){
        bus.$on("i",(i)=>{
            this.i=i;
        })
        $(function(){
            //关闭删除框
            $(".delete_close").click(function(){
                $(".delete").css({
                "display":"none"
                })
                    $("#mask").hide()
            })
            $(".delete_btn2").click(function(){
                $(".delete").css({
                "display":"none"
                })
                    $("#mask").hide()

            })
            $(".delete_btn1").click(function(){
                $(".delete").css({
                "display":"none"
                })
                    $("#mask").hide()

            })
            //删除框拖拽
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
    })
},
}


</script>

<style scoped>

</style>
