<template>
  <!--表格显示-->
  <div>
    <table class="table">
      <thead>
        <tr>
          <th class="th_checkbox"
              style="width: 36px">
            <div class="th_inner th_one">
              <input type="checkbox"
                     @change="selectAll"
                     v-model="Allselect" />
            </div>
          </th>

          <th class="th_checkbox">
            <div class="th_inner">
              ID
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              名称
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              产品图片
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner th_bg">
              产品价格
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner th_bg">
              状态
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              上传收款二维码
            </div>
          </th>
          <th class="th_checkbox">
            <div class="th_inner">
              操作
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in productData"
            :key="item.id">
          <td class="th_checkbox"
              style="width: 36px">
            <div class="th_inner th_one">
              <input type="checkbox" v-model="item.checked"  @change="selectItem(item.checked)" />
            </div>
          </td>
          <td class="th_checkbox">
            <div class="th_inner">
              {{item.id}}
            </div>
          </td>
          <td class="th_checkbox">
            <div class="th_inner">
              {{item.name}}
            </div>
          </td>
          <td class="th_checkbox">
            <div class="th_inner">
              {{item.pic}}
            </div>
          </td>
          <td class="th_checkbox">
            <div class="th_inner th_bg">
              {{item.price}}
            </div>
          </td>
          <td class="th_checkbox">
            <div class="th_inner th_bg">
              {{item.statu}}
            </div>
          </td>
          <td class="th_checkbox">
            <div class="th_inner">

                <i class="iconfont icon-daochu erweima">上传价格二维码</i>
                <i class="iconfont icon-chakan  lookfor">查看二维码</i>

            </div>
          </td>

          <td class="th_checkbox">
            <div class="th_inner">
              <i class="iconfont icon-edit"
                 @click="fedit(index,item)"></i>

              <i class="iconfont icon-shanchu"
                 @click="del(index)"></i>
            </div>
          </td>
        </tr>
      </tbody>

    </table>
    <div class="overlay"
         v-show="isshow">
      <div class="con">
        <h2 class="title">新增 | 修改</h2>
        <div class="content">
          <table>
            <tr>
              <td>ID:</td>
              <td><input type="text" v-model="addItem.id" /></td>
            </tr>
            <tr>
              <td>铲平名称</td>
              <td><input type="text" v-model="addItem.name"/></td>
            </tr>
            <tr>
              <td>c产品图片:</td>
              <td>
                <input type="number" v-model="addItem.pic" />
              </td>
            </tr>
            <tr>
              <td>价格:</td>
              <td>
                <input type="number" v-model="addItem.price" />
              </td>
            </tr>

            <tr>
              <td>状态:</td>
              <td>
                <input type="text"  v-model="addItem.statu"/>
              </td>
            </tr>
          </table>
          <p>
            <input type="button"
                   value="重置" @click="freset"/>
            <input type="button"
                   value="保存"
                   @click="fsave" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['productData'],
  data() {
    return {
      isshow: false,
      newItem: {
        id: '',
        price: '',
        name: '',
        pic: '',
        erweima:'',
        statu: ' '
      },
      addItem: {},
      Allselect: false
    }
  },
  created() {
    this.productData.forEach(item => {
      item.checked = false
    })
  },
  methods: {
    //全选反选
    selectAll() {
      this.productData.forEach(v => {
        v.checked = this.Allselect
      })
    },
    selectItem(checked) {
      if (checked) {
        this.Allselect = this.productData.every(item => item.checked)
      } else {
        this.Allselect = false
      }
    },

    //删除对象
    del: function(index) {
      if (window.confirm('你确定要删除吗')) {
        this.productData.splice(index, 1)
      }
    },

    // 点击保存按钮
    fsave: function() {
      if (this.addItem.index > -1) {
        this.productData.splice(this.addItem.index, 1, this.addItem)
      } else {
        this.productData.push(this.addItem)
      }
      this.addItem = {};
      this.isshow = false
    },
    // 增加数据
    add: function() {
      this.isshow = true;
      this.addItem = JSON.parse(JSON.stringify(this.newItem))
    },
    // 修改数据
    fedit(index, item) {
       this.isshow = true;
      this.addItem = JSON.parse(JSON.stringify(item));
      this.addItem.index = index;
    },
    //重置
    freset(){
      this.addItem=JSON.parse(JSON.stringify(this.newItem))
    }
  },
  computed: {
    slist() {
      return this.productData.filter(item => item.checked)
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  background: rgba(0, 0, 0, 0.7);
}
.overlay td:first-child {
  width: 66px;
}
.overlay .con {
  position: absolute;
  width: 420px;
  min-height: 300px;
  background: #fff;
  left: 50%;
  top: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  /*margin-top: -150px;*/
  padding: 20px;
}
  .erweima{
    background-color: #2c3e50;
    color: white;
    font-size: 12px;
    margin-right: 2px;
    text-indent: 2px;
    line-height: 18px;
  }
  .lookfor{
    background-color: #f39c12;
    color: white;
    font-size: 12px;
    text-indent: 2px;
    line-height: 18px;
  }
</style>
