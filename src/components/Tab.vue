<template>
    <div class="footer">
      <router-link to="/home" tag="div" exact>
        <i class="icon ico-match-current"></i>
        <span class=" foot-text-current">比赛列表</span>
      </router-link>
      <div>
          <i class="icon ico-account"></i>
          <span class="foot-text">会员中心</span>
      </div>
      <div>
          <i class="icon ico-about"></i>
          <span class="foot-text">关于我们</span>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'tab',
        data() {
            return {}
        },
        methods: {},
        computed: {},
        created() {

        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/css/base/_config.scss";
    .isActive {
      color: #327838
    }
    .foot-text {
        font-size: rem(10px);
        color: #9b9b9b;
    }
    .foot-text-current {
      font-size: rem(10px);
      color: #327838
    }
    .ico-match {
        width: rem(40px);
        height: rem(40px);
        background: url(../assets/images/ico-match.png) center center no-repeat;
        background-size: rem(24px);
    }
    .ico-match-current {
      width: rem(40px);
      height: rem(40px);
      background: url(../assets/images/ico-match-current.png) center center no-repeat;
      background-size: rem(24px);
    }
    .ico-account {
        width: rem(40px);
        height: rem(40px);
        background: url(../assets/images/ico-account.png) center center no-repeat;
        background-size: rem(24px);
    }
    .ico-about {
        width: rem(40px);
        height: rem(40px);
        background: url(../assets/images/ico-about.png) center center no-repeat;
        background-size: rem(33px) rem(17px);
    }

</style>
