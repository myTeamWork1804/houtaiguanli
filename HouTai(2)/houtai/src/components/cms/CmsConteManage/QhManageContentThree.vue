<template>
  <div class="qh_table">
    <form >
      <div class="row">
        <div class="qh_box_inp">
          <label for="id" class="form_label">定金ID</label>
          <div class="input_box">
            <input type="text" id="id" class="form_input" placeholder="定金ID"/>
          </div>

        </div>
        <div class="qh_box_inp">
          <label for="user_id" class="form_label">会员ID</label>
          <div class="input_box">
            <input type="text" id="user_id" class="form_input" placeholder="会员ID"/>
          </div>

        </div>
        <div class="qh_box_inp">
          <label for="wendang_id" class="form_label">文档Id</label>
          <div class="input_box">
            <input type="text" id="wendang_id" class="form_input" placeholder="文档Id"/>
          </div>

        </div>
        <div class="qh_box_inp">
          <label for="title" class="form_label">订单标题</label>
          <div class="input_box">
            <input type="text" id="title" class="form_input" placeholder="订单标题"/>
          </div>

        </div>
        <div class="qh_box_inp">
          <label for="amount" class="form_label">订单金额</label>
          <div class="input_box ">
            <div class="row">
              <div class="input_box_50">
                <input type="text" id="amount" class="form_input" placeholder="订单金额"/>
              </div>
              <div class="input_box_50 input_box-">
                <input type="text"  class="form_input" placeholder="订单金额"/>
              </div>
            </div>

          </div>

        </div>
        <div class="qh_box_inp">
          <label for="money" class="form_label">支付金额</label>
          <div class="input_box ">
            <div class="row">
              <div class="input_box_50">
                <input type="text" id="money"  class="form_input" placeholder="订单金额"/>
              </div>
              <div class="input_box_50 input_box-">
                <input type="text"   class="form_input" placeholder="订单金额"/>
              </div>
            </div>

          </div>

        </div>



        <div class="qh_box_inp">
          <label for="paytype" class="form_label">支付类型</label>
          <div class="input_box">
            <input type="text" id="paytype" class="form_input" placeholder="支付类型"/>
          </div>

        </div>
        <div class="qh_box_inp">
          <label for="paytime" class="form_label">支付时间</label>
          <div class="input_box">
            <input type="text" id="paytime" class="form_input" placeholder="支付时间"/>
          </div>

        </div>
        <div class="qh_box_inp">
          <label for="ip" class="form_label">IP地址</label>
          <div class="input_box">
            <input type="text" id="ip" class="form_input" placeholder="IP地址"/>
          </div>

        </div>
        <div class="qh_box_inp">
          <label for="beizhu" class="form_label">备注</label>
          <div class="input_box">
            <input type="text" id="beizhu" class="form_input" placeholder="备注"/>
          </div>

        </div>
        <div class="qh_box_inp">
          <label for="createtime" class="form_label">添加时间</label>
          <div class="input_box">
            <input type="text" id="createtime" class="form_input" placeholder="添加时间"/>
          </div>

        </div>
        <div class="qh_box_inp">
          <label for="updatetime" class="form_label">更新时间</label>
          <div class="input_box">
            <input type="text" id="updatetime" class="form_input" placeholder="更新时间"/>
          </div>

        </div>
        <div class="qh_box_inp">
          <label for="status" class="form_label">状态</label>
          <div class="input_box">
            <select class="form_input" id="status">
              <option value="">选择</option>
              <option value="">未支付</option>
              <option value="">已支付</option>
              <option value="">已过期</option>
            </select>
          </div>

        </div>
        <div class="qh_box_inp">
          <div class="input_box inp_mag">
            <input type="submit" value="提交" class="btn btn_green"/>
            <input type="reset" value="重置" class="btn"/>
          </div>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: "QhManageContentThree"
    }
</script>

<style scoped>

  .row{
    margin-left: -15px;
    margin-right: -15px;
  }
  .row::after{
    content:'';
    height:0;
    display: block;
    clear: both;
    visibility: hidden;
    overflow: hidden;
  }
  .qh_box_inp{
    margin-bottom: 15px;
    width: 25%;
    float: left;
    position: relative;;
    padding-left: 15px;
    padding-right: 15px;

  }
  .input_box{
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    width: 66.66666667%;
    float:left;
    box-sizing: border-box;
  }
  .form_label{
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
    width: 33.33333333%;
    float:left;
    /*padding-left: 15px;*/
    /*padding-right: 15px;*/
  }
  .form_input{
    display: inline-block;
    width: 100%;
    height: 31px;
    padding: 6px 12px;
    font-size: 12px;
    line-height: 1.42857143;
    color: #555555;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .inp_mag{
    margin-left: 33.33333333%;
  }
  .btn{
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 3px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .input_box_50{
    width: 50%;
    float:left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .input_box-::before{
    content: "-";
    position: absolute;
    left: -2%;
    top: 6px;
  }
</style>
