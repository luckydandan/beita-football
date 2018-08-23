<template>
    <div>
        <section class="top">
            <div class="top-btn">
                <p class="loading"><i class="icon ico-loading"></i></p>
                <p class="loading"><i class="icon ico-calendar"></i></p>
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
                        <p class="live-time-m">
                            <span>比赛分析</span>
                            <i class="icon ico-link"></i>
                        </p>
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
                        <p class="live-time-m">
                            <span>比赛分析</span>
                            <i class="icon ico-link"></i>
                        </p>
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
                        <p class="live-time-m">
                            <span>比赛分析</span>
                            <i class="icon ico-link"></i>
                        </p>
                    </div>
                </div>
            </div>
            <div class="live-items" v-else>
              <p class="live-item-top">2018-09-01 星期四</p>
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
                  <p class="live-time-m">
                    <span>比赛分析</span>
                    <i class="icon ico-link"></i>
                  </p>
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
                  <p class="live-time-m">
                    <span>比赛分析</span>
                    <i class="icon ico-link"></i>
                  </p>
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
                  <p class="live-time-m">
                    <span>比赛分析</span>
                    <i class="icon ico-link"></i>
                  </p>
                </div>
              </div>
          </div>
        </section>

    </div>
</template>
<script>
//    import liveList from '../live-list/live-list.vue';
  export default {
    data() {
      return {
        num: 50,
        index: 1
      }
    },
    methods: {
      toggleList (i) {
        this.index = i
      }
    }
  }
</script>
<style lang="scss">
    @import "./home.scss";
</style>



