<template>
  <div id="Fold-line-diagram">

  </div>
</template>

<script>
  var echarts = require('echarts');

    export default {
      name: "Bigdata",
      mounted() {
        var myChart = echarts.init(document.getElementById("Fold-line-diagram"));
          var option = {
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: '3%',
              top: '15%',
              containLabel: true
            },
            legend: {
              data: ['成交数', '订单数']
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
              }
            ],
            yAxis: {
              type: 'value'
            }
            ,
            series: [
              {
                name: '成交数',
                type: 'line',
                areaStyle: {
                  normal: {
                    type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(199, 37, 50,0.2)'
                    }, {
                      offset: 1,
                      color: 'rgba(199, 37, 50,0.2)'
                    }], false)
                  }
                },
                smooth: true,
                itemStyle: {
                  normal: {areaStyle: {type: 'default'}}
                },
                data: [136, 375, 380, 449, 114, 267, 142, 318, 357, 193, 421, 391]
              },
              {
                name: '订单数',
                type: 'line',
                areaStyle: {
                  normal: {
                    type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(19, 37, 250,0.2)'
                    }, {
                      offset: 1,
                      color: 'rgba(19, 37, 250,0.2)'
                    }], false)
                  }
                },
                smooth: true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [610, 312, 221, 654, 910, 630, 310, 521, 354, 560, 830, 310]
              }
            ]
          };
        myChart.setOption(option);
      }
    }
</script>

<style scoped>
  #Fold-line-diagram{
    height:200px;
  }
</style>
