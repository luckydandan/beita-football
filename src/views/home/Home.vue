<template>
    <div class="wrap">
        <section class="top">
            <div class="top-btn">
                <p class="loading"><i class="icon ico-loading"></i></p>
                <p class="loading" @click="showCalander"><i class="icon ico-calendar"></i></p>
            </div>
            <nav class="nav-items">
                <p class="nav-item"
                   v-for="item in 2"
                   @click="toggleList(item)"
                   :class="{'nav-current': index == item}"
                >{{item === 1 ? '直播' : '预播'}}列表</p>
                <!--<p class="nav-item nav-current">直播列表</p>-->
                <!--<p class="nav-item">预播列表</p>-->
            </nav>
        </section>
        <section class="main">
          <!--日历弹框-->
          <div v-show="isShow" class="c-box">
            <div class="calander-box" @click.stop="hideBox"></div>
            <div class="calander">
              <Calendar
                v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate"></Calendar>
            </div>
          </div>

            <div class="live-items" v-if="index === 1">
                <p class="live-item-top">2018-08-01 星期三</p>
                <div class="live-item">
                    <div class="live-item-message">
                        <p class="message-country tal">塞尔塔</p>
                        <p class="message-score">
                            <span class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></span>
                            <span class="country-score">1-2</span>
                            <span class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></span>
                        </p>
                        <p class="message-country tar">巴塞罗那</p>
                    </div>
                    <div class="live-process">
                        <div class="bar" :style="{width: num + '%'}"></div>
                        <p class="s-ball t"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                        <p class="s-ball"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                        <p class="s-ball" style="left: .8rem;"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                    </div>
                    <div class="live-time">
                        <p class="live-time-d">
                            <i class="icon ico-time"></i>
                            <span>比赛时间</span>
                        </p>
                        <router-link to="../analysis/analysis" tag="p" class="live-time-m">
                            <span>比赛分析</span>
                            <i class="icon ico-link"></i>
                        </router-link>
                    </div>
                </div>
                <div class="live-item mtop">
                    <div class="live-item-message">
                        <p class="message-country tal">塞尔塔</p>
                        <p class="message-score">
                            <span class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></span>
                            <span class="country-score">1-2</span>
                            <span class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></span>
                        </p>
                        <p class="message-country tar">巴塞罗那</p>
                    </div>
                    <div class="live-process">
                        <div class="bar" :style="{width: num + '%'}"></div>
                        <p class="s-ball t"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                        <p class="s-ball"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                        <p class="s-ball" style="left: .8rem;"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                    </div>
                    <div class="live-time">
                        <p class="live-time-d">
                            <i class="icon ico-time"></i>
                            <span>比赛时间</span>
                        </p>
                        <router-link to="../analysis/analysis" tag="p" class="live-time-m">
                            <span>比赛分析</span>
                            <i class="icon ico-link"></i>
                        </router-link>
                    </div>
                </div>
                <div class="live-item mtop">
                    <div class="live-item-message">
                        <p class="message-country tal">塞尔塔</p>
                        <p class="message-score">
                            <span class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></span>
                            <span class="country-score">1-2</span>
                            <span class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></span>
                        </p>
                        <p class="message-country tar">巴塞罗那</p>
                    </div>
                    <div class="live-process">
                        <div class="bar" :style="{width: num + '%'}"></div>
                        <p class="s-ball t"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                        <p class="s-ball"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                        <p class="s-ball" style="left: .8rem;"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                    </div>
                    <div class="live-time">
                        <p class="live-time-d">
                            <i class="icon ico-time"></i>
                            <span>比赛时间</span>
                        </p>
                        <router-link to="../analysis/analysis" tag="p" class="live-time-m">
                            <span>比赛分析</span>
                            <i class="icon ico-link"></i>
                        </router-link>
                    </div>
                </div>
                <div class="live-item mtop">
                <div class="live-item-message">
                  <p class="message-country tal">塞尔塔</p>
                  <p class="message-score">
                    <span class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></span>
                    <span class="country-score">1-2</span>
                    <span class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></span>
                  </p>
                  <p class="message-country tar">巴塞罗那</p>
                </div>
                <div class="live-process">
                  <div class="bar" :style="{width: num + '%'}"></div>
                  <p class="s-ball t"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                  <p class="s-ball"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                  <p class="s-ball" style="left: .8rem;"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                </div>
                <div class="live-time">
                  <p class="live-time-d">
                    <i class="icon ico-time"></i>
                    <span>比赛时间</span>
                  </p>
                  <router-link to="../analysis/analysis" tag="p" class="live-time-m">
                    <span>比赛分析</span>
                    <i class="icon ico-link"></i>
                  </router-link>
                </div>
              </div>
                <div class="live-item mtop">
                <div class="live-item-message">
                  <p class="message-country tal">塞尔塔</p>
                  <p class="message-score">
                    <span class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></span>
                    <span class="country-score">1-2</span>
                    <span class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></span>
                  </p>
                  <p class="message-country tar">巴塞罗那</p>
                </div>
                <div class="live-process">
                  <div class="bar" :style="{width: num + '%'}"></div>
                  <p class="s-ball t"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                  <p class="s-ball"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                  <p class="s-ball" style="left: .8rem;"><img src="../../assets/images/ico-ball.png" class="all-img" alt=""></p>
                </div>
                <div class="live-time">
                  <p class="live-time-d">
                    <i class="icon ico-time"></i>
                    <span>比赛时间</span>
                  </p>
                  <router-link to="../analysis/analysis" tag="p" class="live-time-m">
                    <span>比赛分析</span>
                    <i class="icon ico-link"></i>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="live-items" v-else>
                <div class="items-box">
                    <p class="live-item-top">2018-09-01 星期四</p>
                    <div class="live-item">
                        <div class="live-item-message">
                            <p class="message-country tal">塞尔塔</p>
                            <div class="message-score">
                                <p class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></p>
                                <p class="yy-score">
                                    <i class="icon ico-yy-time"></i>
                                    <span class="mat-time">20:00</span>
                                </p>
                                <p class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></p>
                            </div>
                            <p class="message-country tar">巴塞罗那</p>
                        </div>
                    </div>
                    <div class="live-item">
                        <div class="live-item-message">
                            <p class="message-country tal">塞尔塔</p>
                            <div class="message-score">
                                <p class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></p>
                                <p class="yy-score">
                                    <i class="icon ico-yy-time"></i>
                                    <span class="mat-time">20:00</span>
                                </p>
                                <p class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></p>
                            </div>
                            <p class="message-country tar">巴塞罗那</p>
                        </div>
                    </div>
                    <div class="live-item">
                        <div class="live-item-message">
                            <p class="message-country tal">塞尔塔</p>
                            <div class="message-score">
                                <p class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></p>
                                <p class="yy-score">
                                    <i class="icon ico-yy-time"></i>
                                    <span class="mat-time">20:00</span>
                                </p>
                                <p class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></p>
                            </div>
                            <p class="message-country tar">巴塞罗那</p>
                        </div>
                    </div>
                </div>
                <div class="items-box">
                    <p class="live-item-top">2018-09-01 星期四</p>
                    <div class="live-item">
                        <div class="live-item-message">
                            <p class="message-country tal">塞尔塔</p>
                            <div class="message-score">
                                <p class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></p>
                                <p class="yy-score">
                                    <i class="icon ico-yy-time"></i>
                                    <span class="mat-time">20:00</span>
                                </p>
                                <p class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></p>
                            </div>
                            <p class="message-country tar">巴塞罗那</p>
                        </div>
                    </div>
                    <div class="live-item">
                        <div class="live-item-message">
                            <p class="message-country tal">塞尔塔</p>
                            <div class="message-score">
                                <p class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></p>
                                <p class="yy-score">
                                    <i class="icon ico-yy-time"></i>
                                    <span class="mat-time">20:00</span>
                                </p>
                                <p class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></p>
                            </div>
                            <p class="message-country tar">巴塞罗那</p>
                        </div>
                    </div>
                    <div class="live-item">
                        <div class="live-item-message">
                            <p class="message-country tal">塞尔塔</p>
                            <div class="message-score">
                                <p class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></p>
                                <p class="yy-score">
                                    <i class="icon ico-yy-time"></i>
                                    <span class="mat-time">20:00</span>
                                </p>
                                <p class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></p>
                            </div>
                            <p class="message-country tar">巴塞罗那</p>
                        </div>
                    </div>
                </div>
                <div class="items-box">
                    <p class="live-item-top">2018-09-01 星期四</p>
                    <div class="live-item">
                        <div class="live-item-message">
                            <p class="message-country tal">塞尔塔</p>
                            <div class="message-score">
                                <p class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></p>
                                <p class="yy-score">
                                    <i class="icon ico-yy-time"></i>
                                    <span class="mat-time">20:00</span>
                                </p>
                                <p class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></p>
                            </div>
                            <p class="message-country tar">巴塞罗那</p>
                        </div>
                    </div>
                    <div class="live-item">
                        <div class="live-item-message">
                            <p class="message-country tal">塞尔塔</p>
                            <div class="message-score">
                                <p class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></p>
                                <p class="yy-score">
                                    <i class="icon ico-yy-time"></i>
                                    <span class="mat-time">20:00</span>
                                </p>
                                <p class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></p>
                            </div>
                            <p class="message-country tar">巴塞罗那</p>
                        </div>
                    </div>
                    <div class="live-item">
                        <div class="live-item-message">
                            <p class="message-country tal">塞尔塔</p>
                            <div class="message-score">
                                <p class="country-item"><img src="../../assets/images/logo-Celt.png" alt=""></p>
                                <p class="yy-score">
                                    <i class="icon ico-yy-time"></i>
                                    <span class="mat-time">20:00</span>
                                </p>
                                <p class="country-item"><img src="../../assets/images/logo-Barcelona.png" alt=""></p>
                            </div>
                            <p class="message-country tar">巴塞罗那</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
