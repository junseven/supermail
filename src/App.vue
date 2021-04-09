<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-item path="/home">
        <img src="~assets/img/icon/home.svg" alt="" />
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-item>
      <tab-item path="/category">
        <img src="~assets/img/icon/category.svg" alt="" />
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-item>
      <tab-item path="/cart">
        <img src="~assets/img/icon/cart.svg" alt="" />
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-item>
      <tab-item path="/profile">
        <img src="~assets/img/icon/profile.svg" alt="" />
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabItem from "components/common/tabbar/TabItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabItem,
  },
};
</script>
<style>
@import url("assets/css/base.css");
</style>