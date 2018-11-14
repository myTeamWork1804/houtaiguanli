<template>
  <!--表格显示-->
  <div>
    <!--<table class="table">-->
      <!--<thead>-->
        <!--<tr>-->
          <!--<th class="th_checkbox"-->
              <!--style="width: 36px">-->
            <!--<div class="th_inner th_one">-->
              <!--<input type="checkbox"-->
                     <!--@change="selectAll"-->
                     <!--v-model="Allselect" />-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--订单号-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--产品ID-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--订单价格-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--真实价格-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner th_bg">-->
              <!--外部订单-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner th_bg">-->
              <!--自定义-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--类型-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--支付时间-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--创建时间-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--状态-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--操作-->
            <!--</div>-->
          <!--</th>-->
          <!--<th class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--操作-->
            <!--</div>-->
          <!--</th>-->
        <!--</tr>-->
      <!--</thead>-->
      <!--<tbody>-->
        <!--<tr v-for="(item,index) in  erweimadata"-->
            <!--:key="item.id">-->
          <!--<td class="th_checkbox"-->
              <!--style="width: 36px">-->
            <!--<div class="th_inner th_one">-->
              <!--<input type="checkbox" v-model="item.checked"  @change="selectItem(item.checked)" />-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--{{item.orderNum}}-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--{{item.id}}-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--{{item.orderPrice}}-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--{{item.realPrice}}-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner th_bg">-->
              <!--{{item.outNum}}-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner th_bg">-->
              <!--{{item.zdy}}-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--{{item.leixing}}-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--{{item.payTime}}-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--{{item.createTime}}-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner fstatu"-->
                 <!--:title="item.statu">-->
              <!--<i class="iconfont icon-yuan"></i>-->
              <!--{{item.statu}}-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--<div class="operation1">-->
                <!--我已收款-->
              <!--</div>-->
            <!--</div>-->
          <!--</td>-->
          <!--<td class="th_checkbox">-->
            <!--<div class="th_inner">-->
              <!--<i class="iconfont icon-edit"-->
                 <!--@click="fedit(index,item)"></i>-->
              <!--<i class="iconfont icon-shanchu"-->
                 <!--@click="del(index)"></i>-->
            <!--</div>-->
          <!--</td>-->
        <!--</tr>-->
      <!--</tbody>-->

    <!--</table>-->
    <table class="table">
      <thead>
      <tr>
        <th class="th_checkbox" style="width: 36px">
          <div class="th_inner th_one" >
            <input type="checkbox" v-model="Allselect"  @click="selectAll"/>
          </div>
        </th>
        <th class="th_checkbox">
          <div class="th_inner">
            ID
          </div>
        </th>
        <th class="th_checkbox">
          <div class="th_inner">
            产品ID
          </div>
        </th>
        <th class="th_checkbox">
          <div class="th_inner">
            产品名称
          </div>
        </th>
        <th class="th_checkbox">
          <div class="th_inner">
            类型
          </div>
        </th>
        <th class="th_checkbox">
          <div class="th_inner th_bg">
            二维码图片
          </div>
        </th>
        <th class="th_checkbox">
          <div class="th_inner th_bg">
            金额
          </div>
        </th>
        <th class="th_checkbox">
          <div class="th_inner">
            支付URL
          </div>
        </th>
        <th class="th_checkbox">
          <div class="th_inner">
            创建时间
          </div>
        </th>
        <th class="th_checkbox">
          <div class="th_inner">
            状态
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
      <tr v-for="(item,index) of  erweimadata" :key="item.id">

        <td class="th_checkbox" style="width: 36px">
          <div class="th_inner th_one" >
            <input type="checkbox"  @change="selectItem(item.checked)"  v-model="item.checked"/>

          </div>
        </td>

        <td class="th_checkbox">
          <div class="th_inner">
            {{item.id}}
          </div>
        </td>
        <td class="th_checkbox">
          <div class="th_inner">
            {{item.productID}}
          </div>
        </td>
        <td class="th_checkbox">
          <div class="th_inner">
            {{item.proName}}
          </div>
        </td>
        <td class="th_checkbox">
          <div class="th_inner th_bg">
            {{item.leixing}}
          </div>
        </td>
        <td class="th_checkbox">
          <div class="th_inner th_bg">
            <img :src="item.pic" width="30px">
          </div>
        </td>
        <td class="th_checkbox">
          <div class="th_inner">
            {{item.money}}
          </div>
        </td>
        <td class="th_checkbox">
          <div class="th_inner">
            {{item.url}}
          </div>
        </td>
        <td class="th_checkbox">
          <div class="th_inner">
            {{item.createTime}}
          </div>
        </td>
        <td class="th_checkbox">
          <div class="th_inner fstatu"  :title="item.statu">
            <i class="iconfont icon-yuan" style="color:green"></i>
            {{item.statu}}
          </div>
        </td>

        <td class="th_checkbox">
          <div class="th_inner">
            <i class="iconfont icon-edit" @click="fedit(index, item)"></i>
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
              <td>产品ID:</td>
              <td><input type="text" v-model="addItem.id" /></td>
            </tr>
            <tr>
              <td>二维码ID</td>
              <td><input type="text" v-model="addItem.erweimaID"/>></td>
            </tr>
            <tr>
              <td>订单价格:</td>
              <td>
                <input type="number" v-model="addItem.id" />
              </td>
            </tr>
            <tr>
              <td>真实价格:</td>
              <td>
                <input type="number" v-model="addItem.realPrice" />
              </td>
            </tr>
            <tr>
              <td>订单标题:</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>类型:</td>
              <td>
                <input type="text" v-model="addItem.leixing"/>
              </td>
            </tr>
            <tr>
              <td>支付时间:</td>
              <td>
                <input type="text" v-model="addItem.payTime" />
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
  props:['erweimadata'],
  data() {
    return {
      isshow: false,
      newItem: {
        orderNum: '',
        id: '',
        orderPrice: '',
        realPrice: '',
        outNum: '',
        zdy: '',
        leixing: '',
        payTime: '',
        createTime: '',
        statu: ' '
      },
      addItem: {},
      Allselect: false
    }
  },
  created() {
    this.erweimadata.forEach(item => {
      item.checked = false
    })
  },
  methods: {
    //全选反选
    selectAll() {
      this.erweimadata.forEach(v => {
        v.checked = this.Allselect
      })
    },
    selectItem(checked) {
      if (checked) {
        this.Allselect = this.erweimadata.every(item => item.checked)
      } else {
        this.Allselect = false
      }
    },

    //删除对象
    del: function(index) {
      if (window.confirm('你确定要删除吗')) {
        this.erweimadata.splice(index, 1)
      }
    },

    // 点击保存按钮
    fsave: function() {
      if (this.addItem.index > -1) {
        this.erweimadata.splice(this.addItem.index, 1, this.addItem)
      } else {
        this.erweimadata.push(this.addItem)
      }
      this.addItem = {}
      this.isshow = false
    },
    // 增加数据
    add: function() {
      this.isshow = true,
      this.addItem = JSON.parse(JSON.stringify(this.newItem))
    },
    // 修改数据
    fedit(index, item) {
       this.isshow = true
      this.addItem = JSON.parse(JSON.stringify(item))
      this.addItem.index = index
    },
    //重置
    freset(){
      this.addItem=JSON.parse(JSON.stringify(this.newItem))
    }
  },
  computed: {
    slist() {
      return this.erweimadata.filter(item => item.checked)
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
</style>
