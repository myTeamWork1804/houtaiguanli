<template>
  <div>
    <div class="D-text-box">
      <b>控制台</b>
      <p>用于展示当前系统的统计数据、统计报表及重要实时数据</p>
      <ul class="D-ul-box">
        <li  @click="switchA" :class="{switch02:is2,switch03:is3,}">
          <a href="#">控制台</a>
        </li>
        <li   @click="switchB" :class="{switch04:is4,switch01:is1,}">
          <a href="#">自定义</a>
        </li>
      </ul>
    </div>
    <Consolesection :dependencies="dependencies" v-show="select"></Consolesection>
    <ConsoleBlank v-show="blank"></ConsoleBlank>
  </div>
</template>

<script>
  import Consolesection from "./Consolesection"
  import ConsoleBlank from "./ConsoleBlank"

    export default {
      props:['dependencies'],
        name: "Consolemiddleheader",
      components:{
        Consolesection,
        ConsoleBlank
      },
      methods:{
        switchA(){
          this.select=true;
          this.blank=false;
          this.is2 = true;
          this.is1 = true;
          this.is3 = false ;
          this.is4 = false ;
        },
        switchB(){
          this.select=false;
          this.blank=true;
          this.is4 =true ;
          this.is3 = true ;
          this.is2 = false;
          this.is1 = false;
        }
      },
      data(){
          return {
            select:true,
            blank:"",
            is2:true,
            is3:false,
            is1:true,
            is4:false
          }
      },
      // mounted(){
      //   console.log(this.Statistics)
      // }
      watch:{
        dependencies:function (a,b) {
          console.log(this.dependencies)
        }
      }
    }
</script>

<style scoped>
  .D-text-box{
    height:108px;
    background:#e8edf0;
    margin:15px 15px 0 15px;
    font-size: 14px;
    padding-left: 16px;
    padding-top: 16px;
  }
  .D-ul-box{
    margin-top:14px;
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

  .switch01{
    width:70px;
    height:40px;
    background: #d8e0e6;
    color:#adbbbd;
    text-align: center;
    line-height: 40px;
    float: left;
    margin-right:6px;

  }
  .switch03{
    width:70px;
    height:40px;
    background: #d8e0e6;
    color:#adbbbd;
    text-align: center;
    line-height: 40px;
    float: left;
    margin-right:6px;

  }


  .switch02{
    width:70px;
    height:40px;
    color:#adbbbd;
    text-align: center;
    line-height: 40px;
    float: left;
    margin-right:6px;
    border-bottom: none;
    background: #ffffff;
  }
.switch04{
  width:70px;
  height:40px;
  color:#adbbbd;
  text-align: center;
  line-height: 40px;
  float: left;
  margin-right:6px;
  border-bottom: none;
  background: #ffffff;
}

  .D-ul-box a{
    color:#adbbbd;
  }
</style>
