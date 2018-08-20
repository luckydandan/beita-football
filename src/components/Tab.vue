<template>
    <div class="footer">
      <router-link to="/home" tag="div" exact>
        <span>比赛列表</span>
      </router-link>
      <router-link to="/list" tag="div">
        <span>会员中心</span>
      </router-link>
      <router-link to="/collect" tag="div">
        <span>关于我们</span>
      </router-link>
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
<!--
  display:flex
  flex-direction: row/column
  justify-content: center 垂直居中
  align-items: center 水平居中
  flex: 1 每份占1
-->
<style scoped lang="less">
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    display: flex;
    border-top: 1px solid #ccc;
    div{
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
    i{
      font-size: 20px;
    }
    .isActive {
      color: red
    }
  }
</style>
