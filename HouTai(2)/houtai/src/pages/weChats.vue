<template>
<div id="box">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <we-chats-manage-a></we-chats-manage-a>
            <we-chats-manage-b></we-chats-manage-b>
        </div>
    </div>
    <we-chats-manage-c></we-chats-manage-c>
    <we-chats-manage-d id="mask"></we-chats-manage-d>
    <we-chats-manage-e></we-chats-manage-e>
    <we-chats-manage-f></we-chats-manage-f>
</div>
</template>

<script>
  import weChatsManageA from "../components/weChatsManage/weChatsManageA.vue"
  import weChatsManageB from "../components/weChatsManage/weChatsManageB.vue"
  import weChatsManageC from "../components/weChatsManage/weChatsManageC.vue"
  import weChatsManageD from "../components/weChatsManage/weChatsManageD.vue"
  import weChatsManageE from "../components/weChatsManage/weChatsManageE.vue"
  import weChatsManageF from "../components/weChatsManage/weChatsManageF.vue"

export default {
  name: 'weChats',
  components: {
      weChatsManageA,
      weChatsManageB,
      weChatsManageC,
      weChatsManageD,
      weChatsManageE,
      weChatsManageF
  },
}
</script>
<style>
  @import  '../assets/css/weChats.css';
  #box{

      position: relative;
  }
</style>
