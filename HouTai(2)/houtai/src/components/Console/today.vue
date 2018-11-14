<template>
  <div class="Today">
    <div class="bord-box">
      <div class="bo-box">
        <div class="Register" v-for="aa in today">
            <span class="picture">
              <i :class="aa.classname"></i>
            </span>
          <div class="today-box">
            <span class="num">{{aa.number}}</span>
            {{aa.title}}
          </div>
          <div class="line">
            <div class="lines"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "today",
      props:['today']
    }
</script>

<style scoped>

  i.icon-toggle{
    display: block;
    width: 45px;
    height: 50px;
    font-size: 10px;
    color: #fff;
    text-align: center;
    line-height: 50px;
  }

  .Today{
    overflow: hidden;
    padding-left:15px;
    padding-right:15px;
  }
  .bord-box{
    box-sizing: border-box;
  }
  .bo-box{
    margin-left: -15px;
    margin-right: -15px;
  }
  .Register{
    width:50%;
    float: left;
    font-size: 14px;
    color: #393939;
    padding:0 15px;
  }
  .picture{
    float: left;
    width:50px;
    height:37px;
    text-align: center;
    line-height: 37px;
  }
  .picture .iconfont{
    font-size: 29px;
    color: #18bc9c;
  }
  .today-box{
    margin-bottom: 10px;
  }
  .num{
    display:block;
  }
  .line{
    margin-bottom: 17px;
    height:2px;
    background:#cbc9c9;
  }
.lines{
  width:25%;
  height:100%;
  background:#18bc9c;
}
  .Register:nth-child(1) .lines{
    width:30%;
  }
</style>
