<template>
    <div >
        <qh-custom-one></qh-custom-one>
        <div class="qh_content clearfix">
            <qh-manage-content-two></qh-manage-content-two>
            <qh-manage-content></qh-manage-content>
        </div>
    </div>
</template>

<script>
  import QhCustomOne from "../components/cms/CmsConteManage/QhCustomOne"
  import QhManageContentTwo from "../components/cms/CmsConteManage/QhManageContentTwo"
  import QhManageContent from "../components/cms/CmsConteManage/QhManageContent"
    export default {
        name: "CmsContent",
       components: {QhManageContentTwo, QhManageContent, QhCustomOne}
    }
</script>

<style >

</style>
