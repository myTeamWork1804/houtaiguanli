<template>
    <div class="e-main-body">
      <div class="e-row e-row-header">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

          <div class="e-content">
            <div class="e-header-left">
              编辑
            </div>
            <div class="e-header-right">
              <span>－</span>
              <span>＋</span>
              <span>×</span>
            </div>
          </div>
        </div>
      </div>
      <div id="e-main">

        <div class="e-row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            <div class="e-content">
              <form id="edit-form">

                <div class="e-form-group">
                  <label for="c-post_id" class="e-control-label col-xs-12 col-sm-2">Post_id:</label>
                  <div class="col-xs-12 col-sm-8">
                    <div class="e-sp_container">
                      <input id="c-post_id_text" data-source="post/index" class="e-form-control selectpage e-sp_input"
                             name="row[post_id]_text" type="text" value="4" autocomplete="off">
                      <input type="hidden" class="sp_hidden" name="row[post_id]" id="c-post_id" value="4">
                      <div class="e-sp_button" title="关闭 (Tab键)"><span class="e-sp_caret"></span></div>
                    </div>
                  </div>
                </div>
                <div class="e-form-group">
                  <label for="c-pid" class="e-control-label col-xs-12 col-sm-2">父评论ID:</label>
                  <div class="col-xs-12 col-sm-8">
                    <input id="c-pid" class="e-form-control" name="row[pid]" type="number" value="0">
                  </div>
                </div>
                <div class="e-form-group">
                  <label for="c-username" class="e-control-label col-xs-12 col-sm-2">用户名:</label>
                  <div class="col-xs-12 col-sm-8">
                    <input id="c-username" class="e-form-control" name="row[username]" type="text" value="yjjstc2018">
                  </div>
                </div>
                <div class="e-form-group">
                  <label for="c-email" class="e-control-label col-xs-12 col-sm-2">邮箱:</label>
                  <div class="col-xs-12 col-sm-8">
                    <input id="c-email" class="e-form-control" name="row[email]" type="text" value="675469767@qq.com">
                  </div>
                </div>
                <div class="e-form-group">
                  <label for="c-website" class="e-control-label col-xs-12 col-sm-2">网址:</label>
                  <div class="col-xs-12 col-sm-8">
                    <input id="c-website" class="e-form-control" name="row[website]" type="text" value="">
                  </div>
                </div>
                <div class="e-form-group">
                  <label for="c-content" class="e-control-label col-xs-12 col-sm-2">内容:</label>
                  <div class="col-xs-12 col-sm-8">
                                <textarea id="c-content" class="e-form-control" rows="5" name="row[content]" cols="50">好的，我来测试一下&lt;br /&gt;
&lt;br /&gt;
</textarea>
                  </div>
                </div>
                <div class="e-form-group">
                  <label for="c-comments" class="e-control-label col-xs-12 col-sm-2">评论数:</label>
                  <div class="col-xs-12 col-sm-8">
                    <input id="c-comments" class="e-form-control" name="row[comments]" type="number" value="0">
                  </div>
                </div>
                <div class="e-form-group">
                  <label for="c-ip" class="e-control-label col-xs-12 col-sm-2">IP:</label>
                  <div class="col-xs-12 col-sm-8">
                    <input id="c-ip" class="e-form-control" name="row[ip]" type="text" value="112.10.21.221">
                  </div>
                </div>
                <div class="e-form-group">
                  <label for="c-useragent" class="e-control-label col-xs-12 col-sm-2">浏览器:</label>
                  <div class="col-xs-12 col-sm-8">
                    <input id="c-useragent" class="e-form-control" name="row[useragent]" type="text" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWeb">
                  </div>
                </div>
                <div class="e-form-group">
                  <label for="c-subscribe" class="e-control-label col-xs-12 col-sm-2">订阅:</label>
                  <div class="col-xs-12 col-sm-8">
                    <input id="c-subscribe" class="e-form-control" name="row[subscribe]" type="number"
                           value="1">
                  </div>
                </div>
                <div class="e-form-group">
                  <label for="c-status" class="e-control-label col-xs-12 col-sm-2">状态:</label>
                  <div class="col-xs-12 col-sm-8">

                    <label for="row[status]-normal"><input id="row[status]-normal" name="row[status]" type="radio"
                                                           value="normal" checked=""> 正常</label>
                    <label for="row[status]-hidden"><input id="row[status]-hidden" name="row[status]" type="radio"
                                                           value="hidden"> 隐藏</label>

                  </div>
                </div>
                <div class="e-form-group e-layer-footer" style="display: none;">
                  <label class="e-control-label col-xs-12 col-sm-2"></label>
                  <div class="col-xs-12 col-sm-8">
                    <button type="submit" class="e-btn e-btn-success e-btn-embossed">确定</button>
                    <button type="reset" class="e-btn e-btn-default e-btn-embossed">重置</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
      <div class="e-row e-row-footer">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

          <div class="e-content">
            <div class="e-form-group e-layer-footer">
              <label class="e-control-label col-xs-12 col-sm-2"></label>
              <div class="col-xs-12 col-sm-8">
                <button type="submit" class="e-btn e-btn-success e-btn-embossed">确定</button>
                <button type="reset" class="e-btn e-btn-default e-btn-embossed">重置</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import "../../../static/css/edit.css"
    export default {
        name: "eCEdit"
    }
</script>

<style scoped>
.e-main-body{
  font-size: 13px;
  line-height: 18px;
  color: #333333;
  overflow-x:hidden;
}
</style>
