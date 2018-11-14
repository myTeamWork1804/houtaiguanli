<template>
  <div class="e-commonsearch-table hidden" id="eCommonsearch">
    <form>
      <fieldset>
        <div class="e-row">
          <div class="e-form-group">
            <label for="id" class="e-control-label">Id</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" placeholder="Id">
            </div>
          </div>
          <div class="e-form-group">
            <label for="pid" class="e-control-label">父分类ID</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" name="pid" placeholder="父分类ID" id="pid"
                     data-index="2">
            </div>
          </div>
          <div class="e-form-group">
            <label for="name" class="e-control-label">分类名称</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" name="name" placeholder="分类名称" id="name"
                     data-index="3">
            </div>
          </div>
          <div class="e-form-group">
            <label for="nickname" class="e-control-label">分类昵称</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" name="nickname" placeholder="分类昵称" id="nickname"
                     data-index="4">
            </div>
          </div>
          <div class="e-form-group">
            <label for="flag" class="e-control-label">分类标志</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" name="flag" placeholder="分类标志" id="flag"
                     data-index="5">
            </div>
          </div>
          <div class="e-form-group"><label for="image" class="e-control-label">图片</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" name="image" placeholder="图片" id="image"
                     data-index="6">
            </div>
          </div>
          <div class="e-form-group">
            <label for="keywords" class="e-control-label">关键字</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" name="keywords" placeholder="关键字" id="keywords"
                     data-index="7">
            </div>
          </div>
          <div class="e-form-group">
            <label for="description" class="e-control-label">描述</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" name="description" placeholder="描述" id="description"
                     data-index="8">
            </div>
          </div>
          <div class="e-form-group">
            <label for="diyname" class="e-control-label">自定义名称</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" name="diyname" placeholder="自定义名称" id="diyname"
                     data-index="9">
            </div>
          </div>
          <div class="e-form-group"><label for="createtime" class="e-control-label">创建时间</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control datetimerange" name="createtime" placeholder="创建时间"
                     id="createtime" data-index="10">
            </div>
          </div>
          <div class="e-form-group"><label for="updatetime" class="e-control-label">更新时间</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control datetimerange" name="updatetime" placeholder="更新时间"
                     id="updatetime" data-index="11">
            </div>
          </div>
          <div class="e-form-group"><label for="weigh" class="e-control-label">权重</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" name="weigh" placeholder="权重" id="weigh"
                     data-index="12">
            </div>
          </div>
          <div class="e-form-group">
            <label for="status" class="e-control-label">状态</label>
            <div class="e-col-xs-8">
              <input type="text" class="e-form-control" name="status" placeholder="状态" id="status"
                     data-index="13">
            </div>
          </div>
          <div class="e-form-group">
            <div class="e-form-submit">
              <button type="submit" class="e-btn-submit">提交</button>
              <button type="reset" class="e-btn-default">重置</button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>

  </div>
</template>

<script>
  import  bus from '../../assets/eventBus'
  let $ = require('jquery')
    export default {

      mounted(){
          bus.$on("eSearchEvent",function(msg){

            $("#eCommonsearch").toggle()
          })

      }

    }

</script>

<style scoped>

</style>