//    import liveList from '../live-list/live-list.vue';
import Calendar from 'vue-calendar-component';
  export default {
    data() {
      return {
        num: 50,
        index: 1,
        isShow: false
      }
    },
    methods: {
      toggleList (i) {
        this.index = i
      },
      clickDay(data) {
        console.log(data); //选中某天
        document.querySelector('.main').style["position"] = "static";
        setTimeout(() => {
          this.isShow = false
        }, 100)
      },
      changeDate(data) {
        console.log(data); //左右点击切换月份
      },
      clickToday(data) {
        console.log(data); //跳到了本月
      },
      showCalander () {
        this.isShow = true
        document.querySelector('.main').style["position"] = "fixed";
      },
      hideBox () {
        this.isShow = false
        document.querySelector('.main').style["position"] = "static";
      }
    },
    components: {
      Calendar
    }
  }
</script>
<style lang="scss">
    @import "./home.scss";
    .wh_container {
      max-width: 1000px !important;
    }
    .c-box {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: rem(70px);
      z-index: 9;
    }
    .calander-box {
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.5);
      position: fixed;
      left: 0;
      top: rem(70px);
    }
    .calander {
      /*z-index:999;*/
    }
    .wh_content_all {
        position: absolute;
        color: #000;
        background-color: #fff !important;
    }
    .wh_jiantou1, .wh_jiantou2 {
        border-color: #707070 !important;
    }
    .wh_top_changge li , .wh_content_item, .wh_content_item_tag {
        color: #4a4a4a !important;
    }
    .wh_content_item .wh_isToday {
        background: #327838 !important;
        color: #fff !important;
    }
    .main {
      z-index:999;
      width: 100%;
    }
</style>



