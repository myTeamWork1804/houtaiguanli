<template>
  <div>
    <!--公共搜索-->
    <div class="e-commonsearch-table"  v-if="eIsShow">
      <form>
        <fieldset>
          <div class="e-row">
            <div class="e-form-group">
              <label class="e-control-label">Id</label>
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
    <!--中部工具栏-->
    <div class="e-table-toolbar">
      <div class="e-toolbar-left">
        <a class="e-btn-refresh" href="javascript:;" title="刷新">
          <i class="iconfont icon-f14"></i>
        </a>
        <a class="e-btn-del" href="javascript:;" title="删除" @click="eDeleteSome">
          <i class="iconfont icon-shanchu"></i> 删除
        </a>
        <a class="e-btn-more" href="javascript:;" title="更多">
          <i class="iconfont icon-f14"></i> 更多
        </a>

      </div>


      <div class="e-toolbar-right e-btn-sousuo" @click="eClickShow">
        <a href="javascript:;">
          <i class="iconfont icon-sousuo"></i>
        </a>
      </div>
      <div class="e-toolbar-right e-btn-group">
        <a href="javascript:;">
          <i class="iconfont icon-qiehuan"></i>
        </a><a href="javascript:;">
        <i class="iconfont icon-jiugongge"></i>
        <span class="e-caret"></span>
      </a><a href="javascript:;">
        <i class="iconfont icon-daochu"></i>
        <span class="e-caret"></span>
      </a>
      </div>
      <div class="e-toolbar-right e-btn-search">
        <input class="e-toolbar-search" type="text" placeholder="搜索">
      </div>
    </div>

    <!--表格主体-->
    <div class="e-table-container">
      <table class="e-table-body">
        <thead>
        <tr>
          <th>
            <div class="e-th-inner e-th-one">
              <input type="checkbox" :checked="eCommentList.length===eCommentIds.length&&eCommentIds.length" @click="eCheckedAll">
            </div>
          </th>
          <th>
            <div class="e-th-inner ">ID</div>
          </th>
          <th>
            <div class="e-th-inner ">日志</div>
          </th>
          <th>
            <div class="e-th-inner ">用户名</div>
          </th>
          <th>
            <div class="e-th-inner ">邮箱</div>
          </th>
          <th>
            <div class="e-th-inner ">网址</div>
          </th>
          <th>
            <div class="e-th-inner ">评论数</div>
          </th>
          <th>
            <div class="e-th-inner ">IP</div>
          </th>
          <th>
            <div class="e-th-inner ">订阅</div>
          </th>
          <th>
            <div class="e-th-inner ">创建时间</div>
          </th>
          <th>
            <div class="e-th-inner ">更新时间</div>
          </th>
          <th>
            <div class="e-th-inner ">状态</div>
          </th>
          <th>
            <div class="e-th-inner ">操作</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(eComment,index) of eCommentList" :key="eComment.id">
          <td class="bs-checkbox ">
            <div class="e-th-inner">
              <input type="checkbox" :checked="eCommentIds.indexOf(eComment.id)>=0" @click="eCheckedOne(eComment.id)">
            </div>

          </td>
          <td>
            <div class="e-th-inner">
              {{eComment.id}}
            </div>
          </td>
          <td>
            <div class="e-th-inner">
              <a class="e-th-aText" href="javascript:;">{{eComment.journal}}</a>
            </div>

          </td>
          <td>
            <div class="e-th-inner">
              <a  class="e-th-aText" href="javascript:;">{{eComment.username}}</a>
            </div>
          </td>
          <td>
            <div class="e-th-inner">
                {{eComment.email}}
            </div>
          </td>
          <td>
            <div class="e-th-inner e-input-group">
              <input class="e-form-link" type="text">
              <a class="e-td-link" href="javascript:;">
                <i class="iconfont icon-lianjie"></i>
              </a>
            </div>
          </td>
          <td>
            <div class="e-th-inner">
              {{eComment.comments}}
            </div>
          </td>
          <td>
            <div class="e-th-inner">
              <a class="e-th-aText" href="javascript:;">
                {{eComment.ip}}
              </a>
            </div>
          </td>
          <td>
            <div class="e-th-inner">
              {{eComment.subscription}}
            </div>
          </td>
          <td>
            <div class="e-th-inner">
              {{eComment.creationTime}}
            </div>
          </td>
          <td>
            <div class="e-th-inner">
             {{eComment.updataTime}}
            </div>
          </td>
          <td>
            <div class="e-th-inner">
              <i class="iconfont icon-yuan"></i> 正常
            </div>
          </td>
          <td>
            <div class="e-th-inner e-operation">
              <a class="e-td-edit e-a-btn-edit" href="javascript:;" title="编辑" data-table-id="table">
                <i class="iconfont icon-edit"></i>
              </a>
              <a class="e-td-del e-a-btn-del" href="javascript:;" title="删除" @click="eDeleteOne(index)">
                <i class="iconfont icon-shanchu"></i>
              </a>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="e-table-container">
      <div class="e-table-pagination">
        <div class="e-pagination-detail">
                        <span class="e-pagination-info">
                            显示第 1 到第 {{eCommentList.length}} 条记录，总共 {{eCommentList.length}} 条记录
                        </span>
          <!-- <span class="page-list" style="display: none;">
              每页显示
              <span class="btn-group dropup">
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                      <span class="page-size">10</span>
                      <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                      <li role="menuitem" class="active">
                          <a href="#">10</a>
                      </li>
                  </ul>
              </span>
               条记录
          </span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "eCManage",
      data() {
        return {
          eIsShow: false,
          eCommentList: [],
          eCommentList01:[],
          eCommentIds: [],
          isCheckedAll: false

        }
      },

      methods: {
        // setCommentList(eCommentList01) {
        //   this.eCommentList = JSON.parse(JSON.stringify(eCommentList01));
        // },
        eClickShow() {
          this.eIsShow = !this.eIsShow
        },
        fetchCommentData() {
          fetch("http://localhost:3000/commentData").then(response => {
            if (response.ok) {
              console.log(response.ok)
              response.json().then(data => {
                this.eCommentList = data;
                console.log(data);
              })
            }

          })
        },
        eCheckedOne(eCommentId) {
          let idIndex = this.eCommentIds.indexOf(eCommentId)
          if (idIndex >= 0) {//如果已经包含就去除
            this.eCommentIds.splice(idIndex, 1)
          } else {//如果没有包含就添加
            this.eCommentIds.push(eCommentId)
          }
        },
        eCheckedAll(e) {
          this.isCheckedAll = e.target.checked;
          if (this.isCheckedAll) {//全选时
            this.eCommentIds = []
            this.eCommentList.forEach(item => {
              this.eCommentIds.push(item.id)
            })
          } else {
            this.eCommentIds = []
          }
        },
        eDeleteSome () {
          this.eCommentList = this.eCommentList.filter(item => this.eCommentIds.indexOf(item.id) === -1)
          this.eCommentIds = []
        },
        eDeleteOne(index){
          this.eCommentList.splice(index,1)
        }

      },
      created() {
        this.fetchCommentData()
          // this.setCommentList()
      }
    }

</script>

<style scoped>

</style>
