<template>
  <div>
    <!--顶部标题栏-->
    <mt-header title="信息管理系统"></mt-header>
    <router-view/>

    <!--底部tabbar-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../static/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../static/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../static/img/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../static/img/find.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: ''
    }
  }
}
</script>

<style>
</style>
