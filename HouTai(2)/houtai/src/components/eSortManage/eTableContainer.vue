<template>
  <div class="e-table-container">
    <table class="e-table-body">
      <thead>
      <tr>
        <th>
          <div class="e-th-inner e-th-one">
            <input type="checkbox" :checked="eSortList.length===eSortIds.length&&eSortIds.length" @click="eCheckedAll">
          </div>
        </th>
        <th>
          <div class="e-th-inner ">Id</div>
        </th>
        <th>
          <div class="e-th-inner ">父分类ID</div>
        </th>
        <th>
          <div class="e-th-inner ">分类名称</div>
        </th>
        <th>
          <div class="e-th-inner ">分类昵称</div>
        </th>
        <th>
          <div class="e-th-inner ">分类标志</div>
        </th>
        <th>
          <div class="e-th-inner ">图片</div>
        </th>
        <th>
          <div class="e-th-inner ">关键字</div>
        </th>
        <th>
          <div class="e-th-inner ">描述</div>
        </th>
        <th>
          <div class="e-th-inner ">自定义名称</div>
        </th>
        <th>
          <div class="e-th-inner ">创建时间</div>
        </th>
        <th>
          <div class="e-th-inner ">更新时间</div>
        </th>
        <th>
          <div class="e-th-inner ">权重</div>
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
      <tr v-for="(eSort,index) in eSortList" :key="eSort.id">
        <td class="bs-checkbox ">
          <div class="e-th-inner">
            <input type="checkbox" :checked="eSortIds.indexOf(eSort.id)>=0" @click="eCheckedOne(eSort.id)">
          </div>

        </td>
        <td>
          <div class="e-th-inner">
            {{eSort.id}}
          </div>
        </td>
        <td>
          <div class="e-th-inner">
            <a class="e-th-searchIt" href="javascript:;">0</a>
          </div>

        </td>
        <td>
          <div class="e-th-inner">
            默认分类
          </div>
        </td>
        <td>
          <div class="e-th-inner">
            default
          </div>
        </td>
        <td>
          <div class="e-th-inner"></div>
        </td>
        <td>
          <div class="e-th-inner">
            <a href="https://cdn.demo.fastadmin.net/assets/img/qrcode.png" target="_blank">
              <img class="e-td-imgs-01" src="../../../static/imgs/e-qrcode.png">
            </a>
          </div>
        </td>
        <td>
          <div class="e-th-inner"></div>
        </td>
        <td>
          <div class="e-th-inner"></div>
        </td>
        <td>
          <div class="e-th-inner"></div>
        </td>
        <td>
          <div class="e-th-inner">
            {{eSort.creationTime}}
          </div>
        </td>
        <td>
          <div class="e-th-inner">
            {{eSort.updataTime}}
          </div>
        </td>
        <td>
          <div class="e-th-inner">
            0
          </div>
        </td>
        <td>
          <div class="e-th-inner">
            <i class="iconfont icon-yuan"></i> 正常
          </div>
        </td>
        <td>
          <div class="e-th-inner e-operation">
            <a class="e-td-drag" href="javascript:;" title="拖动进行排序" style="cursor: pointer;">
              <i class="iconfont icon-111zhuanhuan"></i>
            </a>
            <a class="e-td-edit" href="javascript:;" title="编辑" data-table-id="table">
              <i class="iconfont icon-edit"></i>
            </a>
            <a class="e-td-del" href="javascript:;" title="删除" @click="eDeleteOne">
              <i class="iconfont icon-shanchu"></i>
            </a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="e-table-pagination">
      <div class="e-pagination-detail">
                        <span class="e-pagination-info">
                            显示第 1 到第 {{eSortList.length}} 条记录，总共 {{eSortList.length}} 条记录
                        </span>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "eTableContainer",
      data(){
          return {
            eSortList:[],
            eSortIds:[],
            isCheckedAll: false
          }
      },
      methods:{
        eClickShow() {
          this.eIsShow = !this.eIsShow
        },
        fetchSortData() {
          fetch("http://localhost:3000/sortData").then(response => {
            if (response.ok) {
              response.json().then(data => {
                this.eSortList = data;
                console.log(this.eSortList);
              })
            }

          })
        },
        eCheckedOne(eSortId) {
          let idIndex = this.eSortIds.indexOf(eSortId)
          if (idIndex >= 0) {//如果已经包含就去除
            this.eSortIds.splice(idIndex, 1)
          } else {//如果没有包含就添加
            this.eSortIds.push(eSortId)
          }
        },
        eCheckedAll(e) {
          this.isCheckedAll = e.target.checked;
          if (this.isCheckedAll) {//全选时
            this.eSortIds = []
            this.eSortList.forEach(item => {
              this.eSortIds.push(item.id)
            })
          } else {
            this.eSortIds = []
          }
        },
        eDeleteSome () {
          this.eSortList = this.eSortList.filter(item => this.eSortIds.indexOf(item.id) === -1)
          this.eSortIds = []
        },
        eDeleteOne(index){
          this.eSortList.splice(index,1)
        }
      },
      created(){
        this.fetchSortData()
      }




    }
</script>

<style scoped>

</style>
