<template>
    <div>
        <div class="top clr">
            <div class="top-btn flr">
                <button class="loading"><i class="icon ico-loading"></i></button>
                <button class="calendar"><i class="icon ico-calendar"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
    /*@import "./home.scss";*/
    @import "../../assets/css/base/config";
    @at-root {
      .top {
        padding: rem($base-padding--horizontal);
        background: #327838;
        .loading {
          margin-left: rem(20px);
        }
        .ico-loading {
          width: rem(26px);
          height: rem(23px);
          background: url(../../assets/images/ico-loading.png) no-repeat;
          background-size: contain;
        }

      }
    }
</style>
