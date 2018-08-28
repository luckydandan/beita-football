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
            <div class="team-main mtop" v-show="index!==3">
                <p class="team-main-for"><img src="../../assets/images/pic-ball-2.png" class="all-img" alt=""></p>
                <div class="team-info mtop">
                    <div class="nav-team nav-team-ye">
                        <span class="nav-team-item nav-team-sy">主队（塞尔塔）</span>
                        <span class="nav-team-item">客队（巴塞罗那）</span>
                    </div>
                    <div class="main-team">
                        <div class="main-team-one">
                            <div class="scroll">
                                <p class="team-header">
                                    <i class="icon ico-host-score"></i>
                                    <span class="host-text">球员评分</span>
                                </p>
                                <div class="team-list">
                                    <p class="on-peo">上场队员</p>
                                    <ul class="on-peo-list">
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-list">
                                    <p class="on-peo">替补队员</p>
                                    <ul class="on-peo-list">
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="main-team-one">
                            <div class="scroll">
                                <p class="team-header">
                                    <i class="icon ico-host-score"></i>
                                    <span class="host-text">球员评分</span>
                                </p>
                                <div class="team-list">
                                    <p class="on-peo">上场队员</p>
                                    <ul class="on-peo-list">
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-list">
                                    <p class="on-peo">替补队员</p>
                                    <ul class="on-peo-list">
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                        <li>
                                            <span>13 xxx</span>
                                            <span>-6.5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<p class="team-main-for"><img src="../../assets/images/pic-ball-2.png" class="all-img" alt=""></p>-->
                <!--<div class="team-info mtop">-->
                    <!--<div class="nav-team nav-team-ye">-->
                        <!--<span class="nav-team-item nav-team-sy">主队（塞尔塔）</span>-->
                        <!--<span class="nav-team-item">客队（巴塞罗那）</span>-->
                    <!--</div>-->
                    <!--<div class="main-team"></div>-->
                <!--</div>-->
              <!--<div v-show="index===3" style="width:3.5rem;height:250px;margin:0 auto;"  class="chart-box">-->
                <!--<div id="myChart" ref="myChart"></div>-->
              <!--</div>-->
            </div>
          <div v-show="index===3" style="width:3.5rem;height:250px;margin:0 auto;"  class="chart-box">
            <div id="myChart" ref="myChart"></div>
          </div>
        </section>
    </div>
</template>
<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入组件
  require('echarts/lib/chart/radar')
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
            text: '历史数据统计'
          },
          tooltip: {},
          legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#1a1a1a',
                backgroundColor: '#f5f5f5',
                padding: [3, 5]
              }
            },
            indicator: [
              { name: '信息技术', max: 6500},
              { name: '信息技术', max: 16000},
              { name: '信息技术', max: 30000},
              { name: '信息技术', max: 38000},
              { name: '信息技术', max: 52000},
              { name: '信息技术', max: 25000}
            ],
            splitArea : {
              show : true,
              areaStyle : {
                color: ['#f5f5f5']
              }
            },
            splitLine : {
              show : true,
              lineStyle : {
                width : 1,
                color : ['#e1e1e1','#9a9a9a']
                // 图表背景网格线的颜色
              }
            }
          },
          series: [{
            name: '预算 vs 开销',
            type: 'radar',
            data : [
              {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销',
                areaStyle: {
                  normal: {
                    opacity: 0.6,
                    color: '#c1d7ef'
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: '#4a90e2',
                    borderWidth: 3,
                  }
                },
                lineStyle: {                // 单项线条样式。
                  normal: {
                    width: 0
                  }
                }
                },
              {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配',
                areaStyle: {
                  normal: {
                    opacity: 0.6,
                    color: '#d8c99f'
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: '#f8b62d',
                    borderWidth: 3,
                  }
                },
                lineStyle: {                // 单项线条样式。
                  normal: {
                    width: 0
                  }
                }
              },
            ]
          }]
        });
      }
    }
  }
</script>
<style lang="scss">
    @import "./analysis.scss";
</style>
