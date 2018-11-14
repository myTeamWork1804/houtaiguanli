<template>
  <div class="D-data-box">
    <div class="Total-data-box"  v-for="aaa in Statistics">
      <div class="Total-number-of-members">
            <span class="Icon">
              <i :class="aaa.classname"></i>
            </span>
        <div class="number">
          <span>{{aaa.number}}</span>
          {{aaa.title}}
        </div>
      </div>
    </div>
    <!--<div class="Total-data-box">-->
      <!--<div class="Total-number-of-members">-->
            <!--<span class="Icon">-->
              <!--<i class="iconfont icon-book"></i>-->
            <!--</span>-->
        <!--<div class="number">-->
          <!--<span>219390</span>-->
          <!--总访问数-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="Total-data-box">-->
      <!--<div class="Total-number-of-members">-->
            <!--<span class="Icon">-->
              <!--<i class="iconfont icon-qiehuan"></i>-->
            <!--</span>-->
        <!--<div class="number">-->
          <!--<span>32143</span>-->
          <!--总订单数-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="Total-data-box">-->
      <!--<div class="Total-number-of-members">-->
          <!--<span class="Icon">-->
            <!--<i class="iconfont icon-jiage-copy"></i>-->
          <!--</span>-->
        <!--<div class="number">-->
          <!--<span>174800</span>-->
          <!--总金额-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
    export default {
      name: "ConsoleStatistics",
      props:["Statistics"],
      watch:{
        Statistics:function (a,b) {
          console.log(this.Statistics)
        }
      }
    }
</script>

<style scoped>
  .D-data-box{
    width:100%;
    overflow: hidden;
  }

  .Total-data-box{
    width:25%;
    float: left;
    padding:0 15px;
  }
  .Total-number-of-members{
    margin-bottom: 30px;
    padding:20px;
    border-bottom:1px solid #f5f5f5;
  }
  .number{
    margin-bottom:8px;
  }
  .Icon{
    float: left;
    width:60px;
    height:60px;
    text-align: center;
    line-height: 60px;
    background:#f05050;
    margin-right: 10px;
    border-radius:5px;
  }
  .D-data-box :nth-child(2) .Icon{
    background:#7266ba;
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

  .D-data-box :nth-child(3) .Icon{
    background: #23b7e5;
  }
  .D-data-box :nth-child(4) .Icon{
    background:#27c24c;
  }
  .Icon .iconfont{
    font-size:34px;
  }

  .number span{
    font-size:18px;
    font-weight: 600;
    display: block;
    margin-bottom: 10px;
  }
  .number{
    font-size:12px;
    padding-top:4px;
  }

</style>
