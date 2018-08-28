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
                <div class="team-freq" v-show="index===1">
                    <div class="chart-box-b pad">
                        <ul class="player-prop">
                            <li>
                                <div class="player-prop-item ">
                                    <p class="player-prop-text yellow">威胁进攻<br/>转化进球比例</p>
                                    <div class="player-prop-form"></div>
                                </div>
                            </li>
                            <li>
                                <div class="player-prop-item ">
                                    <p class="player-prop-text blue">威胁进攻<br/>转化进球比例</p>
                                    <div class="player-prop-form"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="team-info" v-show="index ===2">
                    <p class="team-main-for"><img src="../../assets/images/pic-ball-2.png" class="all-img" alt=""></p>
                    <div class="nav-team nav-team-ye mtop">
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
                <div v-show="index===3" class="nav-strength">
                    <div class="chart-box-t" id="chart-box-t" style="width:3.3rem;height:2.5rem;">
                        <p class="str-title" style="margin-left: -.1rem">
                            <i class="icon ico-contrast"></i>
                            <span>历史数据统计</span>
                        </p>
                        <div id="myChart"></div>
                    </div>
                    <div class="chart-box-b" id="chart-box-b" style="width:4rem;height:2rem;margin-left: -.25rem;">
                        <p class="str-title" style="padding-left: .4rem;">
                            <i class="icon ico-team-ball"></i>
                            <span>进球时间发布</span>
                        </p>
                        <div id="myChartBar" style="margin-top:-.5rem;"></div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入组件
  require('echarts/lib/chart/radar')
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
        this.drawRadar()
        this.drawBar()
      })

      var chartBox = this.getObj('chart-box-t'),
          chartBoxBar = this.getObj('chart-box-b'),
          myChartsize = this.getObj('myChart'),
          myChartBar = this.getObj('myChartBar')

      this.computedStyle(myChartsize, chartBox)
      this.computedStyle(myChartBar, chartBoxBar)
      window.onresize = function () {
        this.chartssize(myChartsize, chartBox)
        this.chartssize(myChartBar, chartBoxBar)
      }
    },
    methods: {
      getObj(id) {
          return document.getElementById(id)
      },
      computedStyle (obj1, obj2) {
        obj1.style.width = obj2.style.width
        obj1.style.height = obj2.style.height
      },
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
      drawBar () {
          let myChartBar = echarts.init(document.getElementById('myChartBar'))
          myChartBar.setOption({
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      crossStyle: {
                          color: '#999'
                      }
                  }
              },
              toolbox: {
                  feature: {
                      dataView: {show: true, readOnly: false},
                      magicType: {show: true, type: ['line', 'bar']},
                      restore: {show: true},
                      saveAsImage: {show: true}
                  }
              },
              xAxis: [
                  {
                      type: 'category',
                      data: ['10-20','20-30','30-40','40-50','40-50','40-50'],
                      axisPointer: {
                          type: 'shadow'
                      },
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLabel: {
                          interval: 0
                      },
                      offset: 3,
                      axisLine: {
                          lineStyle:{
                              color:'#9b9b9b',
                              type: 'solid',
                              width:1,//这里是为了突出显示加上的
                          }

                      }
                  }
              ],
              yAxis: [
                  {
                      type: 'value',
                      name: '水量',
                      min: 0,
                      max: 250,
                      interval: 50,
                      axisLabel: {
                          formatter: '{value} ml'
                      },
                      show: false
                  }
              ],
              series: [
                  {
                      name:'蒸发量',
                      type:'bar',
                      data:[135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                      itemStyle:{
                          normal:{
                              color:'#f8b62d'
                          }
                      },
                      barWidth: 10,
                      barCateGoryGap:20
                  },
                  {
                      name:'降水量',
                      type:'bar',
                      data:[175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                      itemStyle:{
                          normal:{
                              color:'#4ad2ff'
                          }
                      },
                      barWidth: 10,
                      barCateGoryGap:20
                  }
              ]
          });
      },
      drawRadar() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表

        myChart.setOption({
//          title: {
//            text: '历史数据统计'
//          },
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
                fontSize: 12
//                padding: [3, 5]
              }
            },
            indicator: [
                { name: '场均进球', max: 6500},
                { name: '场均失误', max: 16000},
                { name: '场均拦截', max: 30000},
                { name: '场均失球', max: 38000},
                { name: '场均跑动距离', max: 52000},
                { name: '场均机会球', max: 25000}
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
