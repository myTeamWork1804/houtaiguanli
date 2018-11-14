<template>
  <div>
    <div class="e-commonsearch-table" v-show="issoushow">
      <form>

          <div class="e-row">
            <div class="e-form-group">
              <label  class="e-control-label">Id</label>
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
      </form>
    </div>

  <div class="ftableListsHeader">
    <div class="ftableListsHeaderLeft">
      <a href="http://localhost:8080/#/om" class=" HL frefresh">
        <i class="iconfont icon-f14" title="刷新"></i>
      </a>
      <span class="HL fedit">
              <i class="iconfont icon-edit"></i>
              编辑
          </span>
      <span class="HL fdelete" @click="eDeleteSome">
              <i class="iconfont icon-shanchu"></i>
              删除
          </span>
    </div>
    <div class="ftableListsHeaderRight">
      <input type="text" placeholder="搜索" class="frsearch" >
      <div class="tableListsChoise">
        <i class="iconfont icon-qiehuan" title="切换"></i>

        <div class="TableCheckBox" >
          <i class="iconfont icon-jiugongge" title="列" @click="fshowAndHide"><span></span></i>
          <ul class="checkLists" v-show="isshow">
            <li><input type="checkbox" />订单号</li>
            <li><input type="checkbox" />产品ID</li>
            <li><input type="checkbox" />二维码ID</li>
            <li><input type="checkbox" />订单价格</li>
            <li><input type="checkbox" />真实价格</li>
            <li><input type="checkbox" />订单标题</li>
            <li><input type="checkbox" />外部订单</li>
            <li><input type="checkbox" />自定义</li>
            <li><input type="checkbox" />类型</li>
            <li><input type="checkbox" />真实价格</li>
            <li><input type="checkbox" />订单标题</li>
            <li><input type="checkbox" />外部订单</li>
            <li><input type="checkbox" />自定义</li>
            <li><input type="checkbox" />类型</li>
            <li><input type="checkbox" />真实价格</li>
            <li><input type="checkbox" />订单标题</li>
            <li><input type="checkbox" />外部订单</li>
            <li><input type="checkbox" />自定义</li>
            <li><input type="checkbox" />类型</li>
          </ul>
        </div>
        <div class="FoutTuBiao" >
          <i class="iconfont icon-daochu" title="导出数据" @click="changeShow"><span></span></i>
          <ul class="foutLists" v-show="ishide">
            <li>JSON</li>
            <li>XML</li>
            <li>CSV</li>
            <li>TXT</li>
            <li>MS-Word</li>
            <li>MS-Excel</li>
          </ul>
        </div>
      </div>
      <button style="width: 30px">
        <i class="iconfont icon-sousuo" title="普通搜索" @click="changesoushow"></i>
      </button>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "ffunction",
      data(){
          return{
            isshow:false,
            ishide:false,
            issoushow:false,
          }
      },
      props:['productData'],
      methods:{
          //显示隐藏
        //显示隐藏
        fshowAndHide(){
          this.isshow=!this.isshow
        },
        changeShow:function(){
          this.ishide=!this.ishide
        },
        changesoushow:function(){
          this.issoushow=!this.issoushow
        },
        eDeleteSome () {
          this.productData = this.productData.filter(item => this.productData.indexOf(item.id) === -1)
          this.productData = []
          alert(1)
        }
      },
      created(){
        this.productData.forEach((item,index)=>{
           console.log(item.id)
        })
      }
    }
</script>

<style scoped>

</style>
