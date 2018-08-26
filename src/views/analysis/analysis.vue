<template>
    <div>
        <section class="an-for-top">
            <div class="an-score">
                <div class="an-score-item">
                    <span class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></span>
                    <span class="country-name">塞尔塔</span>
                </div>
                <div class="an-score-item center-spe">
                    <span class="vin-score">1-2</span>
                    <span class="vin-all">50:71</span>
                </div>
                <div class="an-score-item">
                    <span class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></span>
                    <span class="country-name">巴塞罗那</span>
                </div>
            </div>
          <div class="live-process mtop">
            <div class="bar" :style="{width: num + '%'}"></div>
            <p class="s-ball t"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
            <p class="s-ball"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
            <p class="s-ball" style="left: .8rem;"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
          </div>
            <!--<div class="live-process mtop"></div>-->
        </section>
        <section class="an-main">
            <nav class="sub-nav ">
                <p
                  class="sub-nav-item"
                  v-for="item in 3"
                  @click="toggleList(item)"
                  :class="{'nav-current': index == item}"
                >{{item === 1 ? '进攻频率' : item === 2 ? '阵型战术' : '球队实力'}}</p>
                <!--<p class="sub-nav-item sub-nav-current">进攻频率</p>-->
                <!--<p class="sub-nav-item">阵型战术</p>-->
                <!--<p class="sub-nav-item">球队实力</p>-->
            </nav>
            <div class="team-main mtop">
                <!--<p class="team-main-for"><img src="../../assets/images/pic-ball-2.png" class="all-img" alt=""></p>-->
                <!--<div class="team-info mtop">-->
                    <!--<div class="nav-team nav-team-ye">-->
                        <!--<span class="nav-team-item nav-team-sy">主队（塞尔塔）</span>-->
                        <!--<span class="nav-team-item">客队（巴塞罗那）</span>-->
                    <!--</div>-->
                    <!--<div class="main-team"></div>-->
                <!--</div>-->
              <div v-show="index===3" style="width:3rem;height:250px;margin:0 auto;"  class="chart-box">
                1
                <div id="myChart" ref="myChart">

                </div>
              </div>
            </div>
        </section>
    </div>
</template>
<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  export default {
    data() {
      return {
        num: 72,
        index: 1
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.drawLine()
      })

      var chartBox = document.getElementsByClassName('chart-box')[0]
      var myChartsize = document.getElementById('myChart')
      myChartsize.style.width = chartBox.style.width
      myChartsize.style.height = chartBox.style.height
      window.onresize = function () {
        this.chartssize(myChartsize, chartBox)
      }
    },
    methods: {
      getStyle(el, name) {
        if (window.getComputedStyle) {
          return window.getComputedStyle(el, null);
        } else {
          return el.currentStyle;
        }
      },
      chartssize: function(container,charts) {
        var wi = this.getStyle(container, 'width').width;
        var hi = this.getStyle(container, 'width').height;
        charts.style.width = wi
        charts.style.height = hi
        console.log(charts.style.width)
        console.log(charts.style.height)
      },
      toggleList(i) {
        this.index = i
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  }
</script>
<style lang="scss">
    @import "./analysis.scss";
</style>
