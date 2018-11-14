<template>
  <div class="row">
    <div class="new-box">
      <div class="border-top-color">
        <div class="header-box">
          <h3 class="new-title">最新新闻</h3>
          <span class="more">更多</span>
        </div>
        <div class="new-content" >
          <ul class="ul-box">
            <li class="li-box"  v-for="aa in Journalism.content">
              <a href="#">
                <router-link :to="aa.url">
                  <span class="text">{{aa.title}}</span>
                </router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="new-box">
      <div class="border-top-color1">
        <div class="header-box">
          <h3 class="new-title">最新发贴</h3>
          <span class="more">更多</span>
        </div>
        <div class="new-content">
          <ul class="ul-box">
            <li class="li-box" v-for="aa in Journalism.Thelatestpost">
              <a href="#">
                {{aa.title}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="new-box">
      <div class="border-top-color2">
        <div class="header-box">
          <h3 class="new-title">服务器信息</h3>
          <span class="more">更多</span>
        </div>
        <div class="new-content">
          <table class="table">
            <tr v-for="aa in Journalism.server">
              <td width="140">
                {{aa.title}}
              </td>
              <td>
               {{aa.content}} &nbsp<a href='#'>{{aa.inspect}}</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ConsoleArticle",
        props:["Journalism"]
    }
</script>

<style scoped>
  .row{
    margin-top: 15px;
    overflow: hidden;
  }
  .new-box .border-top-color1{
    border-top:2px solid #18bc9c;
    margin-bottom: 15px;
  }
  .new-box .border-top-color2{
    border-top:2px solid #3498db ;
    margin-bottom: 15px;
  }
  .new-box{
    padding-left:15px;
    padding-right:15px;
  }
  .border-top-color{
    border-top:2px solid #e74c3c;
    margin-bottom:15px;
  }
  .header-box{
    overflow: hidden;
    padding:10px;
    border-left: 1px solid #f4f4f4;
    border-right: 1px solid #f4f4f4;
  }
  .new-title{
    float: left;
    font-size: 18px;
  }
  .more{
    float: right;
    font-size:14px;
  }


  .new-content{
    padding:15px;
    border: 1px solid #f4f4f4;
    border-top:none;
  }
  .new-content .ul-box .li-box{
    border-bottom: 1px solid #f4f4f4;
  }
  .new-content .ul-box .li-box:last-of-type{
    border-bottom: none;
  }
  .ul-box .li-box {
    padding:15px;
  }
  .ul-box .li-box:hover{
    background:#faf4f4;
  }
  .ul-box .li-box:nth-child(2):hover{
    color:#16a98c;
  }
  .ul-box .li-box .text{
    color:#333333;
  }
  .ul-box .li-box a{
    font-size:12px;
  }
  .table{
    width:100%;
    padding:15px;
  }

  .table td{
    padding:8px;
    font-size: 12px;
    color:#333333;
  }
  .table tr:nth-child(2n+1) {
    background:#faf6f6;
  }

</style>
