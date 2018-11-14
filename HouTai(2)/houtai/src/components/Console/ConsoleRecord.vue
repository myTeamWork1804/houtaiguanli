<template>
  <div class="row">
    <div class="bor-box" v-for="aa in realtime.one">
      <div class="bo-box">
        <div class="classification">
          <div class="title">
            <span>{{aa.state}}</span>
            <span>{{aa.classification}}</span>
          </div>
          <div class="number-box">
            {{aa.number}}
          </div>
          <div class="Quantity">
            <i :class="aa.classname"></i>
            {{aa.number}}
          </div>
          <p class="text-box">{{aa.title}}</p>
        </div>
      </div>
    </div>
    <div class="bor-box" v-for="aa in realtime.two">
      <div class="bo-box">
        <div class="classification">
          <div class="title">
            <span>{{aa.state}}</span>
            <span>{{aa.classification}}</span>
          </div>
          <div class="Statistical-classification">
            <div class="number-box">
              {{aa.comment}}
            </div>
            <div class="Quantityl">
              <i :class="aa.classname"></i>
              {{aa.commentnumber}}
            </div>
          </div>
          <div class="Statistical-classification">
            <div class="number-box">
              {{aa.Givethethumbsup}}
            </div>
            <div class="Quantityl">
              <i :class="aa.className"></i>
              {{aa.Givethethumbsupnumber}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ConsoleRecord",
        props:["realtime"]
    }
</script>

<style scoped>
  .row{
    margin-top: 15px;
    overflow: hidden;
  }

  .bor-box{
    padding-right:15px;
    padding-left: 15px;
    width:25%;
    float: left;
  }
  .bo-box{
    padding-left: 15px;
    padding-right:15px;
  }
  .classification{
    padding: 15px;
    overflow: hidden;
    background: #0073b7;
  }
  .title{
    overflow: hidden;
  }
  .title span{
    display: inline-block;
    font-size:12px;
    color: #ffffff;
    float: left;
  }
  .title span:nth-child(1){
    float: right;
    background: #18bc9c;
    padding:1px;
  }

  i.icon-toggle{
    display: block;
    width: 45px;
    height: 50px;
    font-size: 10px;
    color: #fff;
    text-align: center;
    line-height: 50px;
  }

  .number-box{
    font-size: 28px;
    font-weight: 600;
    color: #ffffff;
    margin:10px 0;
  }
  .Statistical-classification{
    width:50%;
    float: left;
    padding-left:9px;
    padding-right:9px;
    padding-bottom: 15px;
  }
  .Quantity{
    color: #d2d6de;
    font-size: 10px;
  }
  .Quantityl{
    font-size:10px;
    color: #0f284e;
  }
  .text-box{
    font-size: 12px;
    color: #ffffff;
  }
  .bor-box:nth-child(2) .classification{
    background: #47a1de;
  }
  .bor-box:nth-child(3) .classification{
    background: #6d69af;
  }
  .bor-box:nth-child(4) .classification{
    background: #1acfab;
  }
</style>
