<template>
    <div class="e-comment-body">
      <eCommentHeader></eCommentHeader>
      <eCWrapper>

      </eCWrapper>
      <!--<eCEdit></eCEdit>-->

    </div>
</template>

<script>
  import "../../static/css/iconfont.css"
  import "../../static/css/mommon.css"
  import "../../static/css/commentManage.css"
  import eCommentHeader from "../components/eCommentManage/eCommentHeader"
  import eCWrapper from "../components/eCommentManage/eCWrapper"
  // import eCEdit from "../components/eCommentManage/eCEdit"
    export default {
        name: "eCommentManage",
      components:{
        eCommentHeader,
        eCWrapper,
        // eCEdit
      }
    }
</script>

<style scoped>
  /*.e-comment-body{*/
    /*margin-left: 240px;*/
  /*}*/

/*.e-comment-body{*/
  /*position: relative;*/
/*}*/
/*eCEdit{*/
  /*position: absolute;*/
  /*z-index: 19891021;*/
  /*width: 80%;*/
  /*height:80%;*/
  /*top: 15px;*/
  /*left: 15px;*/
  /*display: none;*/
/*}*/

</style>
