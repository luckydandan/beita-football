<template>
  <div>
    <section class="an-for-top">
      <div class="an-score">
        <div class="an-score-item">
          <span class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></span>
          <span class="country-name">塞尔塔</span>
        </div>
        <div class="an-score-item center-spe">
          <span class="vin-score">1 - 2</span>
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
      </nav>
      <div class="team-main mtop">
        <!--进攻频率-->
        <div class="team-freq" v-show="index===1">
          <!--折线图-->
          <div class="chart-shape">
            <p class="chart-shape-com s-ye">
              <span class="shape shape-1">进攻次数<strong>10</strong></span>
              <span class="shape shape-2">威胁进攻<strong>10</strong></span>
              <span class="shape shape-3">机会球<strong>10</strong></span>
            </p >
            <div id="chart-box-l" style="width:100%;height: 218px; margin-top:-.3rem; position: relative;">
              <div id="myChartLine"></div>
              <p class="bgz"></p>
              <p class="grey-bg grey-bg1">
                <span>塞尔塔</span>
              </p>
              <p class="grey-bg grey-bg2">
                <span>巴萨</span>
              </p>
              <p class="po-ball ball1"></p>
              <p class="po-ball ball2"></p>
              <p class="po-ball ball3"></p>
            </div>
            <p class="chart-shape-com s-bl">
              <span class="shape shape-1">进攻次数<strong>10</strong></span>
              <span class="shape shape-2">威胁进攻<strong>10</strong></span>
              <span class="shape shape-3">机会球<strong>10</strong></span>
            </p>
          </div>

          <div class="chart-box-y pad">
            <ul class="player-prop">
              <li>
                <div class="player-prop-item">
                  <p class="player-prop-text orange">威胁进攻<br/>转化进球比例</p >
                  <div class="player-prop-form" id="chart-box-p" style="width:1.5rem;height:1.5rem; margin-left: -.03rem;">
                    <div id="myChartPie"></div>
                  </div>
                  <div class="player-prop-form"  style="width:1.5rem;height:1.5rem; margin-left: -.03rem;">
                    <div id="myChartPie2"></div>
                  </div>
                </div>
              </li>
              <li>
                <div class="player-prop-item">
                  <p class="player-prop-text red">威胁进攻<br/>转化进球比例</p >
                  <div class="player-prop-form" style="width:1.5rem;height:1.5rem; margin-left: -.03rem;">
                    <div id="myChartPie3"></div>
                  </div>
                  <div class="player-prop-form" style="width:1.5rem;height:1.5rem; margin-left: -.03rem;" >
                    <div id="myChartPie4"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!--阵型战术-->
        <div class="team-info" v-show="index ===2">
          <p class="team-main-for">
            <img src="../../assets/images/pic-ball-2.png" v-if="fIndex===1" class="all-img" alt="">
            <img src="../../assets/images/pic-ball-1.png" v-else class="all-img" alt="">
          </p>
          <div class="nav-team mtop" :class="fIndex === 1 ? 'nav-team-ye': 'nav-team-blue'">
            <span class="nav-team-item" @click="toggleTeam(1)" :class="fIndex === 1 ? 'nav-team-sy' : ''">主队（塞尔塔）</span>
            <span class="nav-team-item" @click="toggleTeam(2)"  :class="fIndex === 2 ? 'nav-team-sy' : ''">客队（巴塞罗那）</span>
          </div>
          <section class="team-box">
            <div v-if="fIndex===1" class="main-team">
              <div class="main-team-one">
                <p class="team-header">
                  <i class="icon ico-host-score"></i>
                  <span class="host-text">球员评分</span>
                </p>
                <div class="scroll">
                  <div class="team-list">
                    <p class="on-peo yellow-l">上场队员</p>
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
                    <p class="on-peo yellow-l">替补队员</p>
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
                <p class="team-header">
                  <i class="icon ico-host-report"></i>
                  <span class="host-text">球员体能</span>
                </p>
                <div class="scroll">
                  <div class="team-list">
                    <p class="on-peo yellow-l">上场队员</p>
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
                    <p class="on-peo yellow-l">替补队员</p>
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
            <div v-else class="main-team">
              <div class="main-team-one">
                <p class="team-header">
                  <i class="icon ico-host-score"></i>
                  <span class="host-text">球员评分</span>
                </p>
                <div class="scroll">
                  <div class="team-list">
                    <p class="on-peo blue-l">上场队员</p>
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
                    <p class="on-peo blue-l">替补队员</p>
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
                <p class="team-header">
                  <i class="icon ico-host-report"></i>
                  <span class="host-text">球员体能</span>
                </p>
                <div class="scroll">
                  <div class="team-list">
                    <p class="on-peo blue-l">上场队员</p>
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
                    <p class="on-peo blue-l">替补队员</p>
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
          </section>
        </div>

        <!--球队实力-->
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
            <div class="chart-box-info">
              <p class="chart-tags">塞尔塔</p>
              <p class="chart-tags">巴塞罗那</p>
            </div>
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
  require('echarts/lib/chart/line')
  require('echarts/lib/chart/pie')

  require('echarts/lib/component/markLine')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/visualMap')

  export default {
    data() {
      return {
        num: 72,  // 进度条
        index: 1,  // tab索引
        fIndex: 1  // 切换球队tab索引
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.drawRadar()
        this.drawBar()
        this.drawLine()
        this.drawPie('myChartPie', 'rgb(255, 158, 68)','rgb(255, 70, 131)')
        this.drawPie('myChartPie2', 'rgb(255, 158, 68)','rgb(255, 70, 131)')
        this.drawPie('myChartPie3', 'rgb(255, 158, 68)','rgb(255, 70, 131)')
        this.drawPie('myChartPie4', 'rgb(255, 158, 68)','rgb(255, 70, 131)')
      })

      var chartBox = this.getObj('chart-box-t'),
        chartBoxBar = this.getObj('chart-box-b'),
        chartBoxLine = this.getObj('chart-box-l'),
        chartBoxPie = this.getObj('chart-box-p'),

        myChartsize = this.getObj('myChart'),
        myChartBar = this.getObj('myChartBar'),
        myChartLine = this.getObj('myChartLine'),
        myChartPie = this.getObj('myChartPie'),
        myChartPie2 = this.getObj('myChartPie2'),
        myChartPie3 = this.getObj('myChartPie3'),
        myChartPie4 = this.getObj('myChartPie4')

      this.computedStyle(myChartsize, chartBox)
      this.computedStyle(myChartBar, chartBoxBar)
      this.computedStyle(myChartLine, chartBoxLine)
      this.computedStyle(myChartPie, chartBoxPie)
      this.computedStyle(myChartPie2, chartBoxPie)
      this.computedStyle(myChartPie3, chartBoxPie)
      this.computedStyle(myChartPie4, chartBoxPie)

      window.onresize = function () {
        this.chartssize(myChartsize, chartBox)
        this.chartssize(myChartBar, chartBoxBar)
        this.chartssize(myChartLine, chartBoxLine)
        this.chartssize(myChartPie, chartBoxPie)
        this.chartssize(myChartPie2, chartBoxPie)
        this.chartssize(myChartPie3, chartBoxPie)
        this.chartssize(myChartPie4, chartBoxPie)
      }
    },
    methods: {
      // 切换tab
      toggleList(i) {
        this.index = i
      },

      // 切换球队
      toggleTeam (i) {
        this.fIndex = i
      },

      // 获取元素
      getObj(id) {
        return document.getElementById(id)
      },

      // 计算属性
      computedStyle (obj1, obj2) {
        obj1.style.width = obj2.style.width
        obj1.style.height = obj2.style.height
      },

      // 兼容处理
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
      },

      // 柱状图
      drawBar () {
        let myChartBar = echarts.init(document.getElementById('myChartBar'))
        myChartBar.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // type: 'cross',
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
              show: false
            }
          ],
          series: [
            {
              name:'塞尔塔',
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
              name:'巴塞罗那',
              type:'bar',
              data:[175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
              itemStyle:{
                normal:{
                  color:'#4a90e2'
                }
              },
              barWidth: 10,
              barCateGoryGap:20
            }
          ]
        });
      },

      // 雷达图
      drawRadar() {
        let myChart = echarts.init(document.getElementById('myChart'))

        myChart.setOption({
          tooltip: {},
          legend: {
            data: ['历史数据统计']
          },
          radar: {
            name: {
              textStyle: {
                color: '#1a1a1a',
                backgroundColor: '#f5f5f5',
                fontSize: 10
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
                color : ['#9a9a9a','#9b9b9b','#9b9b9b','#9b9b9b','#9b9b9b','#9a9a9a']
                // 图表背景网格线的颜色
              }
            }
          },
          series: [{
            name: '历史数据统计',
            type: 'radar',
            data : [
              {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '历史数据统计',
                areaStyle: {
                  normal: {
                    opacity: 0.8,
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
                name : '历史数据统计',
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
      },

      // 线形图
      drawLine () {
        let data = [["0",182],["1",176],["2",153],["3",52],["4",69],["5",113],["6",82],["7",99],["8",53],["9",103],["10",100],["11",73],["12",155],["13",143],["14",155],["15",125],["16",65],["17",65],["18",79],["19",100],["20",126],["21",122],["22",60],["23",85],["24",190],["25",105],["26",108],["27",59],["28",160],["29",111],["30",265],["31",186],["32",118],["33",89],["34",94],["35",177],["36",113],["37",143],["38",157],["39",117],["40",185],["41",119],["42",153],["43",52],["44",69],["45",113],["46",82],["47",99],["48",53],["49",103],["50",100],["51",73],["52",155],["53",143],["54",155],["55",125],["56",65],["57",65],["58",79],["59",100],["60",126],["61",122],["62",60],["63",85],["64",190],["65",105],["66",108],["67",59],["68",160],["69",111],["70",265],["71",186],["72",118],["73",89],["74",94],["75",77],["76",113],["77",143],["78",157],["79",117],["80",185],["81",119],["82",153],["83",52],["84",69],["85",113],["86",82],["87",99],["88",53],["89",103],["90",100]]
        let myChart = echarts.init(document.getElementById('myChartLine'))
        myChart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            data: data.map(function (item) {
              return item[0];
            }),
            splitLine: {
              show: true
            },
            axisTick: {
              alignWithLabel: true,
              show: false
            },
            axisLabel: {
              interval: 14,
              color: '#1a1a1a'
            },
            axisLine: {
              lineStyle: {
                color: '#d8d8d8'
              }
            },
            boundaryGap: false
          },
          yAxis: {
            splitLine: {
              show: true
            },
            show: false,
            splitNumber: 1
          },
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          visualMap: {
            pieces: [{
              min: 20,
              max: 150,
              color: '#4a90e2'
            }],
            outOfRange: {
              color: '#f5a623'
            }
          },
          series: {
            name: '进攻频率',
            showSymbol: false,
            type: 'line',
            smooth: true,
            data: data.map(function (item) {
              return item[1];
            }),
            markLine: {
              silent: true,
              data: [{
                yAxis: 150
              }],
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#a6a6a6',
                    type: 'solid'
                  },
                  label: {
                    show: false
                  }
                }
              }
            }
          }
        });
      },

      // 圆环
      drawPie (id, c1, c2) {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById(id))
        // 绘制图表
        // var colors=['#ccc','#f5b031'];
        var index = 0;

        myChart.setOption({
          color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: c1
          }, {
            offset: 1,
            color: c2
          }]), '#ccc'],
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['总数','进球']
          },
          series: [
            {
              name:'进球',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center',
                  formatter : function(param) {
                    return param.name !=='总数'?`巴塞罗那\n${param.value}: 100`: ''
                  },
                  color :function(){
                    return colors[i++];
                  },

                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '12',
                    fontWeight: 'bold',
                    color:'#1a1a1a'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {
                  value:10,
                  name:'进球',
                },
                {
                  value:100,
                  name:'总数'
                }
              ]
            }
          ]
        });
        myChart.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex: 0});


        myChart.on('mouseover',function(e){

          if(e.dataIndex != index){

            myChart.dispatchAction({type: 'downplay', seriesIndex: 0, dataIndex: index  });

          }

        });

        myChart.on('mouseout',function(e){

          index = e.dataIndex;

          myChart.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex: e.dataIndex});

        });
      }
    }
  }
</script>
<style lang="scss">
  @import "./analysis.scss";
</style>
